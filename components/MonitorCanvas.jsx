'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function MonitorCanvas({ progress = 0 }) {
  const mountRef = useRef(null);
  const stateRef = useRef({
    progress: 0,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    isLoaded: false,
    model: null,
    camera: null,
    renderer: null,
    scene: null,
    reqId: null,
  });

  // Keep progress updated
  useEffect(() => {
    stateRef.current.progress = progress;
  }, [progress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    stateRef.current.scene = scene;

    // 2. Camera (35deg FOV for natural product studio photography perspective)
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.05, 100);
    stateRef.current.camera = camera;

    // 3. Renderer with cinematic PBR tone mapping
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    stateRef.current.renderer = renderer;

    // 4. Studio Lighting Rig
    // Ambient soft warm light
    const ambientLight = new THREE.AmbientLight(0xfff7ee, 1.8);
    scene.add(ambientLight);

    // Key Light (warm front-right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(3.5, 4.5, 4.0);
    scene.add(keyLight);

    // Left Fill Light (soft cool fill)
    const fillLight = new THREE.DirectionalLight(0xe4edff, 1.2);
    fillLight.position.set(-4.0, 3.0, 2.5);
    scene.add(fillLight);

    // Warm Orange Upward Light from bottom (matching radiant SVG glow reflection on the stand)
    const bottomGlowLight = new THREE.DirectionalLight(0xff6014, 2.2);
    bottomGlowLight.position.set(0, -2.0, 1.5);
    scene.add(bottomGlowLight);

    // Overhead Glint Light for aluminum top bevel and stand edge
    const topLight = new THREE.DirectionalLight(0xffffff, 1.0);
    topLight.position.set(0, 4.0, 1.0);
    scene.add(topLight);

    // 5. Load GLB Model
    const loader = new GLTFLoader();
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    loader.load(
      '/assets/Monitor_Realistic (1).glb',
      (gltf) => {
        const root = gltf.scene;

        root.traverse((child) => {
          if (child.isMesh && child.material) {
            const mat = child.material;

            if (mat.name === 'Optically coated LCD') {
              // Vibrant, backlit LCD screen
              mat.roughness = 0.08;
              mat.metalness = 0.01;
              if (mat.map) {
                mat.map.colorSpace = THREE.SRGBColorSpace;
                mat.emissiveMap = mat.map;
                mat.emissive = new THREE.Color(0xffffff);
                mat.emissiveIntensity = 0.95;
              }
            } else if (mat.name === 'Brushed anodized aluminum') {
              // Apple Studio Display style brushed metallic stand & riser
              mat.roughness = 0.26;
              mat.metalness = 0.94;
              mat.color = new THREE.Color(0xdce0e4);
            } else if (
              mat.name === 'Bead-blasted graphite enclosure' ||
              mat.name === 'Satin black bezel'
            ) {
              // Precision dark bezel & enclosure
              mat.roughness = 0.32;
              mat.metalness = 0.65;
              mat.color = new THREE.Color(0x18181b);
            }
          }
        });

        modelGroup.add(root);
        stateRef.current.model = modelGroup;
        stateRef.current.isLoaded = true;
      },
      undefined,
      (err) => {
        console.error('Error loading monitor GLB:', err);
      }
    );

    // Mouse movement listener for subtle 3D interactive parallax
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      stateRef.current.targetMouseX = x;
      stateRef.current.targetMouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Helpers
    const lerp = (a, b, t) => a + (b - a) * t;
    const smoothstep = (t) => t * t * (3 - 2 * t);

    // Animation Loop
    const render = () => {
      stateRef.current.reqId = requestAnimationFrame(render);

      const p = Math.max(0, Math.min(1, stateRef.current.progress));
      const model = stateRef.current.model;

      // Mouse smoothing
      stateRef.current.mouseX +=
        (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.05;
      stateRef.current.mouseY +=
        (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.05;

      const currentAspect = camera.aspect || 1.777;
      const tanHalfFov = Math.tan((35 / 2) * (Math.PI / 180));

      // LCD Screen mesh: width 0.598, height 0.3364, center Y 0.3650, center Z 0.0135
      const distScreenV = 0.3364 / (2 * tanHalfFov);
      const distScreenH = 0.598 / (2 * currentAspect * tanHalfFov);
      // Zoomed so LCD screen fills 100% of viewport without borders (Shot 1):
      const zScreen = 0.0135 + Math.min(distScreenV, distScreenH) * 0.955;

      // Shot 2: Bezels visible, stand neck with circular hole visible
      // Screen occupies ~82% of vertical viewport
      const distBezelV = 0.3364 / (2 * 0.82 * tanHalfFov);
      const distBezelH = 0.598 / (2 * 0.86 * currentAspect * tanHalfFov);
      const zBezel = 0.0135 + Math.max(distBezelV, distBezelH);

      // Shot 3: Full monitor centered inside the rounded card
      // Total monitor: height 0.5442, width 0.616, center Y 0.2724
      // In Shot 3, the monitor occupies ~50% of viewport height
      const distFullV = 0.5442 / (2 * 0.50 * tanHalfFov);
      const distFullH = 0.616 / (2 * 0.68 * currentAspect * tanHalfFov);
      const zFull = 0.0135 + Math.max(distFullV, distFullH);

      let camZ = zScreen;
      let camY = 0.3650;
      let targetY = 0.3650;

      if (p <= 0.40) {
        // Stage 1 -> Stage 2 (Image 1 -> Image 2)
        const t = smoothstep(p / 0.40);
        camZ = lerp(zScreen, zBezel, t);
        camY = lerp(0.3650, 0.3250, t);
        targetY = lerp(0.3650, 0.3250, t);
      } else {
        // Stage 2 -> Stage 3 (Image 2 -> Image 3)
        const t = smoothstep((p - 0.40) / 0.60);
        camZ = lerp(zBezel, zFull, t);
        camY = lerp(0.3250, 0.2724, t);
        targetY = lerp(0.3250, 0.2724, t);
      }

      // Upright straight-facing orientation across all scroll stages (Shot 1 -> 2 -> 3)
      // Gentle interactive mouse micro-parallax to accentuate 3D depth
      const mouseFactor = Math.min(1, p * 2.5);
      const rotY = stateRef.current.mouseX * 0.06 * mouseFactor;
      const rotX = -stateRef.current.mouseY * 0.04 * mouseFactor;

      // Apply to Camera (perpendicular to screen plane)
      camera.position.set(0, camY, camZ);
      camera.lookAt(0, targetY, -0.015);

      // Apply to Model (centered, upright)
      if (model) {
        model.rotation.set(rotX, rotY, 0);
        model.position.set(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(stateRef.current.reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="monitor-webgl-mount"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

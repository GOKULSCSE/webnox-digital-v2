"use client";

import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Center, useGLTF, Html } from "@react-three/drei";
import { createPortal } from "@react-three/fiber";
import * as THREE from "three";

export const Monitor = forwardRef<THREE.Group, any>((props, ref) => {
  const { scene } = useGLTF("/models/monitor.glb");
  const [screenMesh, setScreenMesh] = useState<THREE.Mesh | null>(null);

  // Calculate the actual size of the GLB
  const modelScale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());

    // Desired monitor height in Three.js units
    const targetHeight = 3.2;

    if (size.y === 0) return 1;

    return targetHeight / size.y;
  }, [scene]);

  // Fit the HTML UI exactly onto the screen mesh (in the mesh's local space)
  const screenLayout = useMemo(() => {
    if (!screenMesh) return null;
    screenMesh.geometry.computeBoundingBox();
    const box = screenMesh.geometry.boundingBox;
    if (!box) return null;

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const PX_WIDTH = 1024;
    const offset = 0.001;

    // The thinnest axis is the screen normal
    let width: number;
    let height: number;
    let rotation: [number, number, number] = [0, 0, 0];
    const position = center.clone();

    if (size.z <= size.x && size.z <= size.y) {
      width = size.x;
      height = size.y;
      position.z = box.max.z + offset;
    } else if (size.x <= size.y) {
      width = size.z;
      height = size.y;
      rotation = [0, Math.PI / 2, 0];
      position.x = box.max.x + offset;
    } else {
      width = size.x;
      height = size.z;
      rotation = [-Math.PI / 2, 0, 0];
      position.y = box.max.y + offset;
    }

    if (width === 0 || height === 0) return null;

    return {
      // drei <Html transform> renders 1 CSS px as (1 / 40) world units at default
      // distanceFactor (400 / 10), so multiply by 40 to fit the screen width exactly.
      scale: (width * 40) / PX_WIDTH,
      pxHeight: (PX_WIDTH * height) / width,
      position: position.toArray() as [number, number, number],
      rotation,
    };
  }, [screenMesh]);

  const [waveKey, setWaveKey] = useState(0);

  const handleReplayWave = () => {
    setWaveKey((prev) => prev + 1);
  };

  // Helper to render words split into staggered wavy characters with individual gradient strokes
  const renderWavyWord = (word: string, startIdx: number, totalCount: number, isAccent = false) => {
    return (
      <span className="wavy-word" key={`${word}-${startIdx}`}>
        {word.split('').map((char, i) => {
          const globalIdx = startIdx + i;
          const pos = globalIdx / Math.max(totalCount - 1, 1);
          const charStroke = '#ffc582ff';
          const delay = pos * 1.0;
          return (
            <span
              key={i}
              className={`wavy-char ${isAccent ? 'accent-orange' : ''}`}
              style={{
                '--char-stroke': charStroke,
                animationDelay: `${delay.toFixed(3)}s`,
              } as React.CSSProperties}
            >
              {char}
            </span>
          );
        })}
      </span>
    );
  };

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const name = child.name.toLowerCase();

      if (name.includes("lcd")) {
        if (!screenMesh) {
          setScreenMesh(child as THREE.Mesh);
        }

        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        child.material = materials.map((material) => {
          const cloned = material.clone();

          if (
            cloned instanceof THREE.MeshStandardMaterial ||
            cloned instanceof THREE.MeshPhysicalMaterial
          ) {
            cloned.map = null;
            cloned.emissiveMap = null;
            cloned.emissive = new THREE.Color("#000000");
            cloned.color = new THREE.Color("#020202");
            cloned.roughness = 0.5;
            cloned.metalness = 0.8;
            cloned.needsUpdate = true;
          }

          return cloned;
        });

        if (materials.length === 1) {
          child.material = child.material[0];
        }
      }
    });
  }, [scene, screenMesh]);

  return (
    <group
      ref={ref}
      {...props}
      scale={modelScale}
      dispose={null}
    >
      <Center>
        <primitive object={scene} />
        {screenMesh && screenLayout && createPortal(
          <Html
            transform
            wrapperClass="htmlScreen"
            scale={screenLayout.scale}
            position={screenLayout.position}
            rotation={screenLayout.rotation}
            zIndexRange={[100, 0]}
          >
            <div
              className="w-[1024px] bg-[#ffffff] flex flex-col items-center pt-32 font-sans relative overflow-hidden"
              style={{ 
                height: screenLayout.pxHeight,
                backgroundImage: `
                  radial-gradient(ellipse 100% 70% at 50% 18%, #ffffff 0%, rgba(255, 255, 255, 0.98) 40%, rgba(255, 250, 244, 0.8) 65%, transparent 100%),
                  radial-gradient(130% 90% at 50% 45%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 245, 235, 0.65) 50%, rgba(254, 222, 192, 0.35) 100%),
                  linear-gradient(180deg, #ffffff 0%, #fffdfa 25%, #fef5ec 60%, #fbd5b5 100%)
                `
              }}
            >
              {/* Atmospheric lighting and glow layers */}
              <div 
                className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-[1]" 
                style={{ background: 'radial-gradient(ellipse 85% 65% at 20% 15%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 248, 238, 0.7) 45%, transparent 80%)' }} 
                aria-hidden="true" 
              />
              <div 
                className="absolute bottom-[24%] left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[380px] pointer-events-none z-[1] blur-[24px]" 
                style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 65%, rgba(255, 236, 206, 0.9) 0%, rgba(255, 202, 154, 0.5) 45%, transparent 80%)' }} 
                aria-hidden="true" 
              />

              {/* Orange Field Landscape Background */}
              <div className="absolute bottom-0 left-0 right-0 w-full h-full pointer-events-none z-[2] overflow-hidden" aria-hidden="true">
                <img
                  src="/images/Orange Filed.png"
                  alt="Webnox AI Landscape - Orange Field"
                  className="w-full h-full object-cover object-bottom pointer-events-none select-none saturate-[1.08] brightness-[1.05]"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-[1240px] m-auto">
                {/* Trusted by Many Pill Badge */}
                <div className="trusted-badge-container">
                  <div className="trusted-badge" role="status">
                    <div className="trusted-avatars" aria-hidden="true">
                      <span className="avatar-wrapper">
                        <img src="/images/Frame 5.png" alt="Partner logo 1" className="avatar-icon" />
                      </span>
                      <span className="avatar-wrapper">
                        <img src="/images/Frame 6.png" alt="Partner logo 2" className="avatar-icon" />
                      </span>
                      <span className="avatar-wrapper">
                        <img src="/images/Frame 7.png" alt="Partner logo 3" className="avatar-icon" />
                      </span>
                      <span className="avatar-wrapper">
                        <img src="/images/Frame 8.png" alt="Partner logo 4" className="avatar-icon" />
                      </span>
                    </div>
                    <span className="trusted-text">Trusted by Many</span>
                  </div>
                </div>

                {/* Hero Title */}
                <h1
                  className="hero-title"
                  key={waveKey}
                  onMouseEnter={handleReplayWave}
                  aria-label="AI Native Company Building AI Solutions"
                >
                  <div className="title-row first-row" aria-hidden="true">
                    {renderWavyWord('AI', 0, 15, true)}{' '}
                    {renderWavyWord('Native', 2, 15)}{' '}
                    {renderWavyWord('Company', 8, 15)}
                  </div>
                  <div className="title-row second-row" aria-hidden="true">
                    {renderWavyWord('Building', 0, 20)}
                    <div
                      className="creation-capsule"
                      aria-label="Human and AI collaboration symbol"
                      style={{ animationDelay: '0.43s' }}
                    >
                      <div className="capsule-hand human-hand">
                        <img
                          src="/images/Human hand.png"
                          alt="Human hand"
                          className="hand-asset"
                        />
                      </div>
                      <div className="capsule-center-logo">
                        <img
                          src="/images/Logo glow 1.1.png"
                          alt="Webnox infinity emblem"
                          className="logo-glow-asset"
                        />
                      </div>
                      <div className="capsule-hand robo-hand">
                        <img
                          src="/images/Robo hand.png"
                          alt="Robotic hand"
                          className="hand-asset"
                        />
                      </div>
                    </div>
                    {renderWavyWord('AI', 9, 20)}{' '}
                    {renderWavyWord('Solutions', 11, 20)}
                  </div>
                </h1>

                {/* Hero Subtitle Description */}
                <p className="hero-description">
                  Build software, AI agents, applications and digital products with Webnox. We provide<br className="hero-desc-br" />
                  AI development services that turn business ideas into production-ready AI solutions.
                </p>

                {/* Primary Action Button */}
                <div className="hero-action-group">
                  <button
                    type="button"
                    className="cta-pill-button"
                    id="build-ai-solution-cta"
                  >
                    Build Your AI Solution
                  </button>
                </div>
              </div>
            </div>
          </Html>,
          screenMesh
        )}
      </Center>
    </group>
  );
});

Monitor.displayName = "Monitor";

useGLTF.preload("/models/monitor.glb");
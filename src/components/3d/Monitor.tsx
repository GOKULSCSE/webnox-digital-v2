"use client";

import React, {
  forwardRef,
  useEffect,
  useMemo,
} from "react";
import { Center, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Monitor = forwardRef<THREE.Group, any>((props, ref) => {
  const { scene } = useGLTF("/models/monitor.glb");

  const screenTexture = useTexture("/images/screen.jpg");

  screenTexture.colorSpace = THREE.SRGBColorSpace;
  screenTexture.flipY = false;
  screenTexture.anisotropy = 8;

  // Calculate the actual size of the GLB
  const modelScale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());

    // Desired monitor height in Three.js units
    const targetHeight = 3.2;

    if (size.y === 0) return 1;

    return targetHeight / size.y;
  }, [scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const name = child.name.toLowerCase();

      if (
        name.includes("screen") ||
        name.includes("display")
      ) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        child.material = materials.map((material) => {
          const cloned = material.clone();

          if (
            cloned instanceof THREE.MeshStandardMaterial ||
            cloned instanceof THREE.MeshPhysicalMaterial
          ) {
            cloned.map = screenTexture;
            cloned.roughness = 0.15;
            cloned.metalness = 0;
            cloned.needsUpdate = true;
          }

          return cloned;
        });

        // Keep material type consistent
        if (materials.length === 1) {
          child.material = child.material[0];
        }
      }
    });
  }, [scene, screenTexture]);

  return (
    <group
      ref={ref}
      {...props}
      scale={modelScale}
      dispose={null}
    >
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
});

Monitor.displayName = "Monitor";

useGLTF.preload("/models/monitor.glb");
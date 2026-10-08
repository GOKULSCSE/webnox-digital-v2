"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import { Monitor } from "./Monitor";
import * as THREE from "three";

interface SceneProps {
  monitorRef: React.RefObject<THREE.Group | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  onReady?: () => void;
}

function SceneReady({
  monitorRef,
  cameraRef,
  onReady,
}: {
  monitorRef: React.RefObject<THREE.Group | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  onReady?: () => void;
}) {
  useEffect(() => {
    if (monitorRef.current && cameraRef.current) {
      onReady?.();
    }
  }, [monitorRef, cameraRef, onReady]);

  return null;
}



export default function Scene({ monitorRef, cameraRef, onReady }: SceneProps) {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-10">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
        dpr={[1, 2]}
        // The parent is CSS-scaled by GSAP. By default R3F measures with getBoundingClientRect
        // (affected by transforms), which shrank the canvas and pinned it top-left => model drifted left/cropped.
        // offsetSize ignores transforms; scroll:false avoids re-measuring on every scroll.
        resize={{ offsetSize: true, scroll: false }}
      >
        <PerspectiveCamera
          ref={cameraRef as any}
          makeDefault
          position={[0, 1.5, 31.5]}
          fov={50}
        />

        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff8800" />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <Monitor ref={monitorRef as any} position={[0, -0.5, 0]} />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
          <SceneReady monitorRef={monitorRef} cameraRef={cameraRef} onReady={onReady} />
        </Suspense>
      </Canvas>
    </div>
  );
}

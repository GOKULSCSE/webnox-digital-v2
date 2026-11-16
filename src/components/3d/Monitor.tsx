"use client";

import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
  useRef
} from "react";
import { Center, useGLTF, Html } from "@react-three/drei";
import { createPortal } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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

    const PX_WIDTH = 2560;
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
            <HeroScreenContent pxHeight={screenLayout.pxHeight} />
          </Html>,
          screenMesh
        )}
      </Center>
    </group>
  );
});

Monitor.displayName = "Monitor";

const HeroScreenContent = ({ pxHeight }: { pxHeight: number }) => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroContainerRef.current) return;

    // Normal characters: stroke to fill
    gsap.fromTo('.rgmPrelChar:not(.accent-sweep)', {
      opacity: 0,
      color: 'transparent',
      WebkitTextStroke: '3px rgba(18, 20, 26, 1)'
    }, {
      opacity: 1,
      color: '#12141a',
      WebkitTextStroke: '0px rgba(18, 20, 26, 0)',
      clearProps: 'WebkitTextStroke',
      duration: 1.0,
      ease: 'power3.out',
      stagger: 0.05,
    });

    // Accent characters: stroke to fill (keep orange after)
    gsap.fromTo('.rgmPrelChar.accent-orange', {
      opacity: 0,
      color: 'transparent',
      WebkitTextStroke: '3px rgba(255, 114, 48, 1)'
    }, {
      opacity: 1,
      color: '#FF7230',
      WebkitTextStroke: '0px rgba(255, 114, 48, 0)',
      clearProps: 'WebkitTextStroke',
      duration: 1.0,
      ease: 'power3.out',
      stagger: 0.05,
    });

    // Animate capsule: circle pop-in -> expand to capsule
    const capsuleTl = gsap.timeline({ delay: 2.8 }); // Wait for text animation to finish
    
    // Pop in as a circle (130px width to match 130px height at 2.5x) and push text apart
    capsuleTl.fromTo('.creation-capsule', {
      scale: 0,
      autoAlpha: 0,
      width: '0px',
      margin: '0px -20px',
      filter: 'blur(20px)',
    }, {
      scale: 1,
      autoAlpha: 1,
      width: '130px',
      margin: '0px 25px',
      filter: 'blur(0px)',
      clearProps: 'filter,transform',
      duration: 0.6,
      ease: 'back.out(1.5)',
    });
    
    // Expand to full capsule width
    capsuleTl.to('.creation-capsule', {
      width: '375px',
      duration: 0.8,
      ease: 'power3.inOut',
    }, '+=0.2');
    
    // Fade in hands while expanding
    capsuleTl.fromTo('.capsule-hand', {
      opacity: 0,
      scale: 0.5,
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, '<'); // '<' means start at the same time as the previous animation (width expansion)

    // Reveal description
    gsap.from('.hero-description', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
      delay: 2.4, // Reveal slightly before capsule finishes
    });

    // Reveal CTA button
    gsap.from('.hero-action-group', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
      delay: 2.6,
    });

  }, { scope: heroContainerRef });

  // Helper to render words split into animated rgmPrelChar characters
  const renderRgmChars = (word: string, isAccent = false) => {
    return (
      <span className="inline-block whitespace-nowrap px-[0.15em] mx-[-0.15em]" aria-hidden="true">
        {word.split('').map((char, i) => (
          <div 
            key={i}
            className={`rgmPrelChar ${isAccent ? 'accent-orange' : ''}`} 
            style={{ 
              position: 'relative', 
              display: 'inline-block',
              opacity: 0,
              color: 'transparent',
              WebkitTextStroke: `2.5px ${isAccent ? '#FF7230' : '#12141a'}`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </div>
        ))}
      </span>
    );
  };

  return (
    <div
      className="w-[2560px] bg-[#ffffff] flex flex-col items-center font-sans relative overflow-hidden"
      style={{ 
        height: pxHeight,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'geometricPrecision',
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
        className="absolute bottom-[24%] left-1/2 -translate-x-1/2 w-full max-w-[4000px] h-[950px] pointer-events-none z-[1] blur-[60px]" 
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

      <div ref={heroContainerRef} className="relative z-10 flex flex-col items-center justify-center text-center px-[60px] w-full max-w-[3100px] mt-[280px] mb-auto">
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
          aria-label="AI Native Company Building AI Solutions"
        >
          <div className="title-row first-row" aria-hidden="true">
            {renderRgmChars('AI', true)}{' '}
            {renderRgmChars('Native')}{' '}
            {renderRgmChars('Company')}
          </div>
          <div className="title-row second-row" aria-hidden="true">
            {renderRgmChars('Building')}
            <div
              className="creation-capsule"
              aria-label="Human and AI collaboration symbol"
              style={{ visibility: 'hidden', width: 0, margin: '0 -20px' }}
            >
              <div className="capsule-hand human-hand">
                <img
                  src="/images/Human hand.png"
                  alt="Human hand"
                  className="hand-asset"
                />
              </div>
              <div className="capsule-center-logo">
                <svg
                  viewBox="0 0 79 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Webnox infinity emblem"
                  className="logo-glow-asset"
                >
                  <path
                    d="M5.17075 19.3681C5.82808 24.926 10.2804 29.5068 15.8998 30.0698C22.8229 30.7641 27.5718 25.8744 32.0515 21.4303C36.4355 17.0818 40.6583 12.5516 45.0942 8.24681C49.7461 3.73435 53.7625 0.132027 60.6692 0.00356829C70.1615 -0.174088 77.2568 6.59051 78.208 15.9161C79.5089 28.6732 66.9418 37.9878 54.9555 34.1122C51.155 32.8836 48.3043 30.3992 45.5821 27.5922C43.7235 25.6763 41.8595 23.3175 39.7659 21.6845C39.6361 21.5833 39.1905 21.2225 39.0717 21.2143C38.9159 21.2048 38.6275 21.4918 38.4922 21.612C36.5694 23.3285 34.8216 25.2745 32.9329 27.0346C27.1291 32.4395 20.9466 36.6349 12.5872 34.2611C1.4878 31.1084 -3.77628 16.9424 3.04845 7.44326C9.25411 -1.19356 22.7109 -2.87173 29.9907 5.37289C34.9432 10.9827 33.4851 19.1686 25.1721 19.3681L5.17212 19.3654L5.17075 19.3681ZM5.24045 14.8748H25.4468C26.3897 14.8748 27.1209 13.7747 27.2657 12.9397C27.7673 10.0521 25.4741 7.3271 23.0607 6.09308C16.4396 2.71078 7.57458 6.39509 5.4837 13.541C5.40171 13.8211 5.19262 14.5235 5.18989 14.7777C5.18989 14.8324 5.19535 14.8379 5.24045 14.8734V14.8748ZM59.8465 4.88091C56.1799 5.12143 53.2746 7.11665 50.633 9.47674C47.8738 11.9407 45.362 14.693 42.8462 17.3975C42.7573 17.5164 42.8024 17.6653 42.8954 17.7706C46.2722 20.8918 49.0641 25.0996 52.7976 27.7931C62.9404 35.1071 77.0546 25.3674 72.6951 13.2294C70.7095 7.70291 65.7269 4.4969 59.8479 4.88091H59.8465Z"
                    fill="#FFD3AA"
                  />
                </svg>
              </div>
              <div className="capsule-hand robo-hand">
                <img
                  src="/images/Robo hand.png"
                  alt="Robotic hand"
                  className="hand-asset"
                />
              </div>
            </div>
            {renderRgmChars('AI')}{' '}
            {renderRgmChars('Solutions')}
          </div>
        </h1>

        {/* Hero Subtitle Description */}
        <p className="hero-description">
          Build software, AI agents, applications and digital products with Webnox Digital. We provide<br className="hero-desc-br" />
          AI Native services that turn business ideas into production ready AI solutions.
        </p>

        {/* Action Buttons */}
        <div className="hero-action-group">
          <button
            type="button"
            className="cta-pill-button"
            id="build-ai-solution-cta"
            onClick={() => {
              const el = document.getElementById("contact") || document.querySelector("section:last-of-type");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Build Your AI Solution
          </button>
          <button
            type="button"
            className="cta-pill-secondary"
            id="talk-to-experts-cta"
            onClick={() => {
              const el = document.getElementById("contact") || document.querySelector("section:last-of-type");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Talk to Our AI Experts
          </button>
        </div>
      </div>
    </div>
  );
};

useGLTF.preload("/models/monitor.glb");
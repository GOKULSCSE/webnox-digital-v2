"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../3d/Scene";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeDShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const monitorRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    if (!sceneReady || !containerRef.current || !monitorRef.current || !cameraRef.current || !bgRef.current || !overlayRef.current || !innerRef.current) return;

    // We use a context to clean up animations on unmount
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", // Longer scroll for the hero experience
          scrub: true, // Use true instead of 1.5 because Lenis is already smoothing it
          pin: true,
          anticipatePin: 1,
        },
      });

      // Initial state: Camera is zoomed in completely to the screen. 
      gsap.set(monitorRef.current!.scale, { x: 3.3, y: 3.1, z: 3.4 });
      gsap.set(monitorRef.current!.rotation, { x: 0, y: 0, z: 0 });
      gsap.set(monitorRef.current!.position, { x: 0, y: -0.1, z: 2.5 }); // Move monitor very close to camera
      gsap.set(cameraRef.current!.position, { x: 0, y: 0.2, z: 3.67 });
      
      // We also ensure innerRef is full size and square initially
      gsap.set(innerRef.current, { scale: 1, yPercent: 0, borderRadius: "0px", willChange: "transform, border-radius" });

      // Initial state for texts
      gsap.set([topTextRef.current, bottomTextRef.current], { opacity: 0, y: 30 });

      // Entire scroll duration: All animations happen simultaneously
      tl.to(cameraRef.current!.position, { 
          z: 4.5, // Move camera far back
          y: 0.33,
          duration: 1, 
          ease: "power2.inOut" 
        }, 0)
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.95,
          ease: "power2.inOut"
        }, 0)
        .to(innerRef.current, {
          scale: 0.8, // More shrink as requested
          borderRadius: "48px",
          duration: 0.70,
          ease: "power2.inOut"
        }, 0.30) // Shrink starts after 40% of scroll
        .to(monitorRef.current!.rotation, {
          y: 0.40, // Turn slightly to the left
          x: -0.05, // Bend slightly backwards
          duration: 0.90,
          ease: "power2.inOut"
        }, 0.10) // Starts after 10% of scroll
        .to(monitorRef.current!.scale, {
          x: 2.8, // Slightly reduce size (initial was 3.3)
          y: 2.6, // (initial was 3.1)
          z: 2.9, // (initial was 3.4)
          duration: 0.90,
          ease: "power2.inOut"
        }, 0.10)
        // Fade in top text after monitor finishes scaling
        .to([topTextRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "+=0.2");

      // Separate scroll trigger for the bottom static features
      gsap.to(bottomTextRef.current, {
        scrollTrigger: {
          trigger: bottomTextRef.current,
          start: "top 85%", // Fade in when it enters the viewport
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });

    }, containerRef);
    
    // Explicitly refresh ScrollTrigger to ensure SmoothScroll/Lenis updates the page height
    ScrollTrigger.refresh();

    return () => ctx.revert(); // cleanup
  }, [sceneReady]);

  return (
    <>
    <section ref={containerRef} className="h-screen w-full bg-[#fdfaf6] relative">
      <div ref={innerRef} className="w-full h-full relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 overflow-hidden"
          style={{ pointerEvents: 'none' }}
        >
          <img 
            src="/images/Gradient SVG.svg" 
            alt="Background Gradient"
            className="w-full h-full object-cover absolute inset-0"
          />
          
          {/* Soft-edged Black Overlay */}
          <div 
            ref={overlayRef}
            className="absolute w-full z-10"
            style={{
              height: "150vh",
              top: 0,
              background: "linear-gradient(to bottom, #000000 70%, transparent 100%)"
            }}
          />
        </div>

        {/* Top Fade-in Text */}
        <div ref={topTextRef} className="absolute top-16 left-0 right-0 z-20 flex flex-col items-center text-center opacity-0 pointer-events-none">
          <h2 className="text-white text-5xl md:text-6xl font-semibold tracking-tight mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>Who We Are</h2>
          <p className="text-white text-lg font-medium max-w-2xl text-center leading-relaxed opacity-90">
            15+ years of software mastery engineered with next-gen AI<br/>
            to power production-ready digital products.
          </p>
        </div>

        {/* 3D Scene overlaid on top */}
        <Scene monitorRef={monitorRef} cameraRef={cameraRef} onReady={() => setSceneReady(true)} />
      </div>
    </section>

    {/* Bottom Features - Statically placed below the viewport */}
    <section ref={bottomTextRef} className="w-full bg-[#fdfaf6] py-16 flex justify-center opacity-0 px-8 translate-y-8 mt-[-10vh]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Col 1 */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <p className="text-sm font-semibold text-black leading-snug">Full-stack web, mobile, and enterprise<br/>software engineering foundation.</p>
        </div>
        {/* Col 2 */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
          <p className="text-sm font-semibold text-black leading-snug">Full lifecycle ownership from technical architecture<br/>to secure production deployment.</p>
        </div>
        {/* Col 3 */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-8 h-8 mb-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          <p className="text-sm font-semibold text-black leading-snug">Custom generative AI, agentic workflows,<br/>and proprietary AI SaaS platforms.</p>
        </div>
      </div>
    </section>
    </>
  );
}

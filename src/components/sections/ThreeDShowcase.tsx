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

    {/* Bottom Features - Measurable AI Productivity */}
    <section ref={bottomTextRef} className="w-full bg-[#fdfaf6] py-20 lg:py-24 flex flex-col items-center opacity-0 px-6 sm:px-8 translate-y-8 mt-[-6vh] relative z-20 border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Performance Benchmarks
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-neutral-900 tracking-tight leading-tight">
            Measurable AI Productivity
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-xl">
            Real operational impact and velocity metrics delivered across our AI-native engineering and automation workflows.
          </p>
        </div>

        {/* 7 Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Metric 1 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">13.8%</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">More Issues Resolved per Hour</span>
          </div>

          {/* Metric 2 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">35%</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">Higher Productivity for Less-Experienced Workers</span>
          </div>

          {/* Metric 3 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">55%</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">Faster Task Completion</span>
          </div>

          {/* Metric 4 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">2 Weeks</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">to First Release</span>
          </div>

          {/* Metric 5 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">50+</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">Workflows Automated</span>
          </div>

          {/* Metric 6 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">95%</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">AI Evaluation Pass Rate</span>
          </div>

          {/* Metric 7 */}
          <div className="group bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#ff5e00]/40 hover:shadow-[0_10px_30px_rgba(255,94,0,0.08)] transition-all duration-300 flex flex-col justify-between col-span-2 md:col-span-3 lg:col-span-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#ff5e00] tracking-tight">40%</span>
            <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-700 leading-snug">Reduction in Processing Time</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

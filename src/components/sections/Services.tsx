"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial states (all stacked in center)
      gsap.set(cardsRef.current, {
        x: 0,
        y: 100, // Slightly lower to slide up
        rotation: 0,
        opacity: 0,
      });

      // Create a paused timeline
      const tl = gsap.timeline({ paused: true });
      tlRef.current = tl;

      // Animate Center Card (index 2)
      tl.to(cardsRef.current[2], {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.5)",
      })
      // Fan out the other cards simultaneously
      .to(cardsRef.current[1], { // Mid Left
        x: -170,
        y: 10,
        rotation: -12,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.4")
      .to(cardsRef.current[3], { // Mid Right
        x: 170,
        y: 10,
        rotation: 12,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.8")
      .to(cardsRef.current[0], { // Far Left
        x: -320,
        y: 50,
        rotation: -24,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.6")
      .to(cardsRef.current[4], { // Far Right
        x: 320,
        y: 50,
        rotation: 24,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tlRef.current?.play();
          // Optional: observer.unobserve(entries[0].target) if you only want it to play once
        } else {
          // Reverse if scrolling back up out of view
          tlRef.current?.reverse();
        }
      },
      { threshold: 0.4 } // Trigger when 40% of the section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 overflow-hidden flex flex-col items-center justify-center bg-[#0a0806]">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(140,50,10,0.5)_0%,_rgba(10,8,6,1)_70%)]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Infinity Logo */}
        <div className="mb-8">
          <img src="/images/Vector (1).svg" alt="eo logo" className="h-8 w-auto" />
        </div>
        
        {/* Fanned Cards Carousel */}
        <div className="relative w-full h-[400px] flex items-center justify-center mt-4 mb-16 scale-50 sm:scale-75 md:scale-100">
          
          {/* Far Left Card */}
          <div ref={el => { cardsRef.current[0] = el; }} className="absolute w-[200px] h-[200px] rounded-[32px] overflow-hidden border-[1.5px] border-[#ff5e00] z-10 shadow-2xl bg-neutral-900">
            <img src="/images/services/20bd32e73df7a0088851915baca229308343d545.png" alt="Product 1" className="w-full h-full object-cover" />
          </div>

          {/* Mid Left Card */}
          <div ref={el => { cardsRef.current[1] = el; }} className="absolute w-[300px] h-[300px] rounded-[32px] overflow-hidden border-[1.5px] border-[#ff5e00] z-20 shadow-2xl bg-neutral-900">
            <img src="/images/services/3c9f5242ffe941cc07c5c01c35ea3ca9ce43ee6f.png" alt="Product 2" className="w-full h-full object-cover" />
          </div>

          {/* Center Card */}
          <div ref={el => { cardsRef.current[2] = el; }} className="absolute w-[340px] h-[340px] rounded-[32px] overflow-hidden border-[2px] border-[#ff5e00] z-30 shadow-[0_0_60px_rgba(255,94,0,0.15)] bg-neutral-900">
            <img src="/images/services/5c5109ad77337b400a40d746be9f026f99d6bb32.png" alt="Main Product" className="w-full h-full object-cover" />
          </div>

          {/* Mid Right Card */}
          <div ref={el => { cardsRef.current[3] = el; }} className="absolute w-[300px] h-[300px] rounded-[32px] overflow-hidden border-[1.5px] border-[#ff5e00] z-20 shadow-2xl bg-neutral-900">
            <img src="/images/services/5fb6df87413f2f231bd935e66ec6f9b3d0ae01d3.png" alt="Product 4" className="w-full h-full object-cover" />
          </div>

          {/* Far Right Card */}
          <div ref={el => { cardsRef.current[4] = el; }} className="absolute w-[200px] h-[200px] rounded-[32px] overflow-hidden border-[1.5px] border-[#ff5e00] z-10 shadow-2xl bg-neutral-900">
            <img src="/images/services/943f6de44b68321b88fc1a40f45f9562c5a6b958.png" alt="Product 5" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-5xl font-medium text-white text-center mb-10 leading-[1.25] tracking-tight">
          We Don’t Just Build for Clients.<br />
          We Build Our <span className="text-[#ff5e00]">Own Products.</span>
        </h2>

        {/* Action Button */}
        <button className="bg-white hover:bg-neutral-100 text-black rounded-full pl-6 pr-2 py-2 flex items-center gap-4 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,94,0,0.15)] group">
          <span className="font-semibold text-sm">Explore Labs</span>
          <div className="w-10 h-10 rounded-full bg-[#ff5e00] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
            <img src="/images/Vector (2).svg" alt="Binoculars" className="w-5 h-5 object-contain" />
          </div>
        </button>

      </div>
    </section>
  );
}

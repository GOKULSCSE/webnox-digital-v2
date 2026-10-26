"use client";

import { useEffect, useRef, useState } from "react";

export default function LetsGrowTogether() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSeparated, setIsSeparated] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            setIsSeparated(true);
          }, 250);
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#110603] min-h-[640px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[820px] xl:min-h-[860px] select-none overflow-hidden flex items-end lg:items-center border-t border-[#ff5e00]/20 rounded-bl-[36px] rounded-br-[36px] sm:rounded-bl-[50px] sm:rounded-br-[50px] lg:rounded-bl-[64px] lg:rounded-br-[64px] isolate"
    >
      {/* Subtle Ambient Sunset Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(241,76,12,0.16) 0%, rgba(17,6,3,0) 75%)",
        }}
      />

      {/* Floating Thumbnail Card 1 (Left Behind Human Hand Wrist) */}
      <div
        className="absolute left-[5%] sm:left-[6%] lg:left-[6.5%] top-[20%] sm:top-[22%] lg:top-[23%] z-10 w-28 sm:w-36 md:w-44 lg:w-48 h-18 sm:h-24 md:h-28 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden border border-[#ff5e00]/60 shadow-[0_10px_30px_rgba(255,94,0,0.2)] pointer-events-none transition-all duration-1000 ease-out"
        style={{
          opacity: isSeparated ? 1 : 0,
          transform: isSeparated
            ? "translateY(0px) scale(1)"
            : "translateY(24px) scale(0.85)",
          transitionDelay: "400ms",
        }}
      >
        <img
          src="/images/grow-office.jpg"
          alt="Office collaboration at sunset"
          className="w-full h-full object-cover brightness-95"
        />
      </div>

      {/* Floating Thumbnail Card 2 (Right Above Robot Hand Palm) */}
      <div
        className="absolute right-[12%] sm:right-[15%] lg:right-[17%] top-[44%] sm:top-[46%] lg:top-[46%] z-10 w-28 sm:w-36 md:w-44 lg:w-48 h-18 sm:h-24 md:h-28 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden border border-[#ff5e00]/60 shadow-[0_10px_30px_rgba(255,94,0,0.2)] pointer-events-none transition-all duration-1000 ease-out"
        style={{
          opacity: isSeparated ? 1 : 0,
          transform: isSeparated
            ? "translateY(0px) scale(1)"
            : "translateY(24px) scale(0.85)",
          transitionDelay: "500ms",
        }}
      >
        <img
          src="/images/grow-crowd.jpg"
          alt="Business leaders networking"
          className="w-full h-full object-cover brightness-90"
        />
      </div>

      {/* Center-Left Text Content (Reveals as hands separate) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-16 sm:pb-20 lg:pb-24">
        <div
          className="w-full max-w-[560px] lg:max-w-[620px] transition-all duration-1000 ease-out"
          style={{
            opacity: isSeparated ? 1 : 0,
            transform: isSeparated
              ? "translateY(0px) scale(1)"
              : "translateY(35px) scale(0.94)",
            transitionDelay: "300ms",
            pointerEvents: isSeparated ? "auto" : "none",
          }}
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-bold tracking-tight leading-[1.08]">
            <span className="block text-white">Build Your Next AI Product</span>
            <span className="block text-[#ff5e00]">with Webnox Digital</span>
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-5 sm:mt-6 text-[#cfc7c0] text-xs sm:text-[14px] md:text-[15px] leading-relaxed max-w-[500px] font-normal">
            Turn your AI idea, existing software, or business workflow into a production-ready digital solution. From AI strategy and architecture to development, integration, and deployment, Webnox helps bring your technology vision to life.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-7">
            <a
              href="mailto:contact@webnox.in?subject=Start%20Your%20AI%20Project"
              className="inline-flex items-center gap-3 bg-white text-[#110804] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[12px] font-semibold text-xs sm:text-sm hover:bg-neutral-100 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Start Your AI Project</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-[6px] bg-gradient-to-tr from-[#ff5e00] to-[#ff7b2b] flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shadow-sm">
                ✦
              </span>
            </a>

            <a
              href="tel:+919786557739"
              className="inline-flex items-center gap-2 text-white font-medium text-xs sm:text-sm hover:text-[#ff5e00] transition-colors duration-300 group cursor-pointer"
            >
              <span>Talk to Our AI Experts</span>
              <span className="text-[#ff5e00] text-sm sm:text-base font-bold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* HUMAN HAND (hh.png) */}
      {/* Hand is anchored in top-left, reaching toward center over "Let's Grow" */}
      <div
        className="absolute pointer-events-none select-none transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-30"
        style={{
          top: "0%",
          left: "0%",
          width: "78%",
          maxWidth: "1100px",
          minWidth: "400px",
          transform: isSeparated
            ? "translate(0%, 0%) scale(1)"
            : "translate(34%, 34%) scale(1.02)",
          transformOrigin: "top left",
        }}
      >
        <img
          src="/images/hh.png"
          alt="Human hand"
          className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
          draggable={false}
        />
      </div>

      {/* ROBOTIC HAND (rh.png) */}
      {/* Hand is anchored at bottom-right corner, extending smoothly off the edge */}
      <div
        className="absolute pointer-events-none select-none transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-20"
        style={{
          bottom: "-5%",
          right: "-8%",
          width: "52%",
          maxWidth: "840px",
          minWidth: "340px",
          transform: isSeparated
            ? "translate(0%, 0%) scale(1)"
            : "translate(-44%, -46%) scale(1.02)",
          transformOrigin: "bottom right",
        }}
      >
        <img
          src="/images/rh.png"
          alt="Robotic hand"
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          draggable={false}
        />
      </div>
    </section>
  );
}

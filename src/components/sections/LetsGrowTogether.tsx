"use client";

import { useEffect, useRef, useState } from "react";

export default function LetsGrowTogether() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSeparated, setIsSeparated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSeparated(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#110603] min-h-[620px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[820px] select-none overflow-hidden flex items-center border-t border-[#ff5e00]/20"
    >
      {/* Subtle Ambient Sunset Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(241,76,12,0.18) 0%, rgba(17,6,3,0) 75%)",
        }}
      />

          {/* Floating Thumbnail Card 1 (Left Behind Human Hand) */}
          <div
            className="absolute left-[5%] sm:left-[7%] lg:left-[8%] top-[24%] sm:top-[26%] z-10 w-28 sm:w-36 md:w-44 h-18 sm:h-24 md:h-28 rounded-xl sm:rounded-2xl overflow-hidden border border-[#ff5e00]/30 shadow-[0_12px_35px_rgba(0,0,0,0.6)] pointer-events-none transition-all duration-1000 ease-out"
            style={{
              opacity: isSeparated ? 1 : 0,
              transform: isSeparated
                ? "translateY(0px) scale(1)"
                : "translateY(30px) scale(0.8)",
              transitionDelay: "400ms",
            }}
          >
            <img
              src="/images/fintech-trading.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover brightness-95"
            />
          </div>

          {/* Floating Thumbnail Card 2 (Right Above Robot Hand) */}
          <div
            className="absolute right-[14%] sm:right-[18%] lg:right-[20%] top-[46%] sm:top-[48%] z-10 w-28 sm:w-36 md:w-44 h-18 sm:h-24 md:h-28 rounded-xl sm:rounded-2xl overflow-hidden border border-[#ff5e00]/30 shadow-[0_12px_35px_rgba(0,0,0,0.6)] pointer-events-none transition-all duration-1000 ease-out"
            style={{
              opacity: isSeparated ? 1 : 0,
              transform: isSeparated
                ? "translateY(0px) scale(1)"
                : "translateY(30px) scale(0.8)",
              transitionDelay: "500ms",
            }}
          >
            <img
              src="/images/healthcare-biometrics.jpg"
              alt="Business partners"
              className="w-full h-full object-cover brightness-90"
            />
          </div>

      {/* Center Text Content (Reveals as hands separate) */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
        <div
          className="w-full max-w-[560px] lg:max-w-[620px] transition-all duration-1000 ease-out"
          style={{
            opacity: isSeparated ? 1 : 0,
            transform: isSeparated
              ? "translateY(0px) scale(1)"
              : "translateY(40px) scale(0.92)",
            transitionDelay: "300ms",
            pointerEvents: isSeparated ? "auto" : "none",
          }}
        >
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.06]">
            <span className="block text-white">Let’s Grow</span>
            <span className="block text-[#ff5e00]">Together!</span>
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-5 text-[#c7bcb4] text-xs sm:text-sm md:text-[14.5px] leading-relaxed max-w-md font-normal">
            Turn your AI idea, existing software, or business workflow into a
            production-ready digital solution. From AI strategy and architecture to
            development, integration, and deployment, Webnox helps bring your
            technology vision to life.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              className="inline-flex items-center gap-2.5 bg-white text-[#110804] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-neutral-100 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95"
            >
              <span>Let’s Begin today</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-tr from-[#ff5e00] to-[#ff7b2b] flex items-center justify-center text-white text-[11px] sm:text-xs">
                ✦
              </span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#ff5e00] font-medium text-xs sm:text-sm md:text-base transition-colors duration-300 group"
            >
              <span>Book an Appointment</span>
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* HUMAN HAND (hh.png) */}
      {/* Initial state: shifted toward center touching robot hand */}
      {/* Separated state: anchored at top-left corner */}
      <div
        className="absolute pointer-events-none select-none transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-20"
        style={{
          top: "-5%",
          left: "-6%",
          width: "56%",
          maxWidth: "880px",
          minWidth: "360px",
          transform: isSeparated
            ? "translate(0%, 0%) scale(1)"
            : "translate(38%, 24%) scale(0.92)",
          transformOrigin: "top left",
        }}
      >
        <img
          src="/images/hh.png"
          alt="Human hand"
          className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
          draggable={false}
        />
      </div>

      {/* ROBOTIC HAND (rh.png) */}
      {/* Initial state: shifted toward center touching human hand */}
      {/* Separated state: anchored at bottom-right corner */}
      <div
        className="absolute pointer-events-none select-none transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-20"
        style={{
          bottom: "-4%",
          right: "-5%",
          width: "52%",
          maxWidth: "820px",
          minWidth: "340px",
          transform: isSeparated
            ? "translate(0%, 0%) scale(1)"
            : "translate(-34%, -22%) scale(0.92)",
          transformOrigin: "bottom right",
        }}
      >
        <img
          src="/images/rh.png"
          alt="Robotic hand"
          className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
          draggable={false}
        />
      </div>
    </section>
  );
}

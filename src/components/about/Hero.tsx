"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#160a04] text-white selection:bg-[#ff5e00] selection:text-white">
      {/* Deep Obsidian Background Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 35%, #2a1105 0%, #170b04 45%, #100602 100%)",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Solar Glow Accent */}
      <div
        className="absolute right-[-5%] top-[25%] -translate-y-1/2 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.22) 0%, rgba(255, 114, 48, 0.08) 45%, transparent 70%)",
          filter: "blur(75px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top-Left Warm Ambient Light */}
      <div
        className="absolute left-[-10%] top-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.1) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Sub-Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-[#ff5e00]/40 backdrop-blur-md mb-6 sm:mb-8 shadow-[0_0_24px_rgba(255,94,0,0.18)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5e00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5e00]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-200">
              THE AI-NATIVE ENGINEERING COMPANY
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-white tracking-tight leading-[1.12] mb-6 sm:mb-8">
            15 Years of Software Heritage.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Re-engineered for the AI Era.
            </span>
          </h1>

          {/* Description */}
          <p className="text-neutral-300/95 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-10">
            Backed by 15+ years of software experience, Webnox Digital builds
            custom software and smart AI tools. We replace slow, manual office
            tasks with automated AI systems that answer customers fast, prevent
            costly errors and help your company grow.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] text-white font-medium text-sm sm:text-base shadow-[0_4px_28px_rgba(255,94,0,0.4)] hover:shadow-[0_8px_36px_rgba(255,94,0,0.6)] hover:brightness-110 active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore Our AI Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            <a
              href="#senior-practitioners"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-neutral-200 hover:text-white font-medium text-sm sm:text-base backdrop-blur-md active:scale-[0.98] transition-all duration-300"
            >
              <Users className="w-4 h-4 text-[#ff7230]" />
              <span>Meet Our Engineering Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


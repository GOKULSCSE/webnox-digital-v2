"use client";

import React from "react";
import { X, Check } from "lucide-react";

const COMPARISON_ROWS = [
  {
    traditional: "Task-Based AI",
    native: "AI Across Workflows",
  },
  {
    traditional: "AI Add-Ons",
    native: "AI-First Processes",
  },
  {
    traditional: "Separate Tools",
    native: "Connected Systems",
  },
  {
    traditional: "Manual Work",
    native: "Automated Workflows",
  },
  {
    traditional: "Regular Updates",
    native: "Continuous Improvement",
  },
  {
    traditional: "More Employees",
    native: "Scalable Automation",
  },
];

const TRADITIONAL_TAGS = [
  "Task-Based AI",
  "AI Add-Ons",
  "Separate Tools",
  "Manual Work",
  "Regular Updates",
  "More Employees",
];

const NATIVE_TAGS = [
  "AI Across Workflows",
  "AI-First Processes",
  "Connected Systems",
  "Automated Workflows",
  "Continuous Improvement",
  "Scalable Automation",
];

export default function NotTypicalAgency() {
  return (
    <section className="relative w-full bg-[#fdfaf6] py-24 sm:py-32 lg:py-36 overflow-hidden select-none border-t border-neutral-200/60">
      {/* Background Hands Motif (Human hand left, Robotic hand right) */}
      <div className="absolute -top-16 inset-x-0 w-full pointer-events-none select-none z-0 overflow-hidden flex justify-center">
        <div className="w-full max-w-[1560px]">
          <img
            src="/images/hands.png"
            alt="Human and AI collaboration"
            className="w-full h-auto object-contain object-top opacity-60 sm:opacity-80"
            draggable={false}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Strategic Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight text-[#140803] leading-[1.18]">
            AI-Native Company vs. Traditional AI Company:{" "}
            <span className="text-[#ff5e00]">What Sets Them Apart?</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#544d47] text-base sm:text-lg md:text-[18px] font-normal leading-relaxed max-w-3xl mx-auto">
            A traditional AI company typically develops AI solutions to address defined business problems. An AI-native company applies AI more broadly, integrating it into the processes used to build products, deliver services and improve operations.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1240px] mx-auto">
          {/* Card 1: Traditional AI Company */}
          <div className="group relative rounded-[32px] sm:rounded-[38px] bg-[#0c0907] border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            {/* Top Marquee Badges */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-6">
              <div className="flex gap-2.5 w-max animate-[agency-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...TRADITIONAL_TAGS, ...TRADITIONAL_TAGS].map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white/60 bg-white/[0.08] border border-white/10 backdrop-blur-sm whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Conventional Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Traditional AI Company
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-sm mx-auto">
                Applies AI as isolated tools and add-ons to existing legacy operations.
              </p>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3.5 my-auto">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3"
                >
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
                    <X className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                  <span className="text-sm font-medium text-neutral-300">
                    {row.traditional}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Copy */}
            <p className="relative z-10 text-neutral-400 text-xs sm:text-[13.5px] text-center max-w-md mx-auto leading-relaxed mt-8 pt-6 border-t border-white/10">
              Fragmented tooling and siloed workflows limit ROI and slow down product velocity.
            </p>
          </div>

          {/* Card 2: AI-Native Company (Webnox) */}
          <div
            className="group relative rounded-[32px] sm:rounded-[38px] border border-[#ff7b39]/35 overflow-hidden shadow-[0_25px_70px_rgba(241,76,12,0.32)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-8 lg:p-10"
            style={{
              background:
                "radial-gradient(ellipse 95% 85% at 50% 60%, #F14C0C 0%, #e04408 30%, #a42c05 60%, #5a1402 85%, #240700 100%)",
            }}
          >
            {/* Watermark Ribbon Overlay */}
            <div
              className="absolute inset-0 pointer-events-none bg-contain bg-no-repeat bg-center opacity-25 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/tabbg.png')" }}
            />

            {/* Top Marquee Badges */}
            <div className="relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-6">
              <div className="flex gap-2.5 w-max animate-[agency-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...NATIVE_TAGS, ...NATIVE_TAGS].map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-white/[0.2] border border-white/30 backdrop-blur-md whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-8">
              <span className="text-xs uppercase tracking-widest text-white/90 font-semibold block mb-2">
                The Webnox Native Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI-Native Company
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-2 max-w-sm mx-auto">
                Integrates AI across product engineering, operations, and growth from day one.
              </p>
            </div>

            {/* Comparison Rows */}
            <div className="relative z-10 space-y-3.5 my-auto">
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white/15 border border-white/25 rounded-xl px-4 py-3 backdrop-blur-sm shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#ff5e00] shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-[#ff5e00] stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-white">
                    {row.native}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Copy */}
            <p className="relative z-10 text-white/95 text-xs sm:text-[13.5px] text-center max-w-md mx-auto leading-relaxed mt-8 pt-6 border-t border-white/20 font-medium">
              Connected AI systems eliminate repetitive effort and multiply operational productivity across the entire lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS for infinite marquee animation */}
      <style jsx>{`
        @keyframes agency-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

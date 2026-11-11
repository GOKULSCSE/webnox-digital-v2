"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AwardBadge {
  src: string;
  alt: string;
  platform: string;
}

const AWARD_BADGES: AwardBadge[] = [
  {
    src: "/images/Award 1.png",
    alt: "SoftwareSuggest Top Software Company 2026",
    platform: "SoftwareSuggest",
  },
  {
    src: "/images/Award 2.png",
    alt: "AppFutura Top App Development Company in India 2023",
    platform: "AppFutura",
  },
  {
    src: "/images/Award 3.png",
    alt: "Capterra Best Ease of Use 2023",
    platform: "Capterra",
  },
  {
    src: "/images/Award 4.png",
    alt: "GoodFirms Top 50 Enterprise Products Best Software Awards 2023",
    platform: "GoodFirms",
  },
  {
    src: "/images/Award 5.png",
    alt: "ITFirms Top Software Development Company 2023",
    platform: "ITFirms",
  },
  {
    src: "/images/Award 6.png",
    alt: "DesignRush Top Web Design Agency 2023",
    platform: "DesignRush",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#160a04] text-white selection:bg-[#ff5e00] selection:text-white">
      {/* Deep Obsidian Background Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 82% 38%, #2e1307 0%, #1a0b04 45%, #130702 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient Orange Glow behind the 3D architecture visual */}
      <div
        className="absolute right-0 lg:right-[-5%] top-[38%] -translate-y-1/2 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.28) 0%, rgba(255, 114, 48, 0.12) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top-Left Warm Vignette */}
      <div
        className="absolute left-[-10%] top-[-5%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.09) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Main 2-Column Hero Grid: Left Content, Right 3D Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Heading, Paragraph, and Pill CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-pulse" />
              <span>Production AI Engineering • India & Global Delivery</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-bold text-white tracking-tight leading-[1.12]">
              Custom AI Development Company in India{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                Production-Grade Generative & Enterprise AI Systems
              </span>
            </h1>

            {/* Hero Paragraph */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl mt-5 sm:mt-6">
              Webnox Digital combines 15+ years of software engineering expertise with
              artificial intelligence to build custom AI software, AI agents, enterprise RAG
              systems and Generative AI solutions for your business workflows.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-semibold pl-2 pr-6 py-2.5 sm:py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(255,114,48,0.25)] hover:shadow-[0_6px_32px_rgba(255,114,48,0.4)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span>Build Your AI Solution</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center text-neutral-200 hover:text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 cursor-pointer text-center"
              >
                <span>Talk to Our AI Experts</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8935]" />
                Zero Data Leakage Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8935]" />
                100% IP & Code Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8935]" />
                SOC2-Ready Guardrails
              </span>
            </div>
          </div>

          {/* Right Column: Floating 3D Isometric Architecture Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FF7230]/25 via-[#FF6A2F]/20 to-transparent blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[620px] xl:max-w-[660px] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cybersecurity_technology_assurance.svg?v=transparent"
                alt="Webnox Production AI Architecture: Models, Agents, RAG, Integration"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03] select-none pointer-events-none"
                style={{ mixBlendMode: "screen" }}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Global Industry Recognition & Awards Bar */}
        <div className="w-full mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-white/10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-5 md:gap-8 items-center justify-items-center max-w-6xl mx-auto px-1 sm:px-4">
            {AWARD_BADGES.map((badge, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-1 sm:p-2 rounded-xl transition-all duration-300 group"
              >
                <div className="relative w-24 sm:w-32 md:w-36 lg:w-40 h-16 sm:h-22 md:h-24 lg:h-28 flex items-center justify-center">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
                    className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

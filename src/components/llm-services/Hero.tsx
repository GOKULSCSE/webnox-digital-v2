"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Zap, Award, ArrowRight } from "lucide-react";

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

interface GovernanceStandard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GOVERNANCE_STANDARDS: GovernanceStandard[] = [
  {
    title: "100% Client Ownership",
    description: "You own all custom code, trained AI models and data pipelines with zero recurring license fees.",
    icon: ShieldCheck,
  },
  {
    title: "Absolute Data Privacy",
    description: "Your private business data stays inside your network and is never used to train public AI models.",
    icon: Lock,
  },
  {
    title: "Fast & Reliable Performance",
    description: "Ultra-fast response times and built-in accuracy controls to prevent errors or false information.",
    icon: Zap,
  },
  {
    title: "Proven Track Record",
    description: "15+ years of software experience delivering digital solutions to 2,570+ clients across 20+ countries.",
    icon: Award,
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#160a04] text-white selection:bg-[#ff5e00] selection:text-white">
      {/* Deep Brown Background Gradient Base */}
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
          {/* Left Column: Heading, Paragraph, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Sub-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-[#ff5e00]/40 backdrop-blur-md mb-5 shadow-[0_0_24px_rgba(255,94,0,0.18)]">
              <span className="w-2 h-2 rounded-full bg-[#ff7230] shadow-[0_0_8px_#ff7230]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-200">
                ENTERPRISE LLM ENGINEERING
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.14]">
              LLM Development Services in India for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                High Uptime Enterprise Systems
              </span>
            </h1>

            {/* Hero Paragraph */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mt-4 sm:mt-5">
              We design, fine-tune, and deploy custom large language models that automate complex enterprise operations. From self-hosted open-source deployment to hybrid RAG pipelines, we deliver production grade systems with complete working sandbox in two weeks.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-9 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF7230] to-[#FF532B] hover:brightness-110 text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_4px_28px_rgba(255,94,0,0.38)] hover:shadow-[0_6px_36px_rgba(255,94,0,0.55)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Schedule an LLM Architecture Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-neutral-200 hover:text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 cursor-pointer text-center"
              >
                <span>Request a 2-Week Sandbox PoC</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating 3D Isometric Architecture Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Ambient orange glow directly behind the 3D stack */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FF7230]/25 via-[#FF6A2F]/20 to-transparent blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            {/* Seamless 3D Visual */}
            <div className="relative w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[520px] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cybersecurity_technology_assurance.svg?v=transparent"
                alt="Webnox LLM Architecture Stack: Models, RAG, Integrations, AI Agents"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03] select-none pointer-events-none"
                style={{ mixBlendMode: "screen" }}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Enterprise Performance & Governance Standards (4 H3s) */}
        <div className="mt-14 sm:mt-18 pt-8 sm:pt-10 border-t border-white/10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-[#ff8935]">
              Enterprise Performance &amp; Governance Standards
            </h2>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">Zero Public Leaks • 100% Sovereign</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {GOVERNANCE_STANDARDS.map((standard, idx) => (
              <div
                key={idx}
                className="group rounded-2xl p-5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#ff7230]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-colors mb-3.5">
                    <standard.icon className="w-5 h-5 text-current" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff8935] transition-colors">
                    {standard.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Awards & Recognitions Bar */}
        <div className="w-full mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-5 md:gap-8 items-center justify-items-center max-w-6xl mx-auto px-1 sm:px-4 opacity-85 hover:opacity-100 transition-opacity">
            {AWARD_BADGES.map((badge, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-1 sm:p-2 rounded-xl transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105"
              >
                <div className="relative w-24 sm:w-32 md:w-36 h-12 sm:h-16 flex items-center justify-center">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto object-contain"
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

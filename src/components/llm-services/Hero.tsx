"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Zap, Award } from "lucide-react";

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
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GOVERNANCE_STANDARDS: GovernanceStandard[] = [
  {
    number: "01",
    badge: "Zero Licensing Fees",
    title: "100% Client Ownership",
    description: "You own all custom code, trained AI models and data pipelines with zero recurring license fees.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    badge: "Private Network Only",
    title: "Absolute Data Privacy",
    description: "Your private business data stays inside your network and is never used to train public AI models.",
    icon: Lock,
  },
  {
    number: "03",
    badge: "Guardrails Active",
    title: "Fast & Reliable Performance",
    description: "Ultra-fast response times and built-in accuracy controls to prevent errors or false information.",
    icon: Zap,
  },
  {
    number: "04",
    badge: "15+ Years Heritage",
    title: "Proven Track Record",
    description: "15+ years of software experience delivering digital solutions to 2,570+ clients across 20+ countries.",
    icon: Award,
  },
];

export default function Hero() {
  return (
    <section className="relative w-full pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#160a04] text-white selection:bg-[#ff5e00] selection:text-white">
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
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
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
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mt-4 sm:mt-6">
              We design, fine-tune, and deploy custom large language models that automate complex enterprise operations. From self-hosted open-source deployment to hybrid RAG pipelines, we deliver production grade systems with complete working sandbox in two weeks.
            </p>

            {/* Primary Action Buttons (Pill CTA matching /ai-application-development-services/) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-9 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-semibold pl-2 pr-6 py-2.5 sm:py-2 rounded-full transition-all duration-300 shadow-[0_4px_24px_rgba(255,114,48,0.22)] hover:shadow-[0_6px_32px_rgba(255,114,48,0.36)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span>Schedule an LLM Architecture Call</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-neutral-300 hover:text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300 cursor-pointer text-center"
              >
                <span>Request a 2-Week Sandbox PoC</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating 3D Isometric Architecture Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FF7230]/25 via-[#FF6A2F]/20 to-transparent blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[260px] sm:max-w-[440px] lg:max-w-[540px] flex items-center justify-center">
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
        <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff7230] shadow-[0_0_8px_#ff7230]" />
              <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-[#ff8935]">
                Enterprise Performance &amp; Governance Standards
              </h2>
            </div>
            <span className="text-xs text-neutral-300 font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 w-fit">
              Zero Public Leaks • 100% Sovereign
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {GOVERNANCE_STANDARDS.map((standard, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.11] hover:to-white/[0.03] backdrop-blur-md border border-white/12 hover:border-[#ff7230]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.22)] hover:shadow-[0_18px_40px_rgba(255,94,0,0.16)] overflow-hidden"
              >
                {/* Top subtle glow accent */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#ff7230]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#ff7230]/15 border border-[#ff7230]/35 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300">
                      <standard.icon className="w-5 h-5 text-current" />
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-[#ff8935] transition-colors">
                      {standard.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ff8935] transition-colors">
                    {standard.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                    {standard.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10.5px] font-mono font-semibold text-[#ff8935] tracking-wide">
                    {standard.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Awards & Recognitions Bar (Compact 3x2 on mobile, 6-col on desktop) */}
        <div className="w-full mt-8 sm:mt-14 pt-6 sm:pt-10 border-t border-white/10">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-5 md:gap-8 items-center justify-items-center max-w-6xl mx-auto px-0 sm:px-4">
            {AWARD_BADGES.map((badge, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center py-2 px-2 sm:p-2 rounded-xl bg-white/[0.04] sm:bg-transparent border border-white/10 sm:border-transparent transition-all duration-300 group"
              >
                <div className="relative w-20 sm:w-32 md:w-36 lg:w-40 h-14 sm:h-20 md:h-24 lg:h-28 flex items-center justify-center">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, 160px"
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

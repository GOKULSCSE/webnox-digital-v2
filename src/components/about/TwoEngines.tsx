"use client";

import React from "react";
import {
  Cpu,
  Bot,
  LayoutGrid,
  ShieldCheck,
  Search,
  TrendingUp,
  FileText,
  ArrowRight,
  Layers,
  Zap,
} from "lucide-react";

interface EngineFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ENGINE_1_FEATURES: EngineFeature[] = [
  {
    title: "Custom LLM & RAG Systems",
    description:
      "Connecting private company files, databases, and ERPs to secure, hallucination-free AI search and reasoning engines.",
    icon: <Cpu className="w-5 h-5 text-[#ff7230]" />,
  },
  {
    title: "Autonomous AI Agents",
    description:
      "Building digital workers that process customer inquiries, triage support tickets, and execute multi-step business actions.",
    icon: <Bot className="w-5 h-5 text-[#ff7230]" />,
  },
  {
    title: "Modern Web, App & SaaS Platforms",
    description:
      "Engineering high-speed web platforms, mobile apps, and custom SaaS products using modern cloud stacks.",
    icon: <LayoutGrid className="w-5 h-5 text-[#ff7230]" />,
  },
  {
    title: "Cloud & Data Isolation",
    description:
      "Deploying self-hosted, sovereign models inside your private cloud (VPC) with zero data retention and DPDP/GDPR compliance.",
    icon: <ShieldCheck className="w-5 h-5 text-[#ff7230]" />,
  },
];

const ENGINE_2_FEATURES: EngineFeature[] = [
  {
    title: "AI-Powered SEO & GEO",
    description:
      "Optimizing your brand for traditional Google Search as well as conversational AI search engines (ChatGPT, Google Gemini, Perplexity).",
    icon: <Search className="w-5 h-5 text-[#ff7230]" />,
  },
  {
    title: "Performance Marketing (Google & Meta Ads)",
    description:
      "Data-driven paid customer acquisition campaigns focused on measurable cost-per-lead and ROAS.",
    icon: <TrendingUp className="w-5 h-5 text-[#ff7230]" />,
  },
  {
    title: "Automated Content Workflows",
    description:
      "Combining human creative oversight with AI research to publish authoritative, conversion-focused content at scale.",
    icon: <FileText className="w-5 h-5 text-[#ff7230]" />,
  },
];

export default function TwoEngines() {
  return (
    <section
      id="two-engines"
      className="relative w-full py-20 sm:py-28 bg-[#100602] text-white overflow-hidden selection:bg-[#ff5e00] selection:text-white"
    >
      {/* Background Ambience & Lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #220d04 0%, #110602 60%, #0a0301 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute right-[-10%] top-[30%] w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.15) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            THE TWO ENGINES OF WEBNOX DIGITAL
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5">
            Engineering and Growth{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Under One Roof
            </span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Most businesses face a painful divide: their developers don’t understand marketing, and their marketers don’t understand code. Webnox Digital eliminates this friction by operating two synchronized engines:
          </p>
        </div>

        {/* 2 Big Engine Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Engine 1: AI & Custom Software Engineering */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-[#ff7230]/50 transition-all duration-300 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-mono font-bold tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#ff7230]" />
                  ENGINE 01
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  SYSTEMS ARCHITECTURE
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#ff8935] transition-colors">
                AI &amp; Custom Software Engineering
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8">
                We architect and deploy production-grade software and intelligent systems tailored to your workflows.
              </p>

              {/* 4 Core Features */}
              <div className="space-y-4">
                {ENGINE_1_FEATURES.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono uppercase tracking-wider text-[#ff7230]">
                Zero Hallucinations • 100% Code Ownership
              </span>
              <span>Cloud Agnostic</span>
            </div>
          </div>

          {/* Engine 2: Connected Digital Growth & Performance */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-[#ff7230]/50 transition-all duration-300 flex flex-col justify-between group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-mono font-bold tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-[#ff7230]" />
                  ENGINE 02
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  MARKET ACQUISITION
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#ff8935] transition-colors">
                Connected Digital Growth &amp; Performance
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-8">
                Building great technology is only half the battle; ensuring your customers discover it is the other.
              </p>

              {/* 3 Core Features + Strategic Advantage Banner */}
              <div className="space-y-4">
                {ENGINE_2_FEATURES.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Generative Engine Optimization Highlight */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#ff5e00]/15 to-transparent border border-[#ff7230]/30">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff8935] font-semibold mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#ff7230]" />
                    The GEO Advantage
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                    We ensure your software and brand are directly indexed, quoted, and recommended inside conversational models like ChatGPT, Perplexity, and Gemini.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="font-mono uppercase tracking-wider text-[#ff7230]">
                Measurable ROAS • AI Search Optimized
              </span>
              <span>Full Funnel</span>
            </div>
          </div>
        </div>

        {/* The Synchronization Multiplier Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white/[0.04] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7230] to-[#FF532B] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,94,0,0.3)]">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                The Single Team Advantage
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
                No finger-pointing between marketing agencies and software vendors. Code changes, landing page tests, and AI automation happen in hours, not weeks.
              </p>
            </div>
          </div>

          <a
            href="#how-we-work"
            className="flex-shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#ff8935] hover:text-white transition-colors"
          >
            <span>Learn How We Work With Partners</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}


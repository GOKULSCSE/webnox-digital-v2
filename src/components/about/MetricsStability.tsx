"use client";

import React from "react";
import { ShieldCheck, Calendar, Users, Globe, Award, Zap } from "lucide-react";

interface MetricCard {
  number: string;
  suffix?: string;
  label: string;
  subtext: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STABILITY_METRICS: MetricCard[] = [
  {
    number: "15+",
    suffix: "Years",
    label: "Continuous Software Heritage",
    subtext: "Operating since 2011 with deep engineering stability across tech market cycles.",
    badge: "FOUNDED 2011",
    icon: Calendar,
  },
  {
    number: "2,570+",
    suffix: "Clients",
    label: "Businesses Worldwide",
    subtext: "Delivered online stores, custom software, ERPs, and automation platforms.",
    badge: "GLOBAL TRUST",
    icon: Users,
  },
  {
    number: "20+",
    suffix: "Nations",
    label: "Countries Served",
    subtext: "Cross-border deployments across North America, Europe, Asia, and the Middle East.",
    badge: "GLOBAL FOOTPRINT",
    icon: Globe,
  },
  {
    number: "100%",
    suffix: "Ownership",
    label: "Unconditional Client IP",
    subtext: "All code, custom model weights, and pipelines transferred unconditionally to you.",
    badge: "NO VENDOR LOCK-IN",
    icon: ShieldCheck,
  },
  {
    number: "50+",
    suffix: "Pipelines",
    label: "AI Workflows Automated",
    subtext: "Autonomous triage agents, sovereign RAG knowledge bases, and smart task bots.",
    badge: "PRODUCTION SCALE",
    icon: Zap,
  },
  {
    number: "15+",
    suffix: "Honors",
    label: "Awards & Recognitions",
    subtext: "Accredited by GoodFirms, SoftwareSuggest, Capterra, and AppFutura.",
    badge: "INDUSTRY ACCREDITED",
    icon: Award,
  },
];

export default function MetricsStability() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff5e00]/[0.035] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            THE NUMBERS BEHIND OUR STABILITY
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18] mb-5">
            Engineering Dependability Grounded in Facts
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            In an industry crowded with overnight AI experiments, Webnox Digital
            combines 15 years of battle-tested software stability with frontier
            artificial intelligence. Here are the numbers that guarantee your investment is secure.
          </p>
        </div>

        {/* 6 High-Impact Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STABILITY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 hover:bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-neutral-200/80 hover:border-[#ff5e00]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,114,48,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#ff7230]/10 flex items-center justify-center border border-[#ff7230]/20 text-[#ff7230] group-hover:scale-110 group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                  <metric.icon className="w-5 h-5 text-current transition-colors duration-300" />
                </div>
                <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-100 group-hover:bg-[#ff5e00]/10 group-hover:text-[#ff5e00] px-2.5 py-1 rounded-md transition-colors">
                  {metric.badge}
                </span>
              </div>

              {/* Stat Figure */}
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#12141a] group-hover:text-[#ff5e00] transition-colors">
                    {metric.number}
                  </span>
                  {metric.suffix && (
                    <span className="text-sm font-semibold text-neutral-500">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-neutral-800 mb-2 leading-snug">
                  {metric.label}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {metric.subtext}
                </p>
              </div>

              {/* Bottom Subtle Progress Highlight */}
              <div className="w-full h-1 bg-neutral-100 rounded-full mt-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#FF7230] to-[#FF8935] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 sm:mt-16 bg-[#160a04] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div
            className="absolute right-0 top-0 w-80 h-80 bg-[#ff5e00]/20 rounded-full blur-[80px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff8935] font-semibold">
              The Heritage Advantage
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Why 15 Years of Software Experience Matters in AI
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
              AI models produce nothing of business value in a vacuum. True enterprise AI requires resilient database connections, secure API integrations, strict data governance, and high-performance server architectures — skills forged through 15 years of real-world software delivery.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <a
              href="#ai-native-workflows"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all"
            >
              <span>See Our AI-First Workflows</span>
              <span className="text-[#ff7230]">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


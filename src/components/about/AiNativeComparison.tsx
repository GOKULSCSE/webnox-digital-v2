"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  id: string;
  dimension: string;
  traditional: string;
  webnox: string;
}

const COMPARISON_DATA: ComparisonItem[] = [
  {
    id: "ai-usage",
    dimension: "How AI is Used",
    traditional: "Basic chatbots added on top of old systems",
    webnox: "Smart AI built directly around your real business needs",
  },
  {
    id: "speed",
    dimension: "Speed of Work",
    traditional: "Slow manual coding and hourly billing delays",
    webnox: "Faster delivery with automated testing and quality checks",
  },
  {
    id: "team-setup",
    dimension: "Team Setup",
    traditional: "Separate software and marketing teams that don't talk",
    webnox: "One connected team of developers and growth experts working together",
  },
  {
    id: "deliverable",
    dimension: "What You Receive",
    traditional: "Unstable test demos with ongoing monthly fees",
    webnox: "Reliable, ready-to-use software that you own 100%",
  },
  {
    id: "operations",
    dimension: "Daily Operations",
    traditional: "Endless manual emails, follow-ups, and paperwork",
    webnox: "Smart automated systems that handle routine daily work for you",
  },
];

export default function AiNativeComparison() {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section
      id="ai-native-workflows"
      className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 overflow-hidden"
    >
      {/* Soft Background Accent Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#ff5e00]/[0.035] rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            WHAT &ldquo;AI-NATIVE&rdquo; MEANS AT WEBNOX DIGITAL
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18] mb-5">
            We Don&apos;t Just Use AI Tools.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              We Operate on AI-First Workflows.
            </span>
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            A traditional software agency treats AI as an external chatbot add on. As an AI native company, artificial intelligence is integrated into how we think, build, and operate:
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="relative rounded-3xl border border-neutral-200/90 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 border-b border-neutral-200 bg-neutral-50/90 text-xs font-mono font-bold tracking-wider">
            {/* Column 1 */}
            <div className="col-span-3 py-5 px-6 lg:px-8 text-neutral-500 uppercase flex items-center">
              <span>What Matters</span>
            </div>

            {/* Column 2 */}
            <div className="col-span-4 py-5 px-6 lg:px-8 text-neutral-500 uppercase bg-neutral-100/40 border-l border-neutral-200 flex items-center">
              <span>Traditional Software Agencies</span>
            </div>

            {/* Column 3 */}
            <div className="col-span-5 py-5 px-6 lg:px-8 text-[#ff5e00] uppercase bg-gradient-to-r from-[#ff5e00]/[0.08] via-[#ff5e00]/[0.04] to-transparent border-l border-[#ff5e00]/30 flex items-center">
              <div className="flex items-center gap-2 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#ff5e00] shadow-[0_0_8px_#ff5e00]" />
                <span>Webnox Digital (AI-Native)</span>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-neutral-200/80">
            {COMPARISON_DATA.map((row) => {
              const isHovered = activeHover === row.id;
              return (
                <div
                  key={row.id}
                  onMouseEnter={() => setActiveHover(row.id)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`grid grid-cols-1 md:grid-cols-12 transition-all duration-200 ${
                    isHovered ? "bg-orange-50/20" : "bg-white"
                  }`}
                >
                  {/* Column 1: Dimension */}
                  <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 border-neutral-100">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                      {row.dimension}
                    </h3>
                  </div>

                  {/* Column 2: Traditional Software Agencies */}
                  <div className="md:col-span-4 p-6 lg:p-8 md:border-l border-neutral-200 bg-neutral-50/30 flex flex-col justify-center border-b md:border-b-0 border-neutral-100">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0 text-rose-500 shadow-sm">
                        <X className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 md:hidden mb-1">
                          Traditional Software Agencies
                        </span>
                        <p className="text-sm lg:text-[15px] font-medium text-neutral-600 leading-relaxed">
                          {row.traditional}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Webnox Digital (AI-Native) */}
                  <div
                    className={`md:col-span-5 p-6 lg:p-8 md:border-l border-[#ff5e00]/25 flex flex-col justify-center transition-colors ${
                      isHovered
                        ? "bg-[#ff5e00]/[0.06]"
                        : "bg-[#ff5e00]/[0.025]"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#ff5e00] md:hidden mb-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                          Webnox Digital (AI-Native)
                        </span>
                        <p className="text-sm lg:text-[15px] font-bold text-neutral-900 leading-relaxed">
                          {row.webnox}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

interface MetricItem {
  number: string;
  label: string;
}

const STABILITY_METRICS: MetricItem[] = [
  {
    number: "15+ Years",
    label: "Software & Technology Experience",
  },
  {
    number: "2,570+",
    label: "Global Clients Served",
  },
  {
    number: "20+",
    label: "Countries with Live Deployments",
  },
  {
    number: "20+",
    label: "Proprietary Products Built & Operated",
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            THE NUMBERS BEHIND OUR STABILITY
          </h2>
        </div>

        {/* 4-Column Stability Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STABILITY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-neutral-200/80 hover:border-[#ff5e00]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,114,48,0.12)] transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#12141a] group-hover:text-[#ff5e00] transition-colors mb-3">
                {metric.number}
              </span>
              <p className="text-sm sm:text-base font-medium text-neutral-700 leading-snug">
                {metric.label}
              </p>
              <div className="w-12 h-1 bg-neutral-100 rounded-full mt-5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#FF7230] to-[#FF8935] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


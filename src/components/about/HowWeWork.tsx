"use client";

import React from "react";
import { KeyRound, Target, Users2, ShieldCheck } from "lucide-react";

interface PartnerPillar {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PARTNER_PILLARS: PartnerPillar[] = [
  {
    title: "1. 100% Unconditional IP Ownership",
    description:
      "We believe your software should belong to you. When you partner with Webnox, all code, custom-trained model weights, configuration scripts, and data pipelines are transferred unconditionally to your private accounts. No recurring licensing royalties. No vendor lock-in.",
    icon: KeyRound,
  },
  {
    title: "2. Business Outcomes Over Technical Hype",
    description:
      "We never recommend complex or expensive AI when a simple, elegant software solution works better. Every system we build is justified by measurable business metrics: hours saved, error rates reduced, or revenue gained.",
    icon: Target,
  },
  {
    title: "3. Direct Access to Senior Practitioners",
    description:
      "We eliminate non-technical account managers who slow down communication. Your leadership collaborates directly with experienced AI engineers, software developers, and growth strategists who actually build your systems.",
    icon: Users2,
  },
  {
    title: "4. Strict Data Privacy & Compliance",
    description:
      "Your data is your competitive advantage. We enforce zero-retention data policies and architect private environments fully compliant with India’s DPDP Act 2023, GDPR, and international security standards.",
    icon: ShieldCheck,
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 overflow-hidden"
    >
      <div id="senior-practitioners" className="scroll-mt-24" />

      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#ff5e00]/[0.03] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
            How We Work With Our Partners
          </h2>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PARTNER_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-white/95 rounded-3xl p-8 sm:p-10 border border-neutral-200/90 hover:border-[#ff5e00]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(255,114,48,0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#ff7230]/10 border border-[#ff7230]/20 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                  <pillar.icon className="w-5 h-5 text-current transition-colors duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#ff5e00] transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


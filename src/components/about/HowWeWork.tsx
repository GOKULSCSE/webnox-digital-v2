"use client";

import React from "react";
import { KeyRound, Target, Users2, ShieldCheck, Check } from "lucide-react";

interface PartnerPillar {
  number: string;
  title: string;
  leadTag: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  benefits: string[];
}

const PARTNER_PILLARS: PartnerPillar[] = [
  {
    number: "01",
    title: "100% Unconditional IP Ownership",
    leadTag: "NO VENDOR LOCK-IN",
    description:
      "We believe your software should belong to you. When you partner with Webnox, all code, custom-trained model weights, configuration scripts, and data pipelines are transferred unconditionally to your private accounts. No recurring licensing royalties. No vendor lock-in.",
    icon: KeyRound,
    benefits: [
      "All source code & git histories handed over",
      "Custom fine-tuned weights belong to you",
      "Zero recurring software licensing fees",
    ],
  },
  {
    number: "02",
    title: "Business Outcomes Over Technical Hype",
    leadTag: "ROI-DRIVEN ENGINEERING",
    description:
      "We never recommend complex or expensive AI when a simple, elegant software solution works better. Every system we build is justified by measurable business metrics: hours saved, error rates reduced, or revenue gained.",
    icon: Target,
    benefits: [
      "Pragmatic software architecture over hype",
      "Hard metrics: hours saved & error reduction",
      "Fixed scopes, clear deliverables, no fluff",
    ],
  },
  {
    number: "03",
    title: "Direct Access to Senior Practitioners",
    leadTag: "NO NON-TECHNICAL MIDDLEMEN",
    description:
      "We eliminate non-technical account managers who slow down communication. Your leadership collaborates directly with experienced AI engineers, software developers, and growth strategists who actually build your systems.",
    icon: Users2,
    benefits: [
      "Direct Slack/Discord access to senior engineers",
      "Rapid architectural decisions in hours, not days",
      "Senior architects with 10+ years experience",
    ],
  },
  {
    number: "04",
    title: "Strict Data Privacy & Compliance",
    leadTag: "DPDP ACT 2023 & GDPR",
    description:
      "Your data is your competitive advantage. We enforce zero-retention data policies and architect private environments fully compliant with India’s DPDP Act 2023, GDPR, and international security standards.",
    icon: ShieldCheck,
    benefits: [
      "Zero-data-retention AI inference pipelines",
      "Self-hosted VPC models & private clouds",
      "Full compliance with DPDP Act 2023 & GDPR",
    ],
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            OUR OPERATIONAL COMMITMENT
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18] mb-5">
            How We Work With Our Partners
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            We operate as an extension of your leadership team. These four principles dictate every technical decision, project contract, and code commit we make.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PARTNER_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-white/95 rounded-3xl p-8 sm:p-10 border border-neutral-200/90 hover:border-[#ff5e00]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(255,114,48,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Icon + Step Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff7230]/10 border border-[#ff7230]/20 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                    <pillar.icon className="w-5 h-5 text-current transition-colors duration-300" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-100 group-hover:bg-[#ff5e00]/10 group-hover:text-[#ff5e00] px-2.5 py-1 rounded-md transition-colors">
                      {pillar.leadTag}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-300 group-hover:text-[#ff7230] transition-colors">
                      {pillar.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#ff5e00] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Specific Bullet Proofs */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col gap-2.5">
                {pillar.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


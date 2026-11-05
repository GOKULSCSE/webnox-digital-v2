"use client";

import React from "react";
import { Layers, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ArchitectureTier {
  id: string;
  number: string;
  tierName: string;
  tag: string;
  whenToChoose: string;
  engineeringScope: string;
  costProfile: string;
}

const ARCHITECTURE_TIERS: ArchitectureTier[] = [
  {
    id: "tier-1",
    number: "01",
    tierName: "1. Prompt Engineering & Gateways",
    tag: "GATEWAY TIER",
    whenToChoose: "Basic text generation, drafting, and rapid interface prototyping",
    engineeringScope: "Context management, few-shot prompting, dynamic caching, and multi-provider fallback",
    costProfile: "Lowest compute overhead; execution speed depends on upstream API latency",
  },
  {
    id: "tier-2",
    number: "02",
    tierName: "2. Enterprise RAG Pipelines",
    tag: "MOST POPULAR",
    whenToChoose: "Querying dynamic internal company documents, manuals, and database records",
    engineeringScope: "Hybrid semantic and sparse keyword indexing, document chunking, and cross-encoder reranking",
    costProfile: "Moderate infrastructure costs; eliminates retraining while grounding answers in source records",
  },
  {
    id: "tier-3",
    number: "03",
    tierName: "3. Parameter-Efficient Fine-Tuning (PEFT / LoRA)",
    tag: "DOMAIN SPECIALIZATION",
    whenToChoose: "Adopting specialized internal terminology, structured JSON outputs, and specific brand voices",
    engineeringScope: "LoRA adapters, QLoRA 4-bit quantization, and domain-specific instruction datasets",
    costProfile: "Modest GPU cluster training costs; delivers high domain accuracy on lightweight models",
  },
  {
    id: "tier-4",
    number: "04",
    tierName: "4. Full Domain Pre-Training",
    tag: "SOVEREIGN FRONTIER",
    whenToChoose: "Highly proprietary industry ontologies (healthcare informatics, core banking, specialized legal)",
    engineeringScope: "Raw corpus tokenization, full-parameter weight updates, distributed multi-GPU training, and custom loss evaluation",
    costProfile: "High compute investment; yields completely independent sovereign models detached from external providers",
  },
];

export default function ArchitectureGuide() {
  return (
    <section id="architecture-guide" className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#ff5e00]/[0.035] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            DECISION MATRIX
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-4">
            Architecture Guide for Enterprise LLM Solutions in India
          </h3>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            When planning custom LLM development services in India, we evaluate your business requirements against our architecture ladder to balance accuracy, speed and total investment:
          </p>
        </div>

        {/* Desktop Table View (lg and up) */}
        <div className="hidden lg:block rounded-3xl border border-neutral-200/90 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/90 text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                <th className="py-5 px-6 w-[26%]">Architecture Tier</th>
                <th className="py-5 px-6 w-[26%]">When to Choose</th>
                <th className="py-5 px-6 w-[28%]">Engineering Scope</th>
                <th className="py-5 px-6 w-[20%]">Infrastructure &amp; Cost Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {ARCHITECTURE_TIERS.map((tier, idx) => (
                <tr key={tier.id} className="group hover:bg-orange-50/[0.15] transition-colors">
                  {/* Tier Name */}
                  <td className="py-6 px-6 align-top">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff7230] bg-[#ff7230]/10 px-2 py-0.5 rounded">
                        {tier.tag}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-neutral-900 group-hover:text-[#ff7230] transition-colors leading-snug">
                      {tier.tierName}
                    </h4>
                  </td>

                  {/* When to Choose */}
                  <td className="py-6 px-6 text-sm text-neutral-700 leading-relaxed align-top">
                    <p className="font-medium text-neutral-900 mb-1">Use Case:</p>
                    <p className="text-neutral-600 font-normal">{tier.whenToChoose}</p>
                  </td>

                  {/* Engineering Scope */}
                  <td className="py-6 px-6 text-xs sm:text-sm text-neutral-600 leading-relaxed align-top">
                    <p className="font-medium text-neutral-900 mb-1">Implementation:</p>
                    <p className="font-normal">{tier.engineeringScope}</p>
                  </td>

                  {/* Cost Profile */}
                  <td className="py-6 px-6 text-xs text-neutral-600 leading-relaxed align-top bg-neutral-50/40">
                    <span className="font-semibold text-neutral-900 block mb-1">Economics:</span>
                    <span>{tier.costProfile}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Card View (below lg) */}
        <div className="lg:hidden flex flex-col gap-6">
          {ARCHITECTURE_TIERS.map((tier) => (
            <div key={tier.id} className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff7230] bg-[#ff7230]/10 px-2 py-0.5 rounded">
                  {tier.tag}
                </span>
                <span className="font-mono text-xs font-bold text-neutral-400">
                  {tier.number}
                </span>
              </div>

              <h4 className="text-lg font-bold text-neutral-900">
                {tier.tierName}
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    When to Choose:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{tier.whenToChoose}</p>
                </div>

                <div>
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Engineering Scope:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{tier.engineeringScope}</p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Infrastructure &amp; Cost Profile:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{tier.costProfile}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";

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
    tierName: "1. Off-the-Shelf SaaS Chat Widget",
    tag: "BASIC WIDGET",
    whenToChoose: "Basic website FAQs and simple lead forms without backend database access.",
    engineeringScope: "No-code setup, static help-center scraping, standard live chat widget.",
    costProfile:
      "Low initial setup; high ongoing monthly per-seat or per-resolution subscription fees.",
  },
  {
    id: "tier-2",
    number: "02",
    tierName: "2. Custom RAG Knowledge Chatbot",
    tag: "GROUNDED RAG",
    whenToChoose:
      "Complex product catalogs, internal SOPs, multi-department permission levels, and cited answers.",
    engineeringScope:
      "Hybrid vector + BM25 search, automated ingestion pipelines, neural reranking, web chat interface.",
    costProfile:
      "Moderate one-time engineering; highly cost-effective per-query token spend via semantic caching.",
  },
  {
    id: "tier-3",
    number: "03",
    tierName: "3. Omnichannel WhatsApp & CRM Bot",
    tag: "MOST POPULAR",
    whenToChoose:
      "High-volume customer support on WhatsApp, automated order status lookups, CRM sync, and human handoff.",
    engineeringScope:
      "Official WhatsApp Cloud API, HMAC SHA-256 webhooks, Redis session state, Zoho/Salesforce connectors, guardrails.",
    costProfile:
      "Mid-tier engineering; scales smoothly with business growth without per-seat SaaS penalties.",
  },
  {
    id: "tier-4",
    number: "04",
    tierName: "4. Private VPC / Voice Enterprise Bot",
    tag: "SOVEREIGN ENTERPRISE",
    whenToChoose:
      "Strict DPDP Act/BFSI regulatory compliance, on-premise data residency, and multilingual voice self-service.",
    engineeringScope:
      "Self-hosted open weights via vLLM, speech-to-text / text-to-speech pipelines, localized VPC deployments, full auditing.",
    costProfile:
      "Higher upfront engineering and private GPU infrastructure; 100% data sovereignty and total operational control.",
  },
];

export default function ArchitectureGuide() {
  return (
    <section
      id="architecture-guide"
      className="relative w-full py-20 sm:py-28 bg-[#fcf8f2] text-neutral-900 border-t border-neutral-200/70 overflow-hidden"
    >
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-4">
            4-Tier AI Chatbot Architecture Guide: From Simple Widgets to Enterprise Bots
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            When planning AI chatbot development services in India, we help you pick the simplest architecture tier that balances your budget, data security and integration requirements:
          </p>
        </div>

        {/* Desktop Table View (lg and up) */}
        <div className="hidden lg:block rounded-3xl border border-neutral-200/90 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/90 text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                <th className="py-5 px-6 w-[24%]">Chatbot Architecture Tier</th>
                <th className="py-5 px-6 w-[25%]">When to Choose</th>
                <th className="py-5 px-6 w-[27%]">Engineering &amp; Integration Scope</th>
                <th className="py-5 px-6 w-[24%]">Cost &amp; Operating Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {ARCHITECTURE_TIERS.map((tier) => (
                <tr key={tier.id} className="group hover:bg-orange-50/[0.15] transition-colors">
                  <td className="py-6 px-6 align-top">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff7230] bg-[#ff7230]/10 px-2 py-0.5 rounded">
                        {tier.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#ff7230] transition-colors leading-snug">
                      {tier.tierName}
                    </h3>
                  </td>

                  <td className="py-6 px-6 text-sm text-neutral-700 leading-relaxed align-top">
                    <p className="text-neutral-600 font-normal">{tier.whenToChoose}</p>
                  </td>

                  <td className="py-6 px-6 text-xs sm:text-sm text-neutral-600 leading-relaxed align-top">
                    <p className="font-normal">{tier.engineeringScope}</p>
                  </td>

                  <td className="py-6 px-6 text-xs sm:text-sm text-neutral-600 leading-relaxed align-top bg-neutral-50/40">
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
            <div
              key={tier.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff7230] bg-[#ff7230]/10 px-2 py-0.5 rounded">
                  {tier.tag}
                </span>
                <span className="font-mono text-xs font-bold text-neutral-400">
                  {tier.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900">{tier.tierName}</h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    When to Choose:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{tier.whenToChoose}</p>
                </div>

                <div>
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Engineering &amp; Integration Scope:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{tier.engineeringScope}</p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Cost &amp; Operating Profile:
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

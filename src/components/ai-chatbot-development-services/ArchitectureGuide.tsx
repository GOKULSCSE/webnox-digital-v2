"use client";

import React from "react";

const ARCHITECTURE_TIERS = [
  {
    tier: "1. Off-the-Shelf SaaS Chat Widget",
    whenToChoose:
      "Simple website FAQ chat and basic contact capture without internal DB access",
    scope:
      "No-code SaaS setup, static help-center sync, basic live-chat transfer",
    costProfile:
      "Lowest setup cost; recurring per-seat or per-resolution vendor fees",
  },
  {
    tier: "2. Custom RAG Knowledge Chatbot",
    whenToChoose:
      "Complex manuals, frequent doc updates, multi-department permissions, citations",
    scope:
      "Hybrid vector + BM25 search, chunking pipelines, reranking, web chat UI",
    costProfile:
      "Moderate build cost; low predictable per-query token spend via caching",
  },
  {
    tier: "3. Omnichannel CRM & Action Chatbot",
    whenToChoose:
      "WhatsApp Business API, HubSpot/Salesforce sync, order lookups, human handoff",
    scope:
      "HMAC webhook verification, Redis state, MCP/REST tool calls, guardrails",
    costProfile:
      "Mid-tier engineering; scales cleanly without per-seat SaaS markups",
  },
  {
    tier: "4. Private VPC / Voice Enterprise Bot",
    whenToChoose:
      "Strict DPDP/GDPR residency, healthcare/finance workloads, multilingual voice",
    scope:
      "Self-hosted open weights (vLLM), STT/TTS voice pipelines, RBAC auditing",
    costProfile:
      "Higher initial engineering + GPU/VPC hosting; total infrastructure control",
  },
];

export default function ArchitectureGuide() {
  return (
    <section
      id="architecture"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Architecture Guide: Off-the-Shelf SaaS vs. Custom AI Chatbots
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            When scoping AI chatbot development services, we advise choosing the simplest architecture tier that satisfies your privacy, integration, and accuracy requirements (including when an off-the-shelf SaaS widget is the smarter choice):
          </p>
        </div>

        <div className="w-full overflow-x-auto rounded-[24px] border border-neutral-200/90 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[780px] text-left border-collapse">
            <thead>
              <tr
                className="text-white"
                style={{
                  background:
                    "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                }}
              >
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[23%]">
                  Chatbot Architecture Tier
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[26%]">
                  When to Choose
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[27%]">
                  Engineering &amp; Integration Scope
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[24%]">
                  Cost &amp; Operating Profile
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {ARCHITECTURE_TIERS.map((row) => (
                <tr
                  key={row.tier}
                  className="hover:bg-orange-50/30 transition-colors"
                >
                  <td className="py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] align-top">
                    {row.tier}
                  </td>
                  <td className="py-5 px-6 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.whenToChoose}
                  </td>
                  <td className="py-5 px-6 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.scope}
                  </td>
                  <td className="py-5 px-6 text-sm text-neutral-700 font-medium align-top leading-relaxed">
                    {row.costProfile}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


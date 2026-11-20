"use client";

import React from "react";

const COMPARISON_ROWS = [
  {
    factor: "Pricing Model",
    saas: "Expensive monthly per-user fee (30–50/user/mo).",
    chatbot: "Low-cost or open-source software tools.",
    custom: "Zero per-user fees; 100% owned software asset.",
  },
  {
    factor: "Core Capability",
    saas: "General text drafting and basic app commands.",
    chatbot: "Answers questions passively from text files.",
    custom: "Executes actions via API tool-calling & workflow automation.",
  },
  {
    factor: "Data Privacy",
    saas: "Multitenant vendor cloud infrastructure.",
    chatbot: "Varies by deployment model.",
    custom: "100% private deployment inside your cloud (AWS/Azure/GCP).",
  },
  {
    factor: "Custom Workflows",
    saas: "Rigid; cannot adapt to proprietary enterprise logic.",
    chatbot: "Limited to basic question-and-answer dialogs.",
    custom: "Fully tailored to your unique internal databases & ERP rules.",
  },
  {
    factor: "Code Ownership",
    saas: "Zero ownership; complete vendor lock-in.",
    chatbot: "Limited custom software ownership.",
    custom: "100% source code, model weights, and database ownership.",
  },
];

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Comparison: Off-the-Shelf SaaS Copilots vs. Basic Chatbots vs. Webnox Custom AI Copilots
          </h2>
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
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[20%]">
                  Comparison Factor
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[27%]">
                  Off-the-Shelf SaaS Copilots (e.g. Microsoft 365 Copilot)
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[25%]">
                  Basic Enterprise Chatbots
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[28%]">
                  Webnox Custom AI Copilots
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.factor}
                  className="hover:bg-orange-50/30 transition-colors"
                >
                  <td className="py-5 px-5 text-sm sm:text-base font-bold text-[#12141a] align-top">
                    {row.factor}
                  </td>
                  <td className="py-5 px-5 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.saas}
                  </td>
                  <td className="py-5 px-5 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.chatbot}
                  </td>
                  <td className="py-5 px-5 text-sm text-[#12141a] font-semibold align-top leading-relaxed bg-orange-50/35">
                    {row.custom}
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

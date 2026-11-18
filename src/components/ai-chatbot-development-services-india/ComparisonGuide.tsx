"use client";

import React from "react";

const COMPARISON_ROWS = [
  {
    aspect: "Conversation Handling",
    traditional: "Follows predefined conversation flows",
    aiPowered: "Understands natural language queries",
  },
  {
    aspect: "Response Generation",
    traditional: "Uses predefined responses",
    aiPowered: "Generates context-aware responses",
  },
  {
    aspect: "User Queries",
    traditional: "Handles specific programmed questions",
    aiPowered: "Handles a wider range of user questions",
  },
  {
    aspect: "Context Understanding",
    traditional: "Limited conversational context",
    aiPowered: "Can maintain context using suitable architecture",
  },
  {
    aspect: "Knowledge Retrieval",
    traditional: "Depends on predefined information",
    aiPowered: "Can retrieve information using RAG",
  },
  {
    aspect: "Integrations",
    traditional: "Supports configured integrations",
    aiPowered: "Can connect with APIs, databases and business tools",
  },
  {
    aspect: "Task Automation",
    traditional: "Handles predefined actions",
    aiPowered: "Can support multi-step tasks using AI agents and tools",
  },
  {
    aspect: "Scalability",
    traditional: "Requires additional rule configuration",
    aiPowered: "Can expand through suitable models and architecture",
  },
];

export default function ComparisonGuide() {
  return (
    <section
      id="comparison"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Comparing Traditional Chatbots and AI-Powered Chatbot Development Solutions
          </h3>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Businesses evaluating chatbot development solutions should understand the differences between rule-based chatbots and AI-powered conversational systems.
          </p>
        </div>

        <div className="w-full overflow-x-auto rounded-[24px] border border-neutral-200/90 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[680px] text-left border-collapse">
            <thead>
              <tr
                className="text-white"
                style={{
                  background:
                    "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                }}
              >
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[28%]">
                  Comparison
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[36%]">
                  Traditional Rule-Based Chatbots
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[36%]">
                  AI-Powered Chatbots
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.aspect}
                  className="hover:bg-orange-50/30 transition-colors"
                >
                  <td className="py-4 sm:py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] align-top">
                    {row.aspect}
                  </td>
                  <td className="py-4 sm:py-5 px-6 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.traditional}
                  </td>
                  <td className="py-4 sm:py-5 px-6 text-sm text-neutral-800 font-medium align-top leading-relaxed">
                    {row.aiPowered}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-2xl bg-white border border-orange-200/70 p-6 sm:p-7 shadow-sm">
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            <strong className="font-bold text-[#12141a]">Our approach: </strong>
            Webnox Digital develops custom AI chatbot solutions using the appropriate combination of rule-based workflows, NLP, LLMs, RAG and AI agents based on each project&apos;s requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

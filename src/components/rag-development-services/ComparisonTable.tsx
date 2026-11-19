"use client";

import React from "react";

const COMPARISON_ROWS = [
  {
    setup: "1. Basic RAG",
    howItWorks:
      "Takes basic document chunks and searches for matching words or topics.",
    searchMethod: "Standard similarity search (Pinecone / Chroma).",
    accuracySpeed:
      "Good for simple queries; can miss exact codes; very fast response.",
    bestFor:
      "Simple company FAQs and basic internal help-center search.",
  },
  {
    setup: "2. Advanced Hybrid RAG",
    howItWorks:
      "Combines semantic meaning with exact keyword matching, then filters out noise.",
    searchMethod:
      "Hybrid search (Vectors + BM25 keywords) + neural rerankers.",
    accuracySpeed:
      "High accuracy; finds exact part numbers; eliminates irrelevant text.",
    bestFor:
      "Enterprise customer support, complex product catalogs, and team knowledge bases.",
  },
  {
    setup: "3. Agentic & Graph RAG",
    howItWorks:
      "Smart AI agents break tough questions into multi-step search tasks across tools.",
    searchMethod: "Multi-agent search loops + Knowledge Graphs.",
    accuracySpeed:
      "Highest accuracy for complex, multi-page research; slightly slower speed.",
    bestFor:
      "Legal contract review, financial audits, medical research, and engineering analysis.",
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
            Architecture Comparison: Basic RAG vs. Advanced Hybrid RAG vs. Agentic RAG
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            To help you pick the right setup for your business and budget, here is a simple breakdown of how different RAG setups compare:
          </p>
        </div>

        <div className="w-full overflow-x-auto rounded-[24px] border border-neutral-200/90 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[820px] text-left border-collapse">
            <thead>
              <tr
                className="text-white"
                style={{
                  background:
                    "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                }}
              >
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[18%]">
                  Architecture Setup
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[22%]">
                  How It Works
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[20%]">
                  Search Method
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[20%]">
                  Accuracy &amp; Speed
                </th>
                <th className="py-4 sm:py-5 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider w-[20%]">
                  Best Suited For
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.setup}
                  className="hover:bg-orange-50/30 transition-colors"
                >
                  <td className="py-5 px-5 text-sm sm:text-base font-bold text-[#12141a] align-top">
                    {row.setup}
                  </td>
                  <td className="py-5 px-5 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.howItWorks}
                  </td>
                  <td className="py-5 px-5 text-sm text-neutral-700 font-medium align-top leading-relaxed">
                    {row.searchMethod}
                  </td>
                  <td className="py-5 px-5 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.accuracySpeed}
                  </td>
                  <td className="py-5 px-5 text-sm text-neutral-800 font-medium align-top leading-relaxed">
                    {row.bestFor}
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

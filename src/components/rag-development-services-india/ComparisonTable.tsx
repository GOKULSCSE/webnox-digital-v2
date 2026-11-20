"use client";

import React from "react";

const COMPARISON_ROWS = [
  {
    architecture: "Basic RAG",
    howItWorks:
      "Retrieves document sections relevant to a user query before generating a response.",
    searchMethod: "Vector similarity search",
    suitableApps: "FAQs and internal knowledge search",
  },
  {
    architecture: "Advanced Hybrid RAG",
    howItWorks:
      "Combines semantic retrieval with keyword matching and result ranking.",
    searchMethod: "Vector search, BM25 and reranking",
    suitableApps: "Product catalogues and enterprise knowledge bases",
  },
  {
    architecture: "Agentic & Graph RAG",
    howItWorks:
      "Coordinates multiple retrieval tasks and uses relationships between connected information.",
    searchMethod: "Multi-step retrieval and knowledge graphs",
    suitableApps:
      "Complex research, contract analysis and technical information search",
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
            RAG Architecture Comparison: Basic RAG vs. Advanced Hybrid RAG vs. Agentic RAG
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Different RAG architecture solutions support different business applications. Understanding these retrieval approaches helps identify the right architecture for your data and operational requirements.
          </p>
        </div>

        <div className="w-full overflow-x-auto rounded-[24px] border border-neutral-200/90 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[740px] text-left border-collapse">
            <thead>
              <tr
                className="text-white"
                style={{
                  background:
                    "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                }}
              >
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[22%]">
                  RAG Architecture
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[30%]">
                  How It Works
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[24%]">
                  Search Method
                </th>
                <th className="py-4 sm:py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider w-[24%]">
                  Suitable Applications
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.architecture}
                  className="hover:bg-orange-50/30 transition-colors"
                >
                  <td className="py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] align-top">
                    {row.architecture}
                  </td>
                  <td className="py-5 px-6 text-sm text-neutral-600 align-top leading-relaxed">
                    {row.howItWorks}
                  </td>
                  <td className="py-5 px-6 text-sm text-neutral-700 font-medium align-top leading-relaxed">
                    {row.searchMethod}
                  </td>
                  <td className="py-5 px-6 text-sm text-neutral-800 font-medium align-top leading-relaxed">
                    {row.suitableApps}
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

"use client";

import React from "react";

interface ComparisonRow {
  id: string;
  tag: string;
  model: string;
  focus: string;
  deliverables: string;
  bestFor: string;
  highlighted?: boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: "traditional",
    tag: "ADVISORY ONLY",
    model: "Traditional AI Management Consulting",
    focus: "Theoretical strategy, market analysis, and high-level slide decks.",
    deliverables: "Multi-month strategy decks, vendor matrices, executive roadmaps.",
    bestFor:
      "Large conglomerates wanting boardroom market research without immediate build requirements.",
  },
  {
    id: "freelancers",
    tag: "UNVERIFIED SCRIPTS",
    model: "Outsourced Dev Shops / Freelancers",
    focus: "Quick code snippets without architectural planning or governance.",
    deliverables: "Basic API wrapper scripts, standard demo widgets, unverified code.",
    bestFor:
      "Small experimental hobby projects with no data privacy or scalability needs.",
  },
  {
    id: "webnox",
    tag: "RECOMMENDED",
    model: "Webnox Digital: Strategic AI Engineering",
    focus:
      "End-to-end AI strategy consulting combined with production code, security, and integration.",
    deliverables:
      "Feasibility audit, working PoC sandbox, production deployment, and 100% IP code handover.",
    bestFor:
      "Growth-stage companies and enterprises demanding working software, strict data privacy, and proven ROI.",
    highlighted: true,
  },
];

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#ff5e00]/[0.035] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            ENGAGEMENT COMPARISON
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-4">
            Comparing AI Consulting Companies: Strategic Advisory vs. Technical Execution
          </h2>

          <p className="text-neutral-600 text-xs sm:text-base md:text-lg leading-relaxed font-normal">
            When evaluating artificial intelligence consulting companies, understanding the difference between high-level management advice and end-to-end engineering execution is critical:
          </p>
        </div>

        {/* Desktop Table View (lg and up) */}
        <div className="hidden lg:block rounded-3xl border border-neutral-200/90 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50/90 text-xs font-mono font-bold tracking-wider text-neutral-500 uppercase">
                <th className="py-5 px-6 w-[24%]">Engagement Model</th>
                <th className="py-5 px-6 w-[25%]">Typical Focus</th>
                <th className="py-5 px-6 w-[26%]">Deliverables</th>
                <th className="py-5 px-6 w-[25%]">Best Suited For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.id}
                  className={`group transition-colors ${
                    row.highlighted
                      ? "bg-orange-50/[0.35] hover:bg-orange-50/[0.5]"
                      : "hover:bg-neutral-50/60"
                  }`}
                >
                  <td className="py-6 px-6 align-top">
                    <span
                      className={`inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1.5 ${
                        row.highlighted
                          ? "bg-[#ff5e00] text-white"
                          : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      {row.tag}
                    </span>
                    <h3 className="text-base font-bold text-neutral-900 leading-snug">
                      {row.model}
                    </h3>
                  </td>

                  <td className="py-6 px-6 text-sm text-neutral-700 leading-relaxed align-top">
                    {row.focus}
                  </td>

                  <td className="py-6 px-6 text-sm text-neutral-700 leading-relaxed align-top">
                    {row.deliverables}
                  </td>

                  <td className="py-6 px-6 text-sm text-neutral-700 leading-relaxed align-top">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Card View (below lg) */}
        <div className="lg:hidden flex flex-col gap-5 sm:gap-6">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.id}
              className={`rounded-3xl p-5 sm:p-7 border shadow-sm flex flex-col gap-4 ${
                row.highlighted
                  ? "bg-orange-50/40 border-[#ff5e00]/40"
                  : "bg-white border-neutral-200"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200/70">
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded ${
                    row.highlighted
                      ? "bg-[#ff5e00] text-white"
                      : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {row.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900">{row.model}</h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Typical Focus:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{row.focus}</p>
                </div>

                <div>
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Deliverables:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{row.deliverables}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/80 border border-neutral-200/70 text-xs">
                  <span className="block font-bold uppercase tracking-wider text-neutral-900 text-[11px] mb-0.5">
                    Best Suited For:
                  </span>
                  <p className="text-neutral-600 leading-relaxed">{row.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ComparisonRow {
  criterion: string;
  aiIntegration: string;
  customAiModel: string;
  offTheShelfSaas: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: "Best Fit",
    aiIntegration: "Businesses using ERP, CRM, Tally and existing databases",
    customAiModel:
      "Businesses requiring custom-trained AI models or specialized AI applications",
    offTheShelfSaas: "Businesses needing ready-made tools for individual tasks",
  },
  {
    criterion: "Architecture",
    aiIntegration: "API middleware, LLM integration, RAG and AI agents",
    customAiModel:
      "Custom ML models, fine-tuning and dedicated AI infrastructure",
    offTheShelfSaas:
      "Preconfigured software with vendor-managed functionality",
  },
  {
    criterion: "Control and Flexibility",
    aiIntegration:
      "Integration with existing systems and configurable workflows",
    customAiModel: "Greater control over model development and deployment",
    offTheShelfSaas: "Limited customization and platform dependency",
  },
  {
    criterion: "Starting Point",
    aiIntegration: "Assess existing applications, APIs and data sources",
    customAiModel: "Define model requirements and prepare training datasets",
    offTheShelfSaas:
      "Select a suitable subscription and configure the platform",
  },
];

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Overview Header */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Enterprise AI Integration Services in India Without Rebuilding Core Software
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital provides AI integration services in India, helping businesses connect artificial intelligence with existing ERP, CRM, accounting software and enterprise applications. Instead of replacing core systems, we integrate LLMs, RAG pipelines, AI agents and APIs to improve data connectivity, automate workflows and extend existing software capabilities. With 15+ years of software engineering experience, 20+ internal products and clients across 20+ countries, we deliver AI integration solutions based on business and technical requirements.
          </p>
        </div>

        {/* Choosing the Right AI Solution */}
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#12141a]">
            Choosing the Right AI Solution for Your Business
          </h3>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Not every business requires a new AI model or another SaaS application. The right approach depends on your existing infrastructure, business objectives and integration requirements.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto rounded-[24px] border border-neutral-200/90 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <table className="w-full min-w-[760px] text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200/90">
                <th className="py-5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-500 bg-neutral-50/80 w-[18%]">
                  Decision Criterion
                </th>
                <th
                  className="py-5 px-6 text-sm sm:text-base font-bold text-white w-[28%]"
                  style={{
                    background:
                      "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                    AI Integration Services
                  </span>
                </th>
                <th className="py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] bg-neutral-50/80 w-[27%]">
                  Custom AI Model Development
                </th>
                <th className="py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] bg-neutral-50/80 w-[27%]">
                  Off-the-Shelf SaaS
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/80">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.criterion}
                  className="hover:bg-orange-50/20 transition-colors"
                >
                  <td className="py-5 px-6 text-sm sm:text-base font-bold text-[#12141a] align-top bg-neutral-50/40">
                    {row.criterion}
                  </td>
                  <td className="py-5 px-6 text-sm sm:text-base text-neutral-800 font-medium align-top bg-orange-50/35 border-x border-orange-200/50">
                    {row.aiIntegration}
                  </td>
                  <td className="py-5 px-6 text-sm sm:text-base text-neutral-600 align-top">
                    {row.customAiModel}
                  </td>
                  <td className="py-5 px-6 text-sm sm:text-base text-neutral-600 align-top">
                    {row.offTheShelfSaas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Contextual Callout & Internal Link */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-[#fcf8f2] border border-neutral-200/80 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              As an AI integration company in India, Webnox Digital helps businesses identify the right integration approach based on their existing software, technical requirements and operational goals.
            </p>
            <p className="text-sm sm:text-base font-medium text-[#12141a]">
              Looking for custom AI development or broader enterprise AI solutions?{" "}
              <Link
                href="/ai-native-company-in-india"
                className="inline-flex items-center gap-1 text-[#FF532B] hover:text-[#FF7230] font-bold underline underline-offset-4 transition-colors"
              >
                <span>Explore our AI-Native Solutions</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


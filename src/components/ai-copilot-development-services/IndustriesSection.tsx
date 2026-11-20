"use client";

import React from "react";
import {
  TrendingUp,
  Headphones,
  Code2,
  Package,
  HeartPulse,
  Scale,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "1. Sales & CRM AI Copilots",
    description:
      "Our sales AI copilot development updates CRM deals, drafts personalized email proposals, and helps close enterprise sales faster.",
    useCases:
      "Automated CRM updates, custom sales proposal drafting, instant lead qualification.",
    icon: <TrendingUp className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Customer Support & Service Copilots",
    description:
      "Our customer support AI copilot resolves tickets instantly, checks product stock, processes refunds and assists live agents smoothly.",
    useCases:
      "Tier-1 ticket resolution, automated refund processing, live agent reply help.",
    icon: <Headphones className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. Software Engineering & Code Copilots",
    description:
      "Our software engineering AI copilot writes clean code, reviews pull requests, generates test cases and explains legacy software.",
    useCases:
      "Internal codebase search, automatic test creation, legacy code explanations.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. ERP & Operational Logistics Copilots",
    description:
      "Our ERP AI copilot solutions check warehouse inventory, track supplier shipments, create purchase orders and simplify logistics workflows.",
    useCases:
      "Low stock alerts, purchase order drafting, shipment delivery tracking.",
    icon: <Package className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Healthcare & Clinical Workflow Copilots",
    description:
      "Our healthcare AI copilot development summarizes patient medical records, checks clinical guidelines and drafts doctor visit notes securely.",
    useCases:
      "Patient history summaries, clinical guideline lookup, visit note drafting.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. Legal, Compliance & Contract Copilots",
    description:
      "Our legal AI copilot solutions review commercial contracts, find missing clauses, and search statutory case precedents with accuracy.",
    useCases:
      "Contract clause checks, legal compliance reviews, case law discovery.",
    icon: <Scale className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Custom Domain Copilots{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Tailored to Your Industry
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                  {industry.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-5">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF7230] mb-1">
                  Top Use Cases:
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {industry.useCases}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

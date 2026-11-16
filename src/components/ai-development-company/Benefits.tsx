"use client";

import React from "react";
import {
  ShieldCheck,
  Cpu,
  Zap,
  Database,
  Sparkles,
  Layers,
} from "lucide-react";

interface BenefitItem {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BENEFITS: BenefitItem[] = [
  {
    number: "01",
    title: "Business-Specific Solutions",
    description:
      "Develop AI software around your business processes, workflows, data, users, and operational requirements.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "02",
    title: "Existing System Integration",
    description:
      "Connect AI applications with websites, SaaS platforms, APIs, databases, CRMs, ERPs, and internal business systems.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "03",
    title: "Intelligent Automation",
    description:
      "Use AI automation to handle repetitive tasks, process information, support multi-step workflows, and reduce manual effort.",
    icon: <Zap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "04",
    title: "Better Data Utilisation",
    description:
      "Connect AI solutions with business data, documents, databases, and knowledge bases to retrieve, analyse, summarise, and use relevant information.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "05",
    title: "Enhanced User Experiences",
    description:
      "Add AI assistants, conversational interfaces, recommendations, personalised experiences, and intelligent features to digital products.",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "06",
    title: "Scalable AI Capabilities",
    description:
      "Extend AI software with new models, integrations, workflows, features, and capabilities as business requirements and technology evolve.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            <span className="text-xs font-semibold text-[#ff5e00] tracking-wide uppercase">
              Business Value
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Benefits of AI Development Services for Smarter Business Operations
          </h2>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-[#FF7230]/10 transition-colors shadow-inner">
                    {benefit.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-[#FF7230] transition-colors">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                  {benefit.title}
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-400 group-hover:text-[#FF7230] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-60 group-hover:opacity-100" />
                <span>Enterprise Production Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

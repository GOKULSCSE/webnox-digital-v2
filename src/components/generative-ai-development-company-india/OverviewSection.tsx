"use client";

import React from "react";
import {
  Target,
  Cpu,
  Database,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const APPROACH_ITEMS = [
  {
    title: "Business Focused AI Development",
    description:
      "Identify practical use cases where Generative AI can improve products, workflows and business operations.",
    icon: <Target className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Custom AI Architecture",
    description:
      "Select suitable models, RAG pipelines, databases and orchestration frameworks based on technical requirements.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Enterprise Data Integration",
    description:
      "Connect AI applications with internal documents, databases, APIs and business software.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Security and Access Management",
    description:
      "Implement appropriate authentication, access controls, data protection and deployment practices.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Production Ready Engineering",
    description:
      "Consider application performance, evaluation, scalability, infrastructure and ongoing maintenance.",
    icon: <Gauge className="w-5 h-5 text-[#FF7230]" />,
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
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Your Enterprise Generative AI Partner in India
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Generative AI is changing how businesses develop software, manage information and interact with customers. However, turning foundation models into reliable business applications requires more than connecting an API. It requires strong software engineering, appropriate data architecture, secure integrations and continuous evaluation.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital brings 15+ years of technology experience, 2,570+ clients, 20+ proprietary products and experience across 20+ countries to Generative AI development.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We combine our software engineering capabilities with modern AI technologies to develop applications that connect foundation models with enterprise data, business systems and digital products.
          </p>
          <p className="mt-6 text-[#12141a] font-bold text-base sm:text-lg">
            Our development approach focuses on:
          </p>
        </div>

        {/* 5 Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[24px] p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 sm:mt-12 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
          Whether you are a startup developing an AI-powered product or an enterprise introducing AI into existing operations, we help transform your requirements into functional Generative AI applications.
        </p>
      </div>
    </section>
  );
}


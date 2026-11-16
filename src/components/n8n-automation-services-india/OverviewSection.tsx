"use client";

import React from "react";
import {
  Plug,
  Workflow,
  Brain,
  Server,
  Activity,
} from "lucide-react";

const N8N_ADVANTAGES = [
  {
    title: "Flexible Application Integrations",
    description:
      "Connect CRM, ERP, accounting platforms and third-party applications using APIs, webhooks and available integrations.",
    icon: <Plug className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Custom Workflow Development",
    description:
      "Automate business processes through conditional logic, data transformation and multi-step workflow execution.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "AI-Powered Automation",
    description:
      "Integrate large language models and AI agents into business processes to support information processing and task execution.",
    icon: <Brain className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Self-Hosted Infrastructure",
    description:
      "Deploy n8n on cloud or on-premises infrastructure based on security, scalability and operational requirements.",
    icon: <Server className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Workflow Monitoring",
    description:
      "Monitor execution history, identify errors and manage automated processes through structured error-handling mechanisms.",
    icon: <Activity className="w-5 h-5 text-[#FF7230]" />,
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
            Business Workflow Automation Services Using n8n in India
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Managing business operations across multiple applications often involves manual data entry, repetitive administrative tasks and disconnected systems. Webnox Digital provides n8n workflow automation services in India to help businesses connect their existing applications, automate operational processes and improve information exchange.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our n8n automation solutions support startups, growing businesses and enterprises that require custom integrations, AI-powered workflows and greater control over their automation infrastructure.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            With 15+ years of software engineering experience, 20+ internal products and clients across 20+ countries, we develop automation solutions based on business requirements, existing technology and operational needs.
          </p>
        </div>

        {/* H3 Why Choose n8n */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#12141a]">
            Why Choose n8n for Business Automation?
          </h3>
        </div>

        {/* 5 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {N8N_ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[24px] p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


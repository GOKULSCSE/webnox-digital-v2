"use client";

import React from "react";
import {
  Cpu,
  Users,
  Code2,
  Compass,
  Layers,
  Globe2,
} from "lucide-react";

const WHY_CHOOSE_ITEMS = [
  {
    title: "Software Engineering Experience",
    description:
      "With 15+ years of software engineering experience, Webnox Digital brings application development and integration knowledge to custom automation projects.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Direct Access to Integration Engineers",
    description:
      "Work directly with engineers experienced in REST APIs, webhooks, JavaScript, Python, databases and application connectivity throughout the development process.",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Custom Workflows and Code Ownership",
    description:
      "Receive project-specific workflow JSON exports, custom integration code and technical documentation to support future maintenance and internal management.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Practical Automation Architecture",
    description:
      "We recommend workflow logic and integration methods based on actual business requirements rather than introducing unnecessary complexity or AI components.",
    icon: <Compass className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Support Across Business Applications",
    description:
      "From CRM and ERP integrations to WhatsApp Business API, accounting platforms and cloud infrastructure, our team connects the applications used across different business functions.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Experience Across Multiple Markets",
    description:
      "With clients across 20+ countries and experience developing 20+ internal products, Webnox Digital supports businesses with varied application and automation requirements.",
    icon: <Globe2 className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Why Choose Webnox Digital for n8n Automation Services?
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Choosing an automation company involves more than connecting applications. Businesses need an engineering team that understands API integration, workflow logic, infrastructure and the systems already used across their operations.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-[24px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                {item.title}
              </h3>
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


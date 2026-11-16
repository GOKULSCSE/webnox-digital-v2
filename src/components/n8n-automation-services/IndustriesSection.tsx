"use client";

import React from "react";
import {
  HeartPulse,
  Factory,
  ShoppingBag,
  Landmark,
  Code2,
  GraduationCap,
  Building2,
  Megaphone,
} from "lucide-react";

const INDUSTRIES = [
  {
    name: "Healthcare",
    description:
      "Automate appointment notifications, patient enquiry management and administrative workflows.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "Manufacturing",
    description:
      "Connect inventory systems, production updates, purchase orders and supplier notifications.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "E-commerce and Retail",
    description:
      "Automate order processing, customer notifications, inventory updates and payment workflows.",
    icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "Finance and Accounting",
    description:
      "Streamline invoice processing, payment reminders, financial data updates and approval workflows.",
    icon: <Landmark className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "IT and SaaS",
    description:
      "Connect applications, automate support tickets, synchronize databases and manage API-based workflows.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "Education",
    description:
      "Automate student enquiries, admission notifications, registration processes and communication workflows.",
    icon: <GraduationCap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "Real Estate",
    description:
      "Automate lead assignments, property enquiry notifications, follow-ups and CRM updates.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    name: "Marketing and Sales",
    description:
      "Connect CRM platforms, automate lead capture, campaign reporting and customer follow-ups.",
    icon: <Megaphone className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            n8n Workflow Automation Services Across Industries
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our n8n automation services help businesses across industries automate repetitive tasks, connect business applications and improve operational workflows.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-[22px] p-6 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141a] mb-2">
                {industry.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Webnox Digital develops custom n8n workflow automation solutions that connect industry-specific applications and simplify everyday business processes.
        </p>
      </div>
    </section>
  );
}

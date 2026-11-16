"use client";

import React from "react";
import {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingBag,
  Truck,
  GraduationCap,
  Code2,
  CheckCircle2,
} from "lucide-react";

const INDUSTRIES = [
  {
    name: "Banking, Financial Services and Insurance (BFSI)",
    description:
      "Our Generative AI solutions for BFSI simplify financial document processing, information retrieval and customer support.",
    icon: <Landmark className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "Financial document processing",
      "KYC information extraction",
      "Compliance knowledge assistants",
      "Financial report summarisation",
      "Customer support automation",
    ],
  },
  {
    name: "Healthcare and Life Sciences",
    description:
      "Our Generative AI solutions for healthcare support medical documentation, information management and administrative workflows.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "Medical document processing",
      "Healthcare knowledge assistants",
      "Clinical documentation support",
      "Medical research retrieval",
      "Administrative automation",
    ],
  },
  {
    name: "Manufacturing and Industrial Operations",
    description:
      "Our Generative AI solutions for manufacturing help teams access technical information and manage operational workflows.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "Equipment maintenance assistants",
      "Technical manual search",
      "Production knowledge management",
      "Quality document processing",
      "Operational support applications",
    ],
  },
  {
    name: "Retail and E-commerce",
    description:
      "Our Generative AI solutions for retail improve product discovery, customer interactions and product information management.",
    icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "Conversational shopping assistants",
      "Product content generation",
      "Personalised recommendations",
      "Customer service chatbots",
      "Product information management",
    ],
  },
  {
    name: "Logistics and Supply Chain",
    description:
      "Our Generative AI solutions for logistics simplify document handling, shipment information retrieval and supply chain communication.",
    icon: <Truck className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "Logistics document processing",
      "Shipment information assistants",
      "Procurement document analysis",
      "Operations knowledge assistants",
      "Automated business communication",
    ],
  },
  {
    name: "Education and E-Learning",
    description:
      "Our Generative AI solutions for education support personalised learning, content creation and student assistance.",
    icon: <GraduationCap className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "AI-powered learning assistants",
      "Personalised tutoring applications",
      "Educational content generation",
      "Knowledge-based search",
      "Student support chatbots",
    ],
  },
  {
    name: "IT, SaaS and Technology",
    description:
      "Our Generative AI solutions for IT and SaaS help businesses add AI features to software products and improve development workflows.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
    useCases: [
      "AI-powered SaaS products",
      "Enterprise software copilots",
      "Intelligent application search",
      "Developer assistants",
      "Technical support automation",
    ],
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
            Generative AI Solutions Across Industries in India
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital develops industry-specific Generative AI solutions to help businesses automate tasks, manage information and improve customer experiences.
          </p>
        </div>

        {/* 7 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-[24px] p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                  {industry.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                  {industry.name}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-2.5">
                  Use Cases:
                </span>
                <ul className="space-y-2">
                  {industry.useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7230] flex-shrink-0 mt-0.5" />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


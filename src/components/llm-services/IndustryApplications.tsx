"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  Scale,
  CheckCircle2,
} from "lucide-react";

interface IndustrySector {
  id: number;
  number: string;
  title: string;
  sectorTag: string;
  description: string;
  topUseCases: string;
  icon: React.ComponentType<{ className?: string }>;
}

const LLM_INDUSTRIES: IndustrySector[] = [
  {
    id: 1,
    number: "01",
    title: "1. Healthcare & Life Sciences",
    sectorTag: "HEALTHCARE",
    description:
      "Secure, private AI assistants that search medical records, summarize doctor notes and answer patient inquiries 24/7 keeping sensitive health records strictly confidential and protected from public leaks.",
    topUseCases:
      "Clinical note summarization, patient inquiry triage and internal medical document search.",
    icon: HeartPulse,
  },
  {
    id: 2,
    number: "02",
    title: "2. Banking, Finance & Insurance",
    sectorTag: "FINTECH & BFSI",
    description:
      "Intelligent AI systems that speed up loan reviews, answer policy questions instantly and search complex financial regulations across thousands of documents without human error.",
    topUseCases:
      "Policy & claims inquiry automation, financial report analysis and regulatory compliance checks.",
    icon: Landmark,
  },
  {
    id: 3,
    number: "03",
    title: "3. Retail & E-Commerce",
    sectorTag: "E-COMMERCE",
    description:
      "Smart conversational shopping assistants that guide customers to the right products, resolve order and refund questions instantly and deliver personalized shopping experiences that drive sales.",
    topUseCases:
      "24/7 conversational customer care, smart product recommendations, and automated return processing.",
    icon: ShoppingCart,
  },
  {
    id: 4,
    number: "04",
    title: "4. Manufacturing & Operations",
    sectorTag: "MANUFACTURING",
    description:
      "AI tools that allow technicians to search thick machinery manuals in seconds, monitor inventory levels, and automate vendor follow-up emails to keep factory production moving smoothly.",
    topUseCases:
      "Equipment troubleshooting search, procurement follow-ups and inventory status assistants.",
    icon: Factory,
  },
  {
    id: 5,
    number: "05",
    title: "5. Logistics & Supply Chain",
    sectorTag: "SUPPLY CHAIN",
    description:
      "Automated AI workflows that track shipments, answer delivery inquiries in real time, and coordinate supplier communications to eliminate costly operational delays.",
    topUseCases:
      "Real-time delivery status bots, vendor communication triage and freight document parsing.",
    icon: Truck,
  },
  {
    id: 6,
    number: "06",
    title: "6. Legal & Professional Services",
    sectorTag: "LEGAL",
    description:
      "AI assistants that analyze contracts, summarize lengthy legal filings in seconds and search internal case databases accurately saving your team hundreds of manual research hours.",
    topUseCases:
      "Contract review assistance, legal document summarization and internal knowledge search.",
    icon: Scale,
  },
];

export default function IndustryApplications() {
  return (
    <section id="industries" className="relative w-full py-20 sm:py-28 bg-[#100602] text-white overflow-hidden selection:bg-[#ff5e00] selection:text-white">
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #200d04 0%, #110602 60%, #0a0301 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute left-[-10%] top-[40%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.12) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            VERTICAL DEPLOYMENTS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Industries We Serve with Custom LLM Solutions in India
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Every industry has unique compliance boundaries, terminology, and operational workflows. We build models fine-tuned to your vertical.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {LLM_INDUSTRIES.map((industry) => (
            <div
              key={industry.id}
              className="group relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-3xl p-8 border border-white/10 hover:border-[#ff7230]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
            >
              <div>
                {/* Top Row: Icon + Sector Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                    <industry.icon className="w-5 h-5 text-current transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff8935] bg-[#ff5e00]/15 border border-[#ff5e00]/25 px-2.5 py-1 rounded-md">
                      {industry.sectorTag}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {industry.number}
                    </span>
                  </div>
                </div>

                {/* H3 Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff8935] transition-colors mb-3 leading-snug">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  {industry.description}
                </p>
              </div>

              {/* Top Use Cases Card */}
              <div className="pt-5 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff8935] font-semibold block mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Top Use Cases:
                  </span>
                  <p className="text-xs text-neutral-200 font-light leading-relaxed">
                    {industry.topUseCases}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

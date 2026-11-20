"use client";

import React from "react";
import {
  Landmark,
  HeartPulse,
  Factory,
  Code2,
  ShoppingBag,
  Scale,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "01. Banking, FinTech and Insurance RAG Solutions",
    description:
      "Retrieve financial policies, loan documents, compliance records and insurance guidelines.",
    useCases:
      "Loan policy search, insurance document retrieval and financial knowledge assistants.",
    icon: <Landmark className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Healthcare, Diagnostics and Pharma RAG Solutions",
    description:
      "Simplify access to healthcare documents, research material and operational guidelines.",
    useCases:
      "Medical research search, hospital policy retrieval and pharmaceutical documentation.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Manufacturing and Industrial RAG Solutions",
    description:
      "Connect AI applications with technical manuals, machine records and maintenance documents.",
    useCases:
      "Machine troubleshooting, spare-part search and maintenance documentation.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. IT Services and Software Development RAG Solutions",
    description:
      "Retrieve information from technical documents, code repositories and project records.",
    useCases:
      "Technical documentation search, developer assistance and employee onboarding.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. E-Commerce and Retail RAG Solutions",
    description:
      "Improve access to product catalogues, customer support resources and order information.",
    useCases:
      "Product search, order support and return policy assistance.",
    icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Legal and Professional Services RAG Solutions",
    description:
      "Simplify retrieval of contracts, agreements, case documents and regulatory information.",
    useCases:
      "Contract clause search, legal document retrieval and compliance research.",
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
            Industry Specific RAG Solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              in India
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Our industry specific RAG solutions in India help businesses retrieve information from specialised documents, databases and internal knowledge sources.
          </p>
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
                  Use Cases:
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

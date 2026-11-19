"use client";

import React from "react";
import {
  HeartPulse,
  Scale,
  Landmark,
  Factory,
  ShoppingBag,
  Code2,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "1. Healthcare & Life Sciences",
    description:
      "Our healthcare RAG solutions search medical research and hospital guidelines, delivering instant, private answers with exact page proof.",
    useCases:
      "Hospital policy search, medical research lookup, patient record summaries.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Legal & Professional Services",
    description:
      "Our legal RAG solutions scan complex contracts and agreements, finding clause conflicts and answering questions with exact proof.",
    useCases:
      "Contract clause review, legal compliance checks, past case discovery.",
    icon: <Scale className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. Banking, FinTech & Insurance (BFSI)",
    description:
      "Our financial RAG solutions review loan rules, policies and claims, speeding up risk checks while keeping data private.",
    useCases:
      "Loan policy lookup, insurance claim review, annual report analysis.",
    icon: <Landmark className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Manufacturing & Industrial Engineering",
    description:
      "Our manufacturing RAG solutions turn machinery blueprints and maintenance manuals into instant mobile search tools for factory technicians.",
    useCases:
      "Machine troubleshooting, spare-part catalog search, repair log lookup.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. E-Commerce & Retail Brands",
    description:
      "Our retail RAG solutions connect directly to product catalogs, giving shoppers instant stock details, sizing advice and updates.",
    useCases:
      "Product catalog search, package delivery tracking, automated return help.",
    icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. SaaS & Software Companies",
    description:
      "Our SaaS RAG solutions build smart in-app search copilots, letting users search complex product guides without raising tickets.",
    useCases:
      "In app product assistant, technical guide search, new user onboarding.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
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
            Industries We Empower with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Custom RAG Solutions
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

"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  Code2,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "1. Healthcare & Life Sciences",
    description:
      "A healthcare AI chatbot automates appointment booking, pre-visit prep questions, and patient FAQ support around the clock. Our patient support chatbot also helps staff search clinical policies while keeping sensitive health data inside private cloud infrastructure.",
    useCases:
      "Appointment booking triage, patient FAQ chatbot, internal clinical policy search.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Banking, Finance & Insurance",
    description:
      "Our banking and financial AI chatbot helps customers review loan terms, check policy clauses with citations, and submit claim details cleanly. Every AI customer support chatbot includes strict access controls and human review before regulated approvals.",
    useCases:
      "Policy and claims chat, KYC checklist bot, underwriting manual lookup.",
    icon: <Landmark className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. Retail & E-Commerce",
    description:
      "An ecommerce AI chatbot paired with a WhatsApp AI chatbot connects directly to your live catalog and order database. Shoppers get instant sizing help, tailored product picks, live delivery updates, and smooth return requests anytime.",
    useCases:
      "WhatsApp order tracking, product recommendation chat, automated return triage.",
    icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Manufacturing & Operations",
    description:
      "An AI chatbot for manufacturing turns dense machinery manuals and supplier portals into instant mobile answers. Service technicians troubleshoot equipment on the floor while buyers check spare parts and dealer requests via a private RAG chatbot.",
    useCases:
      "Equipment troubleshooting bot, spare-part stock check, dealer inquiry routing.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Logistics & Supply Chain",
    description:
      "A logistics AI chatbot connects straight to your dispatch and shipment tracking APIs to share accurate delivery ETAs. Teams can verify freight document checklists automatically and escalate urgent route exceptions directly to live operations coordinators.",
    useCases:
      "Real-time shipment chat, freight checklist bot, vendor dispatch updates.",
    icon: <Truck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. SaaS, EdTech & Professional Services",
    description:
      "A SaaS AI chatbot guides new users through product onboarding and helps articles inside your web app. Meanwhile, an AI sales and lead qualification chatbot screens consulting or course inquiries and books qualified discovery calls automatically.",
    useCases:
      "SaaS onboarding chatbot, AI lead qualification, course handbook Q&A.",
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
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Industries We Serve with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Custom AI Chatbots
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7230] block mb-1">
                  Top Use Cases:
                </span>
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


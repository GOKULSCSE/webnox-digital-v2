"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  Database,
  Bot,
  Network,
  Compass,
  ArrowRight,
  CheckCircle2,
  Check,
  Target,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  whatYouReceive: string;
  bestFor: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "fine-tuning",
    number: "01",
    title: "1. LLM Fine-Tuning Services",
    tag: "DOMAIN SPECIALIZATION",
    description:
      "We train custom AI models to speak your specific industry language, understand your products and follow your company rules. Instead of sounding like a generic public chatbot, your AI is taught using your own approved business guidelines so it responds with the exact tone, terminology and accuracy your brand demands.",
    whatYouReceive: "A dedicated, custom-trained AI model configured exclusively for your business.",
    bestFor: "Companies needing an AI that understands specialized technical, legal, medical or brand specific language without making mistakes.",
    icon: Sliders,
    deliverables: ["LoRA / QLoRA 4-bit adapters", "Brand voice alignment", "Zero hallucinations"],
  },
  {
    id: "enterprise-rag",
    number: "02",
    title: "2. Enterprise RAG Development Services",
    tag: "PRIVATE KNOWLEDGE SEARCH",
    description:
      "Through our enterprise RAG development services, we connect smart AI directly to your company’s private files, manuals, PDFs and databases. Instead of your employees spending hours searching through messy folders, they can simply ask questions and get instant, accurate answers with direct links to the exact source document.",
    whatYouReceive: "A private, secure question answering search system connected to your business documents.",
    bestFor: "Internal staff knowledge search, fast customer support resolution and document compliance checks.",
    icon: Database,
    deliverables: ["Hybrid dense & sparse search", "Direct source citations", "Live database sync"],
  },
  {
    id: "autonomous-agents",
    number: "03",
    title: "3. Autonomous AI Agent Development",
    tag: "DIGITAL WORKERS",
    description:
      "We build digital AI assistants that don’t just chat, they actually complete real work. These smart agents can read customer requests, look up records, update your software, send notifications and handle multi-step office workflows, pausing to ask for human approval whenever necessary.",
    whatYouReceive: "Automated digital workers that handle repetitive administrative workflows from start to finish.",
    bestFor: "Automating customer inquiries, processing service tickets and qualifying incoming sales leads.",
    icon: Bot,
    deliverables: ["Multi-step action executors", "Human-in-the-loop pauses", "24/7 automated triage"],
  },
  {
    id: "llm-integration",
    number: "04",
    title: "4. Enterprise LLM Integration Services",
    tag: "SYSTEM CONNECTIVITY",
    description:
      "You don’t need to replace the software your team already uses. Through our llm integration services, we connect custom AI directly into your existing business tools including CRM software, billing systems, databases and customer portals so your team can use AI right inside their daily dashboards.",
    whatYouReceive: "Clean, secure connections that add AI intelligence directly into your current business software.",
    bestFor: "Upgrading existing software with smart AI features without disrupting your current operations.",
    icon: Network,
    deliverables: ["Native CRM & ERP connectors", "Zero workflow disruption", "Real-time dashboard copilots"],
  },
  {
    id: "llm-consulting",
    number: "05",
    title: "5. LLM Consulting Services & Strategy",
    tag: "ROADMAP & ADVISORY",
    description:
      "Before writing any code, we help you identify where AI will create real financial value and where it is a waste of money. Our llm consulting services include reviewing your business files, calculating expected time and cost savings and choosing the safest, most affordable AI approach for your budget.",
    whatYouReceive: "A clear project blueprint, realistic budget and timeline estimates and an objective technology roadmap.",
    bestFor: "Business owners and leaders who want a clear, risk-free plan before spending money on AI development.",
    icon: Compass,
    deliverables: ["Feasibility & ROI report", "Fixed-scope technology blueprint", "Budget & risk mitigation"],
  },
];

export default function ServicesRange() {
  return (
    <section
      id="services"
      className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 scroll-mt-28 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#ff5e00]/[0.035] rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with generous top buffer to avoid notch overlap */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            CUSTOM LLM CAPABILITIES
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-4">
            Custom LLM Development Services in India Built for Your Business
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Our team delivers comprehensive Custom LLM Development Services tailored to enterprise infrastructure:
          </p>
        </div>

        {/* Balanced Bento Layout: Row 1 has 3 Cards, Row 2 has 2 Spacious 50% Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7 sm:gap-8">
          {/* Row 1: Cards 1, 2, 3 (span 4 each on desktop) */}
          {SERVICES_LIST.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="lg:col-span-4 group relative bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/90 hover:border-[#ff5e00]/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,114,48,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Number + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff7230]/10 border border-[#ff7230]/20 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                    <service.icon className="w-5 h-5 text-current transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-100 group-hover:bg-[#ff5e00]/10 group-hover:text-[#ff5e00] px-2.5 py-1 rounded-md transition-colors">
                      {service.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* H3 Heading */}
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#ff5e00] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Paragraph */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Micro Deliverables Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10.5px] font-mono text-neutral-600 bg-neutral-50 border border-neutral-200/70 px-2 py-0.5 rounded-md"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* H4 Sub-Sections: What You Receive & Best For */}
              <div className="pt-5 border-t border-neutral-100 flex flex-col gap-3.5">
                <div className="p-3.5 rounded-2xl bg-neutral-50/90 border border-neutral-200/70">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    What You Receive:
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    {service.whatYouReceive}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#ff5e00]/[0.05] to-transparent border border-[#ff5e00]/20">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#ff5e00] mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                    Best For:
                  </h4>
                  <p className="text-xs text-neutral-800 leading-relaxed font-normal">
                    {service.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Row 2: Cards 4 and 5 (span 6 each on desktop for horizontal balance) */}
          {SERVICES_LIST.slice(3, 5).map((service) => (
            <div
              key={service.id}
              className="md:col-span-1 lg:col-span-6 group relative bg-white rounded-3xl p-7 sm:p-9 border border-neutral-200/90 hover:border-[#ff5e00]/50 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,114,48,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Number + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff7230]/10 border border-[#ff7230]/20 flex items-center justify-center text-[#ff7230] group-hover:bg-[#ff7230] group-hover:text-white transition-all duration-300 shadow-sm">
                    <service.icon className="w-5 h-5 text-current transition-colors" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-neutral-500 bg-neutral-100 group-hover:bg-[#ff5e00]/10 group-hover:text-[#ff5e00] px-2.5 py-1 rounded-md transition-colors">
                      {service.tag}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* H3 Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#ff5e00] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Paragraph */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Micro Deliverables Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10.5px] font-mono text-neutral-600 bg-neutral-50 border border-neutral-200/70 px-2 py-0.5 rounded-md"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Side-by-Side Sub-Cards on wide row for generous spacing */}
              <div className="pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-neutral-50/90 border border-neutral-200/70 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      What You Receive:
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {service.whatYouReceive}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#ff5e00]/[0.05] to-transparent border border-[#ff5e00]/20 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#ff5e00] mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                      Best For:
                    </h4>
                    <p className="text-xs text-neutral-800 leading-relaxed font-normal">
                      {service.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 shadow-xl">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff8935] font-semibold block mb-1">
              FIXED-SCOPE POC ROADMAP
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Not sure which LLM architecture fits your company data?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 max-w-2xl leading-relaxed">
              We evaluate your business files, data privacy requirements, and server budget to recommend the most cost-effective architecture in 48 hours.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] text-white font-medium text-xs sm:text-sm hover:brightness-110 transition-all shadow-[0_4px_24px_rgba(255,94,0,0.35)] cursor-pointer"
          >
            <span>Request Architecture Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

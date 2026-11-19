"use client";

import React from "react";
import {
  FileText,
  Building2,
  BookOpen,
  Database,
  Search,
  Bot,
  Network,
  GitBranch,
  ShieldAlert,
  Cloud,
  Zap,
  Lock,
  ArrowRight,
} from "lucide-react";

const CORE_SERVICES = [
  {
    title: "01. Custom RAG Development Services",
    description:
      "Our custom RAG development services connect smart AI models directly to your company files, cloud drives and internal databases, delivering fast, truthful answers your team can always trust.",
    icon: <FileText className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Enterprise RAG Solutions",
    description:
      "We engineer secure enterprise RAG solutions that organize messy business PDFs, spreadsheets, and contracts into neat, searchable data, protecting private records with strict company employee access permission rules.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Retrieval-Augmented Generation Services",
    description:
      "Our retrieval augmented generation services help businesses stop AI from guessing wrong facts by checking verified documents first and showing users the exact page used for every single answer.",
    icon: <BookOpen className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. Vector Database Integration",
    description:
      "We provide vector database integration using pgvector, Qdrant, and Pinecone, tuning search speed and storage settings so your AI retrieves accurate information in seconds without high cloud bills.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Hybrid Search RAG Architecture",
    description:
      "Our hybrid search RAG architecture combines semantic meaning matching with exact keywords, making sure your system easily finds tricky product codes, technical acronyms and specific numbers without mistakes.",
    icon: <Search className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Agentic RAG Development",
    description:
      "Through agentic RAG development, we build smart multi-step AI assistants that break difficult questions into smaller tasks, check multiple tools and deliver one simple, verified answer every time.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
];

const ADVANCED_FRAMEWORKS = [
  {
    title: "01. Agentic RAG Architecture",
    description:
      "Our advanced agentic RAG architecture automatically breaks long, complex user questions into smaller searches across your company files, combining the right facts into one simple, helpful answer every single time.",
    icon: <Network className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Graph RAG Development",
    description:
      "Through custom Graph RAG development, we connect vector search with Knowledge Graphs to link business facts across different files, helping your AI answer complicated questions that basic search tools fail.",
    icon: <GitBranch className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. RAG Hallucination Prevention",
    description:
      "With proven RAG hallucination prevention rules, your system checks if verified company files contain the answer, instructing the AI to admit it does not know rather than making up wrong information.",
    icon: <ShieldAlert className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. Private Cloud RAG Architecture",
    description:
      "We engineer a secure private cloud RAG architecture inside your accounts on AWS, Azure, or Google Cloud, making sure your company files stay completely private and are never shared publicly.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. RAG Performance Optimization",
    description:
      "Through smart RAG performance optimization and memory caching, we save answers to repeated questions, delivering instant replies in under a second while cutting your ongoing monthly AI model bills in half.",
    icon: <Zap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Permission-Aware RAG Solutions",
    description:
      "Our custom permission aware RAG solutions connect to your company employee access rules, ensuring staff only search files they are allowed to view, with clear links back to source pages anytime.",
    icon: <Lock className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Core RAG Services */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Core RAG Development Services We Engineer
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            As an enterprise RAG development company, Webnox Digital delivers full scale RAG development services designed to turn messy company documents into accurate, truthful AI solutions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-Section Dark CTA Strip */}
        <div className="my-16 sm:my-24 rounded-[28px] bg-[#160a04] text-white p-8 sm:p-10 lg:p-12 border border-[#FF7230]/25 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Stop AI from Guessing: Build Your Custom RAG System
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Webnox Digital is a RAG development company. We connect smart AI directly to your company files and databases, delivering accurate answers that show the exact page used.
            </p>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Our custom RAG development stops AI from guessing wrong facts. Using smart search and strict safety rules, we keep your business AI fast, truthful, and secure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_24px_rgba(255,114,48,0.28)]"
              style={{
                background:
                  "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
              }}
            >
              <span>Build Your Enterprise RAG System</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-neutral-200 hover:text-white text-sm font-medium px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <span>Schedule an Architecture Call</span>
            </a>
          </div>
        </div>

        {/* Advanced Frameworks Sub-Section */}
        <div id="frameworks">
          <div className="max-w-4xl mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#12141a] leading-tight">
              Advanced Retrieval &amp; Agentic RAG Frameworks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ADVANCED_FRAMEWORKS.map((fw) => (
              <div
                key={fw.title}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                  {fw.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                  {fw.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

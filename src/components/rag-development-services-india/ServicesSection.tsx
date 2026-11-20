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
      "Our custom RAG development services in India connect AI models with business documents, cloud storage and databases. We design retrieval workflows that generate context-based responses using relevant company information.",
    icon: <FileText className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Enterprise RAG Solutions",
    description:
      "Our enterprise RAG solutions in India organise business PDFs, spreadsheets, contracts and internal records into searchable knowledge sources, with document access controls for different teams.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Retrieval Augmented Generation Services",
    description:
      "Our retrieval augmented generation services in India help businesses build AI applications that retrieve relevant information before generating responses, making company knowledge easier to access and use.",
    icon: <BookOpen className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. Vector Database Integration for RAG Applications",
    description:
      "Our RAG vector database integration services connect platforms to support semantic search across large document collections. Database selection depends on your application requirements, data volume and infrastructure.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Hybrid Search RAG Architecture Development",
    description:
      "Our hybrid search RAG development in India combines semantic retrieval with keyword based search to find relevant information, including product codes, technical terms, document references and specific business data.",
    icon: <Search className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Agentic RAG Development Services",
    description:
      "Our agentic RAG development services in India build AI applications that break complex queries into smaller tasks, retrieve information from multiple sources and coordinate tools to support advanced business workflows.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
];

const ADVANCED_FRAMEWORKS = [
  {
    title: "01. Agentic RAG Architecture Development",
    description:
      "Our agentic RAG architecture in India breaks complex queries into tasks and retrieves relevant information from multiple sources.",
    icon: <Network className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Graph RAG Development Services",
    description:
      "Our Graph RAG development in India connects related business data to support contextual search and information retrieval.",
    icon: <GitBranch className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. RAG Hallucination Prevention",
    description:
      "Our RAG hallucination prevention techniques in India use source validation and response controls to reduce unsupported AI answers.",
    icon: <ShieldAlert className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. Private Cloud RAG Architecture",
    description:
      "Our private cloud RAG development in India supports secure deployment using suitable AWS, Azure or Google Cloud infrastructure.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. RAG Performance Optimization",
    description:
      "Our RAG performance optimization services in India improve retrieval speed, database queries and resource efficiency.",
    icon: <Zap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Permission Aware RAG Solutions",
    description:
      "Our permission aware RAG solutions in India apply employee roles and access policies to protect confidential business data.",
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
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Core RAG Development Services We Provide in India
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            As a RAG development company in India, we build enterprise retrieval systems that connect AI models with business documents, databases and internal applications.
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

        {/* Mid-Section Sovereign RAG CTA */}
        <div className="my-16 sm:my-24 rounded-[28px] bg-[#160a04] text-white p-8 sm:p-10 lg:p-12 border border-[#FF7230]/25 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Stop AI from Making Mistakes: Deploy Your Sovereign RAG System
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Webnox Digital is an enterprise RAG development company in India. We link smart AI directly to your company software, enterprise drives, and databases, delivering rapid answers with verifiable source document proof.
            </p>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Our custom RAG development eliminates AI guesswork completely. Using hybrid search pipelines and strict safety guardrails, we keep your corporate AI truthful, fast and completely secure.
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
              Advanced Retrieval &amp; Agentic RAG Development Frameworks
            </h3>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Our advanced RAG development services in India improve enterprise search, information retrieval and AI response quality.
            </p>
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

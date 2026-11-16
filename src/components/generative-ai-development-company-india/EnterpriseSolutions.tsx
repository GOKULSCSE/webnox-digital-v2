"use client";

import React from "react";
import {
  Search,
  FileText,
  Headphones,
  Workflow,
  AppWindow,
  Layers,
  CheckCircle2,
} from "lucide-react";

const ENTERPRISE_SOLUTIONS = [
  {
    title: "1. AI-Powered Enterprise Knowledge Management",
    description:
      "Our enterprise Generative AI solutions in India help employees find information from company documents, policies and databases. AI-powered search and conversational tools make business knowledge easier to access and use.",
    icon: <Search className="w-5 h-5 text-[#FF7230]" />,
    capabilities: [
      "AI-powered enterprise search",
      "RAG-based knowledge retrieval",
      "Internal document search",
      "Question answering from company data",
      "Secure, role-based information access",
    ],
  },
  {
    title: "2. Intelligent Document Processing",
    description:
      "Our Generative AI document processing solutions in India help businesses read, extract, classify and summarise information from invoices, contracts and reports. This reduces manual data entry and simplifies document-related tasks.",
    icon: <FileText className="w-5 h-5 text-[#FF7230]" />,
    capabilities: [
      "Invoice and form data extraction",
      "Contract and report summarisation",
      "Document classification",
      "Information comparison and validation",
      "Automated document processing",
    ],
  },
  {
    title: "3. AI-Powered Customer Experience",
    description:
      "Our Generative AI chatbot development services in India help businesses respond to customer questions through intelligent assistants. These solutions improve communication and provide relevant support across websites and business applications.",
    icon: <Headphones className="w-5 h-5 text-[#FF7230]" />,
    capabilities: [
      "AI customer support chatbots",
      "Conversational AI assistants",
      "Product recommendation assistants",
      "Multilingual customer support",
      "Context-aware response generation",
    ],
  },
  {
    title: "4. AI-Powered Business Process Automation",
    description:
      "Our Generative AI automation solutions in India connect AI models, intelligent agents and business applications to reduce repetitive work. They help teams manage information, coordinate tasks and automate multi-step business processes.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
    capabilities: [
      "Multi-step workflow automation",
      "Automated data processing",
      "AI-based task coordination",
      "API and software integration",
      "Human approval and review workflows",
    ],
  },
  {
    title: "5. Generative AI Software and Product Development",
    description:
      "Our Generative AI app development services in India help businesses add intelligent features to existing software or build new AI-powered products. These applications simplify user tasks and improve how people interact with software.",
    icon: <AppWindow className="w-5 h-5 text-[#FF7230]" />,
    capabilities: [
      "AI-powered SaaS development",
      "Custom Generative AI applications",
      "AI copilots and virtual assistants",
      "Natural language interfaces",
      "Personalised AI-powered features",
    ],
  },
  {
    title: "6. Multimodal Generative AI Solutions",
    description:
      "Our multimodal AI development services in India help businesses build applications that understand and process text, images, audio and video. These solutions make it easier to analyse different content formats and retrieve useful information.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
    capabilities: [
      "AI image analysis and generation",
      "Audio transcription and processing",
      "Video content analysis",
      "Document and visual data extraction",
      "Multimodal search and assistance",
    ],
  },
];

export default function EnterpriseSolutions() {
  return (
    <section
      id="solutions"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[780px] h-[400px] bg-[#FF7230]/[0.05] blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Enterprise Generative AI Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Modern Businesses
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Webnox Digital provides enterprise Generative AI development services in India to help businesses improve operations, access information faster and build intelligent applications. We combine LLMs, RAG, AI agents and system integrations to solve practical business challenges.
          </p>
        </div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {ENTERPRISE_SOLUTIONS.map((sol) => (
            <div
              key={sol.title}
              className="rounded-[26px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center flex-shrink-0">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {sol.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-6">
                  {sol.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF7230] mb-3">
                  Key Capabilities:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {sol.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF7230] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
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


"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProcessStepData {
  number: string;
  shortTitle: string;
  stageName: string;
  fullTitle: string;
  summary: string;
  highlights: { label: string; value: string }[];
}

const LLM_STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Discovery",
    stageName: "Stage 01 • Scoping & Feasibility",
    fullTitle: "01. Discovery and Requirement Analysis",
    summary:
      "We assess business goals, target users, data sources and technical requirements to define the scope and feasibility of your LLM application development project.",
    highlights: [
      { label: "Goals", value: "Business Objectives" },
      { label: "Users", value: "Target Persona Needs" },
      { label: "Data", value: "Data Sources Audit" },
      { label: "Output", value: "Scope & Feasibility" },
    ],
  },
  {
    number: "02",
    shortTitle: "Selection",
    stageName: "Stage 02 • Model & Stack Architecture",
    fullTitle: "02. LLM Model Selection and Architecture",
    summary:
      "We evaluate suitable large language models, RAG approaches, APIs and infrastructure based on application requirements, security needs, expected performance and operating costs.",
    highlights: [
      { label: "Models", value: "Foundation Model Benchmarks" },
      { label: "RAG", value: "Retrieval Architecture" },
      { label: "Security", value: "Enterprise API Guardrails" },
      { label: "Cost", value: "Token & Compute Modeling" },
    ],
  },
  {
    number: "03",
    shortTitle: "Data & RAG",
    stageName: "Stage 03 • Knowledge Engineering",
    fullTitle: "03. Data Preparation and RAG Development",
    summary:
      "We organise relevant data, structure knowledge sources and build retrieval pipelines where needed to support context aware responses and relevant information retrieval.",
    highlights: [
      { label: "Chunking", value: "Document Structuring" },
      { label: "Vectors", value: "Embeddings & Indexing" },
      { label: "Search", value: "Hybrid Vector Search" },
      { label: "Grounding", value: "Context Verification" },
    ],
  },
  {
    number: "04",
    shortTitle: "Development",
    stageName: "Stage 04 • Application & Workflows",
    fullTitle: "04. LLM Application Development and Integration",
    summary:
      "We develop application interfaces, model workflows, APIs and software integrations to connect LLM capabilities with existing systems and business processes.",
    highlights: [
      { label: "Frontend", value: "User Interfaces & UX" },
      { label: "APIs", value: "FastAPI & Backend Logic" },
      { label: "Tools", value: "Function Calling & Tools" },
      { label: "Systems", value: "CRM & ERP Integrations" },
    ],
  },
  {
    number: "05",
    shortTitle: "Testing",
    stageName: "Stage 05 • Evaluation & Safety",
    fullTitle: "05. LLM Testing and Evaluation",
    summary:
      "We evaluate response quality, factual consistency, task completion, latency and security against defined criteria to identify issues and improve application reliability.",
    highlights: [
      { label: "Quality", value: "Factual Grounding" },
      { label: "Safety", value: "Prompt Injection Audits" },
      { label: "Speed", value: "Latency Benchmarking" },
      { label: "Metrics", value: "Automated Eval Datasets" },
    ],
  },
  {
    number: "06",
    shortTitle: "Deployment",
    stageName: "Stage 06 • Deployment & Telemetry",
    fullTitle: "06. LLM Deployment and Optimization",
    summary:
      "We deploy the LLM application in the selected environment, monitor performance and usage costs, and refine the system through ongoing evaluation and feedback.",
    highlights: [
      { label: "Hosting", value: "Cloud, Private, or Hybrid" },
      { label: "Observability", value: "Tracing & Logging" },
      { label: "Tokens", value: "Usage-Cost Analytics" },
      { label: "Feedback", value: "Continuous Optimization" },
    ],
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our LLM Development Process: From Planning to Deployment
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            A structured, disciplined engineering path that takes large language models from initial use-case discovery and RAG pipeline construction to production-grade deployment and real-time monitoring.
          </p>
        </div>

        {/* Interactive React Bits Stepper Component */}
        <div className="w-full flex justify-center">
          <Stepper
            initialStep={1}
            theme="light"
            accentColor="#ff5e00"
            width="100%"
            radius={28}
            frame={true}
            linear={false}
            indicator="numbers"
            orientation="horizontal"
            transition="slide"
            backButtonText="Previous Step"
            nextButtonText="Next Step"
            completeButtonText="Finish Review"
            className="w-full max-w-4xl shadow-xl border border-neutral-200/90 bg-white/95"
            contentClassName="px-4 sm:px-8"
            completedContent={
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-[#ff5e00] flex items-center justify-center mb-4 shadow-inner">
                  <HugeiconsIcon icon={Tick02Icon} size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                  Ready to Build Your LLM Solution?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Our structured process guarantees enterprise alignment, context awareness, and production resilience from day one.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Discuss Your LLM Project</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {LLM_STEPS_DATA.map((step) => (
              <Step
                key={step.number}
                title={step.shortTitle}
                description={step.fullTitle}
              >
                <div className="py-4 sm:py-6 text-left">
                  {/* Step Stage Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-[#ff5e00]">
                      {step.stageName}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                    {step.summary}
                  </p>

                  {/* Key Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-neutral-200/80">
                    {step.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="bg-neutral-50/90 p-3.5 rounded-2xl border border-neutral-200/70"
                      >
                        <span className="text-[10px] font-bold text-[#ff5e00] uppercase tracking-wider block mb-1">
                          {item.label}
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-neutral-800 leading-tight block">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </section>
  );
}

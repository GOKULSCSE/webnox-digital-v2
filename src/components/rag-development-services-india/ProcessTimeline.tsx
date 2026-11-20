"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface PhaseData {
  number: string;
  shortTitle: string;
  fullTitle: string;
  summary: string;
  whatWeDo: string[];
  whatYouReceive: string;
}

const PHASES: PhaseData[] = [
  {
    number: "01",
    shortTitle: "Planning",
    fullTitle: "Phase 01: RAG Architecture Planning and Data Discovery",
    summary:
      "We assess your existing documents, data sources, access requirements and infrastructure to define the right enterprise RAG architecture.",
    whatWeDo: [
      "Review document formats and data quality.",
      "Identify relevant business data sources.",
      "Plan document processing and retrieval methods.",
      "Define database and cloud infrastructure requirements.",
    ],
    whatYouReceive:
      "RAG architecture plan, data readiness assessment and proposed technology stack.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    fullTitle: "Phase 02: Custom RAG Prototype Development and Testing",
    summary:
      "We develop a custom RAG prototype in India connected to selected business documents so your team can evaluate retrieval quality and response relevance.",
    whatWeDo: [
      "Configure document processing and vector search.",
      "Implement retrieval and response generation.",
      "Test keyword and semantic search.",
      "Evaluate response quality against sample queries.",
    ],
    whatYouReceive: "Functional RAG prototype and initial testing report.",
  },
  {
    number: "03",
    shortTitle: "Integration",
    fullTitle: "Phase 03: Enterprise RAG Integration and Security",
    summary:
      "We connect the enterprise RAG application in India with your business systems and implement the necessary access controls and security measures.",
    whatWeDo: [
      "Integrate databases and business applications.",
      "Configure user roles and document permissions.",
      "Implement data protection controls.",
      "Test application performance and reliability.",
    ],
    whatYouReceive:
      "Integrated RAG application prepared for production deployment.",
  },
  {
    number: "04",
    shortTitle: "Optimization",
    fullTitle: "Phase 04: RAG Performance Optimization and Monitoring",
    summary:
      "Our RAG performance optimisation process in India reviews system performance and refines retrieval workflows as your data and business requirements evolve.",
    whatWeDo: [
      "Monitor retrieval quality and response times.",
      "Update document indexes when source data changes.",
      "Optimise database and model usage.",
      "Review application performance.",
    ],
    whatYouReceive:
      "Performance reports, system improvements and ongoing technical support based on the agreed engagement.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our 4-Phase RAG Development and Deployment Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our RAG development process transforms business documents and data sources into a functional enterprise AI application through structured planning, development, integration and optimisation.
          </p>
        </div>

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
            backButtonText="Previous Phase"
            nextButtonText="Next Phase"
            completeButtonText="Build Your Enterprise RAG System"
            className="w-full max-w-4xl shadow-xl border border-neutral-200/90 bg-white/95"
            contentClassName="px-4 sm:px-8"
            completedContent={
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-[#ff5e00] flex items-center justify-center mb-4 shadow-inner">
                  <HugeiconsIcon icon={Tick02Icon} size={28} strokeWidth={2.5} />
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Build Your Enterprise RAG System</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {PHASES.map((phase) => (
              <Step
                key={phase.number}
                title={phase.shortTitle}
                description={phase.fullTitle}
              >
                <div className="py-4 sm:py-6 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {phase.fullTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                    {phase.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF532B] mb-2">
                        What We Do
                      </h4>
                      <ul className="space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                        {phase.whatWeDo.map((task) => (
                          <li key={task} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF7230] shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF532B] mb-2">
                        What You Receive
                      </h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {phase.whatYouReceive}
                      </p>
                    </div>
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

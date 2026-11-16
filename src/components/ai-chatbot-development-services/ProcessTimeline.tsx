"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProcessStepData {
  number: string;
  shortTitle: string;
  fullTitle: string;
  summary: string;
  whatWeDo: string;
  whatYouReceive: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Discovery",
    fullTitle:
      "Phase 01: Use-Case Scoping and Data Discovery (Typical: Weeks 1)",
    summary:
      "During custom AI chatbot development, we analyse customer queries, review business documents and assess existing systems to define chatbot requirements, suitable AI models and integration possibilities.",
    whatWeDo:
      "Map conversational workflows, define escalation rules, audit knowledge sources and identify chatbot deployment channels.",
    whatYouReceive:
      "Chatbot architecture blueprint, data readiness checklist and estimated development and AI usage budget.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    fullTitle:
      "Phase 02: RAG Chatbot Prototype Development (Typical: Weeks 2)",
    summary:
      "As part of RAG chatbot development, we build a private AI chatbot prototype connected to sample business documents and knowledge sources. This allows your team to evaluate response relevance, information retrieval and source references before production development.",
    whatWeDo:
      "Configure document processing, hybrid search, vector indexing, retrieval pipelines and response guardrails. Conduct question-answer evaluation tests.",
    whatYouReceive:
      "Interactive chatbot prototype with documented response accuracy, retrieval quality and performance evaluation results.",
  },
  {
    number: "03",
    shortTitle: "Integration",
    fullTitle:
      "Phase 03: AI Chatbot Integration and Security Implementation (Typical: Weeks 3)",
    summary:
      "We integrate your AI customer support chatbot with website chat, WhatsApp Cloud API, CRM platforms and other business applications. Our AI chatbot integration process includes secure data exchange, conversation management and human agent handoff.",
    whatWeDo:
      "Configure API integrations, verified webhooks, session management, PII masking, human handoff triggers and load testing.",
    whatYouReceive:
      "Production ready chatbot integrated with the agreed communication channels, CRM and support systems.",
  },
  {
    number: "04",
    shortTitle: "Optimisation",
    fullTitle:
      "Phase 04: AI Chatbot Monitoring and Continuous Optimisation (Post-Launch)",
    summary:
      "After deployment, we monitor your enterprise AI chatbot to identify unanswered queries, improve retrieval performance and manage AI usage costs. We also update knowledge sources and integrations as business requirements change.",
    whatWeDo:
      "Review conversation logs, optimise prompts, adjust retrieval settings, monitor API integrations and improve response quality.",
    whatYouReceive:
      "Regular usage and performance reports, AI chatbot optimisation and ongoing technical support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our Step-by-Step AI Chatbot Development Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We follow a structured AI chatbot development process to transform business requirements into intelligent, production-ready chatbot applications. From data discovery and RAG prototyping to system integration and ongoing optimisation, each phase focuses on functionality, response quality, security and scalability.
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
            completeButtonText="Schedule an AI Chatbot Architecture Call"
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
                  <span>Schedule an AI Chatbot Architecture Call</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {STEPS_DATA.map((step) => (
              <Step
                key={step.number}
                title={step.shortTitle}
                description={step.fullTitle}
              >
                <div className="py-4 sm:py-6 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                    {step.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-1">
                        What We Do
                      </span>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {step.whatWeDo}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-1">
                        What You Receive
                      </span>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {step.whatYouReceive}
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


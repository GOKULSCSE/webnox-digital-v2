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
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Discovery",
    fullTitle: "01. Discovery – Business Requirements and AI Use Cases",
    summary:
      "We understand your business goals, workflows, users and challenges to identify where Generative AI can improve operations and deliver practical value.",
  },
  {
    number: "02",
    shortTitle: "Feasibility",
    fullTitle: "02. Feasibility – Technical Assessment and Data Readiness",
    summary:
      "We assess your data, infrastructure, security needs and integration requirements to select the right technologies and confirm the project's technical feasibility.",
  },
  {
    number: "03",
    shortTitle: "Architecture",
    fullTitle: "03. Architecture – Generative AI Solution Design",
    summary:
      "We design the AI application architecture by selecting suitable LLMs, RAG pipelines, AI agents, databases and APIs based on your business requirements.",
  },
  {
    number: "04",
    shortTitle: "Prototyping",
    fullTitle: "04. Prototyping – Proof of Concept Development",
    summary:
      "We develop a working prototype to test AI model responses, prompt quality, data retrieval and core features before moving into full-scale development.",
  },
  {
    number: "05",
    shortTitle: "Development",
    fullTitle: "05. Development – Custom Generative AI Application Engineering",
    summary:
      "We build your application by implementing AI models, user interfaces, prompts, retrieval systems, agent workflows and the required business logic.",
  },
  {
    number: "06",
    shortTitle: "Integration",
    fullTitle: "06. Integration – Enterprise AI System Connectivity",
    summary:
      "We connect the Generative AI application with your existing databases, CRM, ERP, APIs and business software to support smooth data exchange and workflows.",
  },
  {
    number: "07",
    shortTitle: "Testing",
    fullTitle: "07. Testing – AI Quality, Security and Performance Evaluation",
    summary:
      "We test response accuracy, relevance, reliability, security and performance to identify issues and improve the application's behaviour before launch.",
  },
  {
    number: "08",
    shortTitle: "Deployment",
    fullTitle: "08. Deployment and Optimisation – Production Launch and Support",
    summary:
      "We deploy the AI solution in the selected environment, monitor its performance and improve model responses, processing speed and system efficiency over time.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Structured Generative AI Development Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            At Webnox Digital, we follow a structured Generative AI development process to turn business requirements into reliable, secure and scalable AI applications. From initial planning to deployment, each stage focuses on building solutions that work with your business data and systems.
          </p>
        </div>

        {/* Interactive Stepper Component */}
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
            completeButtonText="Schedule a Technical Consultation"
            className="w-full max-w-5xl shadow-xl border border-neutral-200/90 bg-white/95"
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
                  <span>Schedule a Technical Consultation</span>
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
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </section>
  );
}


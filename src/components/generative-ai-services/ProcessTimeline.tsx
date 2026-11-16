"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    title: "01. Discover",
    description:
      "Identify the business problem, target users, workflows, data sources, expected outputs, and success criteria to define a clear Generative AI use case.",
  },
  {
    number: "02",
    title: "02. Assess",
    description:
      "Evaluate data readiness, technical feasibility, model requirements, integration dependencies, security considerations, and use-case risks before selecting the development approach.",
  },
  {
    number: "03",
    title: "03. Architect",
    description:
      "Design the AI architecture around suitable foundation models, LLMs, RAG pipelines, AI agents, APIs, data sources, tools, and application workflows.",
  },
  {
    number: "04",
    title: "04. Prototype",
    description:
      "Create a focused proof of concept to validate model behaviour, prompts, retrieval quality, context handling, core workflows, and key technical assumptions.",
  },
  {
    number: "05",
    title: "05. Develop",
    description:
      "Build the Generative AI application by implementing models, prompts, context management, retrieval systems, interfaces, APIs, tools, and business logic for the defined use case.",
  },
  {
    number: "06",
    title: "06. Integrate",
    description:
      "Connect Generative AI capabilities with databases, APIs, enterprise software, knowledge sources, and existing applications while establishing appropriate data flows and access controls.",
  },
  {
    number: "07",
    title: "07. Evaluate",
    description:
      "Evaluate AI outputs for accuracy, relevance, consistency, hallucination, response quality, latency, security and task specific performance against defined evaluation criteria.",
  },
  {
    number: "08",
    title: "08. Refine",
    description:
      "Improve prompts, retrieval strategies, model configurations, workflows and application behaviour based on evaluation results to strengthen AI quality, reliability and business performance.",
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
            From AI Idea to Application: Our Generative AI Development Process
          </h2>
        </div>

        {/* Stepper Component */}
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
                  Ready to Build Your Generative AI Solution?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Our structured 8-step process guarantees production quality, context accuracy, and enterprise scalability.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Build Your AI Solution</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {STEPS_DATA.map((step) => (
              <Step
                key={step.number}
                title={step.title}
                description={step.title}
              >
                <div className="py-6 sm:py-8 text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                    {step.description}
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

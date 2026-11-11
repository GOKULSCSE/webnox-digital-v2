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
    shortTitle: "Assessment",
    fullTitle: "1. Business and System Assessment",
    summary:
      "We assess your business objectives, existing applications, data sources and operational workflows to identify suitable opportunities for AI integration.",
  },
  {
    number: "02",
    shortTitle: "Architecture",
    fullTitle: "2. AI Integration Strategy and Architecture",
    summary:
      "We define the AI integration strategy, select suitable technologies and plan how AI models, APIs and existing systems will communicate.",
  },
  {
    number: "03",
    shortTitle: "Selection",
    fullTitle: "3. AI Model and Technology Selection",
    summary:
      "We evaluate suitable AI models, large language models (LLMs) and third-party AI services based on your functional requirements, data environment and application needs.",
  },
  {
    number: "04",
    shortTitle: "Integration",
    fullTitle: "4. AI Model and API Integration",
    summary:
      "We connect selected AI models, APIs and relevant data sources with your existing software to enable the required AI functionality and system communication.",
  },
  {
    number: "05",
    shortTitle: "Validation",
    fullTitle: "5. AI Integration Testing and Validation",
    summary:
      "We test the integrated solution for functionality, response accuracy, data handling, security requirements and compatibility with existing applications.",
  },
  {
    number: "06",
    shortTitle: "Deployment",
    fullTitle: "6. AI Deployment and Performance Optimization",
    summary:
      "We deploy the AI integration solution in the agreed environment, monitor its performance and make improvements based on testing results and operational feedback.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Integration and Implementation Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Our AI integration process follows six stages to connect AI technologies with existing business applications and enterprise systems. Each stage considers business requirements, system compatibility, data handling and long-term scalability.
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
            completeButtonText="Talk to Our AI Experts"
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
                  <span>Talk to Our AI Experts</span>
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>

                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
                    {step.summary}
                  </p>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Semantic SEO Block so all 6 H3 steps remain in the DOM */}
        <div className="sr-only">
          {STEPS_DATA.map((step) => (
            <div key={step.number}>
              <h3>{step.fullTitle}</h3>
              <p>{step.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

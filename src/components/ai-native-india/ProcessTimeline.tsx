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
    fullTitle: "01. Discovery and AI Strategy",
    summary:
      "We understand your business requirements, identify suitable AI use cases, define project objectives and assess the data, systems and workflows involved.",
  },
  {
    number: "02",
    shortTitle: "Architecture",
    fullTitle: "02. Solution Architecture",
    summary:
      "We define the AI architecture, technology stack, data flow, integrations, infrastructure and user experience required for the solution.",
  },
  {
    number: "03",
    shortTitle: "Prototype",
    fullTitle: "03. Prototype and AI MVP",
    summary:
      "We develop the core AI functionality and build a working prototype or MVP to validate the technical approach, product features and user experience.",
  },
  {
    number: "04",
    shortTitle: "Development",
    fullTitle: "04. AI Product Development",
    summary:
      "We develop the application, software, AI agents, interfaces, APIs, databases and business workflows required for the approved project scope.",
  },
  {
    number: "05",
    shortTitle: "Testing",
    fullTitle: "05. Testing and AI Evaluation",
    summary:
      "We evaluate application functionality, AI outputs, integrations, performance and defined use cases to identify issues before deployment.",
  },
  {
    number: "06",
    shortTitle: "Deployment",
    fullTitle: "06. Integration and Deployment",
    summary:
      "We connect the solution with relevant APIs, databases, cloud infrastructure, existing applications and business systems before deployment.",
  },
  {
    number: "07",
    shortTitle: "Monitoring",
    fullTitle: "07. Monitoring and Optimisation",
    summary:
      "We monitor system performance, AI behaviour, usage and technical issues. Further improvements are planned based on real-world usage and changing business requirements.",
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
            Our AI Product Development Process in India
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            We follow a structured development process to take AI projects from initial requirements to deployment. Each stage considers the business objective, technical architecture, AI functionality, integrations and expected product outcomes.
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
            completeButtonText="Start Your AI Project"
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
                  <span>Start Your AI Project</span>
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

        {/* Semantic SEO Block so all 7 H3 steps remain in the DOM */}
        <div className="sr-only">
          {STEPS_DATA.map((step) => (
            <div key={step.number}>
              <h3>{step.fullTitle}</h3>
              <p>{step.summary}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Start Your AI Project</span>
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

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
  deliverables: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Assessment",
    fullTitle: "01. n8n Consulting and Workflow Assessment",
    summary:
      "We review existing business processes, applications and automation requirements to identify opportunities for n8n workflow automation.",
    deliverables:
      "Workflow assessment, technical requirements and implementation plan.",
  },
  {
    number: "02",
    shortTitle: "Development",
    fullTitle: "02. n8n Setup and Workflow Development",
    summary:
      "Our n8n development services include environment configuration, custom workflow development and API integration to connect business applications.",
    deliverables:
      "n8n setup and configuration, custom workflows and integration setup.",
  },
  {
    number: "03",
    shortTitle: "Optimization",
    fullTitle: "03. n8n Workflow Testing and Optimization",
    summary:
      "We test workflow execution, validate data accuracy, configure error handling and improve performance through n8n workflow optimization.",
    deliverables:
      "Tested workflows, validation reports and error-handling configurations.",
  },
  {
    number: "04",
    shortTitle: "Deployment",
    fullTitle: "04. Deployment and n8n Automation Support",
    summary:
      "We deploy approved workflows, provide technical documentation and offer n8n workflow maintenance and automation support to address errors, updates and integration changes.",
    deliverables:
      "Production workflows, JSON exports, technical documentation and ongoing support.",
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
            Our n8n Automation Implementation Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital provides n8n implementation services to help businesses plan, develop, test and deploy automated workflows. Our n8n consulting services cover workflow assessment, setup, integration, optimization and ongoing support.
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
            completeButtonText="Book Your Architecture Session"
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
                  <span>Book Your Architecture Session</span>
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
                  <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-1">
                      Deliverables
                    </span>
                    <p className="text-sm text-neutral-700 font-medium">
                      {step.deliverables}
                    </p>
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


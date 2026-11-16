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
  clientInputs: string;
  deliverable: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Assessment",
    fullTitle: "01. AI Integration Consulting and Assessment",
    summary:
      "We understand your business needs, existing software and daily workflows to identify where AI can improve operations. Our AI integration consulting helps determine the right technology and integration approach.",
    clientInputs: "Business requirements and existing system details.",
    deliverable: "Project plan and integration roadmap.",
  },
  {
    number: "02",
    shortTitle: "Development",
    fullTitle: "02. AI Integration Development and Setup",
    summary:
      "We develop the connections needed to integrate AI models with your existing applications using APIs, middleware and suitable frameworks. Our custom AI integration services support different software platforms and business requirements.",
    clientInputs: "System access and integration requirements.",
    deliverable: "Working AI connections and staging setup.",
  },
  {
    number: "03",
    shortTitle: "Validation",
    fullTitle: "03. AI Integration Testing and Validation",
    summary:
      "We test the integration to ensure AI responses are accurate, data is handled securely and connected applications work properly. We also check system performance and error handling before launch.",
    clientInputs: "Sample data and feedback on test results.",
    deliverable: "Tested integration and performance report.",
  },
  {
    number: "04",
    shortTitle: "Deployment",
    fullTitle: "04. AI Integration Deployment and Support",
    summary:
      "We deploy the approved AI integration solutions into your business environment and check that everything works as expected. We also provide source code, technical documentation and team guidance for future maintenance.",
    clientInputs: "Deployment approval and team coordination.",
    deliverable: "Live AI integration, documentation and handover.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our AI Integration and Implementation Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            As an AI Integration Company in India, Webnox Digital helps businesses connect AI technologies with their existing software and business systems. Our process covers everything from planning and development to testing and deployment.
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
            completeButtonText="Book Your Consultation"
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
                  <span>Book Your Consultation</span>
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
                        Client Inputs
                      </span>
                      <p className="text-sm text-neutral-700 font-medium">
                        {step.clientInputs}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-1">
                        Deliverable
                      </span>
                      <p className="text-sm text-neutral-700 font-medium">
                        {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>

        {/* Regional India Coverage Note */}
        <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          From business AI integration to enterprise AI integration, Webnox Digital provides reliable AI integration services in Coimbatore and across India, helping businesses connect AI with their existing systems.
        </p>
      </div>
    </section>
  );
}


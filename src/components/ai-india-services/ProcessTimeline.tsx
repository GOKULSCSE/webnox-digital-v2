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
  deliverable: string;
  highlights: { label: string; value: string }[];
}

const AI_INDIA_STEPS: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Planning",
    stageName: "Week 01 • Architecture & Roadmap",
    fullTitle: "1. Week 1: AI Planning and Architecture",
    summary:
      "We assess your business goals, data and existing systems to define the right AI solution. Our AI development team in India prepares the technical architecture, project scope and delivery plan based on your requirements.",
    deliverable: "AI architecture and project roadmap.",
    highlights: [
      { label: "Goals", value: "Business Objectives" },
      { label: "Audit", value: "Data & Systems Check" },
      { label: "Tech Stack", value: "Model & Architecture Plan" },
      { label: "Deliverable", value: "Project Roadmap" },
    ],
  },
  {
    number: "02",
    shortTitle: "Prototyping",
    stageName: "Week 02 • Core AI & Prototyping",
    fullTitle: "2. Week 2: AI Development and Prototyping",
    summary:
      "We develop the core AI functionality using suitable models, business data and application logic. The prototype is tested against agreed requirements to check its output quality and confirm that the solution meets your business needs.",
    deliverable: "Working AI prototype and initial test results.",
    highlights: [
      { label: "Models", value: "Domain Fine-Tuning / RAG" },
      { label: "Logic", value: "Business Rules & Prompts" },
      { label: "Quality", value: "Output Verification" },
      { label: "Deliverable", value: "Working AI Prototype" },
    ],
  },
  {
    number: "03",
    shortTitle: "Integration",
    stageName: "Week 03 • APIs & Security Testing",
    fullTitle: "3. Week 3: AI Integration and Testing",
    summary:
      "We connect the AI application with your website, databases and business software using suitable APIs. Our team tests key functions, checks access controls and reviews performance to prepare the application for deployment.",
    deliverable: "Integrated AI application with test results.",
    highlights: [
      { label: "APIs", value: "CRM & ERP Connectors" },
      { label: "Security", value: "Access Control & RBAC" },
      { label: "Testing", value: "Stress & Concurrency Test" },
      { label: "Deliverable", value: "Integrated Software" },
    ],
  },
  {
    number: "04",
    shortTitle: "Deployment",
    stageName: "Week 04 • Cloud & Production Launch",
    fullTitle: "4. Week 4: AI Deployment and Launch",
    summary:
      "We deploy the completed AI solution to the agreed cloud or on-premises environment. Final checks, technical documentation and handover prepare your application for business use, with ongoing support arranged as required.",
    deliverable: "Deployed AI solution and technical documentation.",
    highlights: [
      { label: "Hosting", value: "Cloud / On-Premise" },
      { label: "Checks", value: "Final Compliance & Audits" },
      { label: "Handover", value: "100% IP & Documentation" },
      { label: "Deliverable", value: "Production AI Launch" },
    ],
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] overflow-hidden border-t border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
            4-Week Production Model
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our AI Development Process in India: From Idea to Production
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Using our AI-assisted development workflow, we build and deploy your custom solution in
            clear, fixed stages so you see progress every week.
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
                  Ready to Build Your AI Solution?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Our structured process guarantees enterprise alignment, context awareness, and production resilience in 4 to 8 weeks.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Discuss Your Project Scope</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {AI_INDIA_STEPS.map((step) => (
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

                  {/* Main Title H3 */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
                    {step.summary}
                  </p>

                  {/* Official Deliverable Tag */}
                  <div className="mb-6 p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#ff5e00] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#d34b16] block">
                        Official Deliverable
                      </span>
                      <span className="text-sm sm:text-base font-bold text-neutral-900 block">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>

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

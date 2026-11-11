"use client";

import React, { useState } from "react";
import {
  Compass,
  Code2,
  Cpu,
  Rocket,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface StepData {
  week: string;
  number: string;
  title: string;
  phase: string;
  summary: string;
  deliverable: string;
  activities: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: StepData[] = [
  {
    week: "Week 01",
    number: "1",
    title: "1. Week 1: AI Planning and Architecture",
    phase: "Planning & Scoping",
    summary:
      "We assess your business goals, data and existing systems to define the right AI solution. Our AI development team in India prepares the technical architecture, project scope and delivery plan based on your requirements.",
    deliverable: "AI architecture and project roadmap.",
    activities: [
      "Discovery workshops & stakeholder interviews",
      "Data availability, security & schema audit",
      "Model selection & RAG/fine-tuning strategy",
      "Milestone roadmap & delivery timeline",
    ],
    icon: Compass,
  },
  {
    week: "Week 02",
    number: "2",
    title: "2. Week 2: AI Development and Prototyping",
    phase: "Core Engineering",
    summary:
      "We develop the core AI functionality using suitable models, business data and application logic. The prototype is tested against agreed requirements to check its output quality and confirm that the solution meets your business needs.",
    deliverable: "Working AI prototype and initial test results.",
    activities: [
      "Prompt engineering & domain vector indexing",
      "Model fine-tuning / agent loop orchestration",
      "Interactive proof-of-concept interface",
      "Accuracy, hallucination & latency benchmarking",
    ],
    icon: Code2,
  },
  {
    week: "Week 03",
    number: "3",
    title: "3. Week 3: AI Integration and Testing",
    phase: "Integration & Hardening",
    summary:
      "We connect the AI application with your website, databases and business software using suitable APIs. Our team tests key functions, checks access controls and reviews performance to prepare the application for deployment.",
    deliverable: "Integrated AI application with test results.",
    activities: [
      "API & webhook integration with CRM/ERP",
      "Role-based access controls & token governance",
      "Stress-testing concurrency & edge cases",
      "User acceptance testing (UAT) with your team",
    ],
    icon: Cpu,
  },
  {
    week: "Week 04",
    number: "4",
    title: "4. Week 4: AI Deployment and Launch",
    phase: "Deployment & Scale",
    summary:
      "We deploy the completed AI solution to the agreed cloud or on-premises environment. Final checks, technical documentation and handover prepare your application for business use, with ongoing support arranged as required.",
    deliverable: "Deployed AI solution and technical documentation.",
    activities: [
      "Cloud or private on-prem deployment",
      "Real-time monitoring & observability setup",
      "Complete code handover & IP transfer",
      "Team training & ongoing SLA maintenance",
    ],
    icon: Rocket,
  },
];

export default function ProcessRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
            Agile 4-Week Delivery Model
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our AI Development Process in India: From Idea to Production
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            A structured, 4-stage sprint designed to take your AI initiative from discovery to production-ready deployment with demonstrable progress every week.
          </p>
        </div>

        {/* Progress Timeline Buttons (Desktop & Tablet) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? "bg-[#160a04] text-white border-neutral-900 shadow-lg scale-[1.02]"
                    : "bg-white text-neutral-700 border-neutral-200/80 hover:border-orange-300 hover:bg-orange-50/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? "text-[#ff8935]" : "text-neutral-400"
                    }`}
                  >
                    {step.week}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-orange-500/20 text-[#ff8935]" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="font-semibold text-xs sm:text-sm line-clamp-1">
                  {step.phase}
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7230] to-[#FF8935]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="relative bg-white rounded-[32px] p-8 sm:p-12 border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.04)] mb-12">
          {(() => {
            const current = PROCESS_STEPS[activeStep];
            const Icon = current.icon;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Heading, Description, Deliverable */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#FF7230] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                        {current.week}
                      </span>
                      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
                        {current.phase}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#12141a] tracking-tight leading-snug">
                      {current.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                      {current.summary}
                    </p>

                    {/* Official Deliverable Banner */}
                    <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-[#FF7230] text-white flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#d34b16]">
                          Official Deliverable
                        </span>
                        <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">
                          {current.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Stage Activities */}
                <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-200/80">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-500 mb-4">
                    Key Sprint Activities
                  </h4>
                  <div className="space-y-3">
                    {current.activities.map((act, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white border border-neutral-200/60 shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ff5e00] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-800 font-medium">
                          {act}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-200/70 flex items-center justify-between text-xs text-neutral-500">
                    <span>Weekly Review Loop</span>
                    <span className="font-semibold text-[#FF7230]">Fixed Scope &amp; Budget</span>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* 4 Cards Overview for SEO readability & Full Scannability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#FF7230]">
                  STAGE {step.number}
                </span>
                <h3 className="text-base font-bold text-[#12141a] mt-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block">
                  Deliverable:
                </span>
                <span className="text-xs font-semibold text-neutral-900 mt-0.5 block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

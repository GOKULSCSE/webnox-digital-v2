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
  whatWeDo: string;
  whatYouReceive: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Readiness",
    stageName: "Phase 01 • Week 1",
    fullTitle: "Phase 01: AI Readiness Assessment & Feasibility Mapping (Weeks 1)",
    summary:
      "We evaluate your existing technical architecture, audit internal data quality, review team workflows, and determine clear feasibility parameters.",
    whatWeDo:
      "Conduct operational audits, analyze data readiness, calculate token expense projections, and map security requirements.",
    whatYouReceive:
      "Detailed AI Architecture Blueprint, complete feasibility audit report, and transparent development and token budget estimates.",
  },
  {
    number: "02",
    shortTitle: "Sandbox PoC",
    stageName: "Phase 02 • Week 2",
    fullTitle: "Phase 02: Sandbox Architecture & PoC Build (Weeks 2)",
    summary:
      "We build a private working prototype connected to a sample batch of your company data, allowing your leadership team to test retrieval precision, response tone, and speed.",
    whatWeDo:
      "Set up vector indexing, chunking pipelines, hybrid search, and safety guardrails. Benchmark responses using automated evaluation frameworks.",
    whatYouReceive:
      "Interactive PoC test environment with documented accuracy benchmarks and stakeholder feedback analysis.",
  },
  {
    number: "03",
    shortTitle: "Production",
    stageName: "Phase 03 • Week 3",
    fullTitle: "Phase 03: Production Engineering & Security Hardening (Weeks 3)",
    summary:
      "We connect your custom AI application to production software, including your CRM, ERP, messaging channels, and internal data lakes.",
    whatWeDo:
      "Configure webhook listeners, session state storage, automated PII masking, human-agent handoffs, and concurrency stress testing.",
    whatYouReceive:
      "Production-ready AI solution integrated into your daily business tools with complete technical documentation.",
  },
  {
    number: "04",
    shortTitle: "Optimization",
    stageName: "Phase 04 • Post-Launch",
    fullTitle: "Phase 04: Continuous Monitoring & Cost Optimization (Post-Launch)",
    summary:
      "After deployment, we continuously track telemetry to eliminate edge-case failures, optimize prompt efficiency, and implement semantic caching to minimize ongoing token spend.",
    whatWeDo:
      "Analyze conversation telemetry, tune retrieval parameters, update vector embeddings as products change, and monitor system latency.",
    whatYouReceive:
      "Regular usage and accuracy analytics, updated vector pipelines, and dedicated engineering maintenance support.",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Engineering-First Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our 4-Phase AI Consulting &amp; Implementation Roadmap
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            We follow an engineering-first framework to guide your business from initial exploratory research to production scale:
          </p>
        </div>

        {/* Interactive Stepper */}
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
            completeButtonText="Finish Review"
            className="w-full max-w-4xl shadow-xl border border-neutral-200/90 bg-white/95"
            contentClassName="px-2 sm:px-8"
            completedContent={
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-[#ff5e00] flex items-center justify-center mb-4 shadow-inner">
                  <HugeiconsIcon icon={Tick02Icon} size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                  Ready to Move from Assessment to Production?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Start with an AI Readiness Assessment and working PoC sandbox before committing full enterprise capital.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Speak with Our AI Consultants</span>
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-[#ff5e00]">
                      {step.stageName}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>

                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                    {step.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-neutral-200/80">
                    <div className="bg-neutral-50/90 p-4 rounded-2xl border border-neutral-200/70">
                      <h4 className="text-[11px] font-bold text-[#ff5e00] uppercase tracking-wider block mb-1.5">
                        What We Do:
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                        {step.whatWeDo}
                      </p>
                    </div>
                    <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/70">
                      <h4 className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1.5">
                        What You Receive:
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
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

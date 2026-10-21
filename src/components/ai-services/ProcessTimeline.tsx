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
  highlights: { label: string; value: string }[];
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Discovery",
    stageName: "Stage 01 • Scoping & Feasibility",
    fullTitle: "1. Use-Case Discovery & Alignment",
    summary:
      "Define the business problem, target users, workflows and available data. Establish measurable objectives, expected AI capabilities and the tasks that require human oversight.",
    highlights: [
      { label: "Focus", value: "Problem Framing" },
      { label: "Data", value: "Data Readiness Audit" },
      { label: "Safety", value: "Human Oversight Points" },
      { label: "Output", value: "Scope & Objectives" },
    ],
  },
  {
    number: "02",
    shortTitle: "Architecture",
    stageName: "Stage 02 • System Architecture",
    fullTitle: "2. Solution Architecture and Model Selection",
    summary:
      "Plan the application architecture, data flows, APIs and security requirements. Select suitable AI models based on output quality, latency, scalability, data requirements and operating costs.",
    highlights: [
      { label: "Design", value: "System Architecture" },
      { label: "Models", value: "Foundation Model Benchmarks" },
      { label: "Security", value: "Enterprise API Guardrails" },
      { label: "Cost", value: "Token & Compute Modeling" },
    ],
  },
  {
    number: "03",
    shortTitle: "Prototype",
    stageName: "Stage 03 • Rapid Validation",
    fullTitle: "3. Prototype and Workflow Validation",
    summary:
      "Build a working prototype to test key assumptions with representative data and realistic scenarios. Identify data gaps, output inconsistencies and integration challenges before full development.",
    highlights: [
      { label: "Build", value: "Functional PoC" },
      { label: "Testing", value: "Real Workflow Scenarios" },
      { label: "Analysis", value: "Data Gap Detection" },
      { label: "Decision", value: "Go/No-Go Gate" },
    ],
  },
  {
    number: "04",
    shortTitle: "Development",
    stageName: "Stage 04 • Production Build",
    fullTitle: "4. AI Application Development and Integration",
    summary:
      "Develop the user interface, backend services, AI workflows and data retrieval components. Integrate required APIs and business systems to connect the application with existing operations.",
    highlights: [
      { label: "Frontend", value: "Responsive UI & CX" },
      { label: "Pipelines", value: "Retrieval & Vector Flows" },
      { label: "Agents", value: "Tool Calling & Workflows" },
      { label: "Integration", value: "Enterprise API Connectors" },
    ],
  },
  {
    number: "05",
    shortTitle: "Evaluation",
    stageName: "Stage 05 • Rigorous Testing",
    fullTitle: "5. Application Testing and AI Evaluation",
    summary:
      "Test functionality, output quality, retrieval accuracy, access permissions and failure handling. Evaluate performance, reliability and security against defined requirements before deployment.",
    highlights: [
      { label: "Quality", value: "Response Accuracy" },
      { label: "Security", value: "Role & Permission Audits" },
      { label: "Stress", value: "Latency & Concurrency" },
      { label: "Fallback", value: "Graceful Error Handling" },
    ],
  },
  {
    number: "06",
    shortTitle: "Deployment",
    stageName: "Stage 06 • Launch & Monitoring",
    fullTitle: "6. Deployment and Performance Optimisation",
    summary:
      "Deploy the validated application with suitable monitoring and operational controls. Use performance data and evaluation results to improve reliability, response times, output quality and operating costs.",
    highlights: [
      { label: "Deploy", value: "Production Cloud Setup" },
      { label: "Observability", value: "Telemetry & Logs" },
      { label: "Tuning", value: "Latency & Cost Tuning" },
      { label: "Iteration", value: "Continuous Optimization" },
    ],
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            Production Engineering Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            From AI Concept to Production-Ready Application Our Process
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Our systematic 6-step lifecycle guides your project from initial use-case discovery to enterprise-grade deployment and real-time operational optimization.
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
                  Ready to Move from Concept to Production?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Our structured process guarantees alignment with business workflows, data privacy, and production resilience.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Build Your AI Application</span>
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
                  {/* Step Stage Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-[#ff5e00]">
                      {step.stageName}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
                    {step.summary}
                  </p>

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

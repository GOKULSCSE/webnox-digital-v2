"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface PhaseData {
  number: string;
  shortTitle: string;
  fullTitle: string;
  summary: string;
  whatWeDo: string;
  whatYouReceive: string;
}

const PHASES: PhaseData[] = [
  {
    number: "01",
    shortTitle: "Discovery",
    fullTitle: "Phase 01: AI Copilot Architecture Planning & Discovery (Weeks 1)",
    summary:
      "We review your team's daily workflows, find manual bottlenecks, check document readiness, and design a clear engineering plan for your custom AI copilot development project.",
    whatWeDo:
      "Review existing software, map out secure API connections, establish data privacy guardrails, and select the optimal AI models.",
    whatYouReceive:
      "Complete AI Copilot Architecture Blueprint, software integration plan, and clear cloud infrastructure cost projections.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    fullTitle: "Phase 02: Custom AI Copilot Prototyping & Accuracy Testing (Weeks 2)",
    summary:
      "Using custom AI copilot development, we build a private working test model connected to a sample batch of your real business files and software tools.",
    whatWeDo:
      "Set up vector search databases, program tool-calling functions, test human-in-the-loop approvals and benchmark answer speed and accuracy.",
    whatYouReceive:
      "Functional sandbox test copilot environment, action execution scorecards and verifiable source accuracy logs.",
  },
  {
    number: "03",
    shortTitle: "Integration",
    fullTitle: "Phase 03: Enterprise AI Copilot Integration & Security (Weeks 3)",
    summary:
      "Through our enterprise AI copilot integration services, we connect your custom assistant directly into your production software while locking down strict employee access permissions.",
    whatWeDo:
      "Connect employee role permissions, link CRM and ERP systems, add automatic private data masking, and test under heavy team use.",
    whatYouReceive:
      "Production-hardened enterprise AI copilot solutions working smoothly inside your daily workspace tools, web apps and browser extensions.",
  },
  {
    number: "04",
    shortTitle: "Optimization",
    fullTitle: "Phase 04: AI Copilot Performance Optimization & Monitoring (Post-Launch)",
    summary:
      "Through continuous AI copilot performance optimization, we monitor live daily usage, speed up answers, refresh connected tools as software evolves and keep cloud running bills low.",
    whatWeDo:
      "Track response speeds, save repeated answers in semantic memory cache, update software connectors and add new capabilities as you grow.",
    whatYouReceive:
      "Monthly speed and usage telemetry reports, updated software connections and dedicated senior engineering support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our 4-Phase AI Copilot Engineering Roadmap
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            As an enterprise AI copilot development company, we follow a structured, step-by-step roadmap to take your business from manual daily workflows to a live, production-grade custom copilot:
          </p>
        </div>

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
            completeButtonText="Build Your Custom AI Copilot"
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
                  <span>Build Your Custom AI Copilot</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {PHASES.map((phase) => (
              <Step
                key={phase.number}
                title={phase.shortTitle}
                description={phase.fullTitle}
              >
                <div className="py-4 sm:py-6 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {phase.fullTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                    {phase.summary}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF532B] mb-1.5">
                        What We Do
                      </h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {phase.whatWeDo}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF532B] mb-1.5">
                        What You Receive
                      </h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {phase.whatYouReceive}
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

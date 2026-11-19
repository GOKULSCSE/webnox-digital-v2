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
    fullTitle: "Phase 01: RAG Data Discovery & Ingestion Planning (Weeks 1–2)",
    summary:
      "We review your company documents, check data cleanliness, set up user access rules, and create a clear engineering plan for your RAG development project.",
    whatWeDo:
      "Organize messy file formats, plan smart document splitting, choose the right vector search database and test connections to your cloud drives.",
    whatYouReceive:
      "Complete RAG system architecture blueprint, data readiness report and clear cloud hosting cost estimates.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    fullTitle: "Phase 02: Custom RAG Prototyping & Accuracy Testing (Weeks 3–4)",
    summary:
      "Using custom RAG development, we build a private working test model connected to a sample batch of your real files so your team can test accuracy early.",
    whatWeDo:
      "Set up vector search, test hybrid keyword matching, add smart answer filters and benchmark response accuracy using automated testing tools.",
    whatYouReceive:
      "Interactive working RAG prototype, accuracy test scorecards and source page proof verification logs.",
  },
  {
    number: "03",
    shortTitle: "Integration",
    fullTitle: "Phase 03: Enterprise RAG Integration & Security Setup (Weeks 5–8)",
    summary:
      "Our enterprise RAG integration connects your custom AI system to your live business software while locking down strict employee file permissions.",
    whatWeDo:
      "Connect user access rules, add automatic private data masking, integrate CRM and ERP systems and test system speed under high user traffic.",
    whatYouReceive:
      "Production-ready RAG application fully connected to your daily business tools, databases and customer support systems.",
  },
  {
    number: "04",
    shortTitle: "Optimization",
    fullTitle: "Phase 04: RAG Performance Optimization & Monitoring (Post-Launch)",
    summary:
      "Through continuous RAG performance optimization, we monitor live daily questions, update company files as they change, and keep cloud running bills low.",
    whatWeDo:
      "Track search speed, adjust retrieval accuracy settings, refresh vector files when company policies change, and monitor database storage costs.",
    whatYouReceive:
      "Monthly accuracy and speed performance reports, updated search databases and dedicated ongoing technical support.",
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
            Our 4-Phase RAG Development and Deployment Roadmap
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We follow a proven step-by-step framework to take your enterprise from raw business files to a live, secure, and reliable AI search system:
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
            completeButtonText="Build Your Enterprise RAG System"
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
                  <span>Build Your Enterprise RAG System</span>
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

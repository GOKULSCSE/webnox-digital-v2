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
    shortTitle: "Discovery",
    stageName: "Phase 01 • Weeks 1–2",
    fullTitle: "Phase 1: Planning & Data Discovery (Weeks 1–2)",
    summary:
      "We connect with your team to understand your business goals, review your company files and documents and pick the most affordable, effective AI tools for your budget.",
    whatWeDo:
      "We map out what tasks the AI will handle, check if your business files are ready and choose the right AI technology.",
    whatYouReceive:
      "A step-by-step project blueprint, data review report and timeline.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    stageName: "Phase 02 • Weeks 3–4",
    fullTitle: "Phase 2: Working Test Prototype (Weeks 3–4)",
    summary:
      "We build a private, working prototype using your real company data so you can test it yourself and verify that it gives accurate answers before spending on full rollout.",
    whatWeDo:
      "We create a secure test app, run real customer questions through it and ensure it answers quickly without making things up.",
    whatYouReceive:
      "A working private test app you can click and try, along with accuracy and speed test reports.",
  },
  {
    number: "03",
    shortTitle: "Launch",
    stageName: "Phase 03 • Weeks 5–8",
    fullTitle: "Phase 3: Software Connection & Launch (Weeks 5–8)",
    summary:
      "We connect the tested AI directly into the software your team already uses every day (like your CRM, website or customer database) and add strict privacy locks to keep your data safe.",
    whatWeDo:
      "We integrate the AI into your daily tools, test it for fast response times and ensure sensitive customer information is completely protected.",
    whatYouReceive:
      "A fully functioning, live AI system connected to your everyday business software.",
  },
  {
    number: "04",
    shortTitle: "Monitoring",
    stageName: "Phase 04 • Ongoing",
    fullTitle: "Phase 4: Ongoing Monitoring & Updates (Ongoing)",
    summary:
      "We don’t disappear after launch. We monitor your live AI system to keep it fast and accurate and update it as your business introduces new products, services, or policies.",
    whatWeDo:
      "We track how the AI answers customer questions, fix any tricky edge cases, and refresh its knowledge base as your business grows.",
    whatYouReceive:
      "Regular performance reports, continuous accuracy tuning, and dependable long-term technical support.",
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
            STEP-BY-STEP ROADMAP
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our Step by Step Custom LLM Development Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            From initial data discovery to long-term autonomous monitoring, every phase is built around measurable checkpoints and working prototypes.
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
                  Ready to Move from Prototype to Production?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Our structured 4-phase process guarantees alignment with business workflows, data privacy, and production resilience.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Schedule an LLM Architecture Call</span>
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

                  {/* What We Do & What You Receive */}
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

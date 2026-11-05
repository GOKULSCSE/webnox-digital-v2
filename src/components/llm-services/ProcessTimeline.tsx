"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Check, ArrowRight, Layers, FileCheck2, Cpu, Activity } from "lucide-react";

interface ProcessPhase {
  id: string;
  phaseNumber: string;
  weeks: string;
  title: string;
  summary: string;
  whatWeDo: string;
  whatYouReceive: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_PHASES: ProcessPhase[] = [
  {
    id: "phase-1",
    phaseNumber: "PHASE 01",
    weeks: "Weeks 1–2",
    title: "Phase 1: Planning & Data Discovery (Weeks 1–2)",
    summary:
      "We connect with your team to understand your business goals, review your company files and documents and pick the most affordable, effective AI tools for your budget.",
    whatWeDo:
      "We map out what tasks the AI will handle, check if your business files are ready and choose the right AI technology.",
    whatYouReceive:
      "A step-by-step project blueprint, data review report and timeline.",
    icon: Layers,
  },
  {
    id: "phase-2",
    phaseNumber: "PHASE 02",
    weeks: "Weeks 3–4",
    title: "Phase 2: Working Test Prototype (Weeks 3–4)",
    summary:
      "We build a private, working prototype using your real company data so you can test it yourself and verify that it gives accurate answers before spending on full rollout.",
    whatWeDo:
      "We create a secure test app, run real customer questions through it and ensure it answers quickly without making things up.",
    whatYouReceive:
      "A working private test app you can click and try, along with accuracy and speed test reports.",
    icon: Cpu,
  },
  {
    id: "phase-3",
    phaseNumber: "PHASE 03",
    weeks: "Weeks 5–8",
    title: "Phase 3: Software Connection & Launch (Weeks 5–8)",
    summary:
      "We connect the tested AI directly into the software your team already uses every day (like your CRM, website or customer database) and add strict privacy locks to keep your data safe.",
    whatWeDo:
      "We integrate the AI into your daily tools, test it for fast response times and ensure sensitive customer information is completely protected.",
    whatYouReceive:
      "A fully functioning, live AI system connected to your everyday business software.",
    icon: FileCheck2,
  },
  {
    id: "phase-4",
    phaseNumber: "PHASE 04",
    weeks: "Ongoing",
    title: "Phase 4: Ongoing Monitoring & Updates (Ongoing)",
    summary:
      "We don’t disappear after launch. We monitor your live AI system to keep it fast and accurate and update it as your business introduces new products, services, or policies.",
    whatWeDo:
      "We track how the AI answers customer questions, fix any tricky edge cases, and refresh its knowledge base as your business grows.",
    whatYouReceive:
      "Regular performance reports, continuous accuracy tuning, and dependable long-term technical support.",
    icon: Activity,
  },
];

export default function ProcessTimeline() {
  const [activePhase, setActivePhase] = useState<string>("phase-1");

  return (
    <section id="process" className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] text-neutral-900 border-t border-neutral-200/70 overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ff5e00]/[0.035] rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            STEP-BY-STEP ROADMAP
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight mb-4">
            Our Step by Step Custom LLM Development Process
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            From initial data discovery to long-term autonomous monitoring, every phase is built around measurable checkpoints and working prototypes.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PROCESS_PHASES.map((phase) => (
            <div
              key={phase.id}
              className="group bg-white rounded-3xl p-7 border border-neutral-200/90 hover:border-[#ff5e00]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,114,48,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Phase Number & Duration Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-[#ff7230] uppercase tracking-wider bg-[#ff7230]/10 px-2.5 py-1 rounded-md">
                    {phase.phaseNumber}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md font-semibold">
                    <Clock className="w-3 h-3 text-[#ff7230]" />
                    {phase.weeks}
                  </span>
                </div>

                {/* H3 Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#ff5e00] transition-colors mb-3 leading-snug">
                  {phase.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-6">
                  {phase.summary}
                </p>
              </div>

              {/* What We Do & What You Receive Sub-Cards */}
              <div className="pt-5 border-t border-neutral-100 space-y-3.5">
                {/* What We Do */}
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
                    What We Do:
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {phase.whatWeDo}
                  </p>
                </div>

                {/* What You Receive */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1 flex items-center gap-1.5">
                    <Check className="w-3 h-3 stroke-[3] text-emerald-600" />
                    What You Receive:
                  </span>
                  <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                    {phase.whatYouReceive}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

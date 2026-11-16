"use client";

import React from "react";
import {
  AlertTriangle,
  Cpu,
  UserCheck,
  TrendingUp,
  MessageSquare,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";

const WORKFLOW_STAGES = [
  {
    step: "01",
    title: "Business Challenge",
    icon: <AlertTriangle className="w-5 h-5 text-[#FF7230]" />,
    description:
      "Businesses often receive supplier invoices through WhatsApp but still depend on manual data entry to update their accounting records in Tally Prime. This creates repetitive work, delays invoice processing and increases the possibility of data-entry errors.",
  },
  {
    step: "02",
    title: "AI Integration Workflow",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
    description:
      "An AI-powered workflow reads invoice PDFs received through WhatsApp, extracts details such as supplier information, GSTIN, invoice numbers and amounts, and checks them against predefined purchase records. Once validated, the extracted information is prepared as draft entries for Tally Prime, reducing manual data entry and repetitive verification.",
  },
  {
    step: "03",
    title: "Human-Controlled Processing",
    icon: <UserCheck className="w-5 h-5 text-[#FF7230]" />,
    description:
      "Before any transaction is recorded, finance teams can review the extracted information, correct discrepancies and approve the entries. This keeps accounting records under human control while allowing AI to handle repetitive processing tasks.",
  },
  {
    step: "04",
    title: "Business Value",
    icon: <TrendingUp className="w-5 h-5 text-[#FF7230]" />,
    description:
      "Faster invoice processing, reduced manual data entry and better coordination between WhatsApp communications and accounting operations.",
  },
];

export default function ProductionWorkflows() {
  return (
    <section
      id="workflows"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[780px] h-[380px] bg-[#FF7230]/[0.05] blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Production AI Integration Workflows for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Real Business Operations
            </span>
          </h2>
        </div>

        {/* Highlighted Workflow Banner */}
        <div className="rounded-[28px] border border-white/10 bg-[#120b07]/90 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-8 mb-8 border-b border-white/10">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF7230] mb-2">
                Production Blueprint
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                AI-Powered Invoice Processing with WhatsApp and Tally Prime
              </h3>
            </div>

            {/* Visual Flow Pill */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-neutral-200">
                <MessageSquare className="w-4 h-4 text-[#FF7230]" />
                WhatsApp PDF
              </span>
              <ArrowRight className="w-4 h-4 text-[#FF7230]" />
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-neutral-200">
                <Cpu className="w-4 h-4 text-[#FF7230]" />
                GSTIN &amp; Validation
              </span>
              <ArrowRight className="w-4 h-4 text-[#FF7230]" />
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/10 text-neutral-200">
                <UserCheck className="w-4 h-4 text-[#FF7230]" />
                Human Approval
              </span>
              <ArrowRight className="w-4 h-4 text-[#FF7230]" />
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-white font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #FF7230 0%, #FF6A2F 26%, #FF7631 44%, #FF8935 63%, #FF532B 100%)",
                }}
              >
                <FileSpreadsheet className="w-4 h-4 text-white" />
                Tally Prime
              </span>
            </div>
          </div>

          {/* 4-Stage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {WORKFLOW_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="rounded-2xl bg-[#18100b] border border-white/[0.08] hover:border-[#FF7230]/40 p-6 sm:p-7 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF7230]/10 border border-[#FF7230]/25 flex items-center justify-center flex-shrink-0">
                    {stage.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                      Stage {stage.step}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {stage.title}
                    </h4>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import {
  Workflow,
  Cpu,
  ShieldCheck,
  KeyRound,
  Database,
  Lock,
  Code2,
  CheckCircle2,
  Zap,
} from "lucide-react";

export default function OverviewMetrics() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header: Left Title, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
              Practical AI Business Consulting Focused on Real ROI, Not Slide Decks
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-2 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              Many enterprise leaders find that theoretical roadmaps from generic artificial intelligence consulting companies fail to deliver operational value. At Webnox Digital, our AI management consulting and engineering methodology ensures every dollar invested in artificial intelligence yields measurable business returns:
            </p>
          </div>
        </div>

        {/* Middle Feature Banner: Webnox Orange Gradient 2:2 Card */}
        <div
          className="relative w-full rounded-[22px] sm:rounded-[34px] p-6 sm:p-10 lg:p-14 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20 mb-10 sm:mb-14"
          style={{
            background:
              "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
          }}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* Left Column: 01 & 03 */}
            <div className="flex flex-col gap-6 sm:gap-12 md:pr-10 lg:pr-16 md:border-r border-white/30 pb-6 md:pb-0 border-b md:border-b-0 border-white/30">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Applied PoC Delivery
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest">
                        01
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      2–4 Weeks
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Working PoC Sandbox Validation
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Global Delivery Track Record
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest">
                        03
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      2,570+ Clients
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Served Across 20+ Countries
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 02 & 04 */}
            <div className="flex flex-col gap-6 sm:gap-12 md:pl-12 lg:pl-16 pt-6 md:pt-0">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Proven Engineering Heritage
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest">
                        02
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      15+ Years
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Software Engineering Experience
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Zero Lock-In Economics
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest">
                        04
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      100% IP Ownership
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Full Code &amp; Architecture Handover
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Methodology Pillars Grid with Animated Neumorphic Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {/* Card 1: Identify High Value Workflows */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div className="absolute w-32 h-32 rounded-full border border-neutral-200/80 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-neutral-300/70 border-dashed animate-spin [animation-duration:18s]" />
                </div>
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "cbFloatSoft 4s ease-in-out infinite" }}
                >
                  <Workflow className="w-6 h-6" />
                </div>
                <div className="absolute bottom-3 left-4 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-500">
                  <Database className="w-4 h-4" />
                </div>
                <div className="absolute top-3 right-4 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md mb-2">
                HIGH-ROI DISCOVERY
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Identify High Value Workflows
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Through our structured AI business consulting, we analyze your team&apos;s daily bottlenecks, data repositories, and manual touchpoints to uncover the highest ROI automation opportunities.
              </p>
            </div>
          </div>

          {/* Card 2: Working Software Over Theory */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-px bg-neutral-200/80 overflow-hidden">
                  <div
                    className="w-16 h-full bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                    style={{ animation: "llmBeamFlow 2.6s linear infinite" }}
                  />
                </div>
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "llmNodeGlow 2.4s ease-in-out infinite" }}
                >
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-500">
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md mb-2">
                APPLIED ENGINEERING
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Working Software Over Theory
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                We believe in applied AI consulting. Instead of multi month advisory studies, we build functional proof of concept (PoC) sandboxes within weeks so leadership can validate accuracy before full deployment.
              </p>
            </div>
          </div>

          {/* Card 3: Enterprise Security by Design */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-xl border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "llmNodeGlow 2.6s ease-in-out infinite" }}
                >
                  <ShieldCheck className="w-6 h-6" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="absolute bottom-3 right-4 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-600">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md mb-2">
                GDPR • HIPAA • SOC 2
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Enterprise Security by Design
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                We engineer private cloud environments on AWS, Azure, and Google Cloud with strict zero data retention controls, ensuring compliance with global GDPR, HIPAA, and SOC 2 standards.
              </p>
            </div>
          </div>

          {/* Card 4: 100% Intellectual Property Ownership */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-xl border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "cbFloatSoft 4s ease-in-out infinite" }}
                >
                  <KeyRound className="w-6 h-6" />
                </div>
                <div className="absolute left-4 bottom-3 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-600">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md mb-2">
                ZERO VENDOR LOCK-IN
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                100% Intellectual Property Ownership
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                You retain complete ownership of all custom source code, prompt libraries, and model architectures, protecting your AI consulting business investments without vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

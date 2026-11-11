"use client";

import React from "react";
import {
  Sparkles,
  Settings,
  HelpCircle,
  Cloud,
  DollarSign,
  Percent,
  BarChart3,
  Lock,
  ArrowRight,
  Database,
  Cpu,
  Brain,
  ShieldCheck,
  Layers,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export default function OverviewMetrics() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header: Left Title, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
              Production Engineering Benchmark
            </div>
            {/* Main Heading H2 */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
              Moving Beyond Simple Demos: We Build AI That Actually Works in Production
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-2 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Anyone can connect a basic AI chatbot. The real challenge is making AI work
              reliably inside your everyday business systems without crashing, leaking
              confidential data, or slowing down your team.
            </p>
            <p className="font-medium text-neutral-700">
              As an established artificial intelligence development company in india, Webnox Digital
              builds production grade software designed to scale:
            </p>
          </div>
        </div>

        {/* Middle Feature Banner: Webnox Orange Gradient 2:2 Card with Center Divider */}
        <div
          className="relative w-full rounded-[22px] sm:rounded-[34px] p-6 sm:p-10 lg:p-14 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20 mb-8 sm:mb-10"
          style={{
            background:
              "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          {/* 2:2 Grid with Center Divider */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* Left Column: 01 (Up) & 03 (Down) */}
            <div className="flex flex-col gap-8 sm:gap-12 md:pr-10 lg:pr-16 md:border-r border-white/30 pb-6 md:pb-0 border-b md:border-b-0 border-white/30">
              {/* 01: 15+ Years (Up) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Engineering Heritage
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                        01
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      15+ Years
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Software Engineering Heritage
                    </span>
                  </div>
                </div>
              </div>

              {/* 03: 2.8B+ Hours (Down) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Operational Impact
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                        03
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      2.8B+ Hours
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Manual Operational Work Automated
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 02 (Up) & 04 (Down) */}
            <div className="flex flex-col gap-10 sm:gap-12 md:pl-12 lg:pl-16 pt-8 md:pt-0">
              {/* 02: 2,570+ Clients (Up) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Global Scale
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                        02
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

              {/* 04: 75% Resolution & 35% Conversions (Down) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Conversion &amp; Accuracy
                </span>
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                        04
                      </span>
                    </div>
                    <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight block">
                      75% Resolution • +35% Conversions
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      100% In-House Team: Coimbatore HQ + Global Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoped CSS Keyframes for Rich Graphical Action */}
        <style>{`
          @keyframes floatGentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(7px); }
          }
          @keyframes streamPulse {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(350%); opacity: 0; }
          }
        `}</style>

        {/* Bottom 3 Cards with Neumorphic/Embossed Visual Top Graphic matching existing page layouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Connected to Your Existing Software */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 1: Concentric Cog Rings & Connected Floating Chips */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                <div className="absolute w-32 h-32 rounded-full border border-neutral-200/80 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-neutral-300/70 border-dashed flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230]">
                      <Settings className="w-8 h-8 animate-spin [animation-duration:12s]" />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-400 z-10"
                  style={{ animation: "floatGentle 4s ease-in-out infinite" }}
                >
                  <Database className="w-4 h-4 text-neutral-600" />
                </div>

                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-400 z-10"
                  style={{ animation: "floatReverse 4.5s ease-in-out 0.5s infinite" }}
                >
                  <Cloud className="w-4 h-4 text-neutral-600" />
                </div>

                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-neutral-200/80 -z-0 overflow-hidden">
                  <div
                    className="w-16 h-full bg-gradient-to-r from-transparent via-[#FF7230]/70 to-transparent"
                    style={{ animation: "streamPulse 3s linear infinite" }}
                  />
                </div>
              </div>

              {/* H3 Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug mb-3">
                Connected to Your Existing Software
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                We connect AI models directly to your current websites, mobile apps, CRM, and
                internal databases so your team can use AI without changing how they work.
              </p>
            </div>
          </div>

          {/* Card 2: Complete, Ready-to-Use Software */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 2: Embossed Grid Tiles with Live Action */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                <div className="grid grid-cols-3 gap-2.5 z-10">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-[#FF7230]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-blue-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-neutral-200 flex items-center justify-center text-emerald-500">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-radial from-orange-500/10 to-transparent pointer-events-none" />
              </div>

              {/* H3 Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug mb-3">
                Complete, Ready-to-Use Software
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                You get a fully tested, production-ready product with clean user screens, secure
                logins, and dependable performance from day one, not an unfinished demo.
              </p>
            </div>
          </div>

          {/* Card 3: Engineers Who Work With Your Team & Working Software in 4 to 8 Weeks */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 3: Radar Pulse & Speed Badge */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-orange-500/30 animate-ping [animation-duration:3s]" />
                  <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] shadow-md flex items-center justify-center text-white font-bold text-xs">
                    4-8 Wks
                  </div>
                </div>
              </div>

              {/* H3 Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug mb-3">
                Engineers Who Work With Your Team
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Our senior developers review your business processes and clean your data first,
                making sure the AI solves the right problems before writing code.
              </p>
              <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#FF7230]">
                <span>Working Software in 4 to 8 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

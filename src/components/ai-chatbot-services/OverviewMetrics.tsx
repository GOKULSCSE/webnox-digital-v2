"use client";

import React from "react";
import {
  FileCheck2,
  Zap,
  ShieldCheck,
  MessageCircle,
  Database,
  Lock,
  Code2,
  Send,
  Truck,
  Receipt,
  CheckCircle2,
} from "lucide-react";

export default function OverviewMetrics() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header: Left Title, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
              Custom AI Chatbot Development Company in India Built for Real Business Work
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-2 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed space-y-3 sm:space-y-4">
            <p>
              Webnox Digital is an AI development company focused on solving everyday operational and customer support challenges for businesses across India and global markets.
            </p>
            <p>
              Off-the-shelf chatbot widgets often fail when customers ask detailed follow-up questions, request account-specific information, or need to switch between English and regional languages. Our custom AI chatbots are engineered to handle real business workloads:
            </p>
          </div>
        </div>

        {/* Middle Feature Banner: Webnox Orange Gradient 2:2 Card with Center Divider */}
        <div
          className="relative w-full rounded-[22px] sm:rounded-[34px] p-6 sm:p-10 lg:p-14 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20 mb-10 sm:mb-14"
          style={{
            background:
              "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          {/* 2:2 Grid with Center Divider */}
          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* Left Column: 01 & 03 */}
            <div className="flex flex-col gap-8 sm:gap-12 md:pr-10 lg:pr-16 md:border-r border-white/30 pb-6 md:pb-0 border-b md:border-b-0 border-white/30">
              {/* 01 */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Rapid Sandbox Delivery
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
                      1–2 Weeks
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Working RAG Prototype on Your Data
                    </span>
                  </div>
                </div>
              </div>

              {/* 03 */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Global Delivery Track Record
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
                      2,570+ Clients
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Served Across 20+ Countries Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 02 & 04 */}
            <div className="flex flex-col gap-10 sm:gap-12 md:pl-12 lg:pl-16 pt-8 md:pt-0">
              {/* 02 */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Proven Engineering Heritage
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
                      15+ Years
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Software Engineering Experience
                    </span>
                  </div>
                </div>
              </div>

              {/* 04 */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Zero Lock-In Economics
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
                      100% Ownership
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Zero Per-Resolution SaaS Fees
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoped 60fps CSS Keyframes for Rich Card Visuals */}
        <style>{`
          @keyframes floatGentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(6px); }
          }
          @keyframes streamPulse {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(350%); opacity: 0; }
          }
          @keyframes radarExpand {
            0% { transform: scale(0.8); opacity: 0.75; }
            100% { transform: scale(1.65); opacity: 0; }
          }
          @keyframes matrixSweep {
            0% { transform: translateX(-100%) rotate(25deg); opacity: 0; }
            50% { opacity: 0.55; }
            100% { transform: translateX(250%) rotate(25deg); opacity: 0; }
          }
          @keyframes cellGlow {
            0%, 100% { opacity: 0.35; background-color: rgba(229, 231, 235, 0.7); }
            50% { opacity: 0.95; background-color: rgba(255, 114, 48, 0.22); border-color: rgba(255, 114, 48, 0.45); }
          }
        `}</style>

        {/* 4 Key Workload Pillars Grid with Animated Neumorphic Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {/* Card 1: Ground Answers in Verified Company Files */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Animated Graphic 1: Embossed Vector Matrix & Verified RAG Node */}
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div
                  className="absolute -inset-full pointer-events-none bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  style={{ animation: "matrixSweep 5s ease-in-out infinite" }}
                />
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 p-3 opacity-35">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-neutral-200/70 border border-neutral-300/40"
                      style={
                        i === 1 || i === 6 || i === 10
                          ? { animation: `cellGlow ${3 + (i % 3) * 0.6}s ease-in-out ${i * 0.2}s infinite` }
                          : undefined
                      }
                    />
                  ))}
                </div>
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "floatGentle 4s ease-in-out infinite" }}
                >
                  <FileCheck2 className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                </div>
                <div
                  className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-500 z-10"
                  style={{ animation: "floatReverse 4.5s ease-in-out 0.4s infinite" }}
                >
                  <Database className="w-4 h-4" />
                </div>
                <div
                  className="absolute top-3 right-4 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230] z-10"
                  style={{ animation: "floatGentle 3.8s ease-in-out 0.9s infinite" }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md">
                  VERIFIED RAG
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Ground Answers in Verified Company Files
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Using RAG, your chatbot retrieves accurate answers directly from your product catalogs, SOPs, policy PDFs and databases without hallucinating wrong information.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#ff7230]" />
                Production Ready
              </span>
              <Lock className="w-3.5 h-3.5 text-neutral-300" />
            </div>
          </div>

          {/* Card 2: Automate Real Actions */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Animated Graphic 2: Concentric Action Rings & Streaming Pipeline */}
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div className="absolute w-32 h-32 rounded-full border border-neutral-200/80 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-neutral-300/70 border-dashed animate-spin [animation-duration:18s] flex items-center justify-center" />
                </div>
                <div className="relative z-10 w-14 h-14 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-px bg-neutral-200/80 overflow-hidden">
                  <div
                    className="w-14 h-full bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                    style={{ animation: "streamPulse 2.8s linear infinite" }}
                  />
                </div>
                <div
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-600 z-10"
                  style={{ animation: "floatGentle 4s ease-in-out infinite" }}
                >
                  <Truck className="w-4 h-4" />
                </div>
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-600 z-10"
                  style={{ animation: "floatReverse 4.4s ease-in-out 0.5s infinite" }}
                >
                  <Receipt className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md">
                  ACTION EXECUTION
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Automate Real Actions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Look up live shipment tracking, check customer account balances, generate invoices and log qualified leads directly into your CRM.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#ff7230]" />
                Production Ready
              </span>
              <Lock className="w-3.5 h-3.5 text-neutral-300" />
            </div>
          </div>

          {/* Card 3: Zero Per-Resolution SaaS Fees */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Animated Graphic 3: Circuit Traces & Sovereign Ownership Shield */}
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 pointer-events-none">
                  <div className="relative w-full h-[1.5px] bg-neutral-200/80 overflow-hidden">
                    <div
                      className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                      style={{ animation: "streamPulse 2.4s linear infinite" }}
                    />
                  </div>
                  <div className="relative w-full h-[1.5px] bg-neutral-300/80 overflow-hidden">
                    <div
                      className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                      style={{ animation: "streamPulse 3.2s linear 0.9s infinite" }}
                    />
                  </div>
                  <div className="relative w-full h-[1.5px] bg-neutral-200/80 overflow-hidden">
                    <div
                      className="absolute top-0 h-full w-14 bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                      style={{ animation: "streamPulse 2.1s linear 1.4s infinite" }}
                    />
                  </div>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="absolute w-16 h-16 rounded-2xl border border-orange-500/35 pointer-events-none"
                    style={{ animation: "radarExpand 3s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                  />
                  <div className="relative w-14 h-14 rounded-2xl bg-white shadow-xl border border-neutral-200 flex items-center justify-center text-[#FF7230] group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck className="w-6 h-6" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
                <div
                  className="absolute left-4 bottom-3 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-600 z-10"
                  style={{ animation: "floatGentle 3.9s ease-in-out infinite" }}
                >
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md">
                  100% OWNERSHIP
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Zero Per-Resolution SaaS Fees
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                You own 100% of the custom application code and vector pipelines, eliminating rising monthly per-ticket SaaS fees.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#ff7230]" />
                Production Ready
              </span>
              <Lock className="w-3.5 h-3.5 text-neutral-300" />
            </div>
          </div>

          {/* Card 4: Native WhatsApp Integration */}
          <div className="group bg-white rounded-[26px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(255,114,48,0.14)] hover:border-orange-500/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Animated Graphic 4: WhatsApp Cloud API Ripple & Live Message Hub */}
              <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-5">
                <div
                  className="absolute w-20 h-20 rounded-full border border-emerald-500/30 pointer-events-none"
                  style={{ animation: "radarExpand 2.8s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                />
                <div
                  className="absolute w-20 h-20 rounded-full border border-[#FF7230]/25 pointer-events-none"
                  style={{ animation: "radarExpand 2.8s cubic-bezier(0, 0, 0.2, 1) 1.4s infinite" }}
                />
                <div
                  className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-xl border border-neutral-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "floatGentle 4.1s ease-in-out infinite" }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
                </div>
                <div
                  className="absolute right-4 top-3 w-8 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230] z-10"
                  style={{ animation: "floatReverse 3.7s ease-in-out 0.3s infinite" }}
                >
                  <Send className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded-full bg-white shadow-sm border border-neutral-200 flex items-center gap-1.5 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-neutral-600">CLOUD API</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff5e00] bg-[#ff5e00]/10 px-2.5 py-0.5 rounded-md">
                  WHATSAPP CLOUD API
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] group-hover:text-[#ff5e00] transition-colors tracking-tight leading-snug mb-2.5">
                Native WhatsApp Integration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Connect directly to the official WhatsApp Cloud API, allowing your Indian customers to interact on the channel they use every day.
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#ff7230]" />
                Production Ready
              </span>
              <Lock className="w-3.5 h-3.5 text-neutral-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

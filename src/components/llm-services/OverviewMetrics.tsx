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
  MoreHorizontal,
  ArrowRight,
  Database,
  Cpu,
  Brain,
  ShieldCheck,
} from "lucide-react";

export default function OverviewMetrics() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header: Left Title, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col">
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
              Custom LLM Development Backed by 15+ Years of Experience
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-3 text-neutral-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Off-the-shelf language models may not meet every business requirement. Custom LLM development adapts language models to specific tasks, connects them to your company data, and integrates them with existing software to improve information retrieval and automate workflows.
            </p>
            <p>
              As an AI-native company, Webnox Digital brings 15+ years of experience in software development, digital products, website development and digital marketing. With 2,570+ clients across 20+ countries and 20+ in-house products, we combine LLM engineering with software development expertise to build practical AI applications.
            </p>
          </div>
        </div>

        {/* Third paragraph banner note */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-orange-50/70 border border-orange-200/70 text-neutral-700 text-sm sm:text-[15px] leading-relaxed">
          <p>
            Our LLM development services include model API integration, retrieval-augmented generation (RAG), fine-tuning and workflow integration. We assess your business requirements, data and technical needs to choose the right approach. Before deployment, we test response quality, reliability, speed and security to help ensure the application works reliably and can be updated as your business grows.
          </p>
        </div>

        {/* Middle Feature Banner: Webnox Orange Gradient 2:2 Card with Center Divider */}
        <div
          className="relative w-full rounded-[28px] sm:rounded-[34px] p-8 sm:p-10 lg:p-14 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20 mb-8 sm:mb-10"
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
            <div className="flex flex-col gap-10 sm:gap-12 md:pr-12 lg:pr-16 md:border-r border-white/30 pb-8 md:pb-0 border-b md:border-b-0 border-white/30">
              {/* 01: Rapid AI Product Delivery (Up) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Speed to Deployment
                </span>
                <div className="flex items-center gap-4">
                  {/* Circular Tech Indicator */}
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
                      4 Weeks
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Rapid AI Product Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* 03: Clients Served (Down) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Global Reach
                </span>
                <div className="flex items-center gap-4">
                  {/* Circular Tech Indicator */}
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
                      Across 20+ Countries Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 02 (Up) & 04 (Down) */}
            <div className="flex flex-col gap-10 sm:gap-12 md:pl-12 lg:pl-16 pt-8 md:pt-0">
              {/* 02: Software Engineering Experience (Up) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Proven Heritage
                </span>
                <div className="flex items-center gap-4">
                  {/* Circular Tech Indicator */}
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

              {/* 04: In-House Products (Down) */}
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">
                  Product Engineering
                </span>
                <div className="flex items-center gap-4">
                  {/* Circular Tech Indicator */}
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
                      20+ In-House Products
                    </span>
                    <span className="text-xs sm:text-sm text-white/85 font-medium">
                      Built, Scaled & Maintained Internally
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
          @keyframes lockRadar {
            0% { transform: scale(0.85); opacity: 0.7; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          @keyframes matrixSweep {
            0% { transform: translateX(-100%) rotate(25deg); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateX(250%) rotate(25deg); opacity: 0; }
          }
          @keyframes cellGlow {
            0%, 100% { opacity: 0.3; background-color: rgba(229, 231, 235, 0.7); }
            50% { opacity: 0.95; background-color: rgba(255, 114, 48, 0.22); border-color: rgba(255, 114, 48, 0.4); }
          }
          @keyframes barGrow1 {
            0%, 100% { height: 35%; }
            50% { height: 85%; }
          }
          @keyframes barGrow2 {
            0%, 100% { height: 75%; }
            50% { height: 40%; }
          }
          @keyframes barGrow3 {
            0%, 100% { height: 45%; }
            50% { height: 95%; }
          }
        `}</style>

        {/* Bottom 3 Cards with Neumorphic/Embossed Visual Top Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Experience */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 1: Concentric Cog Rings & Connected Floating Chips */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                {/* Concentric rings */}
                <div className="absolute w-32 h-32 rounded-full border border-neutral-200/80 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-neutral-300/70 border-dashed flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230]">
                      <Settings className="w-8 h-8 animate-spin [animation-duration:12s]" />
                    </div>
                  </div>
                </div>

                {/* Left Floating Chip */}
                <div
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-400 z-10"
                  style={{ animation: "floatGentle 4s ease-in-out infinite" }}
                >
                  <HelpCircle className="w-4 h-4 text-neutral-500" />
                </div>

                {/* Right Floating Chip */}
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-400 z-10"
                  style={{ animation: "floatReverse 4.5s ease-in-out 0.5s infinite" }}
                >
                  <Cloud className="w-4 h-4 text-neutral-500" />
                </div>

                {/* Connecting horizontal line with dynamic light pulse */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-neutral-200/80 -z-0 overflow-hidden">
                  <div
                    className="w-16 h-full bg-gradient-to-r from-transparent via-[#FF7230]/70 to-transparent"
                    style={{ animation: "streamPulse 3s linear infinite" }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug mb-3">
                15+ Years Experience
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                15+ years of software engineering, website development, and digital marketing expertise across 2,570+ clients and 20+ countries, turning technical requirements into high-impact software.
              </p>
            </div>
          </div>

          {/* Card 2: Custom LLM Engineering */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 2: Embossed Grid Tiles with Floating Symbols & Live Data Actions */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                {/* Diagonal Light Sweep Beam */}
                <div
                  className="absolute -inset-full pointer-events-none bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{ animation: "matrixSweep 5s ease-in-out infinite" }}
                />

                {/* Soft background grid tiles */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 p-3 opacity-30">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-neutral-200/70 border border-neutral-300/40 transition-colors"
                      style={
                        i === 1
                          ? { animation: "cellGlow 3.5s ease-in-out 0.2s infinite" }
                          : i === 5
                          ? { animation: "cellGlow 4s ease-in-out 1.2s infinite" }
                          : i === 10
                          ? { animation: "cellGlow 3s ease-in-out 0.7s infinite" }
                          : undefined
                      }
                    />
                  ))}
                </div>

                {/* Floating Embossed Pills with Graphical Action */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-700 font-bold text-lg z-10"
                  style={{ animation: "floatGentle 4.2s ease-in-out infinite" }}
                >
                  <Brain className="w-6 h-6 text-[#FF7230]" />
                </div>

                <div
                  className="absolute bottom-5 left-10 w-11 h-11 rounded-2xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-500 font-bold z-10"
                  style={{ animation: "floatReverse 4.8s ease-in-out 0.8s infinite" }}
                >
                  <Database className="w-5 h-5 text-neutral-500" />
                </div>

                <div
                  className="absolute top-5 right-10 w-11 h-11 rounded-2xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230] z-10"
                  style={{ animation: "floatGentle 3.8s ease-in-out 1.5s infinite" }}
                >
                  {/* Dynamic Equalizer Bar Chart Animation */}
                  <div className="flex items-end gap-1 h-5 w-5 justify-center">
                    <span
                      className="w-1 bg-[#FF7230] rounded-full"
                      style={{ animation: "barGrow1 2.2s ease-in-out infinite" }}
                    />
                    <span
                      className="w-1 bg-[#FF7230] rounded-full"
                      style={{ animation: "barGrow2 2.5s ease-in-out infinite" }}
                    />
                    <span
                      className="w-1 bg-[#FF7230] rounded-full"
                      style={{ animation: "barGrow3 2s ease-in-out infinite" }}
                    />
                  </div>
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF7230] ring-2 ring-white animate-pulse" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug mb-3">
                LLM Engineering & RAG
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Expertise in model API integration, vector embeddings, reranking, hybrid search RAG pipelines, fine-tuning, and deterministic workflow routing tailored to corporate datasets.
              </p>
            </div>
          </div>

          {/* Card 3: Production Testing & Safety */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 3: Circuit Traces with Security Lock & Streaming Data Signals */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                {/* Horizontal circuit traces with streaming data pulses */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 pointer-events-none">
                  <div className="relative w-full h-[1.5px] bg-neutral-200/80 overflow-hidden">
                    <div
                      className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                      style={{ animation: "streamPulse 2.6s linear infinite" }}
                    />
                  </div>
                  <div className="relative w-full h-[1.5px] bg-neutral-300/80 overflow-hidden">
                    <div
                      className="absolute top-0 h-full w-24 bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                      style={{ animation: "streamPulse 3.5s linear 1s infinite" }}
                    />
                  </div>
                  <div className="relative w-full h-[1.5px] bg-neutral-200/80 overflow-hidden">
                    <div
                      className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-[#FF7230] to-transparent"
                      style={{ animation: "streamPulse 2.2s linear 1.7s infinite" }}
                    />
                  </div>
                </div>

                {/* Left floating network communicative badge */}
                <div
                  className="absolute left-6 top-1/2 -translate-y-1/2 px-2.5 h-8 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center gap-1.5 z-10"
                  style={{ animation: "floatGentle 4s ease-in-out infinite" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#FF7230] animate-pulse"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse"
                    style={{ animationDelay: "300ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse"
                    style={{ animationDelay: "600ms" }}
                  />
                </div>

                {/* Center Security Lock Badge with Radar Pulse */}
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="absolute w-20 h-24 rounded-2xl border border-orange-500/30 -z-0 pointer-events-none"
                    style={{ animation: "lockRadar 3s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                  />

                  <div className="relative w-16 h-20 rounded-2xl bg-white shadow-xl border border-neutral-200 flex flex-col items-center justify-center gap-1">
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
                    <div className="w-7 h-7 rounded-t-full border-2 border-neutral-400 border-b-0 -mt-2 bg-transparent" />
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                      <Lock className="w-4 h-4 text-neutral-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#12141a] tracking-tight leading-snug mb-3">
                Production Testing & Safety
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Before deployment, we thoroughly test response quality, factual grounding, latency, token costs, prompt safety, and access permissions so systems remain stable as usage grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

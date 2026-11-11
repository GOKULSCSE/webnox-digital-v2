"use client";

import React from "react";
import {
  Settings,
  HelpCircle,
  Cloud,
  DollarSign,
  Percent,
  Lock,
  ArrowRight,
  Award,
  Globe2,
} from "lucide-react";

const MILESTONES = [
  {
    number: "01",
    stat: "15+ Years",
    label: "Software Development Experience",
  },
  {
    number: "02",
    stat: "2,570+",
    label: "Clients Served",
  },
  {
    number: "03",
    stat: "20+",
    label: "Own Digital Products",
  },
  {
    number: "04",
    stat: "20+",
    label: "Countries Served",
  },
  {
    number: "05",
    stat: "15+",
    label: "Awards and Recognition",
  },
];

export default function OverviewMetrics() {
  return (
    <section
      id="overview"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header: Left Title, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-16">
          <div className="lg:col-span-6 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
              Custom AI Development Company in India for Business Innovation
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center lg:pt-1 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              An AI native approach makes software smarter by integrating artificial intelligence into everyday business operations. At Webnox Digital, we develop AI-powered applications and intelligent agents that automatically process data, handle repetitive tasks, respond to requests, manage workflows and connect different business systems. From understanding your requirements and identifying automation opportunities to developing, integrating, testing and deploying AI solutions, we manage the process end to end. Our solutions combine Generative AI, LLMs, AI agents and workflow automation to reduce manual effort, improve operational efficiency and help businesses complete tasks faster with greater accuracy.
            </p>
          </div>
        </div>

        {/* Middle Feature Banner: Webnox Orange Gradient Card for 4-Week AI Idea Launch */}
        <div
          className="relative w-full rounded-[22px] sm:rounded-[34px] p-6 sm:p-10 lg:p-14 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20 mb-14 sm:mb-20"
          style={{
            background:
              "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18),inset_0_1px_2px_rgba(255,255,255,0.7)] backdrop-blur-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                    <span className="font-mono text-xs font-black text-white tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                      4W
                    </span>
                  </div>
                  <span className="absolute -top-0.5 right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Turn Your AI Idea into Reality in 4 Weeks
                </h3>
              </div>

              <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                Ready to build smarter? Partner with Webnox Digital to transform your idea into an AI-powered product with expert development, intelligent automation and seamless integration.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-[#12141a] font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-[0_8px_28px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_34px_rgba(0,0,0,0.26)] transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Let&apos;s Build Your AI Product</span>
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>
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

        {/* Part 2: Milestones That Define Our AI Expertise */}
        <div className="mb-10 sm:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
                Milestones That Define Our AI Expertise
              </h2>
            </div>
            <div className="lg:col-span-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                Our experience across software development, digital products and technology solutions provides a strong foundation for AI engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Semantic Unordered List (<ul>) with Neumorphic/Embossed Animated Visual Top Graphics */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 list-none p-0 m-0">
          {/* Milestone 1: 15+ Years – Software Development Experience */}
          <li className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
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
                  <HelpCircle className="w-4 h-4 text-neutral-500" />
                </div>
                <div
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-400 z-10"
                  style={{ animation: "floatReverse 4.5s ease-in-out 0.5s infinite" }}
                >
                  <Cloud className="w-4 h-4 text-neutral-500" />
                </div>
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-neutral-200/80 -z-0 overflow-hidden">
                  <div
                    className="w-16 h-full bg-gradient-to-r from-transparent via-[#FF7230]/70 to-transparent"
                    style={{ animation: "streamPulse 3s linear infinite" }}
                  />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] to-[#FF532B] tracking-tight">
                {MILESTONES[0].stat}
              </div>
              <span className="sr-only"> – </span>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#12141a] leading-snug">
                {MILESTONES[0].label}
              </p>
            </div>
          </li>

          {/* Milestone 2: 2,570+ – Clients Served */}
          <li className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                <div
                  className="absolute -inset-full pointer-events-none bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  style={{ animation: "matrixSweep 5s ease-in-out infinite" }}
                />
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
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white shadow-lg border border-neutral-200 flex items-center justify-center text-neutral-700 font-bold text-lg z-10"
                  style={{ animation: "floatGentle 4.2s ease-in-out infinite" }}
                >
                  <DollarSign className="w-6 h-6 text-neutral-600" />
                </div>
                <div
                  className="absolute bottom-5 left-10 w-11 h-11 rounded-2xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-neutral-500 font-bold z-10"
                  style={{ animation: "floatReverse 4.8s ease-in-out 0.8s infinite" }}
                >
                  <Percent className="w-5 h-5 text-neutral-500" />
                </div>
                <div
                  className="absolute top-5 right-10 w-11 h-11 rounded-2xl bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230] z-10"
                  style={{ animation: "floatGentle 3.8s ease-in-out 1.5s infinite" }}
                >
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
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] to-[#FF532B] tracking-tight">
                {MILESTONES[1].stat}
              </div>
              <span className="sr-only"> – </span>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#12141a] leading-snug">
                {MILESTONES[1].label}
              </p>
            </div>
          </li>

          {/* Milestone 3: 20+ – Own Digital Products */}
          <li className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="w-full h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
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
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] to-[#FF532B] tracking-tight">
                {MILESTONES[2].stat}
              </div>
              <span className="sr-only"> – </span>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#12141a] leading-snug">
                {MILESTONES[2].label}
              </p>
            </div>
          </li>

          {/* Milestone 4: 20+ – Countries Served */}
          <li className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden lg:col-span-1">
            <div>
              <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full border border-neutral-300/70 border-dashed flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230]">
                    <Globe2 className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] to-[#FF532B] tracking-tight">
                {MILESTONES[3].stat}
              </div>
              <span className="sr-only"> – </span>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#12141a] leading-snug">
                {MILESTONES[3].label}
              </p>
            </div>
          </li>

          {/* Milestone 5: 15+ – Awards and Recognition */}
          <li className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden lg:col-span-2">
            <div>
              <div className="w-full h-36 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full border border-neutral-300/70 border-dashed flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white shadow-md border border-neutral-200 flex items-center justify-center text-[#FF7230]">
                    <Award className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] to-[#FF532B] tracking-tight">
                {MILESTONES[4].stat}
              </div>
              <span className="sr-only"> – </span>
              <p className="mt-2 text-base sm:text-lg font-bold text-[#12141a] leading-snug">
                {MILESTONES[4].label}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

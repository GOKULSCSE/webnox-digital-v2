"use client";

import React from "react";
import {
  Settings,
  HelpCircle,
  Cloud,
  DollarSign,
  Percent,
  Lock,
} from "lucide-react";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
            Webnox Digital – An AI-Native Company Driving Intelligent Business Solutions
          </h2>
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

        {/* 3 Cards with Neumorphic/Embossed Visual Top Graphic matching /ai-application-development-services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Paragraph 1 */}
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

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Webnox Digital is an AI-native technology company with 15+ years of experience, 2,570+ clients and a presence across 20+ countries. We develop AI-powered solutions that help businesses improve operations, connect systems and adopt intelligent technologies.
              </p>
            </div>
          </div>

          {/* Card 2: Paragraph 2 */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 2: Embossed Grid Tiles with Floating Symbols & Live Data Actions */}
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

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Being an AI-native company means integrating artificial intelligence into the way we approach technology, software development and business solutions. Rather than treating AI as an add-on, we place intelligence at the core of solution design and development.
              </p>
            </div>
          </div>

          {/* Card 3: Paragraph 3 */}
          <div className="group bg-white rounded-[26px] sm:rounded-[30px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Graphic 3: Circuit Traces with Security Lock & Streaming Data Signals */}
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

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Our AI capabilities cover AI integration, AI development, generative AI, AI agent development and workflow automation. Through our AI Integration Services, we connect AI models, APIs, enterprise applications and business data to introduce intelligent capabilities into existing technology environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

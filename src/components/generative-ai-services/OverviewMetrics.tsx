"use client";

import React from "react";
import { Lock } from "lucide-react";

interface MultiplierItem {
  number: string;
  title: string;
  description: string;
}

const MULTIPLIERS: MultiplierItem[] = [
  {
    number: "01",
    title: "10× Faster Knowledge Discovery",
    description:
      "Connect enterprise data, documents and knowledge bases with RAG powered AI to retrieve relevant information through natural language queries.",
  },
  {
    number: "02",
    title: "50%+ Automation Potential",
    description:
      "Automate repetitive and knowledge intensive workflows using Generative AI, intelligent agents and AI powered process automation.",
  },
  {
    number: "03",
    title: "24/7 Always On AI Assistance",
    description:
      "Deploy AI assistants that continuously support customers and employees across websites, applications and digital channels.",
  },
  {
    number: "04",
    title: "5× Faster Workflow Execution",
    description:
      "Combine LLMs, AI agents, APIs, and automation to streamline multi-step workflows and accelerate task execution.",
  },
  {
    number: "05",
    title: "90%+ Information Processing Potential",
    description:
      "Use Generative AI to classify, summarise, extract, transform and analyse large volumes of documents and business information.",
  },
  {
    number: "06",
    title: "360° End to End AI Transformation",
    description:
      "Connect AI strategy, application development, integration, deployment, evaluation and optimisation across the complete technology lifecycle.",
  },
];

export default function OverviewMetrics() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header: Left Title, Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.18]">
              Generative AI Solutions Backed by Deep Technology Experience
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-1 text-neutral-600 text-sm sm:text-base leading-relaxed space-y-3">
            <p>
              Webnox Digital develops Generative AI solutions that turn foundation models into
              practical applications for real business requirements. With 15+ years of technology
              experience, 2,570+ clients, 20+ own products and experience across 20+ countries, we
              bring established engineering expertise to Generative AI implementation.
            </p>
            <p>
              We connect large language models with business data, applications, APIs and enterprise
              systems to build AI solutions that understand the right context and support real
              business needs. Depending on the use case, we use RAG, model customisation, multimodal
              AI, tool integration and workflow automation.
            </p>
            <p>
              We also focus on security, testing, scalability and deployment to ensure Generative AI
              applications are reliable, practical and ready for business use.
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141a]">
            Business Focused Generative AI Solutions That Multiply Productivity
          </h3>
        </div>

        {/* Middle Feature Banner: Webnox Orange Gradient 6-Item Card */}
        <div
          className="relative w-full rounded-[28px] sm:rounded-[34px] p-8 sm:p-10 lg:p-12 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20 mb-8 sm:mb-10"
          style={{
            background:
              "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          {/* 6 Multipliers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {MULTIPLIERS.map((item) => (
              <div key={item.number} className="flex flex-col">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="relative flex-shrink-0 w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-b from-white/50 via-white/20 to-white/5 shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white/15 border border-white/35 flex items-center justify-center shadow-inner">
                      <span className="font-mono text-xs font-black text-white tracking-wider">
                        {item.number}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-normal pl-[54px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Bottom Interactive Architecture Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Visual Card 1: 3 Spinning Cogs */}
          <div className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div
                  className="absolute w-20 h-20 rounded-full border-4 border-dashed border-orange-500/70"
                  style={{ animation: "spinClockwise 14s linear infinite" }}
                />
                <div
                  className="absolute w-12 h-12 rounded-full border-4 border-dashed border-neutral-400/80"
                  style={{ animation: "spinCounterClockwise 8s linear infinite" }}
                />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF7230] to-[#FF532B] shadow-md z-10" />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-[#12141a] tracking-tight">
                10× Faster Knowledge Discovery
              </h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Connect enterprise data, documents and knowledge bases with RAG powered AI to retrieve relevant information through natural language queries.
              </p>
            </div>
          </div>

          {/* Visual Card 2: Live Animated Data Chart */}
          <div className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center">
              <div className="w-full px-6 flex items-end justify-center gap-2.5 h-24">
                <div className="w-4 bg-orange-200 rounded-t-md h-12 animate-pulse" />
                <div className="w-4 bg-orange-300 rounded-t-md h-16 animate-pulse" style={{ animationDelay: "200ms" }} />
                <div className="w-4 bg-[#FF7230] rounded-t-md h-20 animate-pulse" style={{ animationDelay: "400ms" }} />
                <div className="w-4 bg-[#FF532B] rounded-t-md h-24 animate-pulse" style={{ animationDelay: "600ms" }} />
                <div className="w-4 bg-orange-400 rounded-t-md h-18 animate-pulse" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-[#12141a] tracking-tight">
                50%+ Automation Potential
              </h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Automate repetitive and knowledge intensive workflows using Generative AI, intelligent agents and AI powered process automation.
              </p>
            </div>
          </div>

          {/* Visual Card 3: Floating Radar Lock */}
          <div className="bg-white rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef2f6] border border-neutral-200/60 relative overflow-hidden flex items-center justify-center">
              <div className="relative w-16 h-20 rounded-2xl bg-white shadow-xl border border-neutral-200 flex flex-col items-center justify-center gap-1 z-10">
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
                <div className="w-7 h-7 rounded-t-full border-2 border-neutral-400 border-b-0 -mt-2 bg-transparent" />
                <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                  <Lock className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-bold text-[#12141a] tracking-tight">
                24/7 Always On AI Assistance
              </h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Deploy AI assistants that continuously support customers and employees across websites, applications and digital channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

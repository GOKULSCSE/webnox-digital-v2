"use client";

import React from "react";
import { Clock, CheckCircle2, TrendingUp, Zap, Sparkles, Trophy, Users, Box, Globe, Award } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const BUSINESS_METRICS: MetricItem[] = [
  {
    value: "2.8B+",
    label: "Hours of manual work automated",
    icon: <Clock className="w-5 h-5 text-white" />,
  },
  {
    value: "75%",
    label: "of queries resolved with AI powered systems",
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
  },
  {
    value: "35%",
    label: "higher conversions through AI-driven personalization",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
  {
    value: "18%",
    label: "increase in workforce productivity",
    icon: <Zap className="w-5 h-5 text-white" />,
  },
  {
    value: "1.2%",
    label: "annual business growth supported by AI innovation",
    icon: <Sparkles className="w-5 h-5 text-white" />,
  },
  {
    value: "55%",
    label: "revenue boost through intelligent process automation",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
];

interface MilestoneItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const MILESTONES: MilestoneItem[] = [
  {
    number: "15+",
    label: "Years of Experience",
    icon: <Trophy className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "2,570+",
    label: "Clients Served",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "20+",
    label: "Own Products",
    icon: <Box className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "20+",
    label: "Countries Served",
    icon: <Globe className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    number: "15+",
    label: "Awards and Recognition",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
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
              Build Your AI Product in 4 Weeks with Webnox Digital
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-1 text-neutral-600 text-sm sm:text-base leading-relaxed">
            <p>
              Webnox Digital combines 15+ years of software engineering experience with AI and software development to build AI-powered software, applications, SaaS products and business systems. Our teams develop web and mobile applications, integrate AI models with existing software and connect AI with business data, APIs and workflows.
            </p>
          </div>
        </div>

        {/* Middle Feature Banner: Solar Orange Gradient 6-Stat Matrix */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141a]">
              AI Software Delivering Business Results
            </h3>
            <p className="mt-2 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl">
              Webnox Digital AI development Service helps businesses improve operational efficiency, customer engagement, productivity and revenue.
            </p>
          </div>

          <div
            className="relative w-full rounded-[28px] sm:rounded-[34px] p-8 sm:p-10 lg:p-12 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20"
            style={{
              background:
                "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
            }}
          >
            {/* Subtle Ambient Sheen */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {BUSINESS_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      {metric.value}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {metric.icon}
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-white/95 font-medium leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones That Define Our AI Expertise */}
        <div className="pt-8 border-t border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12141a]">
              Milestones That Define Our AI Expertise
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {MILESTONES.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-[#FF7230]/40 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center mb-3 group-hover:bg-[#FF7230]/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-1">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm text-neutral-600 font-medium leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

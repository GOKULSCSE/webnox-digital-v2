"use client";

import React from "react";
import {
  FileText,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle,
  Zap,
  DollarSign,
  ShoppingCart,
  Percent,
  Timer,
  ArrowRight,
} from "lucide-react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
            Proven Enterprise Deployments
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Real-World AI Case Studies: Delivering Measurable Business Impact
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Examine how our production AI engineering solves complex operational bottlenecks, cuts manual review cycles, and accelerates revenue growth.
          </p>
        </div>

        {/* 2 Detailed Case Studies Grid */}
        <div className="space-y-12 sm:space-y-16">
          {/* Case Study 1: FinTech */}
          <div className="relative bg-white rounded-[32px] p-8 sm:p-12 border border-neutral-200/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(255,114,48,0.12)] transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <FileText className="w-3.5 h-3.5" />
                      FinTech & Banking
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">Production Deployed</span>
                  </div>

                  {/* H3 Heading */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#12141a] tracking-tight leading-snug">
                    FinTech: Autonomous Financial Document Parsing & Fraud Detection
                  </h3>

                  {/* Challenge (H4) */}
                  <div className="mt-6 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-1.5">
                      The Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                      A multi-national lending institution faced an 8-day turnaround time to
                      manually review loan applications, balance sheets, and bank statements across 4
                      different languages.
                    </p>
                  </div>

                  {/* Solution (H4) */}
                  <div className="mt-4 p-5 rounded-2xl bg-orange-50/50 border border-orange-200/60">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#FF7230] mb-1.5">
                      The Solution
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                      We architected an OCR + Fine-Tuned LLM pipeline coupled with a deterministic rule
                      engine to extract financial ratios, flag balance sheet discrepancies, and detect
                      fraudulent signatures.
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-neutral-100">
                  <span className="text-xs text-neutral-400 font-medium">Architecture:</span>
                  {["Vision OCR", "Fine-Tuned LLM", "Deterministic Rule Engine", "Multilingual Parser"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Impact & Results (H4) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-gradient-to-br from-[#160a04] to-[#251006] text-white p-7 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#ff8935]">
                      Impact & Results
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-ping" />
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#ff8935] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white">8 Days → &lt; 12 Mins</div>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                          Application review time decreased from 8 days to under 12 minutes.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white">99.2% Accuracy</div>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                          Extraction accuracy maintained at 99.2% across 50,000+ monthly documents.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white">$420,000+ Saved</div>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                          Annual operational cost savings exceeding $420,000.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Zero Manual Overhead</span>
                  <span className="text-[#ff8935] font-semibold">100% Deterministic Verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: E-Commerce & Retail */}
          <div className="relative bg-white rounded-[32px] p-8 sm:p-12 border border-neutral-200/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(255,114,48,0.12)] transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Challenge & Solution */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      E-Commerce & Retail
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">High Concurrency</span>
                  </div>

                  {/* H3 Heading */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#12141a] tracking-tight leading-snug">
                    E-Commerce & Retail: Multi-Agent Personalization & Dynamic Pricing Engine
                  </h3>

                  {/* Challenge (H4) */}
                  <div className="mt-6 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-500 mb-1.5">
                      The Challenge
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                      A high-volume online marketplace struggled with static pricing models and cart
                      abandonment rates hovering at 74%.
                    </p>
                  </div>

                  {/* Solution (H4) */}
                  <div className="mt-4 p-5 rounded-2xl bg-orange-50/50 border border-orange-200/60">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#FF7230] mb-1.5">
                      The Solution
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                      Deployed a multi-agent reinforcement learning system that monitors competitor
                      price changes in real time, forecasts inventory velocity and generates dynamic
                      bundle recommendations.
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-6 pt-5 border-t border-neutral-100">
                  <span className="text-xs text-neutral-400 font-medium">Architecture:</span>
                  {["Multi-Agent RL", "Real-Time Competitor Scraper", "Vector Embeddings", "Ultra-Low Latency Caching"].map(
                    (tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Impact & Results (H4) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-gradient-to-br from-[#160a04] to-[#251006] text-white p-7 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#ff8935]">
                      Impact & Results
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-ping" />
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#ff8935] flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white">+18.4% Conversions</div>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                          18.4% increase in gross checkout conversion rates.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <Percent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white">+14.2% Margin</div>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                          14.2% margin expansion through optimized dynamic discounting.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                        <Timer className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-extrabold text-white">&lt; 85ms Latency</div>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                          Real-time recommendation latency kept strictly below 85 milliseconds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Reinforcement Learning</span>
                  <span className="text-[#ff8935] font-semibold">Sub-85ms Live Inference</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Workflow, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

const MILESTONES: Milestone[] = [
  {
    year: "2011",
    badge: "FOUNDATION",
    title: "The Software Builders Era",
    description:
      "Webnox Digital began with a singular focus: architecting rock-solid software, responsive web platforms, and measurable digital growth channels that deliver true business ROI.",
    highlights: [
      "Custom ERP & database development",
      "High-traffic ecommerce architectures",
      "Performance-focused digital marketing",
    ],
  },
  {
    year: "2018",
    badge: "GLOBAL EXPANSION",
    title: "Scaling 2,570+ Businesses Worldwide",
    description:
      "Over a decade of delivery across 20+ countries exposed a recurring industry dilemma: businesses were forced to coordinate disjointed vendors—developers who didn't understand growth, and marketers who couldn't write code.",
    highlights: [
      "Over 2,570 digital systems delivered",
      "Identified critical gaps in vendor fragmentation",
      "Began early automation & workflow tooling",
    ],
  },
  {
    year: "Today",
    badge: "THE AI-NATIVE PIVOT",
    title: "Re-engineered for the AI Era",
    description:
      "We rebuilt Webnox Digital from the ground up. AI isn't an external chatbot bolt-on; it is woven directly into how our senior engineers write code, conduct QA, automate back-office operations, and accelerate client growth.",
    highlights: [
      "Autonomous agent workflows & private RAG",
      "AI-driven coding & instant CI/CD validation",
      "Single synchronized team for engineering + growth",
    ],
  },
];

export default function StoryEvolution() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#100602] text-white overflow-hidden selection:bg-[#ff5e00] selection:text-white">
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 10%, #240e05 0%, #120703 55%, #0a0402 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute left-[-15%] top-[40%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.12) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header & Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Left Column: Heading & Badges */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
              OUR STORY & EVOLUTION
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              From Software Builders to an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                AI-Native Company
              </span>
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light mb-6">
              Fifteen years ago, software was written line by line with manual testing and fragmented handoffs. Today, artificial intelligence has fundamentally redefined what is possible.
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 text-[#ff8935] font-semibold text-sm mb-1">
                <Workflow className="w-4 h-4 text-[#ff7230]" />
                The Core Realization
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                AI is not just an extra add-on or a customer-service chatbot. It is a completely smarter, faster, and more resilient way to architect software and manage company workflows.
              </p>
            </div>
          </div>

          {/* Right Column: Full Story Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-light lg:pt-8 border-l border-white/10 lg:pl-10">
            <p className="text-white/95 text-lg sm:text-xl font-normal leading-relaxed">
              Started in 2011, Webnox Digital began with a clear goal: build reliable software, websites, and digital marketing that bring real business results. Over the past fifteen years, we have built custom software, online stores and business tools for over 2,570 businesses worldwide.
            </p>

            <p>
              Along the way, we saw the companies faced to manage separate teams for software, marketing and extra tools that never talked to each other. Developers built applications with zero marketing context, while marketing agencies ran campaigns disconnected from the underlying technology stack.
            </p>

            <p>
              We realized that artificial intelligence is not just an extra add on, but a completely smarter way to build software and run a business. We rebuilt Webnox Digital into an AI native company, using AI directly in how we write code, handle daily work, and run marketing.
            </p>

            <p className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#ff5e00]/15 to-transparent border-l-2 border-[#ff7230] text-neutral-200">
              Today, Webnox Digital brings custom software development, practical AI tools and digital marketing together under one single team giving you one trusted partner to build, automate and grow your business.
            </p>
          </div>
        </div>

        {/* Evolutionary Milestones Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl sm:rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-[#ff5e00]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Year & Badge Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 group-hover:from-[#ff7230] group-hover:to-[#ff8935] transition-all">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-[#ff5e00]/15 text-[#ff8935] border border-[#ff5e00]/30 font-semibold uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff8935] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-5 border-t border-white/10 flex flex-col gap-2.5">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7230] flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


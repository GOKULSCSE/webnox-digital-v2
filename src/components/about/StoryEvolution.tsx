"use client";

import React from "react";

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Badge */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5e00]/15 border border-[#ff5e00]/30 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
              OUR STORY & EVOLUTION
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              From Software Builders to an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
                AI-Native Company
              </span>
            </h2>
          </div>

          {/* Right Column: Full Story Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-light lg:pt-2 border-l border-white/10 lg:pl-10">
            <p className="text-white/95 text-lg sm:text-xl font-normal leading-relaxed">
              Started in 2011, Webnox Digital began with a clear goal: build reliable software, websites, and digital marketing that bring real business results. Over the past fifteen years, we have built custom software, online stores and business tools for over 2,570 businesses worldwide. Along the way, we saw the companies faced to manage separate teams for software, marketing and extra tools that never talked to each other.
            </p>

            <p className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#ff5e00]/15 to-transparent border-l-2 border-[#ff7230] text-neutral-200">
              We realized that artificial intelligence is not just an extra add on, but a completely smarter way to build software and run a business. We rebuilt Webnox Digital into an AI native company, using AI directly in how we write code, handle daily work, and run marketing. Today, Webnox Digital brings custom software development, practical AI tools and digital marketing together under one single team giving you one trusted partner to build, automate and grow your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


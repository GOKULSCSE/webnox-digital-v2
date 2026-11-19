"use client";

import React from "react";
import { ShieldCheck, Lock, Cloud, FileCode2 } from "lucide-react";

const PILLARS = [
  {
    title: "Stops AI from Guessing",
    description:
      "Your AI checks your real company files before replying, and gives you a direct link to the exact page it used so you can trust every answer.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Keeps Private Files Safe",
    description:
      "We set up clear access rules, making sure employees only see the specific files and records they are allowed to view.",
    icon: <Lock className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "100% Private Cloud Hosting",
    description:
      "Your files stay inside your own secure cloud accounts (like AWS, Azure, or Google Cloud) and are never used to train public AI.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "You Own All Code and Data",
    description:
      "You own 100% of all software, search tools, and databases we build, with zero extra monthly fees.",
    icon: <FileCode2 className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Custom RAG Development Company Built for Real Enterprise Data
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Most regular AI tools struggle because they do not know your private business facts, or might accidentally show secret records to the wrong people. At Webnox Digital, our retrieval augmented generation services fix these problems:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-[#12141a] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-neutral-700 text-sm sm:text-base md:text-lg font-medium max-w-4xl">
          Backed by 15+ years of software experience across 20+ countries, Webnox Digital turns your company files into a smart, accurate AI tool your team can trust.
        </p>
      </div>
    </section>
  );
}

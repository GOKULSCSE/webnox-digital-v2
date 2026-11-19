"use client";

import React from "react";
import {
  Award,
  Rocket,
  Building2,
  Globe,
  ShieldCheck,
  Clock,
} from "lucide-react";

const INDIA_STRENGTHS = [
  {
    title: "India’s Most Trusted IoT Software Talent",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "End-to-End Execution from Idea to Scale",
    icon: <Rocket className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Solutions Trusted by SMEs to Global Enterprises",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Seamless Multi-Region IoT Platform Expertise",
    icon: <Globe className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Secure, Cloud-Native IoT Architecture",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "On-Time Delivery with Cost-Effective Models",
    icon: <Clock className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function WhyIndiaSection() {
  return (
    <section
      id="why-india"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            World-Class IoT Software Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Company in India
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            We develop intelligent, scalable IoT software solutions for enterprises to enhance efficiency, automate processes, and unlock real-time insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {INDIA_STRENGTHS.map((item) => (
            <div
              key={item.title}
              className="rounded-[22px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/45 p-7 flex items-start gap-4 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug pt-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

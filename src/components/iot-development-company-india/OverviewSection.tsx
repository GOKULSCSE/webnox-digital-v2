"use client";

import React from "react";
import { Cpu, Globe2, Layers, Wifi } from "lucide-react";

const DIFFERENTIATORS = [
  {
    title: "Custom-Built IoT Solutions",
    description:
      "We build tailored IoT applications & software that solve your real problems within your budget and timeline.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Cross-Industry Expertise",
    description:
      "From concept to deployment, our advanced IoT development services adapt to every industry’s unique digital needs.",
    icon: <Globe2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "End-to-End Development",
    description:
      "We handle everything from strategy to launch, ensuring performance, security, and long-term scalability for your product.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Reliable Connectivity",
    description:
      "Our solutions ensure seamless device communication with robust, real-time data transfer across networks and environments.",
    icon: <Wifi className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Custom IoT Development Company in India Built for Business Efficiency
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            For fourteen years, we have helped businesses adopt IoT with confidence, delivering secure, scalable solutions that meet real needs, budgets and timelines.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Technologies is an end-to-end IoT (Internet of Things) development company in India, delivering custom IoT apps, software and connected solutions for diverse industries. We help businesses automate operations, reduce costs, gain real time insights and improve customer experiences. Our IoT development services cover complete solution design, device integration, data platforms and application development. We focus on building reliable, scalable systems aligned to your goals, budget and delivery timelines while ensuring long term value and business growth.
          </p>
        </div>

        <div id="why-us" className="pt-12 sm:pt-16 border-t border-neutral-200/80">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#12141a] leading-tight">
              What Sets Our IoT Development Company in India Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {DIFFERENTIATORS.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-white border border-neutral-200/80 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#12141a] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

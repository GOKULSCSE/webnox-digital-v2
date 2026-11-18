"use client";

import React from "react";
import {
  BrainCircuit,
  Award,
  Layers,
  Sliders,
  ShieldCheck,
  Globe,
  ArrowRight,
} from "lucide-react";

const WHY_ITEMS = [
  {
    title: "AI-Native Engineering",
    description:
      "Integrate artificial intelligence and machine learning into connected systems for intelligent monitoring, data analysis and automated operations.",
    icon: <BrainCircuit className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "15+ Years of Experience",
    description:
      "Apply our software engineering experience to embedded systems, cloud architecture and complex enterprise application requirements.",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "End-to-End IoT Development",
    description:
      "Manage firmware, hardware integration, cloud platforms, mobile applications and enterprise connectivity through one engineering team.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Flexible Technology Stack",
    description:
      "Select suitable microcontrollers, communication protocols and cloud platforms according to your product requirements.",
    icon: <Sliders className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Security-Focused Architecture",
    description:
      "Implement device authentication, encrypted communication, access controls and secure firmware updates to protect connected systems.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Global Project Delivery",
    description:
      "Work with an engineering team serving businesses across India, North America, the UK, Europe and international markets.",
    icon: <Globe className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Why Choose Webnox Digital for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              IoT Development Services?
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Choosing the right IoT development company requires expertise in connected hardware, embedded software, cloud infrastructure and application integration. Webnox Digital combines these capabilities to develop custom IoT solutions that support business requirements, system reliability and future scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 rounded-[24px] bg-[#140b06] border border-white/10 p-7 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm sm:text-base md:text-lg text-neutral-200 font-normal leading-relaxed max-w-2xl">
            Planning an IoT project? Discuss your hardware, software and connectivity requirements with our engineering team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white shrink-0 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_24px_rgba(255,114,48,0.28)]"
            style={{
              background:
                "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
            }}
          >
            <span>Talk to Our IoT Experts</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

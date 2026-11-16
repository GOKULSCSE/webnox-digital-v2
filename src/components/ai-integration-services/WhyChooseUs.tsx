"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Database,
  Layers,
  Target,
  ShieldCheck,
  Gauge,
  ArrowRight,
} from "lucide-react";

interface CapabilityItem {
  id: string;
  tabTitle: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "01-ai-native",
    tabTitle: "01. AI-Native Approach",
    icon: <Cpu className="w-4 h-4" />,
    heading: "01. AI-Native Approach",
    description:
      "We integrate AI into software and business solutions, considering intelligent capabilities from the initial development stage.",
  },
  {
    id: "02-software-experience",
    tabTitle: "02. 15+ Years of Software Experience",
    icon: <Database className="w-4 h-4" />,
    heading: "02. 15+ Years of Software Experience",
    description:
      "Our software engineering experience supports AI integration across web applications, mobile platforms and enterprise systems.",
  },
  {
    id: "03-model-api",
    tabTitle: "03. AI Model and API Integration",
    icon: <Layers className="w-4 h-4" />,
    heading: "03. AI Model and API Integration",
    description:
      "We connect AI models, LLMs and APIs with existing applications to support intelligent business functionality.",
  },
  {
    id: "04-business-app",
    tabTitle: "04. Business Application Integration",
    icon: <Target className="w-4 h-4" />,
    heading: "04. Business Application Integration",
    description:
      "We integrate AI capabilities with CRM, ERP, databases and other business applications to improve system connectivity.",
  },
  {
    id: "05-custom-solutions",
    tabTitle: "05. Custom AI Integration Solutions",
    icon: <ShieldCheck className="w-4 h-4" />,
    heading: "05. Custom AI Integration Solutions",
    description:
      "We define integration approaches based on your business objectives, existing infrastructure and technical requirements.",
  },
  {
    id: "06-scalable-architecture",
    tabTitle: "06. Scalable Integration Architecture",
    icon: <Gauge className="w-4 h-4" />,
    heading: "06. Scalable Integration Architecture",
    description:
      "We plan AI system integration to support application compatibility, efficient data exchange and future business requirements.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = CAPABILITIES[activeIndex];

  return (
    <section
      id="why-us"
      className="relative w-full py-28 sm:py-36 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Choose Webnox Digital for{" "}
            <span className="text-[#FF7230]">AI Integration Services?</span>
          </h2>
          <p className="mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Webnox Digital combines AI engineering and software development experience to deliver AI integration solutions that connect intelligent technologies with existing business systems and applications.
          </p>
        </div>

        {/* 3-Column Showcase Layout matching /ai-application-development-services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: Selector List (6 items) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 justify-between">
            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "border-transparent text-white shadow-lg shadow-orange-950/40"
                      : "bg-[#140e0a]/80 border-white/[0.08] hover:bg-[#1c130d] hover:border-white/20 text-neutral-300"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                        }
                      : undefined
                  }
                >
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 border border-white/40 text-white shadow-inner"
                        : "bg-white/[0.06] border border-white/[0.08] text-neutral-400"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`text-xs sm:text-[13px] font-bold leading-snug tracking-tight ${
                      isActive ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {item.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Middle Column: The Brown Card */}
          <div
            className="lg:col-span-5 relative rounded-[22px] sm:rounded-[34px] border border-white/10 p-5 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]"
            style={{
              background:
                "linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)",
            }}
          >
            {/* Corner diagonal arrow watermark */}
            <svg
              className="absolute right-[-10px] bottom-[-10px] w-36 sm:w-48 h-36 sm:h-48 text-[#FF7230]/[0.08] pointer-events-none select-none stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex flex-col h-full justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-4 sm:mb-6">
                    {activeItem.heading}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-200/90 leading-relaxed font-normal">
                    {activeItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF8935] hover:text-white transition-colors"
                  >
                    <span>
                      Discuss Your AI Integration Requirements with Webnox Digital
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: AI Crystal Sphere Orb Card */}
          <div className="lg:col-span-3 relative rounded-[22px] sm:rounded-[34px] border border-white/10 overflow-hidden shadow-2xl bg-[#0d0805] h-52 sm:h-72 lg:h-auto min-h-[220px] sm:min-h-[320px] lg:min-h-[460px] flex items-center justify-center">
            <img
              src="/images/ai-crystal-orb.jpg"
              alt="AI-Native Engineering Crystal Orb"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Semantic SEO Block so all 6 H3s & descriptions remain present in DOM */}
        <div className="sr-only">
          {CAPABILITIES.map((cap) => (
            <div key={cap.id}>
              <h3>{cap.heading}</h3>
              <p>{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF7230] to-[#FF532B] hover:from-[#ff8144] hover:to-[#ff633f] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_8px_28px_rgba(255,114,48,0.3)] hover:shadow-[0_12px_34px_rgba(255,114,48,0.45)] transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer text-center"
          >
            <span>
              Discuss Your AI Integration Requirements with Webnox Digital
            </span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

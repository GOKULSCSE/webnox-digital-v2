"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  PackageCheck,
  Cpu,
  Sparkles,
} from "lucide-react";

interface CapabilityItem {
  id: string;
  tabTitle: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
}

const WHY_CHOOSE_ITEMS: CapabilityItem[] = [
  {
    id: "software-engineering",
    tabTitle: "15+ Years of Software Engineering",
    icon: <Code className="w-4 h-4" />,
    heading: "15+ Years of Software Engineering",
    description:
      "Webnox brings 15+ years of software development experience across web, mobile, SaaS, APIs, databases, and digital products, providing a strong engineering foundation for AI solutions.",
  },
  {
    id: "complete-product",
    tabTitle: "Complete Product, Not Just an MVP",
    icon: <PackageCheck className="w-4 h-4" />,
    heading: "Complete Product, Not Just an MVP",
    description:
      "Webnox focuses on delivering the complete AI product within the planned development timeline, rather than using the initial delivery phase only to provide an MVP.",
  },
  {
    id: "forward-deployed",
    tabTitle: "Forward Deployed AI Development",
    icon: <Cpu className="w-4 h-4" />,
    heading: "Forward Deployed AI Development",
    description:
      "Our Forward-Deployed AI Engineers work closely with business requirements, users, data, software and workflows to develop AI solutions within the real operating environment, not as isolated AI prototypes.",
  },
  {
    id: "ai-native",
    tabTitle: "AI-Native by Approach",
    icon: <Sparkles className="w-4 h-4" />,
    heading: "AI-Native by Approach",
    description:
      "As an AI-native company, Webnox uses AI across our own research, planning, development, testing, analysis and delivery processes. This AI-first way of working helps our teams develop products faster, automate repetitive work, make better technical decisions and continuously improve the solutions we deliver.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = WHY_CHOOSE_ITEMS[activeIndex];

  return (
    <section id="why-us" className="relative w-full py-24 sm:py-32 bg-[#030303] text-white overflow-hidden">
      {/* Background Ambience */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-[600px] pointer-events-none -z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[#FF7230]/10 via-[#FF6A2F]/5 to-transparent blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            The Webnox Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Businesses Choose Webnox as AI Development Company
          </h2>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Selector List (4 items) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {WHY_CHOOSE_ITEMS.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 transition-all duration-300 cursor-pointer border ${
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
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 border border-white/40 text-white shadow-inner"
                        : "bg-white/[0.06] border border-white/[0.08] text-neutral-400"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`text-sm sm:text-base font-bold leading-snug tracking-tight ${
                      isActive ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {item.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Middle Column: The Brown Card (Expanded Width) */}
          <div
            className="lg:col-span-5 relative rounded-[28px] sm:rounded-[34px] border border-white/10 p-7 sm:p-9 md:p-10 flex flex-col justify-center overflow-hidden shadow-2xl min-h-[460px]"
            style={{
              background:
                "linear-gradient(152.18deg, #60290B -16.91%, #140B06 99.34%)",
            }}
          >
            {/* Corner diagonal arrow watermark */}
            <svg
              className="absolute right-[-10px] bottom-[-10px] w-48 h-48 text-[#FF7230]/[0.08] pointer-events-none select-none stroke-current"
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
                className="relative z-10 flex flex-col justify-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#FF8935] mb-6">
                  {activeItem.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
                  {activeItem.heading}
                </h3>

                <p className="text-sm sm:text-base text-neutral-200/90 leading-relaxed font-normal">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: AI Crystal Sphere Orb Card */}
          <div className="lg:col-span-3 relative rounded-[28px] sm:rounded-[34px] border border-white/10 overflow-hidden shadow-2xl bg-[#0d0805] min-h-[460px] flex items-center justify-center">
            <img
              src="/images/ai-crystal-orb.jpg"
              alt="Webnox AI Development Engineering"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

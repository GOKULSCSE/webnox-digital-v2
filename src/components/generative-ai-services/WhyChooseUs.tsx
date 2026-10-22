"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  RefreshCw,
  Target,
} from "lucide-react";

interface CapabilityItem {
  id: string;
  tabTitle: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
}

const GENAI_CAPABILITIES: CapabilityItem[] = [
  {
    id: "ai-native",
    tabTitle: "AI-Native Engineering",
    icon: <Cpu className="w-4 h-4" />,
    heading: "AI-Native Engineering",
    description:
      "Generative AI is not treated as an isolated add-on. It fits into our broader AI-native engineering approach, where AI can influence how products, workflows, software, and digital experiences are designed and built.",
  },
  {
    id: "product-ai",
    tabTitle: "Product + AI Engineering",
    icon: <Layers className="w-4 h-4" />,
    heading: "Product + AI Engineering",
    description:
      "We combine AI capabilities with software engineering so GenAI becomes part of a usable product or workflow—not just a model demo.",
  },
  {
    id: "model-agnostic",
    tabTitle: "Model-Agnostic Architecture",
    icon: <RefreshCw className="w-4 h-4" />,
    heading: "Model-Agnostic Architecture",
    description:
      "The best model today may not be the best model tomorrow. Where appropriate, we design architectures that can work across proprietary and open models rather than unnecessarily locking the product to one provider.",
  },
  {
    id: "business-data",
    tabTitle: "Business Data Integration",
    icon: <Database className="w-4 h-4" />,
    heading: "Business Data Integration",
    description:
      "Your AI solution can work with the business data, documents, APIs, applications, and systems that contain the context it needs.",
  },
  {
    id: "production-first",
    tabTitle: "Production-First Development",
    icon: <ShieldCheck className="w-4 h-4" />,
    heading: "Production-First Development",
    description:
      "A successful demo is not the finish line. We consider evaluation, security, scalability, cost, monitoring, reliability, and user experience as part of the engineering process.",
  },
  {
    id: "continuous-evolution",
    tabTitle: "Built for Continuous AI Evolution",
    icon: <Target className="w-4 h-4" />,
    heading: "Built for Continuous AI Evolution",
    description:
      "Generative AI is changing quickly. We design systems that can evolve as models, tools, workflows, and business requirements change.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = GENAI_CAPABILITIES[activeIndex];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#030303] text-white overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Webnox for Generative AI Development?
          </h2>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Selector List (6 items) */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-between">
            {GENAI_CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-3 sm:p-3.5 rounded-2xl flex items-center gap-3 transition-all duration-300 cursor-pointer border ${
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
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
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

          {/* Middle Column: The Brown Card (Expanded Width) */}
          <div
            className="lg:col-span-6 relative rounded-[28px] sm:rounded-[34px] border border-white/10 p-7 sm:p-9 md:p-10 flex flex-col justify-center overflow-hidden shadow-2xl min-h-[460px]"
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
              alt="Webnox Generative AI Engineering Orb"
              className="w-full h-full object-cover object-center select-none pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

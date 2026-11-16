"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Code2,
  Award,
  Target,
  Layers,
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
    id: "01-engineering-team",
    tabTitle: "Experienced AI Engineering Team",
    icon: <Users className="w-4 h-4" />,
    heading: "Experienced AI Engineering Team",
    description:
      "Work directly with experienced AI engineers who manage architecture, development and system integration based on your business requirements.",
  },
  {
    id: "02-code-ownership",
    tabTitle: "Complete Code Ownership",
    icon: <Code2 className="w-4 h-4" />,
    heading: "Complete Code Ownership",
    description:
      "Get full access to source code, deployment configurations and technical documentation, keeping your AI integration solution under your control.",
  },
  {
    id: "03-product-experience",
    tabTitle: "Proven AI Product Experience",
    icon: <Award className="w-4 h-4" />,
    heading: "Proven AI Product Experience",
    description:
      "Benefit from practical experience gained through Bull Machine and SEO Copilot, delivering measurable improvements in business operations and productivity.",
  },
  {
    id: "04-business-focused",
    tabTitle: "Business-Focused Solutions",
    icon: <Target className="w-4 h-4" />,
    heading: "Business-Focused Solutions",
    description:
      "We select suitable AI models, APIs and software technologies based on your workflows, operational needs and business objectives.",
  },
  {
    id: "05-existing-systems",
    tabTitle: "Integration with Existing Systems",
    icon: <Layers className="w-4 h-4" />,
    heading: "Integration with Existing Systems",
    description:
      "Connect AI with platforms such as Tally Prime, Zoho, Odoo, WhatsApp and existing ERP or CRM applications.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = CAPABILITIES[activeIndex];

  return (
    <section
      id="why-us"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-center leading-[1.2] tracking-tight text-white">
            Why Choose Webnox Digital as Your{" "}
            <span className="text-[#FF7230]">AI Integration Company in India?</span>
          </h2>
          <p className="mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Webnox Digital combines AI engineering expertise and business understanding to deliver reliable AI integration solutions that work with your existing systems.
          </p>
        </div>

        {/* Interactive Selector + Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Column: Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            {CAPABILITIES.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 transition-all duration-300 cursor-pointer border ${
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
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white/[0.05] text-[#FF7230]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-semibold text-sm sm:text-base flex-1">
                    {item.tabTitle}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? "translate-x-0.5 text-white" : "text-neutral-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Detail Card */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-[28px] bg-[#120b07] border border-white/10 p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 114, 48, 0.16) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
                aria-hidden="true"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center text-[#FF7230] mb-6">
                      {activeItem.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                      {activeItem.heading}
                    </h3>
                    <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                      {activeItem.description}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                      0{activeIndex + 1} / 0{CAPABILITIES.length}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF7230] hover:text-[#FF8935] transition-colors"
                    >
                      <span>Book an Architecture Scoping Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


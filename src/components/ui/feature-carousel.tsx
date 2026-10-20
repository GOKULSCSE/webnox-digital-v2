"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Pizza04Icon,
  CommandFreeIcons,
  GlobalSearchIcon,
  AiCloudIcon,
  SmartPhone01Icon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cpu,
  Sparkles,
  Bot,
  Brain,
  Network,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureItem {
  id: string;
  label: string;
  category?: string;
  icon?: any;
  lucideIcon?: React.ReactNode;
  image: string;
  description: string;
  capabilities?: string[];
  ctaText?: string;
  ctaLink?: string;
}

// 6 Webnox Services matching "Our Range of AI Application Development Services"
export const WEBNOX_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "custom-ai",
    label: "Custom AI Application Development",
    category: "Full-Stack AI Software",
    lucideIcon: <Cpu className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    description:
      "Build custom AI applications with business specific features, user interfaces, backend services and data connections. We develop internal tools, customer-facing platforms and AI-enabled software products based on your functional and technical requirements.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "generative-ai",
    label: "Generative AI Application Development",
    category: "Multimodal & Synthesis",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
    description:
      "Develop generative AI applications for document analysis, content generation, summarisation and conversational experiences. We connect suitable language or multimodal models with relevant data, output validation and application-level access controls.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "ai-agents",
    label: "AI Agent Development and Workflow Automation",
    category: "Autonomous Systems",
    lucideIcon: <Bot className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description:
      "Develop AI agents that retrieve information, use approved tools and perform defined multi-step tasks. We implement workflow orchestration, permission controls and human approval points to help manage automated business operations.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "llm-apps",
    label: "LLM Application Development",
    category: "RAG & Language Models",
    lucideIcon: <Brain className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
    description:
      "Integrate large language models into applications for question answering, information extraction and structured outputs. Where appropriate, we use retrieval-augmented generation (RAG) to connect responses with relevant business documents and knowledge sources.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "integration-services",
    label: "AI Application Integration Services",
    category: "APIs & Ecosystems",
    lucideIcon: <Network className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description:
      "Add AI capabilities to existing web applications, SaaS products and enterprise systems through APIs and data connectors. Integration planning covers authentication, data permissions, system compatibility, error handling and operational requirements.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "analytics-decision",
    label: "AI-Powered Analytics and Decision Support",
    category: "Predictive Intelligence",
    lucideIcon: <TrendingUp className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description:
      "Develop applications that analyse business data, identify patterns and present useful insights. Depending on the use case, solutions can include forecasting, recommendation systems and natural-language analytics supported by defined evaluation criteria.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
];

// Default General Features from Template with reliable Unsplash stock photos
export const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: "sustainable",
    label: "Sustainable Sourcing",
    icon: Pizza04Icon,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200",
    description: "Ethically sourced ingredients from local farmers.",
  },
  {
    id: "community",
    label: "Community Focused",
    icon: CommandFreeIcons,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    description: "Building stronger bonds through shared experiences.",
  },
  {
    id: "global",
    label: "Global Reach",
    icon: GlobalSearchIcon,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description: "Connecting visionaries across all continents.",
  },
  {
    id: "award",
    label: "Award Winning",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1200",
    description: "Recognized excellence in design and innovation.",
  },
  {
    id: "cloud",
    label: "Cloud Ready",
    icon: AiCloudIcon,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description: "Scale your infrastructure with seamless ease.",
  },
  {
    id: "mobile",
    label: "Mobile First",
    icon: SmartPhone01Icon,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description: "A world-class experience on every single device.",
  },
  {
    id: "analytics",
    label: "Real-time Analytics",
    icon: DashboardSquare01Icon,
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description: "Insights at your fingertips, updated in real-time.",
  },
  {
    id: "security",
    label: "Enterprise Security",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    description: "Bank-grade security protocols for your data.",
  },
  {
    id: "magic",
    label: "Magic Automations",
    icon: MagicWandIcon,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    description: "Let AI handle the repetitive tasks for you.",
  },
  {
    id: "local",
    label: "Locally Owned",
    icon: CheckmarkCircle01Icon,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
    description: "Supporting local businesses and creators.",
  },
];

const AUTO_PLAY_INTERVAL = 3800;
const ITEM_HEIGHT = 68;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface FeatureCarouselProps {
  features?: FeatureItem[];
  theme?: "webnox" | "blue" | "dark";
  className?: string;
}

export function FeatureCarousel({
  features = WEBNOX_SERVICES_FEATURES,
  theme = "webnox",
  className = "",
}: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeFeatures = features && features.length > 0 ? features : WEBNOX_SERVICES_FEATURES;
  const count = activeFeatures.length;

  const currentIndex = ((step % count) + count) % count;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + count) % count;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    let normalizedDiff = diff;
    if (diff > count / 2) normalizedDiff -= count;
    if (diff < -count / 2) normalizedDiff += count;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  // Theme-synchronized styling variables
  const isWebnoxTheme = theme === "webnox";
  const leftBgClass = isWebnoxTheme
    ? "bg-[#FF7230] bg-cover bg-center"
    : theme === "dark"
    ? "bg-[#12141a]"
    : "bg-[#62B2FE]";

  const topFadeClass = isWebnoxTheme
    ? "bg-gradient-to-b from-[#FF7230] via-[#FF7230]/80 to-transparent"
    : theme === "dark"
    ? "bg-gradient-to-b from-[#12141a] via-[#12141a]/80 to-transparent"
    : "bg-gradient-to-b from-[#62B2FE] via-[#62B2FE]/80 to-transparent";

  const bottomFadeClass = isWebnoxTheme
    ? "bg-gradient-to-t from-[#FF532B] via-[#FF532B]/80 to-transparent"
    : theme === "dark"
    ? "bg-gradient-to-t from-[#12141a] via-[#12141a]/80 to-transparent"
    : "bg-gradient-to-t from-[#62B2FE] via-[#62B2FE]/80 to-transparent";

  const activeChipClass = isWebnoxTheme
    ? "bg-white text-[#FF7230] border-white shadow-lg shadow-orange-950/20 z-10"
    : theme === "dark"
    ? "bg-[#ff5e00] text-white border-[#ff5e00] shadow-lg z-10"
    : "bg-white text-[#62B2FE] border-white z-10";

  const activeIconClass = isWebnoxTheme
    ? "text-[#FF7230]"
    : theme === "dark"
    ? "text-white"
    : "text-[#62B2FE]";

  return (
    <div className={cn("w-full max-w-7xl mx-auto select-none", className)}>
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] flex flex-col lg:flex-row min-h-[620px] lg:aspect-[16/10] border border-neutral-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-white">
        
        {/* Left Side: Interactive vertical scrolling chips list with WD Grad.svg */}
        <div
          className={cn(
            "w-full lg:w-[44%] min-h-[400px] md:min-h-[460px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 sm:px-8 md:px-12 lg:pl-12",
            leftBgClass
          )}
          style={
            isWebnoxTheme
              ? {
                  backgroundImage: "url('/WD Grad.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {/* Ambient WD Grad SVG Background */}
          {isWebnoxTheme && (
            <img
              src="/WD Grad.svg"
              alt="Webnox Orange Gradient"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none -z-0 select-none"
              draggable={false}
            />
          )}

          {/* Top and Bottom Fading Gradients */}
          <div className={cn("absolute inset-x-0 top-0 h-16 md:h-24 lg:h-20 z-40 pointer-events-none", topFadeClass)} />
          <div className={cn("absolute inset-x-0 bottom-0 h-16 md:h-24 lg:h-20 z-40 pointer-events-none", bottomFadeClass)} />

          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20 py-8">
            {activeFeatures.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(count / 2),
                count / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.28,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    type="button"
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 px-5 sm:px-6 md:px-7 py-3 md:py-3.5 rounded-full transition-all duration-500 text-left group border cursor-pointer max-w-[90vw] lg:max-w-[360px]",
                      isActive
                        ? activeChipClass
                        : "bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-300 flex-shrink-0",
                        isActive ? activeIconClass : "text-white/60"
                      )}
                    >
                      {feature.lucideIcon ? (
                        feature.lucideIcon
                      ) : feature.icon ? (
                        <HugeiconsIcon
                          icon={feature.icon}
                          size={18}
                          strokeWidth={2}
                        />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-xs sm:text-[13px] tracking-tight truncate">
                        {index + 1}. {feature.label}
                      </span>
                      {feature.category && (
                        <span className="text-[10px] font-medium opacity-80 truncate hidden sm:inline-block">
                          {feature.category}
                        </span>
                      )}
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Image Preview Card with Depth & Slide Animation */}
        <div className="flex-1 min-h-[500px] md:min-h-[580px] lg:h-full relative bg-[#fcf8f2] flex items-center justify-center py-10 md:py-14 px-6 md:px-10 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-neutral-200/80">
          <div className="relative w-full max-w-[440px] aspect-[4/5] flex items-center justify-center">
            {activeFeatures.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -110 : isNext ? 110 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.86 : 0.72,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3.5 : isNext ? 3.5 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-white bg-white shadow-2xl origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0 scale-100"
                        : "grayscale blur-[2px] brightness-75 scale-105"
                    )}
                  />

                  {/* Information Overlay */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-6 sm:p-7 md:p-8 pt-28 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end text-white"
                      >
                        {/* Service Badge Tag */}
                        <div className="bg-white/95 backdrop-blur-md text-[#12141a] px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit shadow-md mb-2.5">
                          {index + 1} • {feature.label}
                        </div>

                        {/* Description */}
                        <p className="text-white font-medium text-xs sm:text-sm leading-relaxed drop-shadow-sm tracking-tight mb-4">
                          {feature.description}
                        </p>

                        {/* CTA Link */}
                        <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                          <a
                            href={feature.ctaLink || "#contact"}
                            className="text-xs font-bold text-white hover:text-orange-300 transition-colors inline-flex items-center gap-1.5"
                          >
                            <span>{feature.ctaText || "Talk to Our AI Experts"}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <span className="text-[10px] text-white/60">
                            Production Ready
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Live Status indicator */}
                  <div
                    className={cn(
                      "absolute top-6 left-6 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#ff5e00] shadow-[0_0_8px_#ff5e00] animate-pulse" />
                    <span className="text-white text-[10px] font-semibold tracking-wider font-mono uppercase">
                      AI Native Engineering
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;

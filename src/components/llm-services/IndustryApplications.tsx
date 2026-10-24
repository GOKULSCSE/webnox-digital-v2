"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Cpu,
  Truck,
} from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface IndustrySector {
  id: number;
  title: string;
  sector: string;
  content: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const LLM_INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 1,
    title: "Healthcare",
    sector: "Sector 01",
    content:
      "Support healthcare information management with clinical document summarisation, medical knowledge retrieval, and administrative workflow assistance.",
    category: "Healthcare",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
  },
  {
    id: 2,
    title: "Banking and Finance",
    sector: "Sector 02",
    content:
      "Apply LLM technology to financial document analysis, internal knowledge search, report summarisation, and compliance-related workflows with appropriate human oversight.",
    category: "Banking & Finance",
    icon: Landmark,
    image: "/images/industries/banking.jpg",
  },
  {
    id: 3,
    title: "Retail and E-commerce",
    sector: "Sector 03",
    content:
      "Enhance customer experiences with AI shopping assistants, product discovery, product information search, and automated customer support.",
    category: "Retail & E-commerce",
    icon: ShoppingCart,
    image: "/images/industries/retail.jpg",
  },
  {
    id: 4,
    title: "Education and E-learning",
    sector: "Sector 04",
    content:
      "Build AI learning assistants, educational content tools, and knowledge retrieval applications that help learners and educators access relevant information.",
    category: "Education & EdTech",
    icon: GraduationCap,
    image: "/images/industries/education.jpg",
  },
  {
    id: 5,
    title: "SaaS and Technology",
    sector: "Sector 05",
    content:
      "Integrate large language models into SaaS products for natural-language search, intelligent assistants, content generation, and AI-powered product features.",
    category: "SaaS & Technology",
    icon: Cpu,
    image: "/images/industries/technology.jpg",
  },
  {
    id: 6,
    title: "Manufacturing and Logistics",
    sector: "Sector 06",
    content:
      "Use LLM applications to search technical documentation, retrieve operational knowledge, summarise reports, and support access to process information.",
    category: "Manufacturing & Logistics",
    icon: Truck,
    image: "/images/industries/manufacturing.jpg",
  },
];

export default function IndustryApplications() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#160a04] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Deep Brown Background Gradient Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #2e1307 0%, #1a0b04 45%, #120702 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient Warm Orange Glow behind CardSwap */}
      <div
        className="absolute right-0 lg:right-[-2%] top-[55%] -translate-y-1/2 w-[700px] lg:w-[950px] h-[700px] lg:h-[950px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.35) 0%, rgba(255, 94, 0, 0.15) 38%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top-Left Warm Vignette */}
      <div
        className="absolute left-[-10%] top-[-10%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header - Top Center */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Industries We Serve with{" "}
            <span className="text-[#FF7230]">LLM Development</span> Service
          </h2>
        </div>

        {/* 2-Column: Text on Left, CardSwap on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              Webnox Digital develops LLM-powered applications that help businesses process information, improve knowledge access, and streamline industry-specific workflows.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light mt-4">
              From regulated banking and healthcare environments requiring strict audit trails to rapid-scale SaaS platforms, we tailor retrieval, fine-tuning, and deployment to meet compliance and operational targets.
            </p>
          </div>

          {/* Right Column: CardSwap 3D Interactive Stack */}
          <div className="lg:col-span-7 relative w-full h-[540px] sm:h-[600px] lg:h-[640px] flex items-center justify-center">
            <CardSwap
              width={440}
              height={320}
              cardDistance={48}
              verticalDistance={55}
              depth={75}
              skewAmount={5}
              visibleCards={4}
              delay={4000}
              theme="dark"
            >
              {LLM_INDUSTRY_SECTORS.map((sector) => {
                const Icon = sector.icon;
                return (
                  <Card
                    key={sector.id}
                    className="overflow-hidden relative flex flex-col justify-between group rounded-[18px] border border-white/10"
                  >
                    {/* Background Image with Cinematic Edge-to-Edge Visibility */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                        draggable={false}
                      />
                      {/* Ambient cinematic vignette that keeps the full image vivid while ensuring text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
                    </div>

                    {/* Top Bar: Sector Tag + Icon */}
                    <div className="relative z-10 p-5 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-neutral-200 shadow-sm">
                        {sector.sector}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FF7230]/25 backdrop-blur-md border border-[#FF7230]/50 flex items-center justify-center text-[#FF7230] shadow-[0_0_14px_rgba(255,114,48,0.4)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Content: Title + Description */}
                    <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal line-clamp-3 drop-shadow-sm">
                        {sector.content}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}

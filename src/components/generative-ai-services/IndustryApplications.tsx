"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  GraduationCap,
  Cpu,
} from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface IndustrySector {
  id: number;
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 1,
    title: "Healthcare",
    content:
      "Knowledge assistants, document intelligence, patient-support systems, medical information workflows, and administrative automation.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Finance",
    content:
      "Document processing, knowledge assistants, report generation, customer support, and workflow automation.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Retail & E-commerce",
    content:
      "Product content generation, conversational shopping assistants, personalization, recommendations, and customer support.",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Manufacturing",
    content:
      "Technical knowledge assistants, maintenance documentation, production support, document processing, and operational workflows.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Logistics",
    content:
      "Operations assistants, document processing, customer communication, knowledge retrieval, and workflow automation.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Education",
    content:
      "AI tutors, learning assistants, content generation, knowledge systems, and administrative automation.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "SaaS & Technology",
    content:
      "AI copilots, intelligent search, AI-powered product features, developer tools, support assistants, and AI-native SaaS products.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
  },
];

export default function IndustryApplications() {
  return (
    <section id="industries" className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7230]/[0.05] blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Generative AI Solutions for Different Industries
          </h2>
        </div>

        {/* CardSwap 3D Interactive Stack */}
        <div className="relative w-full max-w-4xl mx-auto h-[540px] sm:h-[600px] lg:h-[640px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 bg-[#0d0906]/90 overflow-hidden shadow-2xl flex items-center justify-center p-4">
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
            {INDUSTRY_SECTORS.map((sector) => {
              const Icon = sector.icon;
              return (
                <Card
                  key={sector.id}
                  className="overflow-hidden relative flex flex-col justify-between group rounded-[18px] border border-white/10"
                >
                  {/* Background Image with Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover object-center brightness-[0.7] group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0906] via-[#0d0906]/65 to-[#0d0906]/35" />
                  </div>

                  {/* Top Bar: Icon */}
                  <div className="relative z-10 p-5 flex items-center justify-end">
                    <div className="w-9 h-9 rounded-full bg-[#FF7230]/20 backdrop-blur-md border border-[#FF7230]/40 flex items-center justify-center text-[#FF7230] shadow-[0_0_12px_rgba(255,114,48,0.35)]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Content: Title + Content */}
                  <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black via-black/85 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                      {sector.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {sector.content}
                    </p>
                  </div>
                </Card>
              );
            })}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

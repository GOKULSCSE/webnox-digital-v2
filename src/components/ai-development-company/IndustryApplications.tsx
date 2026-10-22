"use client";

import React from "react";
import {
  TrendingUp,
  Headphones,
  Landmark,
  Users,
  Layers,
  HeartPulse,
  Building2,
  Factory,
  ShoppingCart,
  Truck,
  GraduationCap,
  Home,
  Plane,
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
    title: "Sales & Marketing",
    content:
      "AI solutions for sales and marketing support lead qualification, prospect research, content workflows, personalization, campaign analysis, recommendations, and automated follow-ups. AI-powered applications help teams process customer data and improve everyday marketing and sales workflows.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Customer Service",
    content:
      "AI applications for customer service provide conversational support, knowledge retrieval, ticket classification, response assistance, and AI agent capabilities. These solutions help businesses handle customer requests faster while connecting users with relevant business information.",
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Operations & Finance",
    content:
      "AI software development for operations and finance supports document processing, information retrieval, reporting, transaction analysis, forecasting, and workflow automation. AI solutions help teams manage repetitive processes and work with business information more efficiently.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Human Resources",
    content:
      "AI solutions for HR support recruitment workflows, employee assistants, document processing, internal knowledge retrieval and employee communication. AI-powered applications help HR teams automate routine tasks and provide faster access to organisational information.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Product & Digital Applications",
    content:
      "AI product development adds intelligent capabilities to websites, mobile apps, SaaS platforms, and digital products. Features such as AI search, copilots, recommendations, personalization, conversational interfaces and AI agents can improve product functionality and user experiences.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Healthcare",
    content:
      "AI development for healthcare supports information access, document processing, patient communication, administrative workflows and operational applications. AI solutions can connect with existing healthcare software to improve information handling and routine processes.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Banking & Financial Services",
    content:
      "AI solutions for banking and financial services support document analysis, customer interactions, knowledge systems, workflow automation and decision-support applications. AI software can connect with existing systems to improve information processing and operational workflows.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Manufacturing",
    content:
      "AI development for manufacturing supports production workflows, quality processes, predictive maintenance, operational analytics and connected systems. AI applications help businesses use operational data to improve processes, monitor conditions, and support planning.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Retail & E-commerce",
    content:
      "AI software development for retail and e-commerce enables intelligent search, recommendations, shopping assistants, product information, customer support and commerce automation. These AI applications help businesses improve digital shopping experiences and customer interactions.",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Logistics & Supply Chain",
    content:
      "AI development for logistics and supply chain supports demand analysis, shipment workflows, inventory intelligence, logistics coordination and operational planning. AI solutions connect business data and systems to streamline information handling and operational processes.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Education",
    content:
      "AI solutions for education support learning assistants, knowledge platforms, content workflows, student communication and administrative automation. AI applications help institutions provide faster information access while reducing repetitive operational tasks.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Real Estate",
    content:
      "AI development for real estate supports property search, lead qualification, customer assistants, document processing, and property management workflows. AI-powered applications help teams manage enquiries, information, and repetitive processes more efficiently.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Travel & Hospitality",
    content:
      "AI solutions for travel and hospitality support travel assistants, itinerary applications, booking assistance, customer service, and hospitality workflows. AI applications help businesses automate routine interactions and provide customers with faster access to relevant information.",
    icon: Plane,
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&auto=format&fit=crop",
  },
];

export default function IndustryApplications() {
  return (
    <section id="industries" className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden border-t border-white/[0.08]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7230]/[0.05] blur-[160px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header - Top Center */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7230]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400">
              Cross-Industry Impact
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Our AI Development Services Across Business Functions and Industries
          </h2>
        </div>

        {/* 2-Column: Text on Left, CardSwap on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              Webnox Digital provides AI development services for businesses across functions and industries, combining AI software development, automation, AI applications and intelligent workflows. Our solutions can be integrated with existing software or developed as new AI-powered applications based on business requirements.
            </p>
          </div>

          {/* Right Column: CardSwap 3D Interactive Stack */}
          <div className="lg:col-span-7 relative w-full h-[540px] sm:h-[600px] lg:h-[640px] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 bg-[#0d0906]/90 overflow-hidden shadow-2xl flex items-center justify-center p-4">
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
      </div>
    </section>
  );
}

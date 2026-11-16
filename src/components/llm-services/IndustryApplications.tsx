"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  Scale,
} from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface IndustrySector {
  id: number;
  title: string;
  sector: string;
  content: string;
  topUseCases: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 1,
    title: "1. Healthcare & Life Sciences",
    sector: "Sector 01",
    content:
      "Secure, private AI assistants that search medical records, summarize doctor notes and answer patient inquiries 24/7 keeping sensitive health records strictly confidential and protected from public leaks.",
    topUseCases:
      "Clinical note summarization, patient inquiry triage and internal medical document search.",
    category: "Healthcare",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
  },
  {
    id: 2,
    title: "2. Banking, Finance & Insurance",
    sector: "Sector 02",
    content:
      "Intelligent AI systems that speed up loan reviews, answer policy questions instantly and search complex financial regulations across thousands of documents without human error.",
    topUseCases:
      "Policy & claims inquiry automation, financial report analysis and regulatory compliance checks.",
    category: "FinTech & BFSI",
    icon: Landmark,
    image: "/images/industries/banking.jpg",
  },
  {
    id: 3,
    title: "3. Retail & E-Commerce",
    sector: "Sector 03",
    content:
      "Smart conversational shopping assistants that guide customers to the right products, resolve order and refund questions instantly and deliver personalized shopping experiences that drive sales.",
    topUseCases:
      "24/7 conversational customer care, smart product recommendations, and automated return processing.",
    category: "E-Commerce",
    icon: ShoppingCart,
    image: "/images/industries/retail.jpg",
  },
  {
    id: 4,
    title: "4. Manufacturing & Operations",
    sector: "Sector 04",
    content:
      "AI tools that allow technicians to search thick machinery manuals in seconds, monitor inventory levels, and automate vendor follow-up emails to keep factory production moving smoothly.",
    topUseCases:
      "Equipment troubleshooting search, procurement follow-ups and inventory status assistants.",
    category: "Manufacturing",
    icon: Factory,
    image: "/images/industries/manufacturing.jpg",
  },
  {
    id: 5,
    title: "5. Logistics & Supply Chain",
    sector: "Sector 05",
    content:
      "Automated AI workflows that track shipments, answer delivery inquiries in real time, and coordinate supplier communications to eliminate costly operational delays.",
    topUseCases:
      "Real-time delivery status bots, vendor communication triage and freight document parsing.",
    category: "Supply Chain",
    icon: Truck,
    image: "/images/industries/professional.jpg",
  },
  {
    id: 6,
    title: "6. Legal & Professional Services",
    sector: "Sector 06",
    content:
      "AI assistants that analyze contracts, summarize lengthy legal filings in seconds and search internal case databases accurately saving your team hundreds of manual research hours.",
    topUseCases:
      "Contract review assistance, legal document summarization and internal knowledge search.",
    category: "Legal",
    icon: Scale,
    image: "/images/industries/technology.jpg",
  },
];

export default function IndustryApplications() {
  const [cardDims, setCardDims] = React.useState({
    width: 440,
    height: 330,
    cardDistance: 48,
    verticalDistance: 55,
  });

  React.useEffect(() => {
    const updateDims = () => {
      const w = window.innerWidth;
      if (w < 420) {
        setCardDims({
          width: Math.max(270, w - 40),
          height: 295,
          cardDistance: 22,
          verticalDistance: 32,
        });
      } else if (w < 640) {
        setCardDims({
          width: Math.min(360, w - 56),
          height: 310,
          cardDistance: 32,
          verticalDistance: 40,
        });
      } else if (w < 1024) {
        setCardDims({
          width: 400,
          height: 315,
          cardDistance: 42,
          verticalDistance: 50,
        });
      } else {
        setCardDims({
          width: 440,
          height: 330,
          cardDistance: 48,
          verticalDistance: 55,
        });
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  return (
    <section
      id="industries"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#160a04] text-white overflow-hidden border-t border-white/[0.08]"
    >
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
        className="absolute right-0 lg:right-[-2%] top-[55%] -translate-y-1/2 w-[550px] lg:w-[950px] h-[550px] lg:h-[950px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.35) 0%, rgba(255, 94, 0, 0.15) 38%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Top-Left Warm Vignette */}
      <div
        className="absolute left-[-10%] top-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header - Top Center */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7230]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400">
              VERTICAL DEPLOYMENTS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Industries We Serve with Custom LLM Solutions in India
          </h2>
        </div>

        {/* 2-Column: Text on Left, CardSwap on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal">
              Every industry has unique compliance boundaries, terminology, and operational workflows. We build models fine-tuned to your vertical.
            </p>
          </div>

          {/* Right Column: CardSwap 3D Interactive Stack */}
          <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[480px] lg:h-[600px] flex items-center justify-center">
            <CardSwap
              width={cardDims.width}
              height={cardDims.height}
              cardDistance={cardDims.cardDistance}
              verticalDistance={cardDims.verticalDistance}
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
                    {/* Background Image with Cinematic Edge-to-Edge Visibility */}
                    <div className="absolute inset-0 z-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
                    </div>

                    {/* Top Bar: Sector Tag + Icon */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold text-neutral-200 shadow-sm">
                        {sector.sector} • {sector.category}
                      </span>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF7230]/25 backdrop-blur-md border border-[#FF7230]/50 flex items-center justify-center text-[#FF7230] shadow-[0_0_14px_rgba(255,114,48,0.4)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Content: Title + Description + Top Use Cases */}
                    <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-6 sm:pt-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight drop-shadow-md leading-snug">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal line-clamp-2 drop-shadow-sm mb-2.5">
                        {sector.content}
                      </p>
                      <div className="pt-2 border-t border-white/15">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff8935] font-semibold block">
                          Top Use Cases:
                        </span>
                        <p className="text-[11px] sm:text-xs text-neutral-200 leading-snug mt-0.5 line-clamp-1">
                          {sector.topUseCases}
                        </p>
                      </div>
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

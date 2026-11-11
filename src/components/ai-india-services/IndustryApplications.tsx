"use client";

import React from "react";
import {
  TrendingUp,
  MessageSquare,
  Landmark,
  ShoppingCart,
  HeartPulse,
  Factory,
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

const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: 1,
    title: "Sales and Marketing",
    sector: "Sector 01",
    content:
      "AI-powered lead qualification, customer insights, and campaign automation help sales and marketing teams improve efficiency and engagement.",
    category: "Sales & Marketing",
    icon: TrendingUp,
    image: "/images/industries/technology.jpg",
  },
  {
    id: 2,
    title: "Customer Support",
    sector: "Sector 02",
    content:
      "AI chatbots and knowledge-based assistants help answer customer queries, retrieve relevant information, and route complex requests to support teams.",
    category: "Customer Support",
    icon: MessageSquare,
    image: "/images/industries/education.jpg",
  },
  {
    id: 3,
    title: "Finance and Accounting",
    sector: "Sector 03",
    content:
      "AI document processing helps extract invoice data, validate financial records, identify discrepancies, and reduce manual administrative work.",
    category: "Finance & Accounting",
    icon: Landmark,
    image: "/images/industries/banking.jpg",
  },
  {
    id: 4,
    title: "Retail and E-Commerce",
    sector: "Sector 04",
    content:
      "AI recommendation systems analyse customer behaviour and product preferences to support personalised shopping experiences and product discovery.",
    category: "Retail & E-Commerce",
    icon: ShoppingCart,
    image: "/images/industries/retail.jpg",
  },
  {
    id: 5,
    title: "Healthcare",
    sector: "Sector 05",
    content:
      "AI-powered administrative solutions support document processing, appointment coordination, and access to relevant information while respecting data privacy requirements.",
    category: "Healthcare",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
  },
  {
    id: 6,
    title: "Manufacturing",
    sector: "Sector 06",
    content:
      "AI solutions support quality inspection, predictive maintenance, production monitoring, and workflow automation to improve operational efficiency.",
    category: "Manufacturing",
    icon: Factory,
    image: "/images/industries/manufacturing.jpg",
  },
];

export default function IndustryApplications() {
  const [cardDims, setCardDims] = React.useState({
    width: 440,
    height: 320,
    cardDistance: 48,
    verticalDistance: 55,
  });

  React.useEffect(() => {
    const updateDims = () => {
      const w = window.innerWidth;
      if (w < 420) {
        setCardDims({
          width: Math.max(280, w - 48),
          height: 250,
          cardDistance: 26,
          verticalDistance: 36,
        });
      } else if (w < 640) {
        setCardDims({
          width: Math.min(360, w - 64),
          height: 275,
          cardDistance: 34,
          verticalDistance: 44,
        });
      } else if (w < 1024) {
        setCardDims({
          width: 400,
          height: 300,
          cardDistance: 42,
          verticalDistance: 50,
        });
      } else {
        setCardDims({
          width: 440,
          height: 320,
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
    <section id="industries" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#160a04] text-white overflow-hidden border-t border-white/[0.08]">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#ff8935] text-xs font-semibold uppercase tracking-wider mb-4">
            Sector Deployments
          </div>
          {/* H2 Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Industries We Serve with{" "}
            <span className="text-[#FF7230]">AI Development Solutions</span>
          </h2>
        </div>

        {/* 2-Column: Text on Left, CardSwap on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal">
              Webnox Digital develops AI solutions that address industry-specific challenges,
              automate workflows, and support better business decisions across key sectors.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed font-light mt-3 sm:mt-4">
              From regulated finance and healthcare environments requiring strict compliance to high-traffic retail platforms, we tailor AI models, security guardrails, and software integrations to meet operational targets.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF7230] to-[#FF532B] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:shadow-[0_4px_20px_rgba(255,114,48,0.4)] transition-all cursor-pointer"
              >
                <span>Request Industry Architecture</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: CardSwap 3D Interactive Stack */}
          <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[540px] lg:h-[640px] flex items-center justify-center">
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
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/40 pointer-events-none" />
                    </div>

                    {/* Top Bar: Sector Tag + Icon */}
                    <div className="relative z-10 flex items-center justify-between p-5 sm:p-6">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                        {sector.sector}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#ff8935]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Card Content: Title & Text */}
                    <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
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

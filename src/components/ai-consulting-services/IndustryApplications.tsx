"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Factory,
  Truck,
  Cpu,
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
    title: "1. Healthcare AI Consulting & Medical Systems",
    sector: "Sector 01",
    content:
      "Our healthcare AI consulting team builds HIPAA-compliant systems that automate clinical documentation, patient triage, and diagnostic policy search while safeguarding patient data privacy.",
    topUseCases:
      "Clinical documentation assistant, patient inquiry triage, medical policy search.",
    category: "Healthcare",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
  },
  {
    id: 2,
    title: "2. Banking, Financial Services & Insurance (BFSI)",
    sector: "Sector 02",
    content:
      "We build secure financial AI architectures that analyze loan applications, verify compliance documentation, automate underwriting research, and calculate risk metrics with complete citations.",
    topUseCases:
      "Underwriting document analyzer, compliance audit assistant, claims triage bot.",
    category: "BFSI",
    icon: Landmark,
    image: "/images/industries/banking.jpg",
  },
  {
    id: 3,
    title: "3. E-Commerce & Retail Brands",
    sector: "Sector 03",
    content:
      "We deploy intelligent shopping assistants and automated order tracking systems that integrate directly into product catalogs, personalizing recommendations and streamlining customer service operations.",
    topUseCases:
      "Conversational product finder, automated return triage, multi-channel order assistant.",
    category: "E-Commerce & Retail",
    icon: ShoppingCart,
    image: "/images/industries/retail.jpg",
  },
  {
    id: 4,
    title: "4. Manufacturing & Industrial Engineering",
    sector: "Sector 04",
    content:
      "We convert complex equipment service manuals, machinery diagrams, and supply catalogs into interactive mobile diagnostic tools for field engineers, factory operators, and distributors.",
    topUseCases:
      "Predictive equipment diagnostics, machinery manual search, spare-parts inventory routing.",
    category: "Manufacturing",
    icon: Factory,
    image: "/images/industries/manufacturing.jpg",
  },
  {
    id: 5,
    title: "5. Logistics, Freight & Supply Chain",
    sector: "Sector 05",
    content:
      "We connect custom AI models directly to warehouse dispatch and freight tracking APIs, automating consignment milestone updates, customs paperwork, and delay notifications.",
    topUseCases:
      "Real-time freight tracking, driver documentation assistant, automated dispatch routing.",
    category: "Logistics",
    icon: Truck,
    image: "/images/industries/professional.jpg",
  },
  {
    id: 6,
    title: "6. SaaS, Technology & Professional Services",
    sector: "Sector 06",
    content:
      "We help digital product teams integrate custom Generative AI agents into their web applications, streamlining customer onboarding, knowledge exploration, and automated support.",
    topUseCases:
      "In-app product copilot, self-service knowledge base, customer onboarding assistant.",
    category: "SaaS & Tech",
    icon: Cpu,
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 75% 50%, #2e1307 0%, #1a0b04 45%, #120702 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute right-0 lg:right-[-2%] top-[55%] -translate-y-1/2 w-[550px] lg:w-[950px] h-[550px] lg:h-[950px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.35) 0%, rgba(255, 94, 0, 0.15) 38%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

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
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7230]" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-400">
              Cross-Industry Impact
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight">
            Industries We Serve with{" "}
            <span className="text-[#FF7230]">AI Consulting</span> Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-normal">
              From HIPAA-compliant healthcare platforms and BFSI underwriting assistants to manufacturing diagnostics and SaaS copilots, our AI consultants tailor architectures to your sector&apos;s regulatory and operational demands.
            </p>
          </div>

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

                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold text-neutral-200 shadow-sm">
                        {sector.sector} • {sector.category}
                      </span>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF7230]/25 backdrop-blur-md border border-[#FF7230]/50 flex items-center justify-center text-[#FF7230] shadow-[0_0_14px_rgba(255,114,48,0.4)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-6 sm:pt-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight drop-shadow-md leading-snug">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal line-clamp-2 drop-shadow-sm mb-2.5">
                        {sector.content}
                      </p>
                      <div className="pt-2 border-t border-white/15">
                        <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#ff8935] font-semibold">
                          Top Use Cases:
                        </h4>
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

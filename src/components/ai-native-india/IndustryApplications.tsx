"use client";

import React, { useState } from "react";
import {
  Building2,
  Car,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Megaphone,
  Plane,
  Radio,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

const CARD_SWAP_SECTORS = [
  {
    id: 1,
    title: "Healthcare and Hospitals",
    content:
      "AI-Powered Patient Platforms: Develop applications for appointment management, patient communication and healthcare information access.",
    icon: HeartPulse,
    image: "/images/industries/healthcare.jpg",
  },
  {
    id: 2,
    title: "Banking and Financial Services",
    content:
      "AI-Powered Banking Software: Develop applications for customer support, financial services and digital banking workflows.",
    icon: Landmark,
    image: "/images/industries/banking.jpg",
  },
  {
    id: 3,
    title: "Retail and E-commerce",
    content:
      "AI Shopping Applications: Develop product search, recommendations and virtual shopping assistance.",
    icon: ShoppingBag,
    image: "/images/industries/retail.jpg",
  },
  {
    id: 4,
    title: "Manufacturing",
    content:
      "AI Manufacturing Software: Develop applications for production monitoring, quality management and operational workflows.",
    icon: Factory,
    image: "/images/industries/manufacturing.jpg",
  },
  {
    id: 5,
    title: "Legal and Professional Services",
    content:
      "AI Legal Applications: Develop applications for contract analysis, document processing and legal research.",
    icon: Scale,
    image: "/images/industries/professional.jpg",
  },
  {
    id: 6,
    title: "Telecommunications",
    content:
      "AI Telecom Applications: Develop software for customer service, troubleshooting and service management.",
    icon: Radio,
    image: "/images/industries/technology.jpg",
  },
];

const INDUSTRIES = [
  {
    title: "Healthcare and Hospitals",
    icon: HeartPulse,
    items: [
      {
        lead: "AI-Powered Patient Platforms:",
        body: "Develop applications for appointment management, patient communication and healthcare information access.",
      },
      {
        lead: "Clinical AI Applications:",
        body: "Support clinical documentation, medical information processing and healthcare workflows.",
      },
      {
        lead: "Healthcare Automation:",
        body: "Connect AI with hospital software and administrative systems to reduce repetitive tasks.",
      },
    ],
  },
  {
    title: "Banking and Financial Services",
    icon: Landmark,
    items: [
      {
        lead: "AI-Powered Banking Software:",
        body: "Develop applications for customer support, financial services and digital banking workflows.",
      },
      {
        lead: "Financial AI Solutions:",
        body: "Apply AI to document analysis, information retrieval and data processing.",
      },
      {
        lead: "AI Risk and Compliance:",
        body: "Support transaction analysis, document review and compliance workflows.",
      },
    ],
  },
  {
    title: "Retail and E-commerce",
    icon: ShoppingBag,
    items: [
      {
        lead: "AI Shopping Applications:",
        body: "Develop product search, recommendations and virtual shopping assistance.",
      },
      {
        lead: "AI-Powered Commerce:",
        body: "Integrate AI into product discovery, customer support and order management.",
      },
      {
        lead: "Retail Automation:",
        body: "Process inventory, customer and sales information across business operations.",
      },
    ],
  },
  {
    title: "Manufacturing",
    icon: Factory,
    items: [
      {
        lead: "AI Manufacturing Software:",
        body: "Develop applications for production monitoring, quality management and operational workflows.",
      },
      {
        lead: "Predictive Maintenance:",
        body: "Analyse equipment and sensor data to support maintenance planning.",
      },
      {
        lead: "Intelligent Quality Control:",
        body: "Use AI and computer vision to identify defined product quality issues.",
      },
    ],
  },
  {
    title: "Logistics and Supply Chain",
    icon: Truck,
    items: [
      {
        lead: "AI Supply Chain Solutions:",
        body: "Connect AI with procurement, inventory, supplier and order data.",
      },
      {
        lead: "Intelligent Logistics Platforms:",
        body: "Develop shipment tracking, delivery management and route-planning applications.",
      },
      {
        lead: "AI Demand Forecasting:",
        body: "Analyse historical and operational data to support inventory planning.",
      },
    ],
  },
  {
    title: "Education and E-Learning",
    icon: GraduationCap,
    items: [
      {
        lead: "AI Learning Platforms:",
        body: "Develop personalised learning applications and student support tools.",
      },
      {
        lead: "AI Education Assistants:",
        body: "Build conversational applications using approved educational information.",
      },
      {
        lead: "Education Automation:",
        body: "Automate selected admissions, communication and administrative workflows.",
      },
    ],
  },
  {
    title: "Real Estate",
    icon: Building2,
    items: [
      {
        lead: "AI Property Platforms:",
        body: "Develop applications for property discovery, recommendations and customer interactions.",
      },
      {
        lead: "AI Lead Management:",
        body: "Qualify property enquiries and organise customer requirements.",
      },
      {
        lead: "Real Estate Automation:",
        body: "Connect AI with property management and customer communication workflows.",
      },
    ],
  },
  {
    title: "Travel and Hospitality",
    icon: Plane,
    items: [
      {
        lead: "AI Travel Applications:",
        body: "Develop itinerary planning, travel assistance and recommendation systems.",
      },
      {
        lead: "AI Hospitality Solutions:",
        body: "Support hotel bookings, guest communication and service requests.",
      },
      {
        lead: "Travel Automation:",
        body: "Connect AI with booking platforms and operational systems.",
      },
    ],
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    items: [
      {
        lead: "AI Insurance Software:",
        body: "Develop applications for claims processing, policy information and customer support.",
      },
      {
        lead: "AI Claims Processing:",
        body: "Extract and organise information from claim documents.",
      },
      {
        lead: "AI Underwriting Support:",
        body: "Analyse applications and supporting documents for defined assessment workflows.",
      },
    ],
  },
  {
    title: "Telecommunications",
    icon: Radio,
    items: [
      {
        lead: "AI Telecom Applications:",
        body: "Develop software for customer service, troubleshooting and service management.",
      },
      {
        lead: "AI Network Analytics:",
        body: "Process network information to identify service issues.",
      },
      {
        lead: "AI Customer Experience:",
        body: "Use conversational AI to support customer interactions.",
      },
    ],
  },
  {
    title: "Legal and Professional Services",
    icon: Scale,
    items: [
      {
        lead: "AI Legal Applications:",
        body: "Develop applications for contract analysis, document processing and legal research.",
      },
      {
        lead: "AI Document Intelligence:",
        body: "Extract, classify, compare and summarise professional documents.",
      },
      {
        lead: "AI Research Platforms:",
        body: "Connect language models with approved information sources.",
      },
    ],
  },
  {
    title: "Marketing and Advertising",
    icon: Megaphone,
    items: [
      {
        lead: "AI Marketing Platforms:",
        body: "Develop tools for content, campaign management and marketing workflows.",
      },
      {
        lead: "AI SEO Solutions:",
        body: "Apply AI to keyword research, content optimisation and search visibility.",
      },
      {
        lead: "AI Lead Generation:",
        body: "Support lead qualification and customer interactions through AI.",
      },
    ],
  },
  {
    title: "Human Resources and Recruitment",
    icon: Users,
    items: [
      {
        lead: "AI Recruitment Software:",
        body: "Develop candidate screening and recruitment workflow applications.",
      },
      {
        lead: "AI Employee Assistants:",
        body: "Build internal assistants using approved company policies and information.",
      },
      {
        lead: "HR Automation:",
        body: "Automate onboarding, employee requests and document workflows.",
      },
    ],
  },
  {
    title: "Automotive",
    icon: Car,
    items: [
      {
        lead: "AI Automotive Applications:",
        body: "Develop software for vehicle sales, service management and customer support.",
      },
      {
        lead: "AI Vehicle Assistants:",
        body: "Help customers find vehicles and access product information.",
      },
      {
        lead: "Automotive Process Automation:",
        body: "Connect AI with inventory, sales and service systems.",
      },
    ],
  },
  {
    title: "Energy and Utilities",
    icon: Zap,
    items: [
      {
        lead: "AI Energy Solutions:",
        body: "Develop applications for operational monitoring and asset management.",
      },
      {
        lead: "AI Operations Analytics:",
        body: "Analyse equipment and operational data to identify patterns and anomalies.",
      },
      {
        lead: "Utility Customer Applications:",
        body: "Support billing enquiries, service requests and customer communication.",
      },
    ],
  },
];

export default function IndustryApplications() {
  const [activeCard, setActiveCard] = useState<number>(0);
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
        className="absolute right-0 lg:right-[-2%] top-[35%] -translate-y-1/2 w-[550px] lg:w-[950px] h-[550px] lg:h-[950px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 114, 48, 0.35) 0%, rgba(255, 94, 0, 0.15) 38%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top 2-Column Showcase: Text on Left, CardSwap 3D Stack on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-tight">
              AI Development Solutions for{" "}
              <span className="text-[#FF7230]">Different Industries</span>
            </h2>
            <p className="mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              We develop AI-powered applications and software for businesses across different industries. Each solution is planned around the industry&apos;s operational requirements, existing technology and intended business outcomes.
            </p>
          </div>

          <div className="lg:col-span-7 relative w-full h-[460px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
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
              {CARD_SWAP_SECTORS.map((sector) => {
                const Icon = sector.icon;
                return (
                  <Card
                    key={sector.id}
                    className="overflow-hidden relative flex flex-col justify-between group rounded-[18px] border border-white/10"
                  >
                    <div className="absolute inset-0 z-0">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />
                    </div>

                    <div className="relative z-10 p-5 flex items-center justify-end">
                      <div className="w-9 h-9 rounded-full bg-[#FF7230]/25 backdrop-blur-md border border-[#FF7230]/50 flex items-center justify-center text-[#FF7230] shadow-[0_0_14px_rgba(255,114,48,0.4)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-10">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
                        {sector.title}
                      </div>
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

        {/* 15 Industries Grid with Semantic <ul> / <li> Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            const isActive = activeCard === idx;

            return (
              <div
                key={industry.title}
                onMouseEnter={() => setActiveCard(idx)}
                className={`group rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "border-[#FF7230]/60 shadow-[0_18px_42px_rgba(255,114,48,0.16)]"
                    : "border-white/10 hover:border-[#FF7230]/40 bg-white/[0.03]"
                }`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(152.18deg, rgba(96, 41, 11, 0.55) -16.91%, rgba(20, 11, 6, 0.95) 99.34%)",
                      }
                    : undefined
                }
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-[0_6px_18px_rgba(255,114,48,0.35)]"
                          : "bg-white/[0.06] text-[#FF7230] border border-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {industry.title}
                    </h3>
                  </div>

                  <ul className="space-y-3.5 list-none p-0 m-0">
                    {industry.items.map((item) => (
                      <li
                        key={item.lead}
                        className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#FF7230] shrink-0 mt-1" />
                        <span>
                          <strong className="font-semibold text-white">
                            {item.lead}
                          </strong>{" "}
                          {item.body}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

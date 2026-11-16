"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  Truck,
  GraduationCap,
  Building2,
  Plane,
  ShieldAlert,
  Radio,
  Scale,
  Megaphone,
  Users2,
  Car,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface SubSolution {
  title: string;
  description: string;
}

interface IndustryItem {
  id: string;
  tabLabel: string;
  title: string;
  icon: React.ReactNode;
  solutions: SubSolution[];
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    tabLabel: "Healthcare & Hospitals",
    title: "Healthcare and Hospitals",
    icon: <HeartPulse className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI-Powered Patient Platforms",
        description:
          "Build applications that support appointment management, patient communication, and healthcare information access.",
      },
      {
        title: "Clinical AI Applications",
        description:
          "Develop AI solutions for clinical documentation, medical information processing, and healthcare workflows.",
      },
      {
        title: "Healthcare Automation",
        description:
          "Integrate AI with existing hospital software, databases, and workflows to reduce repetitive administrative tasks.",
      },
    ],
  },
  {
    id: "banking",
    tabLabel: "Banking & Financial Services",
    title: "Banking and Financial Services",
    icon: <Landmark className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI-Powered Banking Software",
        description:
          "Build applications for customer support, financial services, document processing, and digital banking workflows.",
      },
      {
        title: "Financial AI Solutions",
        description:
          "Apply AI to document analysis, data processing, customer interactions, and financial information retrieval.",
      },
      {
        title: "AI Risk and Compliance",
        description:
          "Develop systems that analyze transactions, documents, and business data to support compliance workflows.",
      },
    ],
  },
  {
    id: "retail",
    tabLabel: "Retail & E-commerce",
    title: "Retail and E-commerce",
    icon: <ShoppingBag className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Shopping Applications",
        description:
          "Create AI-powered product search, recommendations, virtual assistance, and personalized shopping experiences.",
      },
      {
        title: "AI-Powered Commerce",
        description:
          "Integrate AI into ecommerce platforms for product discovery, customer support, order management, and content generation.",
      },
      {
        title: "Retail Automation",
        description:
          "Use AI to process sales, inventory, customer, and product data across retail operations.",
      },
    ],
  },
  {
    id: "manufacturing",
    tabLabel: "Manufacturing",
    title: "Manufacturing",
    icon: <Factory className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Manufacturing Software",
        description:
          "Develop AI applications for production monitoring, quality management, equipment analysis, and operational workflows.",
      },
      {
        title: "Predictive Maintenance",
        description:
          "Use equipment and sensor data to identify maintenance requirements and support maintenance planning.",
      },
      {
        title: "Intelligent Quality Control",
        description:
          "Apply AI and computer vision to inspect products, identify defined quality issues, and support production teams.",
      },
    ],
  },
  {
    id: "logistics",
    tabLabel: "Logistics & Supply Chain",
    title: "Logistics and Supply Chain",
    icon: <Truck className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Supply Chain Solutions",
        description:
          "Connect AI with inventory, procurement, supplier, and order data to support supply chain operations.",
      },
      {
        title: "Intelligent Logistics Platforms",
        description:
          "Build software for shipment tracking, delivery management, route planning, and logistics coordination.",
      },
      {
        title: "AI Demand Forecasting",
        description:
          "Analyze historical and real-time business data to support inventory and demand planning.",
      },
    ],
  },
  {
    id: "education",
    tabLabel: "Education & E-Learning",
    title: "Education and E-Learning",
    icon: <GraduationCap className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Learning Platforms",
        description:
          "Develop AI-powered applications for personalized learning, content assistance, student support, and knowledge access.",
      },
      {
        title: "AI Education Assistants",
        description:
          "Build conversational applications that provide explanations, summaries, and answers using approved educational content.",
      },
      {
        title: "Education Automation",
        description:
          "Integrate AI into admissions, student communication, document processing, and administrative workflows.",
      },
    ],
  },
  {
    id: "real-estate",
    tabLabel: "Real Estate",
    title: "Real Estate",
    icon: <Building2 className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Property Platforms",
        description:
          "Build applications for property discovery, recommendations, search, and customer interactions.",
      },
      {
        title: "AI Lead Management",
        description:
          "Use AI to qualify property inquiries, capture requirements, and organize leads for sales teams.",
      },
      {
        title: "Real Estate Automation",
        description:
          "Integrate AI into property management, document processing, customer communication, and internal workflows.",
      },
    ],
  },
  {
    id: "travel",
    tabLabel: "Travel & Hospitality",
    title: "Travel and Hospitality",
    icon: <Plane className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Travel Applications",
        description:
          "Develop applications for itinerary planning, travel assistance, recommendations, and customer support.",
      },
      {
        title: "AI Hospitality Solutions",
        description:
          "Apply AI to hotel bookings, guest communication, service requests, and operational workflows.",
      },
      {
        title: "Travel Automation",
        description:
          "Connect AI with booking platforms and business systems to process customer requests and travel information.",
      },
    ],
  },
  {
    id: "insurance",
    tabLabel: "Insurance",
    title: "Insurance",
    icon: <ShieldAlert className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Insurance Software",
        description:
          "Build applications for claims processing, policy information, customer support, and document workflows.",
      },
      {
        title: "AI Claims Processing",
        description:
          "Use AI to extract and organize information from claim documents and support claims review.",
      },
      {
        title: "AI Underwriting Support",
        description:
          "Analyze applications and supporting documents to assist underwriting teams with defined assessment workflows.",
      },
    ],
  },
  {
    id: "telecom",
    tabLabel: "Telecommunications",
    title: "Telecommunications",
    icon: <Radio className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Telecom Applications",
        description:
          "Develop software for customer service, service management, troubleshooting, and telecom operations.",
      },
      {
        title: "AI Network Analytics",
        description:
          "Process network information to identify defined service issues and provide operational insights.",
      },
      {
        title: "AI Customer Experience",
        description:
          "Use conversational AI and personalization to support customer interactions and service requests.",
      },
    ],
  },
  {
    id: "legal",
    tabLabel: "Legal & Professional",
    title: "Legal and Professional Services",
    icon: <Scale className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Legal Applications",
        description:
          "Develop software for contract analysis, legal research, document processing, and knowledge management.",
      },
      {
        title: "AI Document Intelligence",
        description:
          "Extract, classify, compare, and summarize information from large volumes of professional documents.",
      },
      {
        title: "AI Research Platforms",
        description:
          "Connect language models with approved information sources to support research and knowledge workflows.",
      },
    ],
  },
  {
    id: "marketing",
    tabLabel: "Marketing & Advertising",
    title: "Marketing and Advertising",
    icon: <Megaphone className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Marketing Platforms",
        description:
          "Build AI-powered tools for content, campaign management, customer insights, and marketing workflows.",
      },
      {
        title: "AI SEO Solutions",
        description:
          "Apply AI to search analysis, content optimization, keyword research, and AI search visibility.",
      },
      {
        title: "AI Lead Generation",
        description:
          "Use AI to qualify prospects, personalize customer interactions, analyze campaigns, and support acquisition workflows.",
      },
    ],
  },
  {
    id: "hr",
    tabLabel: "HR & Recruitment",
    title: "Human Resources and Recruitment",
    icon: <Users2 className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Recruitment Software",
        description:
          "Develop applications for candidate screening, recruitment workflows, interview support, and applicant management.",
      },
      {
        title: "AI Employee Assistants",
        description:
          "Build internal AI applications that answer HR questions using approved company policies and information.",
      },
      {
        title: "HR Automation",
        description:
          "Integrate AI into onboarding, document collection, employee requests, notifications, and other HR processes.",
      },
    ],
  },
  {
    id: "automotive",
    tabLabel: "Automotive",
    title: "Automotive",
    icon: <Car className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Automotive Applications",
        description:
          "Build software for vehicle sales, service management, customer support, and dealership operations.",
      },
      {
        title: "AI Vehicle Assistants",
        description:
          "Develop applications that help customers find vehicles, compare options, and receive product information.",
      },
      {
        title: "Automotive Process Automation",
        description:
          "Connect AI with inventory, sales, service, and customer management systems.",
      },
    ],
  },
  {
    id: "energy",
    tabLabel: "Energy & Utilities",
    title: "Energy and Utilities",
    icon: <Zap className="w-5 h-5 text-[#ff5e00]" />,
    solutions: [
      {
        title: "AI Energy Solutions",
        description:
          "Develop applications for operational monitoring, customer service, asset management, and energy workflows.",
      },
      {
        title: "AI Operations Analytics",
        description:
          "Process operational and equipment data to identify defined patterns, anomalies, and maintenance requirements.",
      },
      {
        title: "Utility Customer Applications",
        description:
          "Build AI-powered systems for billing support, service requests, outage information, and customer communication.",
      },
    ],
  },
];

export default function IndustrySolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = INDUSTRIES_DATA[activeIndex];

  const scrollToContact = () => {
    const contactEl =
      document.getElementById("contact") ||
      document.querySelector("section:last-of-type");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="industries"
      className="relative w-full bg-[#fdfaf6] text-neutral-900 py-24 sm:py-32 overflow-hidden select-none border-t border-neutral-200/60"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Specialized Domain Systems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#140803] leading-[1.18]">
            AI-Native Solutions for{" "}
            <span className="text-[#ff5e00]">Every Industry</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-[17px] font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            Domain-specific intelligence, automated workflows, and connected platforms built around real operational challenges across 15 industries.
          </p>
        </div>

        {/* Industry Pill Selector Scrollable Track */}
        <div className="flex justify-center mb-12 sm:mb-14 px-2">
          <div className="inline-flex items-center p-2 bg-[#dfd9cf] border border-[#d5cdc1] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.08),0_4px_20px_rgba(0,0,0,0.03)] max-w-full overflow-x-auto scrollbar-none gap-2">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`whitespace-nowrap px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-medium tracking-tight transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff6825] via-[#ff540f] to-[#f33c00] text-white shadow-[0_4px_16px_rgba(255,94,0,0.45)] font-semibold scale-[1.01]"
                      : "bg-[#4a4744] hover:bg-[#56534f] text-white/95 hover:text-white"
                  }`}
                >
                  <span className="text-xs">{ind.icon}</span>
                  {ind.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Big White/Cream Showcase Card */}
        <div className="w-full bg-[#fcfaf7] border border-[#ebe4db] rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden">
          {/* Header of Active Industry */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-neutral-200 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#ff5e00] shadow-sm">
                {activeIndustry.icon}
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#ff5e00] font-bold">
                  Sector {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                  {activeIndustry.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[#140803] hover:bg-[#ff5e00] text-white px-5 py-2.5 rounded-full transition-all duration-300 shadow-md cursor-pointer self-start md:self-auto"
            >
              <span>Build Industry Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Sub-Solutions Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {activeIndustry.solutions.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="group bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(255,94,0,0.08)] hover:border-[#ff5e00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center font-mono text-xs font-bold text-[#ff5e00]">
                      0{sIdx + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600/80" />
                  </div>
                  <h4 className="text-lg sm:text-[19px] font-bold text-[#140803] tracking-tight mb-2.5 group-hover:text-[#ff5e00] transition-colors leading-snug">
                    {sub.title}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-semibold text-[#ff5e00] group-hover:underline">
                  <span>Explore Capabilities →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

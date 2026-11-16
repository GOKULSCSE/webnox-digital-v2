"use client";

import React, { useState } from "react";
import {
  Users,
  Database,
  Sparkles,
  Layers,
  Workflow,
} from "lucide-react";

interface SolutionDomain {
  id: string;
  category: string;
  icon: React.ReactNode;
  items: {
    title: string;
    description: string;
  }[];
}

const DOMAINS: SolutionDomain[] = [
  {
    id: "customer-experience",
    category: "Customer Experience",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
    items: [
      {
        title: "AI Assistants",
        description:
          "Answer customer questions using your products, services, policies, and business knowledge.",
      },
      {
        title: "AI Sales Assistants",
        description:
          "Qualify leads, answer product questions, recommend next steps, and support sales teams.",
      },
      {
        title: "Personalized Experiences",
        description:
          "Generate recommendations, content, and interactions based on customer context.",
      },
    ],
  },
  {
    id: "knowledge-operations",
    category: "Knowledge & Operations",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
    items: [
      {
        title: "Enterprise Knowledge Assistants",
        description:
          "Allow employees to ask questions across internal documents and business knowledge.",
      },
      {
        title: "Document Intelligence",
        description:
          "Extract, summarize, classify, compare, and transform information from business documents.",
      },
      {
        title: "AI Search",
        description:
          "Replace fragmented document searches with natural-language knowledge discovery.",
      },
    ],
  },
  {
    id: "content-creativity",
    category: "Content & Creativity",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
    items: [
      {
        title: "Content Generation",
        description:
          "Create product descriptions, marketing content, reports, summaries, and structured business content.",
      },
      {
        title: "Creative Generation",
        description:
          "Generate and transform images, audio, video, and other creative assets.",
      },
    ],
  },
  {
    id: "software-products",
    category: "Software & Products",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
    items: [
      {
        title: "AI-Powered SaaS",
        description:
          "Add intelligent capabilities directly into SaaS products.",
      },
      {
        title: "AI Copilots",
        description:
          "Assist users inside existing software.",
      },
      {
        title: "AI Product Features",
        description:
          "Introduce natural-language search, summarization, recommendations, generation, and intelligent assistance into digital products.",
      },
    ],
  },
  {
    id: "automation",
    category: "Automation",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
    items: [
      {
        title: "AI Workflow Automation",
        description:
          "Connect AI with business systems to automate knowledge-heavy processes.",
      },
      {
        title: "AI Agents",
        description:
          "Allow AI systems to retrieve information, use tools, execute tasks, and hand work back to people when approval is required.",
      },
    ],
  },
];

export default function WhatCanYouBuild() {
  const [activeTab, setActiveTab] = useState("customer-experience");
  const currentDomain = DOMAINS.find((d) => d.id === activeTab) || DOMAINS[0];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            What Can You Build with Generative AI?
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Generative AI can become a capability inside almost any digital product or business workflow.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {DOMAINS.map((domain) => {
            const isActive = domain.id === activeTab;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveTab(domain.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  isActive
                    ? "text-white shadow-lg shadow-orange-500/25"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/80"
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
                <span>{domain.category}</span>
              </button>
            );
          })}
        </div>

        {/* Domain Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentDomain.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-[#12141a] tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

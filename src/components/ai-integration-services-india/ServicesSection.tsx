"use client";

import React from "react";
import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import {
  Sparkles,
  Brain,
  Database,
  Network,
  Bot,
  Building2,
} from "lucide-react";

const INTEGRATION_CAROUSEL_FEATURES: FeatureItem[] = [
  {
    id: "gen-ai-integration",
    label: "1. Generative AI Application Integration",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "Integrate generative AI models into business applications for content generation, document processing and intelligent user interactions.",
    ctaText: "Book an Architecture Scoping Call",
    ctaLink: "#contact",
  },
  {
    id: "llm-integration",
    label: "2. Large Language Model (LLM) Integration",
    lucideIcon: <Brain className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Connect OpenAI, Google Gemini, Anthropic Claude and open-source LLMs with business applications, databases and enterprise platforms for text processing, document analysis and conversational capabilities.",
    ctaText: "Book an Architecture Scoping Call",
    ctaLink: "#contact",
  },
  {
    id: "rag-integration",
    label: "3. RAG-Based Knowledge Integration",
    lucideIcon: <Database className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "Connect AI models with internal documents, databases and knowledge repositories to retrieve relevant business information and generate context-based responses.",
    ctaText: "Book an Architecture Scoping Call",
    ctaLink: "#contact",
  },
  {
    id: "api-app-integration",
    label: "4. AI API and Application Integration",
    lucideIcon: <Network className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "Connect AI models and third-party AI services with existing software through APIs to enable seamless communication and data exchange between applications.",
    ctaText: "Book an Architecture Scoping Call",
    ctaLink: "#contact",
  },
  {
    id: "agent-workflow-integration",
    label: "5. AI Agent and Workflow Integration",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "Integrate AI agents with business applications, databases and operational tools to execute multi-step tasks, automate workflows and support human-approved actions.",
    ctaText: "Book an Architecture Scoping Call",
    ctaLink: "#contact",
  },
  {
    id: "enterprise-system-integration",
    label: "6. Enterprise System AI Integration",
    lucideIcon: <Building2 className="w-4 h-4" />,
    image: "/images/services/analytics.jpg",
    description:
      "Integrate AI capabilities with ERP, CRM, document management and other enterprise systems to connect business data and improve cross-department workflows.",
    ctaText: "Book an Architecture Scoping Call",
    ctaLink: "#contact",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Integration Services Across Enterprise Applications
          </h2>
        </div>

        {/* Full-Width Interactive Feature Carousel */}
        <div className="max-w-[1600px] mx-auto">
          <FeatureCarousel features={INTEGRATION_CAROUSEL_FEATURES} />
        </div>
      </div>
    </section>
  );
}


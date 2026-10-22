"use client";

import React from "react";
import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import {
  Brain,
  Database,
  Sliders,
  Network,
  Bot,
  Activity,
} from "lucide-react";

export const LLM_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "custom-llm-apps",
    label: "1. Custom LLM Application Development",
    category: "Intelligent Software",
    lucideIcon: <Brain className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    description:
      "Build custom LLM applications for intelligent assistants, document analysis, semantic search, and AI-powered software products. We develop solutions that process natural language, extract information, summarise content and support specialised tasks across business workflows.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "rag-development",
    label: "2. Retrieval Augmented Generation (RAG) Development",
    category: "Knowledge Retrieval",
    lucideIcon: <Database className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
    description:
      "Connect large language models to company documents, databases and knowledge bases through RAG development. We implement document processing, embeddings, vector search and retrieval pipelines to help applications generate responses grounded in relevant source information.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "llm-fine-tuning",
    label: "3. LLM Fine-Tuning and Optimization",
    category: "Domain Specialization",
    lucideIcon: <Sliders className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
    description:
      "Adapt pre trained language models to specialised tasks, domain terminology and required output formats. Our LLM fine-tuning services include dataset preparation, model selection, supervised fine-tuning and evaluation to improve performance for specific application requirements.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "llm-integration",
    label: "4. LLM Integration Services",
    category: "System Connectivity",
    lucideIcon: <Network className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    description:
      "Integrate large language models into websites, SaaS products, APIs, CRM platforms and enterprise software. Our LLM integration services connect AI capabilities with existing systems to support intelligent search, document processing, customer support and automated content workflows.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "ai-agents-workflows",
    label: "5. AI Agent and Workflow Development",
    category: "Multi-Step Automation",
    lucideIcon: <Bot className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description:
      "Develop AI agents that combine language models, APIs, and approved tools to complete defined multi-step tasks. Our AI agent development services support lead qualification, support-ticket classification, document processing, and research workflows with appropriate access controls and human oversight.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "llm-deployment-monitoring",
    label: "6. LLM Deployment, Evaluation and Monitoring",
    category: "Production Ops & Governance",
    lucideIcon: <Activity className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    description:
      "Deploy LLM applications across cloud, private, or hybrid environments based on your technical requirements. Our LLM deployment services cover response evaluation, latency monitoring, token-cost tracking, logging, regression testing, and performance optimization to support reliable operation.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
];

export default function ServicesRange() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            LLM Engineering Services for Production-Ready AI
          </h2>
          <p className="mt-5 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Webnox Digital delivers LLM development services to build AI applications that connect language models with company data, software and workflows. Our expertise covers custom LLM applications, RAG, fine-tuning, integration, AI agents and deployment for practical use cases.
          </p>
        </div>

        {/* Dynamic Feature Carousel with Theme Sync */}
        <div className="w-full">
          <FeatureCarousel features={LLM_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}

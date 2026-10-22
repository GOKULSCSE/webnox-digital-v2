"use client";

import React from "react";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  MessageSquare,
  FileText,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Search,
  Bot,
  Layers,
  Cpu,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import {
  CustomerSupportVisual,
  DocumentProcessingVisual,
  WorkflowAutomationVisual,
  EnterpriseKnowledgeVisual,
  BusinessAnalyticsVisual,
  AssistantsCopilotsVisual,
  SearchApplicationsVisual,
  AgentApplicationsVisual,
  SaaSEnabledVisual,
  MultimodalAIVisual,
} from "@/components/ai-services/SolutionVisuals";

const BENTO_SOLUTIONS: MagicBentoItem[] = [
  {
    id: "sales-assistants",
    label: "Customer Experience",
    icon: <MessageSquare className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Sales Assistants",
    description:
      "Qualify leads, answer product questions, recommend next steps, and support sales teams.",
    visual: <CustomerSupportVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "personalized-experiences",
    label: "Customer Experience",
    icon: <TrendingUp className="w-4 h-4 text-[#ff5e00]" />,
    title: "Personalized Experiences",
    description:
      "Generate recommendations, content, and interactions based on customer context.",
    visual: <BusinessAnalyticsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "ai-search",
    label: "Knowledge & Operations",
    icon: <Search className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Search",
    description:
      "Replace fragmented document searches with natural-language knowledge discovery.",
    visual: <SearchApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "content-generation",
    label: "Content & Creativity",
    icon: <FileText className="w-4 h-4 text-[#ff5e00]" />,
    title: "Content Generation",
    description:
      "Create product descriptions, marketing content, reports, summaries, and structured business content.",
    visual: <DocumentProcessingVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "creative-generation",
    label: "Content & Creativity",
    icon: <Cpu className="w-4 h-4 text-[#ff5e00]" />,
    title: "Creative Generation",
    description:
      "Generate and transform images, audio, video, and other creative assets.",
    visual: <MultimodalAIVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "ai-saas",
    label: "Software & Products",
    icon: <Layers className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI-Powered SaaS",
    description:
      "Add intelligent capabilities directly into SaaS products.",
    visual: <SaaSEnabledVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "ai-product-features",
    label: "Software & Products",
    icon: <Handshake className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Product Features",
    description:
      "Introduce natural-language search, summarization, recommendations, generation, and intelligent assistance into digital products.",
    visual: <AssistantsCopilotsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "rag-development",
    label: "Retrieval & Grounding",
    icon: <ShieldCheck className="w-4 h-4 text-[#ff5e00]" />,
    title: "RAG Development & Enterprise Knowledge AI",
    description:
      "Connect Generative AI with trusted business information so applications can retrieve relevant knowledge before generating responses.",
    visual: <EnterpriseKnowledgeVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "multimodal-ai",
    label: "Vision & Speech",
    icon: <Bot className="w-4 h-4 text-[#ff5e00]" />,
    title: "Multimodal Generative AI Development",
    description:
      "Build AI applications that can understand and generate information across multiple formats.",
    visual: <AgentApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "integration-automation",
    label: "Enterprise Connectors",
    icon: <Workflow className="w-4 h-4 text-[#ff5e00]" />,
    title: "Generative AI Integration & Automation",
    description:
      "Integrate Generative AI with existing applications and automate workflows across business systems.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
];

const STAGES = [
  "Business Problem",
  "AI Use Case",
  "Architecture",
  "Prototype",
  "Production",
  "Optimization",
];

export default function SolutionsGrid() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Magic Bento Section */}
        <div className="mb-20">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
              Generative AI Solutions We’ve Built for Businesses
            </h2>
          </div>

          <MagicBento
            items={BENTO_SOLUTIONS}
            columns={4}
            rowHeight={280}
            gap={18}
            radius={24}
            theme="light"
            glowColor="#ff5e00"
            enableBorderGlow={true}
            enableSpotlight={true}
            spotlightRadius={320}
            enableStars={true}
            particleCount={20}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            textAutoHide={false}
            intro={true}
          />
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  MessageSquare,
  FileText,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Handshake,
  Search,
  Bot,
  Layers,
  Cpu,
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
} from "./SolutionVisuals";

const BENTO_SOLUTIONS: MagicBentoItem[] = [
  {
    id: "customer-support",
    label: "Support & CX",
    icon: <MessageSquare className="w-4 h-4 text-[#ff5e00]" />,
    title: "Customer Support Applications",
    description:
      "Develop AI-powered customer support applications that answer common questions, retrieve approved information, categorise enquiries and route complex requests to the appropriate support team.",
    visual: <CustomerSupportVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "document-processing",
    label: "Document Intelligence",
    icon: <FileText className="w-4 h-4 text-[#ff5e00]" />,
    title: "Intelligent Document Processing Applications",
    description:
      "Build applications that extract, classify, summarise and validate information from invoices, contracts, forms and business records, with human review for uncertain results.",
    visual: <DocumentProcessingVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "workflow-automation",
    label: "Workflow Orchestration",
    icon: <Workflow className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Workflow Automation Applications",
    description:
      "Automate repetitive business tasks, approval processes and information handoffs by connecting AI capabilities with existing applications, APIs and operational workflows.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "enterprise-knowledge",
    label: "Enterprise Access & Policy",
    icon: <ShieldCheck className="w-4 h-4 text-[#ff5e00]" />,
    title: "Enterprise Knowledge Applications",
    description:
      "Create AI-powered knowledge systems that help employees search internal documents, policies and business records to retrieve relevant information with appropriate access controls.",
    visual: <EnterpriseKnowledgeVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "business-analytics",
    label: "Predictive Analytics",
    icon: <TrendingUp className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI-Powered Business Analytics Applications",
    description:
      "Develop applications that analyse business data, identify trends and generate forecasts, reports and actionable insights to support operational planning and decision-making.",
    visual: <BusinessAnalyticsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "search-apps",
    label: "Semantic Retrieval",
    icon: <Search className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI-Powered Search Applications",
    description:
      "Develop intelligent search experiences that retrieve contextually relevant results from websites, databases, documents and internal knowledge sources using semantic search and retrieval techniques.",
    visual: <SearchApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "assistants-copilots",
    label: "Human-AI Collaboration",
    icon: <Handshake className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Assistants and Copilots",
    description:
      "Build AI assistants that help employees retrieve information, draft content, navigate business workflows and complete approved tasks using relevant organisational context.",
    visual: <AssistantsCopilotsVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "agent-apps",
    label: "Autonomous Agents",
    icon: <Bot className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Agent Applications",
    description:
      "Create AI agent applications that use connected tools, access approved information and execute defined multi-step tasks, with permission controls and human approval where needed.",
    visual: <AgentApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "saas-apps",
    label: "SaaS Ecosystem",
    icon: <Layers className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI-Enabled SaaS Applications",
    description:
      "Integrate AI features such as intelligent recommendations, conversational interfaces, automated processing and contextual search into SaaS products and existing business software.",
    visual: <SaaSEnabledVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "multimodal-apps",
    label: "Vision & Speech",
    icon: <Cpu className="w-4 h-4 text-[#ff5e00]" />,
    title: "Multimodal AI Applications",
    description:
      "Build applications that process combinations of text, images, audio and documents to support use cases such as visual analysis, speech interaction and cross-format information retrieval.",
    visual: <MultimodalAIVisual />,
    colSpan: 2,
    rowSpan: 2,
  },
];

export default function SolutionsGrid() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5e00]" />
            <span className="text-xs font-semibold text-[#ff5e00] tracking-wide uppercase">
              Proven Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            AI Application Development Solutions We’ve Built for Businesses
          </h2>
        </div>

        {/* Magic Bento Grid */}
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
    </section>
  );
}


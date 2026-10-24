"use client";

import React from "react";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  ShieldCheck,
  FileText,
  MessageSquare,
  Layers,
  Search,
  Workflow,
} from "lucide-react";
import {
  EnterpriseRagVisual,
  DocumentProcessingVisual,
  CustomerSupportVisual,
  SaasCopilotVisual,
  ResearchContentVisual,
  WorkflowAutomationVisual,
} from "./LlmSolutionVisuals";

const BENTO_LLM_SOLUTIONS: MagicBentoItem[] = [
  {
    id: "enterprise-knowledge-assistants",
    label: "Enterprise Knowledge & RAG",
    icon: <ShieldCheck className="w-4 h-4 text-[#ff5e00]" />,
    title: "1. Enterprise Knowledge Assistants",
    description:
      "Build AI knowledge assistants using LLM development and RAG to retrieve information from company documents, policies and internal knowledge bases.",
    visual: <EnterpriseRagVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "intelligent-document-processing",
    label: "Document Intelligence",
    icon: <FileText className="w-4 h-4 text-[#ff5e00]" />,
    title: "2. Intelligent Document Processing",
    description:
      "Use LLM-powered document processing to extract data, classify records, summarise reports and analyse contracts and business documents.",
    visual: <DocumentProcessingVisual />,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "ai-customer-support",
    label: "Customer Support & CX",
    icon: <MessageSquare className="w-4 h-4 text-[#ff5e00]" />,
    title: "3. AI Customer Support Applications",
    description:
      "Develop LLM-powered support assistants to answer customer queries, retrieve product information and connect with CRM and helpdesk systems.",
    visual: <CustomerSupportVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "ai-powered-saas",
    label: "SaaS Product Modernization",
    icon: <Layers className="w-4 h-4 text-[#ff5e00]" />,
    title: "4. AI-Powered SaaS Products",
    description:
      "Integrate large language models into SaaS applications for natural-language search, content generation, summarisation and recommendations.",
    visual: <SaasCopilotVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "ai-research-content-workflows",
    label: "Research & Synthesis",
    icon: <Search className="w-4 h-4 text-[#ff5e00]" />,
    title: "5. AI Research and Content Workflows",
    description:
      "Use LLM applications to retrieve information, summarise research, organise documents and prepare content for human review.",
    visual: <ResearchContentVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "business-workflow-automation",
    label: "Autonomous Automation",
    icon: <Workflow className="w-4 h-4 text-[#ff5e00]" />,
    title: "6. Business Workflow Automation",
    description:
      "Connect LLMs with APIs and business software to automate lead qualification, ticket classification, data extraction and task routing.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function SolutionsGrid() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      {/* Scoped Keyframes for LLM Visual Animations */}
      <style>{`
        @keyframes laserScan {
          0%, 100% { top: 4%; opacity: 0.9; }
          50% { top: 88%; opacity: 1; }
        }
        @keyframes streamPulse {
          0% { transform: translateX(-100%); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(350%); opacity: 0; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            LLM-Powered Solutions for Real-World Applications
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Practical AI solutions engineered with large language models, retrieval pipelines, and enterprise software connections to solve complex business challenges.
          </p>
        </div>

        {/* Dynamic Bento Grid with Asymmetrical Card Sizes (columns=3) */}
        <MagicBento
          items={BENTO_LLM_SOLUTIONS}
          columns={3}
          rowHeight={310}
          gap={22}
          radius={24}
          theme="light"
          glowColor="#ff5e00"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={320}
          enableStars={false}
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

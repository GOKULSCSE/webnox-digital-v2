"use client";

import React from "react";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  Layers,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Activity,
} from "lucide-react";
import {
  EnterpriseRagVisual,
  DocumentProcessingVisual,
  CustomerSupportVisual,
  SaasCopilotVisual,
  ResearchContentVisual,
  WorkflowAutomationVisual,
} from "@/components/llm-services/LlmSolutionVisuals";

const BENTO_AI_ARCHITECTURE: MagicBentoItem[] = [
  {
    id: "application-layer",
    label: "Layer 01 • Endpoints",
    icon: <Layers className="w-4 h-4 text-[#ff5e00]" />,
    title: "1. Application Layer",
    description:
      "Receives user requests through websites, mobile apps, and APIs. Provides low-latency, intuitive conversational and interface components.",
    visual: <CustomerSupportVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "ai-model-layer",
    label: "Layer 02 • Intelligence",
    icon: <Cpu className="w-4 h-4 text-[#ff5e00]" />,
    title: "2. AI Model Layer",
    description:
      "Uses AI models and orchestration to process requests, manage prompt pipelines, and coordinate tasks across specialized foundation models.",
    visual: <DocumentProcessingVisual />,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "data-knowledge-layer",
    label: "Layer 03 • RAG & Vectors",
    icon: <Database className="w-4 h-4 text-[#ff5e00]" />,
    title: "3. Data and Knowledge Layer",
    description:
      "Connects RAG, databases, and business documents to provide relevant, grounded information with zero hallucinations and source citations.",
    visual: <EnterpriseRagVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "integration-layer",
    label: "Layer 04 • Systems Sync",
    icon: <Network className="w-4 h-4 text-[#ff5e00]" />,
    title: "4. Integration Layer",
    description:
      "Connects AI applications with CRM, ERP, and other business systems through bi-directional APIs, webhooks, and secure event buses.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "security-validation-layer",
    label: "Layer 05 • Trust & Guardrails",
    icon: <ShieldCheck className="w-4 h-4 text-[#ff5e00]" />,
    title: "5. Security and Validation Layer",
    description:
      "Applies access controls, business rules, and output checks to help protect confidential data and manage errors with strict zero-leakage standards.",
    visual: <SaasCopilotVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "output-monitoring-layer",
    label: "Layer 06 • Observability",
    icon: <Activity className="w-4 h-4 text-[#ff5e00]" />,
    title: "6. Output and Monitoring Layer",
    description:
      "Delivers results and monitors performance, latency, and token cost to support ongoing evaluation, compliance auditing, and continuous improvement.",
    visual: <ResearchContentVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function SolutionsGrid() {
  return (
    <section id="architecture" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
            6-Layer Engineering Framework
          </div>
          {/* H2 Title as requested */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Development Architecture for Businesses in India
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Webnox Digital designs AI development architectures in India that connect AI models,
            business data, and existing software. Our approach combines AI orchestration, RAG, API
            integration, and security controls to build scalable AI applications aligned with business
            needs.
          </p>
        </div>

        {/* Signature Magic Bento Interactive Grid matching other pages */}
        <div className="w-full">
          <MagicBento
            items={BENTO_AI_ARCHITECTURE}
            columns={3}
            gap={24}
            radius={28}
            theme="light"
            glowColor="rgba(255, 94, 0, 0.16)"
            particleCount={16}
          />
        </div>
      </div>
    </section>
  );
}

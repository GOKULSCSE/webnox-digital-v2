"use client";

import React from "react";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  Compass,
  Bot,
  Database,
  Server,
  MessageSquare,
  Activity,
} from "lucide-react";
import {
  TransformationVisual,
  MultiAgentGraphVisual,
  HybridRagVisual,
  PrivateCloudVisual,
  OmnichannelAgentVisual,
  TelemetryTokenVisual,
} from "./ConsultingCapabilityVisuals";

const BENTO_CONSULTING_CAPABILITIES: MagicBentoItem[] = [
  {
    id: "ai-transformation",
    label: "Operational Modernization",
    icon: <Compass className="w-4 h-4 text-[#ff5e00]" />,
    title: "01. AI Transformation Consulting",
    description:
      "We guide organizations through complete operational modernization, restructuring legacy operational processes, reskilling internal teams, and embedding scalable intelligent automation into the core DNA of your day-to-day business operations.",
    visual: <TransformationVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "multi-agent-systems",
    label: "LangGraph & MCP",
    icon: <Bot className="w-4 h-4 text-[#ff5e00]" />,
    title: "02. Applied AI Consulting & Multi-Agent Systems",
    description:
      "Through hands-on applied engineering, we architect collaborative multi-agent systems using LangGraph and the Model Context Protocol (MCP), enabling autonomous agents to execute complex, multi-system research and database tasks independently.",
    visual: <MultiAgentGraphVisual />,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: "enterprise-rag-search",
    label: "Hybrid Vector + BM25",
    icon: <Database className="w-4 h-4 text-[#ff5e00]" />,
    title: "03. Enterprise RAG & Semantic Search Architectures",
    description:
      "We design hybrid information retrieval engines combining dense vector embeddings with BM25 keyword matching, grounding enterprise LLMs in verified internal company files and completely eliminating inaccurate, hallucinated business responses.",
    visual: <HybridRagVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "private-cloud-llm",
    label: "vLLM & Kubernetes",
    icon: <Server className="w-4 h-4 text-[#ff5e00]" />,
    title: "04. Private Cloud & On-Premises LLM Hosting",
    description:
      "We deploy open-weight foundation models on private cloud infrastructure using vLLM, Docker, and Kubernetes, guaranteeing that proprietary corporate data and confidential customer records are never used to train public models.",
    visual: <PrivateCloudVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "omnichannel-agents",
    label: "Web, WhatsApp & Teams",
    icon: <MessageSquare className="w-4 h-4 text-[#ff5e00]" />,
    title: "05. Omnichannel Conversational Agent Deployment",
    description:
      "We architect context aware conversational bots that operate across web platforms, mobile apps, WhatsApp Business API, Slack and Microsoft Teams, ensuring customer and employee interactions remain unified across every touchpoint.",
    visual: <OmnichannelAgentVisual />,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "telemetry-token-opt",
    label: "Up to 60% Cost Reduction",
    icon: <Activity className="w-4 h-4 text-[#ff5e00]" />,
    title: "06. Continuous Model Telemetry & Token Optimization",
    description:
      "We implement real time monitoring dashboards tracking model latency, drift, accuracy scores and API token burn, deploying semantic caching strategies to reduce monthly cloud model operating expenses by up to 60%.",
    visual: <TelemetryTokenVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function SolutionsGrid() {
  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/25 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            APPLIED CAPABILITIES
          </div>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Applied AI Consulting: Advanced Capabilities &amp; Frameworks
          </h3>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Production-grade multi-agent orchestration, hybrid RAG retrieval, private VPC model hosting, and semantic caching frameworks engineered for measurable enterprise scale.
          </p>
        </div>

        {/* Dynamic Bento Grid */}
        <MagicBento
          items={BENTO_CONSULTING_CAPABILITIES}
          columns={3}
          rowHeight={340}
          gap={22}
          radius={24}
          theme="light"
          glowColor="#ff5e00"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={340}
          enableStars={false}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          textAutoHide={false}
          intro={true}
        />
      </div>
    </section>
  );
}

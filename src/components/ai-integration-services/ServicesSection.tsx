"use client";

import React from "react";
import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  AppWindow,
  Bot,
  Brain,
  Building2,
  Database,
  FileText,
  Layers,
  Network,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import {
  CustomerSupportVisual,
  DocumentProcessingVisual,
  WorkflowAutomationVisual,
  EnterpriseKnowledgeVisual,
  BusinessAnalyticsVisual,
} from "@/components/ai-services/SolutionVisuals";

const INTEGRATION_CAROUSEL_FEATURES: FeatureItem[] = [
  {
    id: "gen-ai-integration",
    label: "1. Generative AI Integration",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "Integrate generative AI models into business applications to support content creation, information processing and intelligent interactions. We connect these capabilities with existing software to improve how businesses access and use information.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "llm-integration",
    label: "2. LLM Integration Services",
    lucideIcon: <Brain className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "Connect large language models (LLMs) with business applications, internal databases and software platforms. Our LLM integration enables text processing, conversational interfaces, document analysis and knowledge retrieval.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "api-integration",
    label: "3. AI API Integration",
    lucideIcon: <Network className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "Connect AI models and services with existing applications through secure API-based integrations. This enables smooth data exchange between AI capabilities and business software while extending application functionality.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "app-integration",
    label: "4. AI Application Integration",
    lucideIcon: <AppWindow className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Integrate intelligent AI features into existing software applications without replacing the entire technology infrastructure. We help businesses extend application capabilities through intelligent interfaces, data processing and AI-powered workflows.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "agent-integration",
    label: "5. AI Agent Integration",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "Connect AI agents with business applications, data sources and operational workflows to support intelligent task execution. This enables AI agents to interact with existing systems while maintaining appropriate access controls and human oversight.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "enterprise-integration",
    label: "6. Enterprise AI Integration",
    lucideIcon: <Building2 className="w-4 h-4" />,
    image: "/images/services/analytics.jpg",
    description:
      "Integrate AI capabilities with enterprise applications, internal systems and business data environments. Our enterprise AI integration approach supports system connectivity, information exchange and scalable business operations.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
];

const BENTO_REQUIREMENTS: MagicBentoItem[] = [
  {
    id: "crm-integration",
    icon: <Users className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Integration with CRM Systems",
    description:
      "Integrate AI capabilities with customer relationship management software to process customer information, analyze interactions and improve access to relevant customer data.",
    visual: <CustomerSupportVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "erp-integration",
    icon: <Layers className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Integration with ERP Systems",
    description:
      "Connect AI models with enterprise resource planning systems to support business data processing, operational workflows and information management across departments.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "dms-integration",
    icon: <FileText className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Integration with Document Management Systems",
    description:
      "Integrate AI models with document management systems to enable document analysis, information extraction, intelligent document search and knowledge retrieval.",
    visual: <DocumentProcessingVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "business-apps-integration",
    icon: <Workflow className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Integration with Business Applications",
    description:
      "Extend existing business applications through AI application integration to support intelligent information processing, user interactions and automated business workflows.",
    visual: <EnterpriseKnowledgeVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "data-platforms-integration",
    icon: <Database className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Integration with Data Platforms",
    description:
      "Connect AI models with business databases and data platforms through AI data integration to support information retrieval, data analysis and AI-powered applications.",
    visual: <BusinessAnalyticsVisual />,
    colSpan: 4,
    rowSpan: 1,
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* Part 1: H2 AI Integration Services Across Business Systems (FeatureCarousel) */}
      <section
        id="services"
        className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
              AI Integration Services Across Business Systems
            </h2>
            <p className="mt-3 sm:mt-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Webnox Digital provides AI integration services that connect intelligent technologies with existing business applications, enterprise systems and data environments.
            </p>
          </div>

          <div className="w-full">
            <FeatureCarousel
              features={INTEGRATION_CAROUSEL_FEATURES}
              theme="webnox"
            />
          </div>

          {/* Semantic H3 Block so all 6 H3 headings & descriptions are present in DOM */}
          <div className="sr-only">
            {INTEGRATION_CAROUSEL_FEATURES.map((item) => (
              <div key={item.id}>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: H3 AI Integration Solutions for Different Business Requirements (MagicBento) */}
      <section
        id="solutions"
        className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-4xl mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
              AI Integration Solutions for Different Business Requirements
            </h3>
            <p className="mt-4 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Every organization uses different software platforms, applications and data systems to manage its operations. Our custom AI integration services connect AI capabilities with these existing technologies to support specific business processes and operational requirements.
            </p>
          </div>

          <MagicBento
            items={BENTO_REQUIREMENTS}
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

          {/* Semantic H4 Block so all 5 H4 headings are preserved in the heading hierarchy */}
          <div className="sr-only">
            {BENTO_REQUIREMENTS.map((req) => (
              <div key={req.id}>
                <h4>{req.title}</h4>
                <p>{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import React from "react";
import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import MagicBento, { MagicBentoItem } from "@/components/ui/MagicBento";
import {
  Bot,
  Brain,
  Code2,
  Compass,
  Cpu,
  FileSearch,
  Layers,
  Megaphone,
  Mic,
  Network,
  Sparkles,
  Workflow,
  Wrench,
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

const CAROUSEL_SERVICES: FeatureItem[] = [
  {
    id: "ai-consultation",
    label: "AI Consultation",
    lucideIcon: <Compass className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Our AI consultation services help businesses identify where artificial intelligence can improve operations and product performance. We assess business requirements, evaluate suitable technologies and create an implementation roadmap to guide AI adoption.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "custom-ai-dev",
    label: "Custom AI Development",
    lucideIcon: <Code2 className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "As a custom AI development company in India, we build software solutions around specific business needs and product goals. Our services include AI models, intelligent workflows, data processing and application development to solve practical business challenges.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "ai-software-dev",
    label: "AI Software Development",
    lucideIcon: <Layers className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "Our AI software development services combine application engineering with artificial intelligence to create intelligent digital products. We develop AI powered business applications, enterprise platforms and SaaS solutions that automate tasks and improve everyday operations.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "ai-app-dev",
    label: "AI Application Development",
    lucideIcon: <Cpu className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "As an AI app development company in India, we build intelligent web and mobile applications for business and customer needs. Our solutions include AI powered search, recommendations, document processing, content generation and conversational features.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "ai-agent-dev",
    label: "AI Agent Development",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "Our AI agent development services create intelligent agents that understand instructions, access connected tools and perform defined tasks. We build customer support agents, sales agents and enterprise agents that automate workflows while supporting human oversight.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "generative-ai-dev",
    label: "Generative AI Development",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image: "/images/services/analytics.jpg",
    description:
      "Our Generative AI development services help businesses create applications that generate, summarise and process information. We develop AI assistants, content generation tools, document intelligence systems and conversational applications using suitable AI models.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
];

const BENTO_SERVICES: MagicBentoItem[] = [
  {
    id: "bento-consultation",
    icon: <Compass className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Consultation",
    description:
      "Our AI consultation services help businesses identify where artificial intelligence can improve operations and product performance. We assess business requirements, evaluate suitable technologies and create an implementation roadmap to guide AI adoption.",
    visual: <EnterpriseKnowledgeVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-custom-ai",
    icon: <Code2 className="w-4 h-4 text-[#ff5e00]" />,
    title: "Custom AI Development",
    description:
      "As a custom AI development company in India, we build software solutions around specific business needs and product goals. Our services include AI models, intelligent workflows, data processing and application development to solve practical business challenges.",
    visual: <DocumentProcessingVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-ai-software",
    icon: <Layers className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Software Development",
    description:
      "Our AI software development services combine application engineering with artificial intelligence to create intelligent digital products. We develop AI powered business applications, enterprise platforms and SaaS solutions that automate tasks and improve everyday operations.",
    visual: <SaaSEnabledVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-ai-app",
    icon: <Cpu className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Application Development",
    description:
      "As an AI app development company in India, we build intelligent web and mobile applications for business and customer needs. Our solutions include AI powered search, recommendations, document processing, content generation and conversational features.",
    visual: <CustomerSupportVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-ai-agent",
    icon: <Bot className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Agent Development",
    description:
      "Our AI agent development services create intelligent agents that understand instructions, access connected tools and perform defined tasks. We build customer support agents, sales agents and enterprise agents that automate workflows while supporting human oversight.",
    visual: <AgentApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-gen-ai",
    icon: <Sparkles className="w-4 h-4 text-[#ff5e00]" />,
    title: "Generative AI Development",
    description:
      "Our Generative AI development services help businesses create applications that generate, summarise and process information. We develop AI assistants, content generation tools, document intelligence systems and conversational applications using suitable AI models.",
    visual: <MultimodalAIVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-llm",
    icon: <Brain className="w-4 h-4 text-[#ff5e00]" />,
    title: "LLM Development",
    description:
      "Our LLM development services build applications powered by Large Language Models for business-specific requirements. We connect language models with company data, documents and APIs to support contextual search, automated responses and information processing.",
    visual: <SearchApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-integration",
    icon: <Network className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Integration",
    description:
      "Our AI integration services connect artificial intelligence with existing websites, mobile applications, databases and enterprise software. We integrate suitable AI models and APIs to automate processes, improve application functionality and extend existing system capabilities.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-transformation",
    icon: <Workflow className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Transformation Services",
    description:
      "Our AI transformation services help businesses introduce artificial intelligence across their operations and digital systems. We identify automation opportunities, plan AI adoption, modernise workflows and integrate intelligent solutions to improve operational efficiency.",
    visual: <BusinessAnalyticsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-copilot",
    icon: <Bot className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Copilot Development",
    description:
      "Our AI copilot development services create intelligent assistants within business applications and software platforms. These copilots help users retrieve information, analyse documents, receive recommendations and complete tasks using connected business data.",
    visual: <AssistantsCopilotsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-rag",
    icon: <FileSearch className="w-4 h-4 text-[#ff5e00]" />,
    title: "RAG Development",
    description:
      "Our RAG development services connect AI language models with trusted business documents, databases and knowledge sources. We build applications that retrieve relevant information before generating responses for internal search, document assistance and customer support.",
    visual: <SearchApplicationsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-voice-agent",
    icon: <Mic className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI Voice Agent Development",
    description:
      "Our AI voice agent development services automate voice based customer and business interactions. We build solutions for inbound calls, appointment scheduling, lead qualification and customer enquiries, connecting voice systems with relevant business applications.",
    visual: <CustomerSupportVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-nocode",
    icon: <Wrench className="w-4 h-4 text-[#ff5e00]" />,
    title: "No-Code AI Builder Solutions",
    description:
      "Our no-code AI builder solutions help businesses create applications, prototypes and automated workflows using visual development platforms. We assess each requirement and recommend no-code tools or custom AI development based on functionality and scalability needs.",
    visual: <WorkflowAutomationVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "bento-marketing",
    icon: <Megaphone className="w-4 h-4 text-[#ff5e00]" />,
    title: "AI-Powered Digital Marketing",
    description:
      "Our AI-powered digital marketing services combine artificial intelligence with SEO, content marketing, Google Ads and social media campaigns. We use AI assisted research, content workflows and campaign analysis to support marketing performance and data driven decisions.",
    visual: <BusinessAnalyticsVisual />,
    colSpan: 2,
    rowSpan: 1,
  },
];

export default function ServicesRange() {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Native Services in India for Modern Businesses
          </h2>
        </div>

        {/* Dynamic Feature Carousel with WD Grad.svg Orange Gradient & Theme Sync */}
        <div className="w-full mb-16 sm:mb-24">
          <FeatureCarousel features={CAROUSEL_SERVICES} theme="webnox" />
        </div>

        {/* Magic Bento Grid with Animated SolutionVisuals for all 14 H3 Services */}
        <MagicBento
          items={BENTO_SERVICES}
          columns={4}
          rowHeight={290}
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

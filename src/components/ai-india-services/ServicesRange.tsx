"use client";

import React from "react";
import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import {
  Brain,
  Code2,
  Sparkles,
  Bot,
  Smartphone,
  Cpu,
  Database,
  Layers,
  Workflow,
  TrendingUp,
  Glasses,
  Mic,
  ArrowRight,
} from "lucide-react";

export const AI_INDIA_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "custom-ai-dev",
    label: "01. Custom AI Development",
    category: "Tailored AI Engineering",
    lucideIcon: <Brain className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Our custom AI development services help businesses build artificial intelligence solutions around their specific processes, data and operational needs. We develop AI-powered features that integrate with existing systems and support practical business objectives.",
    capabilities: [
      "Process-specific AI workflows",
      "Proprietary data ingestion",
      "Zero workflow disruption",
      "Tailored enterprise models",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "ai-software-dev",
    label: "02. AI Software Development",
    category: "Intelligent Software & SaaS",
    lucideIcon: <Code2 className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "As an AI software development company in India, Webnox Digital builds intelligent software, SaaS platforms and business applications. We integrate AI capabilities into your software to simplify tasks, improve information access and support everyday business operations.",
    capabilities: [
      "AI-native SaaS products",
      "Microservice & API layers",
      "Interactive enterprise UX",
      "Scalable multi-tenant setup",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "gen-ai-dev",
    label: "03. Generative AI Development",
    category: "Content & Knowledge Synthesis",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image: "/images/services/fine-tuning.jpg",
    description:
      "Our generative AI development services help businesses create content, summarize documents and extract insights using generative AI models. We develop applications that connect AI capabilities with relevant business information to support content creation and knowledge-based tasks.",
    capabilities: [
      "Automated document summarization",
      "Enterprise content synthesis",
      "Multimodal prompt pipelines",
      "Accurate source citations",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "ai-agent-dev",
    label: "04. AI Agent Development",
    category: "Autonomous Multi-Step Agents",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "As an AI agent development company in India, we build AI agents that retrieve information, use connected tools, and perform multi-step tasks. With defined permissions and approval controls, these agents can support business workflows across databases, CRM platforms and other applications.",
    capabilities: [
      "Autonomous tool-calling loops",
      "Role-based permission gating",
      "Human-in-the-loop oversight",
      "Cross-database multi-step tasks",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "ai-app-dev",
    label: "05. AI Application Development",
    category: "Web & Mobile AI Apps",
    lucideIcon: <Smartphone className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "Our AI application development services in India help businesses create intelligent web and mobile applications. We integrate features such as conversational interfaces, smart search and contextual recommendations to make digital products more useful and responsive to user needs.",
    capabilities: [
      "Responsive React & Flutter apps",
      "Conversational conversational UX",
      "Contextual recommendation engines",
      "Sub-second response speeds",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "llm-app-dev",
    label: "06. LLM Application Development",
    category: "LLM & Fine-Tuning Services",
    lucideIcon: <Cpu className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Our LLM application development services help businesses use large language models for document analysis, information retrieval and natural-language interactions. We also offer LLM fine-tuning services in India where adapting a model to specific tasks and domain requirements is appropriate.",
    capabilities: [
      "Domain-specific fine-tuning",
      "Structured output enforcement",
      "Zero hallucinations guardrails",
      "Token-cost optimization",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "custom-rag-dev",
    label: "07. Custom RAG Development",
    category: "Vector Retrieval & Knowledge",
    lucideIcon: <Database className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "As a custom RAG development company in India, Webnox Digital connects AI models with approved business documents and data sources. Our RAG solutions help employees find relevant information and receive answers grounded in retrieved content, with source references where supported.",
    capabilities: [
      "Hybrid vector + BM25 search",
      "Granular document permissions",
      "Direct source link citations",
      "Fast real-time data sync",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "ai-integration-services",
    label: "08. AI Integration Services",
    category: "CRM, ERP & API Connectors",
    lucideIcon: <Layers className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "Our AI integration services in India connect AI models and intelligent workflows with existing CRM, ERP, websites and business applications. This approach helps businesses introduce new AI capabilities while retaining their existing technology wherever practical.",
    capabilities: [
      "Salesforce, HubSpot & SAP sync",
      "Robust REST & GraphQL APIs",
      "Secure webhook event bridges",
      "Legacy software modernization",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "ai-automation-solutions",
    label: "09. AI Automation Solutions",
    category: "Workflow & Rules Automation",
    lucideIcon: <Workflow className="w-4 h-4" />,
    image: "/images/services/deployment.jpg",
    description:
      "Our AI automation services in India combine artificial intelligence with business rules to streamline repetitive tasks. From invoice data extraction to support-ticket classification, we develop workflows that reduce manual processing and support consistent operational procedures.",
    capabilities: [
      "Automated invoice processing",
      "Ticket classification & routing",
      "Deterministic business rules",
      "Reduced human manual error",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "ml-predictive-analytics",
    label: "10. Machine Learning and Predictive Analytics",
    category: "Predictive Intelligence",
    lucideIcon: <TrendingUp className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Our machine learning development services help businesses identify patterns in historical data and improve forecasting. Through predictive analytics and AI/ML consulting services in India, we support use cases such as demand planning, customer churn analysis, and anomaly detection.",
    capabilities: [
      "Demand & inventory forecasting",
      "Customer churn prediction",
      "Financial anomaly detection",
      "Automated pipeline retraining",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "enterprise-copilots",
    label: "11. Enterprise AI Copilot Development",
    category: "Contextual Employee Assistance",
    lucideIcon: <Glasses className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "Our enterprise AI copilot development services help employees access business information and complete tasks within their existing software. AI copilots can support record retrieval, response drafting, and contextual assistance through approved data sources and application integrations.",
    capabilities: [
      "In-software contextual copilots",
      "Automated email & report draft",
      "Strict data privacy boundaries",
      "Role-based knowledge retrieval",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
  {
    id: "voice-ai-apps",
    label: "12. AI Voice Application Development",
    category: "Conversational Voice Agents",
    lucideIcon: <Mic className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "As an AI voice agent development company in India, Webnox Digital builds voice applications for customer enquiries, lead qualification, appointment requests and routine support. These solutions can connect with business systems and transfer complex requests to human representatives when needed.",
    capabilities: [
      "Sub-500ms voice synthesis",
      "Intelligent call routing",
      "Seamless human transfer",
      "Live CRM data synchronization",
    ],
    ctaText: "Discuss Your Project Scope",
    ctaLink: "#contact",
  },
];

export default function ServicesRange() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Service Portfolio
          </div>
          {/* H2 Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Development Services in India Built for Business Needs
          </h2>
          <p className="mt-3 sm:mt-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Webnox Digital provides AI development services in India to help businesses build
            intelligent applications, integrate AI into existing systems, and automate workflows.
            Each solution is designed around your business requirements, data, and operational
            goals.
          </p>
        </div>

        {/* Dynamic Feature Carousel with Theme Sync */}
        <div className="w-full">
          <FeatureCarousel features={AI_INDIA_SERVICES_FEATURES} theme="webnox" />
        </div>

        {/* Mid-Page Call-To-Action Banner */}
        <div
          className="relative mt-16 sm:mt-24 rounded-[26px] sm:rounded-[34px] p-8 sm:p-12 lg:p-16 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20"
          style={{
            background:
              "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight">
              Build Your AI Solution with Webnox Digital
            </h3>
            <p className="mt-4 text-white/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Looking for an AI development company in India to build custom software, develop
              intelligent agents, or automate business processes? Talk to our team about your
              requirements and identify an AI solution suited to your business goals.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 text-sm sm:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_6px_28px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_36px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Discuss Your Project Scope with Our AI Architects →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

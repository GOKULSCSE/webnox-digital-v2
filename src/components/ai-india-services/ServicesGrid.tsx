"use client";

import React, { useState } from "react";
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
  CheckCircle2,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: "core" | "genai" | "agents" | "automation";
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  capabilities: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "custom-ai",
    number: "01",
    title: "01. Custom AI Development",
    category: "core",
    categoryLabel: "Custom AI",
    icon: Brain,
    description:
      "Our custom AI development services help businesses build artificial intelligence solutions around their specific processes, data and operational needs. We develop AI-powered features that integrate with existing systems and support practical business objectives.",
    capabilities: [
      "Process-specific AI logic",
      "Proprietary data integration",
      "Tailored enterprise models",
      "Domain workflow automation",
    ],
  },
  {
    id: "ai-software",
    number: "02",
    title: "02. AI Software Development",
    category: "core",
    categoryLabel: "Software Engineering",
    icon: Code2,
    description:
      "As an AI software development company in India, Webnox Digital builds intelligent software, SaaS platforms and business applications. We integrate AI capabilities into your software to simplify tasks, improve information access and support everyday business operations.",
    capabilities: [
      "AI-native SaaS architecture",
      "Intelligent web applications",
      "Microservices & backend APIs",
      "Scalable multi-tenant systems",
    ],
  },
  {
    id: "generative-ai",
    number: "03",
    title: "03. Generative AI Development",
    category: "genai",
    categoryLabel: "Generative AI",
    icon: Sparkles,
    description:
      "Our generative AI development services help businesses create content, summarize documents and extract insights using generative AI models. We develop applications that connect AI capabilities with relevant business information to support content creation and knowledge-based tasks.",
    capabilities: [
      "Document summarization",
      "Automated drafting & synthesis",
      "Multi-modal generative pipelines",
      "Knowledge extraction engines",
    ],
  },
  {
    id: "ai-agents",
    number: "04",
    title: "04. AI Agent Development",
    category: "agents",
    categoryLabel: "Autonomous Agents",
    icon: Bot,
    description:
      "As an AI agent development company in India, we build AI agents that retrieve information, use connected tools, and perform multi-step tasks. With defined permissions and approval controls, these agents can support business workflows across databases, CRM platforms and other applications.",
    capabilities: [
      "Autonomous tool-calling loops",
      "Multi-agent orchestration",
      "Approval & guardrail controls",
      "CRM & database actions",
    ],
  },
  {
    id: "ai-applications",
    number: "05",
    title: "05. AI Application Development",
    category: "core",
    categoryLabel: "App Development",
    icon: Smartphone,
    description:
      "Our AI application development services in India help businesses create intelligent web and mobile applications. We integrate features such as conversational interfaces, smart search and contextual recommendations to make digital products more useful and responsive to user needs.",
    capabilities: [
      "Cross-platform iOS & Android",
      "Conversational chat interfaces",
      "Contextual recommendation engines",
      "Offline & on-device AI models",
    ],
  },
  {
    id: "llm-applications",
    number: "06",
    title: "06. LLM Application Development",
    category: "genai",
    categoryLabel: "LLM Engineering",
    icon: Cpu,
    description:
      "Our LLM application development services help businesses use large language models for document analysis, information retrieval and natural-language interactions. We also offer LLM fine-tuning services in India where adapting a model to specific tasks and domain requirements is appropriate.",
    capabilities: [
      "Custom LLM fine-tuning (LoRA/QLoRA)",
      "Prompt engineering & guardrails",
      "Deterministic structured output",
      "Inference latency optimization",
    ],
  },
  {
    id: "custom-rag",
    number: "07",
    title: "07. Custom RAG Development",
    category: "genai",
    categoryLabel: "RAG & Vector",
    icon: Database,
    description:
      "As a custom RAG development company in India, Webnox Digital connects AI models with approved business documents and data sources. Our RAG solutions help employees find relevant information and receive answers grounded in retrieved content, with source references where supported.",
    capabilities: [
      "Hybrid vector & BM25 search",
      "Citation & source verification",
      "Document ingestion & chunking",
      "Zero hallucinations framework",
    ],
  },
  {
    id: "ai-integration",
    number: "08",
    title: "08. AI Integration Services",
    category: "automation",
    categoryLabel: "Systems Integration",
    icon: Layers,
    description:
      "Our AI integration services in India connect AI models and intelligent workflows with existing CRM, ERP, websites and business applications. This approach helps businesses introduce new AI capabilities while retaining their existing technology wherever practical.",
    capabilities: [
      "Salesforce, HubSpot & SAP integration",
      "RESTful & GraphQL API endpoints",
      "Legacy software AI enablement",
      "Enterprise webhook triggers",
    ],
  },
  {
    id: "ai-automation",
    number: "09",
    title: "09. AI Automation Solutions",
    category: "automation",
    categoryLabel: "Intelligent Automation",
    icon: Workflow,
    description:
      "Our AI automation services in India combine artificial intelligence with business rules to streamline repetitive tasks. From invoice data extraction to support-ticket classification, we develop workflows that reduce manual processing and support consistent operational procedures.",
    capabilities: [
      "Intelligent invoice parsing",
      "Support ticket triage & routing",
      "Human-in-the-loop validation",
      "Automated compliance checking",
    ],
  },
  {
    id: "ml-predictive",
    number: "10",
    title: "10. Machine Learning and Predictive Analytics",
    category: "automation",
    categoryLabel: "Machine Learning",
    icon: TrendingUp,
    description:
      "Our machine learning development services help businesses identify patterns in historical data and improve forecasting. Through predictive analytics and AI/ML consulting services in India, we support use cases such as demand planning, customer churn analysis, and anomaly detection.",
    capabilities: [
      "Demand & inventory forecasting",
      "Customer churn prediction",
      "Financial anomaly detection",
      "Continuous model retraining",
    ],
  },
  {
    id: "enterprise-copilot",
    number: "11",
    title: "11. Enterprise AI Copilot Development",
    category: "agents",
    categoryLabel: "Enterprise Copilots",
    icon: Glasses,
    description:
      "Our enterprise AI copilot development services help employees access business information and complete tasks within their existing software. AI copilots can support record retrieval, response drafting, and contextual assistance through approved data sources and application integrations.",
    capabilities: [
      "In-app contextual assistance",
      "Autonomous drafting & search",
      "Internal knowledge base linkage",
      "Role-based permission gating",
    ],
  },
  {
    id: "voice-ai",
    number: "12",
    title: "12. AI Voice Application Development",
    category: "agents",
    categoryLabel: "Voice AI",
    icon: Mic,
    description:
      "As an AI voice agent development company in India, Webnox Digital builds voice applications for customer enquiries, lead qualification, appointment requests and routine support. These solutions can connect with business systems and transfer complex requests to human representatives when needed.",
    capabilities: [
      "Sub-500ms voice synthesis",
      "Automated appointment booking",
      "Inbound & outbound call routing",
      "Seamless human escalation",
    ],
  },
];

const CATEGORIES = [
  { key: "all", label: "All 12 Services" },
  { key: "core", label: "Custom & Software AI" },
  { key: "genai", label: "Generative AI & RAG" },
  { key: "agents", label: "Agents & Copilots" },
  { key: "automation", label: "Automation & ML" },
] as const;

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-3">
            End-to-End Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Development Services in India Built for Business Needs
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital provides AI development services in India to help businesses build
            intelligent applications, integrate AI into existing systems, and automate workflows.
            Each solution is designed around your business requirements, data, and operational
            goals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? "bg-[#160a04] text-white shadow-md"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200/80 hover:border-neutral-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 hover:border-[#FF7230]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(255,114,48,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-[#FF7230] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                      SERVICE {service.number}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium bg-neutral-100 px-2.5 py-1 rounded-full">
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Icon & H3 Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-100 group-hover:bg-gradient-to-br group-hover:from-[#FF7230] group-hover:to-[#FF532B] flex items-center justify-center text-neutral-800 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#12141a] tracking-tight leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2.5">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 space-y-1.5">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5e00] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF7230] hover:text-[#d34b16] transition-colors group/link cursor-pointer"
                  >
                    <span>Discuss Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Call-To-Action Banner */}
        <div
          className="relative mt-16 sm:mt-24 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-[0_16px_40px_rgba(255,114,48,0.22)] overflow-hidden border border-white/20"
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
            <p className="mt-4 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
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

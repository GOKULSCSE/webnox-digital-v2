"use client";

import React from "react";
import { FeatureCarousel, type FeatureItem } from "@/components/ui/feature-carousel";
import {
  Sparkles,
  Cpu,
  Brain,
  Layers,
  Database,
  MessageSquare,
  Bot,
  Compass,
  FileSearch,
  Workflow,
} from "lucide-react";

export const GENAI_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "genai-consulting",
    label: "Generative AI Consulting",
    category: "1. Generative AI Consulting",
    lucideIcon: <Compass className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    description:
      "Identify the right Generative AI opportunities and create a practical roadmap for implementation. Generative AI use case identification, Feasibility and ROI assessment, GenAI strategy and roadmap, Data and technology readiness.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "model-development",
    label: "Generative AI Model Development",
    category: "2. Generative AI Model Development",
    lucideIcon: <Brain className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
    description:
      "Develop and adapt Generative AI models for specific business and domain requirements. Custom Generative AI model development, Domain-specific model development, Foundation model adaptation, Multimodal AI model development.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "app-development",
    label: "Generative AI Application Development",
    category: "3. Generative AI Application Development",
    lucideIcon: <Layers className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    description:
      "Build AI-powered applications that use Generative AI to deliver useful features, experiences, and business capabilities. Custom Generative AI applications, LLM-powered applications, AI-powered product features, Enterprise GenAI applications.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "llm-integration",
    label: "LLM Development & Integration",
    category: "4. LLM Development & Integration",
    lucideIcon: <Cpu className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
    description:
      "Build applications around large language models and connect them with the data, tools and systems they need. LLM application development, GPT, Claude, Gemini, Llama and other LLM integration, Prompt and context engineering, Enterprise LLM integration.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "rag-knowledge",
    label: "RAG Development & Enterprise Knowledge AI",
    category: "5. RAG Development & Enterprise Knowledge AI",
    lucideIcon: <Database className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200",
    description:
      "Connect Generative AI with trusted business information so applications can retrieve relevant knowledge before generating responses. Retrieval-Augmented Generation (RAG), Enterprise knowledge bases, Document Q&A systems, Semantic and contextual search. RAG remains an important enterprise GenAI capability because it connects LLMs with private knowledge and improves context for business applications.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "chatbots",
    label: "Generative AI Chatbot Development",
    category: "6. Generative AI Chatbot Development",
    lucideIcon: <MessageSquare className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200",
    description:
      "Build conversational AI applications that understand context and provide useful responses across customer and employee interactions. Enterprise AI chatbots, Conversational AI assistants, Knowledge-based chatbots, Customer and employee AI assistants.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "copilots",
    label: "AI Copilot Development",
    category: "7. AI Copilot Development",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
    description:
      "Create AI copilots that assist users directly within business applications and specialised workflows. Enterprise AI copilots, Business function copilots, Developer and productivity copilots, Context-aware AI assistance.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-agents",
    label: "AI Agent Development",
    category: "8. AI Agent Development",
    lucideIcon: <Bot className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description:
      "Develop AI agents that can use tools, access information, perform tasks, and coordinate multi-step workflows. AI agent development, Tool using AI agents, Multi agent systems, Agent orchestration and workflow execution.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "multimodal-ai",
    label: "Multimodal Generative AI Development",
    category: "9. Multimodal Generative AI Development",
    lucideIcon: <FileSearch className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    description:
      "Build AI applications that can understand and generate information across multiple formats. Text and image AI, Document understanding, Audio and speech AI, Video and multimodal AI applications.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "integration-automation",
    label: "Generative AI Integration & Automation",
    category: "10. Generative AI Integration & Automation",
    lucideIcon: <Workflow className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description:
      "Integrate Generative AI with existing applications and automate workflows across business systems. Generative AI API integration, CRM, ERP and database integration, AI workflow automation, Third-party AI platform integration.",
    ctaText: "Build Your Generative AI Solution",
    ctaLink: "#contact",
  },
];

export default function ServicesRange() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Generative AI Development Services Across Models, Apps & Agents
          </h2>
        </div>

        {/* Feature Carousel */}
        <div className="w-full">
          <FeatureCarousel features={GENAI_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}

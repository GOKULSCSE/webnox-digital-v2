"use client";

import React from "react";
import { FeatureCarousel, type FeatureItem } from "@/components/ui/feature-carousel";
import {
  Cpu,
  Layers,
  Sparkles,
  Bot,
  Smartphone,
  Brain,
  Database,
  Workflow,
  Zap,
  TrendingUp,
  MessageSquare,
  Mic,
} from "lucide-react";

export const AI_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "custom-ai",
    label: "Custom AI Development",
    category: "01 - Custom AI Development",
    lucideIcon: <Cpu className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    description:
      "Custom AI solutions are developed around your business processes, data, software and operational requirements. These solutions support use cases such as intelligent data processing, decision support, workflow automation and business operations, helping businesses add AI capabilities that fit their existing systems.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-software",
    label: "AI Software Development",
    category: "02 - AI Software Development",
    lucideIcon: <Layers className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
    description:
      "AI-powered software, SaaS products, platforms and business applications combine software engineering with artificial intelligence. AI capabilities can automate tasks, process business information, assist users and support operational workflows while fitting into the overall product architecture.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "gen-ai",
    label: "Generative AI Development",
    category: "03 - Generative AI Development",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200",
    description:
      "Generative AI solutions can generate, summarize, analyze and transform business information across different workflows. Applications include content generation, document processing, knowledge management, research, customer interactions and internal operations, helping teams handle information intensive tasks more efficiently.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-agents",
    label: "AI Agent Development",
    category: "04 - AI Agent Development",
    lucideIcon: <Bot className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description:
      "AI agents can understand instructions, access business information, use connected tools and perform defined tasks across business workflows. Agent-based solutions support process automation, employee assistance, customer interactions, data processing and multi-step operations while reducing repetitive manual work.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-apps",
    label: "AI Application Development",
    category: "05 - AI Application Development",
    lucideIcon: <Smartphone className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    description:
      "AI-powered web and mobile applications bring intelligent functionality directly into digital products. Features such as AI search, recommendations, conversational interfaces, document processing and personalization can improve application capabilities and make digital experiences more useful for customers and employees.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "llm-apps",
    label: "LLM Application Development",
    category: "06 - LLM Application Development",
    lucideIcon: <Brain className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    description:
      "LLM powered applications use Large Language Models to handle language based business requirements. AI assistants, conversational search, document analysis, summarization, knowledge applications and natural language interfaces help employees and customers access, understand and process information more efficiently.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "rag-dev",
    label: "RAG Development",
    category: "07 - RAG Development",
    lucideIcon: <Database className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200",
    description:
      "Retrieval Augmented Generation (RAG) solutions connect AI applications with business documents, databases, knowledge bases and other approved information sources. RAG applications support enterprise search, internal knowledge assistants, document analysis, customer support and information driven workflows requiring relevant business context.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-integration",
    label: "AI Integration Services",
    category: "08 - AI Integration Services",
    lucideIcon: <Workflow className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description:
      "AI integration services connect AI models, APIs and AI services with existing business software and applications. Integrations with websites, mobile apps, SaaS platforms, CRMs, ERPs, databases and internal systems allow businesses to introduce AI capabilities without replacing their existing technology infrastructure.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-automation",
    label: "AI Automation Solutions",
    category: "09 - AI Automation Solutions",
    lucideIcon: <Zap className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    description:
      "AI powered automation combines artificial intelligence with applications, APIs, databases, business rules and workflows to handle repetitive and complex business processes . Common applications include document processing, information handling, customer interactions and operational workflows, reducing manual effort and improving productivity.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ml-dev",
    label: "Machine Learning Development",
    category: "10 - Machine Learning Development",
    lucideIcon: <TrendingUp className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    description:
      "Machine learning solutions use business data for prediction, classification, forecasting, recommendations and pattern recognition. These systems help businesses identify trends, generate data driven predictions, improve planning, analyze customer behavior and support decisions that depend on measurable business information.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "ai-copilot",
    label: "AI Copilot Development",
    category: "11 - AI Copilot Development",
    lucideIcon: <MessageSquare className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
    description:
      "AI copilots provide contextual assistance directly within business applications and software. They can search information, summarize records, generate content, answer questions, recommend actions and assist with defined workflows, helping employees complete everyday tasks faster without switching between multiple tools.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
  {
    id: "voice-ai",
    label: "AI Voice Application Development",
    category: "12 - AI Voice Application Development",
    lucideIcon: <Mic className="w-4 h-4" />,
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200",
    description:
      "AI voice applications enable businesses to automate voice based customer and operational interactions. Voice AI can support customer service, lead qualification, appointment handling, information requests and conversational workflows, helping businesses manage voice interactions while reducing manual intervention.",
    ctaText: "Build Your AI Solution",
    ctaLink: "#contact",
  },
];

export default function ServicesRange() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            Full-Spectrum AI Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Development Services for Business Software and Applications
          </h2>
        </div>

        {/* Feature Carousel */}
        <div className="w-full">
          <FeatureCarousel features={AI_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}

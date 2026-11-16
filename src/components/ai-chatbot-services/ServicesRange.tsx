"use client";

import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import {
  Bot,
  Sparkles,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Languages,
  Activity,
} from "lucide-react";

const CHATBOT_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "custom-ai-chatbot",
    label: "01. Custom AI Chatbot Development",
    category: "Tailored Workflows",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/chatbot-custom.jpg",
    description:
      "We build custom AI chatbots designed specifically for your daily business workflows and customer needs. Your bot handles repetitive customer inquiries, qualifies new sales leads, and completes real tasks without manual staff effort.",
    ctaText: "Build Your AI Chatbot",
    ctaLink: "#contact",
  },
  {
    id: "generative-ai-chatbot",
    label: "02. Generative AI Chatbot Development",
    category: "Brand Voice & Context",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "Our Generative AI chatbots hold natural, human-like conversations that maintain context across long chats. They understand detailed customer questions, follow your brand tone, and deliver helpful replies without confusing generic answers.",
    ctaText: "Build Your AI Chatbot",
    ctaLink: "#contact",
  },
  {
    id: "llm-chatbot",
    label: "03. LLM Chatbot Development Services",
    category: "Smart Model Routing",
    lucideIcon: <Cpu className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "We build intelligent chatbots powered by leading LLMs like GPT-4o, Claude, and open-source Llama models. Our smart routing balances high response accuracy with fast speeds, keeping your ongoing monthly running costs low.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "rag-chatbot",
    label: "04. RAG Chatbot Development Solutions",
    category: "Verified Citations",
    lucideIcon: <Database className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "We link your chatbot directly to your company files, product catalogs, and private internal databases. Instead of guessing, your bot searches your approved documents first and delivers verified answers with clear reference citations.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "chatbot-integration",
    label: "05. AI Chatbot Integration Services",
    category: "CRM & WhatsApp API",
    lucideIcon: <Network className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "We integrate conversational AI directly into your website, official WhatsApp Business API, and daily business tools. Your bot connects smoothly with CRMs like Zoho, LeadSquared, or Salesforce to automate daily customer support tasks.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
  {
    id: "enterprise-chatbot",
    label: "06. Enterprise AI Chatbot Development",
    category: "DPDP Act Compliant",
    lucideIcon: <ShieldCheck className="w-4 h-4" />,
    image: "/images/services/deployment.jpg",
    description:
      "We develop secure enterprise chatbots built for high traffic, multi-team access, and strict data privacy. Every solution includes role-based access control, private cloud hosting, and full compliance with India's DPDP Act 2023.",
    ctaText: "Schedule an Architecture Call",
    ctaLink: "#contact",
  },
  {
    id: "voice-multilingual-chatbot",
    label: "07. AI Voice & Multilingual Chatbot Development",
    category: "Indic & Hinglish",
    lucideIcon: <Languages className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "We create voice and text chatbots that communicate fluently in English, Hindi, Tamil, Telugu, and Hinglish. This allows you to serve regional audiences across India with effortless, automated voice and chat self-service.",
    ctaText: "Request a Sandbox PoC",
    ctaLink: "#contact",
  },
  {
    id: "chatbot-maintenance",
    label: "08. AI Chatbot Maintenance and Support Services",
    category: "Continuous Tuning",
    lucideIcon: <Activity className="w-4 h-4" />,
    image: "/images/services/chatbot-maintenance.jpg",
    description:
      "We actively monitor your live chatbot after launch to improve response accuracy and track query trends. Our team updates your knowledge base whenever products or policies change, ensuring reliable performance as your business grows.",
    ctaText: "Talk to Our AI Experts",
    ctaLink: "#contact",
  },
];

export default function ServicesRange() {
  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Custom AI Chatbot Development Services in India
          </h2>
          <p className="mt-3 sm:mt-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            From grounded RAG knowledge bots to multilingual WhatsApp and CRM-integrated virtual assistants, we engineer every layer of your conversational AI system.
          </p>
        </div>

        {/* Dynamic Feature Carousel with WD Grad.svg Orange Gradient & Theme Sync */}
        <div className="w-full">
          <FeatureCarousel features={CHATBOT_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}

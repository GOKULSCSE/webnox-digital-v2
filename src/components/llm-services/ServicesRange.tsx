"use client";

import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import { Sliders, Database, Bot, Network, Compass } from "lucide-react";

const LLM_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "fine-tuning",
    label: "1. LLM Fine-Tuning Services",
    category: "Domain Specialization",
    lucideIcon: <Sliders className="w-4 h-4" />,
    image: "/images/services/fine-tuning.jpg",
    description:
      "We train custom AI models to speak your specific industry language, understand your products and follow your company rules. What You Receive: A dedicated, custom-trained AI model configured exclusively for your business. Best For: Companies needing an AI that understands specialized technical, legal, medical or brand specific language without making mistakes.",
    ctaText: "Schedule an LLM Architecture Call",
    ctaLink: "#contact",
  },
  {
    id: "enterprise-rag",
    label: "2. Enterprise RAG Development Services",
    category: "Private Knowledge Search",
    lucideIcon: <Database className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "Through our enterprise RAG development services, we connect smart AI directly to your company’s private files, manuals, PDFs and databases. What You Receive: A private, secure question answering search system connected to your business documents. Best For: Internal staff knowledge search, fast customer support resolution and document compliance checks.",
    ctaText: "Schedule an LLM Architecture Call",
    ctaLink: "#contact",
  },
  {
    id: "autonomous-agents",
    label: "3. Autonomous AI Agent Development",
    category: "Digital Workers",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "We build digital AI assistants that don’t just chat, they actually complete real work. What You Receive: Automated digital workers that handle repetitive administrative workflows from start to finish. Best For: Automating customer inquiries, processing service tickets and qualifying incoming sales leads.",
    ctaText: "Request a 2-Week Sandbox PoC",
    ctaLink: "#contact",
  },
  {
    id: "llm-integration",
    label: "4. Enterprise LLM Integration Services",
    category: "System Connectivity",
    lucideIcon: <Network className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "You don’t need to replace the software your team already uses. Through our llm integration services, we connect custom AI directly into your existing business tools including CRM software, billing systems, databases and customer portals. What You Receive: Clean, secure connections that add AI intelligence directly into your current business software. Best For: Upgrading existing software with smart AI features without disrupting your current operations.",
    ctaText: "Request a 2-Week Sandbox PoC",
    ctaLink: "#contact",
  },
  {
    id: "llm-consulting",
    label: "5. LLM Consulting Services & Strategy",
    category: "Roadmap & Advisory",
    lucideIcon: <Compass className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Before writing any code, we help you identify where AI will create real financial value and where it is a waste of money. What You Receive: A clear project blueprint, realistic budget and timeline estimates and an objective technology roadmap. Best For: Business owners and leaders who want a clear, risk-free plan before spending money on AI development.",
    ctaText: "Schedule an LLM Architecture Call",
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
            Custom LLM Development Services in India Built for Your Business
          </h2>
          <p className="mt-3 sm:mt-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Our team delivers comprehensive Custom LLM Development Services tailored to enterprise infrastructure:
          </p>
        </div>

        {/* Dynamic Feature Carousel with WD Grad.svg Orange Gradient & Theme Sync */}
        <div className="w-full">
          <FeatureCarousel features={LLM_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}

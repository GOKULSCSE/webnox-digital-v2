"use client";

import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import {
  Compass,
  ClipboardCheck,
  Sparkles,
  BrainCircuit,
  Rocket,
  Building2,
  Network,
  Bot,
} from "lucide-react";

const CONSULTING_SERVICES_FEATURES: FeatureItem[] = [
  {
    id: "ai-strategy",
    label: "01. AI Strategy Consulting",
    category: "Executive Roadmap",
    lucideIcon: <Compass className="w-4 h-4" />,
    image: "/images/services/custom-llm.jpg",
    description:
      "Our senior consultants analyze your operational bottlenecks, evaluate organizational readiness, and craft a phased, multi-year roadmap that aligns practical artificial intelligence investments directly with your core commercial business goals.",
    ctaText: "Speak with Our AI Consultants",
    ctaLink: "#contact",
  },
  {
    id: "ai-readiness",
    label: "02. AI Readiness Assessment",
    category: "Data & ROI Audit",
    lucideIcon: <ClipboardCheck className="w-4 h-4" />,
    image: "/images/services/analytics.jpg",
    description:
      "We conduct an in-depth audit of your data maturity, existing technical stack, security governance, and team workflows to establish clear feasibility benchmarks and calculate projected implementation return on investment.",
    ctaText: "Request an AI Readiness Assessment",
    ctaLink: "#contact",
  },
  {
    id: "generative-ai",
    label: "03. Generative AI Consulting Services",
    category: "Foundation Models & RAG",
    lucideIcon: <Sparkles className="w-4 h-4" />,
    image: "/images/services/generative-ai.jpg",
    description:
      "We help your enterprise select, evaluate, and fine-tune foundation models, designing secure RAG knowledge bases and private generative workflows that balance high conversational intelligence with minimal ongoing token expenses.",
    ctaText: "Speak with Our AI Consultants",
    ctaLink: "#contact",
  },
  {
    id: "machine-learning",
    label: "04. Machine Learning Consulting",
    category: "Predictive & Vision AI",
    lucideIcon: <BrainCircuit className="w-4 h-4" />,
    image: "/images/services/fine-tuning.jpg",
    description:
      "Our machine learning specialists build, train, and deploy predictive algorithms, recommendation engines, and computer vision systems tailored to solve complex forecasting, fraud detection, and operational optimization challenges.",
    ctaText: "Speak with Our AI Consultants",
    ctaLink: "#contact",
  },
  {
    id: "ai-implementation",
    label: "05. AI Implementation Consulting",
    category: "Production Engineering",
    lucideIcon: <Rocket className="w-4 h-4" />,
    image: "/images/services/rag-development.jpg",
    description:
      "We transform architectural blueprints into production-ready software, deploying scalable data pipelines, secure API endpoints, and low-latency cloud infrastructure that transition your pilot projects smoothly into reliable everyday business operations.",
    ctaText: "Speak with Our AI Consultants",
    ctaLink: "#contact",
  },
  {
    id: "enterprise-ai",
    label: "06. Enterprise AI Consulting",
    category: "Private VPC & RBAC",
    lucideIcon: <Building2 className="w-4 h-4" />,
    image: "/images/services/deployment.jpg",
    description:
      "Designed for high-scale organizations requiring advanced role-based access control, distributed microservices, and dedicated VPC infrastructure, our enterprise advisory ensures seamless adoption across complex multi-department corporate environments without security compromises.",
    ctaText: "Speak with Our AI Consultants",
    ctaLink: "#contact",
  },
  {
    id: "ai-integration",
    label: "07. AI Integration Consulting",
    category: "CRM, ERP & APIs",
    lucideIcon: <Network className="w-4 h-4" />,
    image: "/images/services/integration.jpg",
    description:
      "We connect custom intelligent models directly into your daily software ecosystem, integrating smoothly with CRM platforms, ERP systems, internal databases, and messaging channels to avoid disrupting established staff workflows.",
    ctaText: "Speak with Our AI Consultants",
    ctaLink: "#contact",
  },
  {
    id: "ai-automation",
    label: "08. AI Automation Consulting",
    category: "Autonomous Agents",
    lucideIcon: <Bot className="w-4 h-4" />,
    image: "/images/services/ai-agent-workflows.jpg",
    description:
      "We design autonomous multi-step agents that execute repetitive business tasks, automate document processing, and manage cross-departmental approvals, reducing manual operational hours while maintaining human-in-the-loop oversight for critical decisions.",
    ctaText: "Request an AI Readiness Assessment",
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
            Our Core Artificial Intelligence Consulting Services
          </h2>
          <p className="mt-3 sm:mt-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
            End-to-end AI strategy, readiness auditing, machine learning engineering, and production implementation tailored to your enterprise stack.
          </p>
        </div>

        {/* Dynamic Feature Carousel */}
        <div className="w-full">
          <FeatureCarousel features={CONSULTING_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}

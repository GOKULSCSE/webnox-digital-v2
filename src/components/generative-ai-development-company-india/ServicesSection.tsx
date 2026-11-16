"use client";

import React from "react";
import {
  Compass,
  Cpu,
  AppWindow,
  Brain,
  Database,
  MessageSquare,
  Sparkles,
  Bot,
  Layers,
  Network,
} from "lucide-react";

const GEN_AI_SERVICES = [
  {
    title: "1. Generative AI Consulting Services",
    description:
      "Identify AI opportunities, assess technical feasibility and define a clear implementation roadmap for your business.",
    icon: <Compass className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Custom Generative AI Model Development",
    description:
      "Develop and fine-tune AI models to address specialised business needs and industry-specific requirements.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. Generative AI Application Development",
    description:
      "Build custom AI applications, SaaS products and intelligent web and mobile solutions for business operations.",
    icon: <AppWindow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. LLM Development and Integration",
    description:
      "Develop and integrate large language models such as GPT, Claude, Gemini and Llama into business applications.",
    icon: <Brain className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. RAG Development Services",
    description:
      "Build Retrieval-Augmented Generation systems that connect AI models with enterprise data for relevant responses.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. AI Chatbot Development",
    description:
      "Create intelligent AI chatbots for customer support, employee assistance and automated business communication.",
    icon: <MessageSquare className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "7. AI Copilot Development",
    description:
      "Develop AI copilots that provide contextual information, generate recommendations and assist with daily business tasks.",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "8. AI Agent Development",
    description:
      "Build intelligent AI agents that interact with business applications and execute defined multi-step workflows.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "9. Multimodal AI Development",
    description:
      "Develop AI solutions that process and generate text, images, audio and video for different business applications.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "10. Generative AI Integration Services",
    description:
      "Connect Generative AI models with CRM, ERP, databases and existing platforms to automate business workflows.",
    icon: <Network className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Generative AI Development Services in India
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            As a Generative AI development company in India, Webnox Digital builds custom AI applications, integrates advanced language models and develops intelligent automation solutions for business requirements.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEN_AI_SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-[24px] p-7 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


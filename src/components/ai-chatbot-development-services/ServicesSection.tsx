"use client";

import React from "react";
import {
  Bot,
  Sparkles,
  Brain,
  Database,
  Network,
  Building2,
  Mic,
  Wrench,
  MessageSquare,
  GitBranch,
  BookOpen,
  Globe,
  Layers,
  BarChart3,
} from "lucide-react";

const CHATBOT_SERVICES = [
  {
    title: "01. Custom AI Chatbot Development Services",
    description:
      "Our custom AI chatbot development services focus on building intelligent conversational solutions based on your business requirements, customer queries and operational workflows.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Generative AI Chatbot Development",
    description:
      "Our Generative AI chatbot development solutions use advanced AI models to understand complex questions, generate contextual responses and support natural conversations.",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. LLM Chatbot Development Services",
    description:
      "We provide LLM chatbot development services using models such as GPT and open-source LLMs to build chatbots that understand natural language and respond to detailed user queries.",
    icon: <Brain className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. RAG Chatbot Development Solutions",
    description:
      "Our RAG chatbot development solutions connect AI models with business documents, knowledge bases and databases to provide context-aware answers based on your organisational information.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. AI Chatbot Integration Services",
    description:
      "Our AI chatbot integration services connect conversational AI solutions with websites, CRM platforms, ERP systems, WhatsApp and third-party applications to streamline business communication.",
    icon: <Network className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Enterprise AI Chatbot Development",
    description:
      "Our enterprise AI chatbot development solutions support business-wide automation through secure data access, system integrations, role-based permissions and scalable deployment.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "07. AI Voice Chatbot Development",
    description:
      "Our AI voice chatbot development services enable businesses to automate voice interactions using speech recognition, natural language processing and AI-powered response generation.",
    icon: <Mic className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "08. AI Chatbot Maintenance and Support Services",
    description:
      "Our AI chatbot maintenance and support services include performance monitoring, response testing, model updates, integration management and continuous chatbot improvements.",
    icon: <Wrench className="w-5 h-5 text-[#FF7230]" />,
  },
];

const CAPABILITIES = [
  {
    title: "01. Natural Language Understanding",
    description:
      "Enable AI chatbots to interpret natural language, identify user intent and understand customer queries to deliver relevant responses.",
    icon: <MessageSquare className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Context-Aware Conversations",
    description:
      "Develop conversational AI chatbots that retain conversation context, understand follow-up questions and maintain relevant interactions throughout a session.",
    icon: <GitBranch className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Knowledge Base and RAG Integration",
    description:
      "Connect AI chatbots with business documents, databases and internal knowledge bases using RAG technology to retrieve relevant information and generate context-based answers.",
    icon: <BookOpen className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. Multilingual AI Chatbot Support",
    description:
      "Build multilingual AI chatbots that understand and respond in multiple languages to support customer communication across different regions and markets.",
    icon: <Globe className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. CRM and ERP System Integration",
    description:
      "Integrate AI chatbots with CRM, ERP and third-party business applications to retrieve customer information, update records and support automated workflows.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. AI Chatbot Analytics and Human Handoff",
    description:
      "Monitor chatbot performance through conversation analytics, response quality and user engagement while enabling seamless transfer to human agents for complex enquiries.",
    icon: <BarChart3 className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Part 1: 8 Chatbot Services */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Custom AI Chatbot Development Services for Business Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CHATBOT_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[22px] p-6 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141a] mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: 6 Capabilities */}
        <div id="capabilities" className="mt-20 sm:mt-28">
          <div className="max-w-4xl mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#12141a]">
              Advanced AI Chatbot Capabilities for Business Automation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-[22px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#FF7230]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#12141a] mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


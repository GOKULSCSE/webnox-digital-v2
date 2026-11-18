"use client";

import React from "react";
import {
  Bot,
  Sparkles,
  Brain,
  MessageCircle,
  Headphones,
  Globe,
  Mic,
  UserCheck,
  Database,
  Workflow,
  FileText,
  Languages,
  GitBranch,
  BookOpen,
  Sliders,
  Wrench,
  Layers,
  ShieldCheck,
} from "lucide-react";

const CHATBOT_SERVICES = [
  {
    title: "01. Custom AI Chatbot Development",
    description:
      "We provide custom AI chatbot development in India for businesses that require conversational solutions designed around their products, services and operational workflows. Our developers build chatbots with custom conversation flows, business-specific knowledge, API integrations and intelligent response capabilities.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Generative AI Chatbot Development",
    description:
      "Our generative AI chatbot development services in India use advanced foundation models to create chatbots that understand natural language, generate relevant responses and manage context-aware conversations. We develop solutions using suitable LLMs, prompt engineering and RAG architectures for business-specific applications.",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. LLM and GPT Chatbot Development",
    description:
      "We build LLM-powered chatbots using technologies such as GPT and other suitable large language models. These chatbots can interpret complex questions, process contextual information, retrieve relevant knowledge and generate conversational responses based on your business requirements.",
    icon: <Brain className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. WhatsApp AI Chatbot Development",
    description:
      "Our WhatsApp AI chatbot development services help businesses automate customer communication through the WhatsApp Business Platform. We develop conversational workflows for product enquiries, lead qualification, appointment scheduling, order updates and customer support.",
    icon: <MessageCircle className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Customer Support Chatbot Development",
    description:
      "We develop intelligent customer support chatbots that handle frequently asked questions, service enquiries, troubleshooting requests and support ticket creation. Integration with existing support systems enables relevant information retrieval and smooth escalation to human agents when required.",
    icon: <Headphones className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Website AI Chatbot Development",
    description:
      "Our website AI chatbot development solutions help businesses interact with website visitors through intelligent conversational interfaces. These chatbots can answer product questions, explain services, capture leads, recommend relevant information and direct visitors towards suitable actions.",
    icon: <Globe className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "07. Voice AI Chatbot Development",
    description:
      "We develop voice AI chatbot solutions that enable users to communicate with business systems through spoken conversations. By integrating speech recognition, natural language understanding and text-to-speech technologies, we build voice assistants for customer enquiries, information retrieval and automated communication.",
    icon: <Mic className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "08. AI Virtual Assistant Development",
    description:
      "Our AI virtual assistant development services help businesses automate routine tasks and provide intelligent assistance to employees and customers. These assistants can retrieve information, manage requests, connect with business applications and support multi-step workflows.",
    icon: <UserCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "09. RAG Chatbot Development",
    description:
      "We provide RAG chatbot development services that connect large language models with your internal business knowledge. Using document processing, vector embeddings and semantic search, we develop chatbots that retrieve relevant information from company documents, product catalogues, manuals and knowledge bases before generating responses.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "10. AI Agent Chatbot Development",
    description:
      "Our AI agent chatbot development solutions go beyond traditional question-and-answer interactions. We build AI agents that can interpret user requests, select appropriate tools, retrieve information and execute defined multi-step tasks through connected business applications, with suitable approval controls.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "11. NLP Chatbot Development",
    description:
      "We develop NLP-powered chatbots that interpret human language, identify user intent, extract relevant information and manage conversational flows. These solutions help businesses handle different ways of expressing the same question and deliver more relevant responses.",
    icon: <FileText className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "12. Multilingual AI Chatbot Development",
    description:
      "Our multilingual AI chatbot development services help businesses communicate with customers across different languages. We build conversational solutions using suitable language models and translation or language-processing capabilities to support regional and international customer interactions.",
    icon: <Languages className="w-5 h-5 text-[#FF7230]" />,
  },
];

const CAPABILITIES = [
  {
    title: "01. Context-Aware Conversational AI",
    description:
      "Our AI chatbot development services in India include context-aware conversational AI that understands user queries, remembers previous interactions and delivers relevant responses to follow up questions.",
    icon: <GitBranch className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Retrieval Augmented Generation",
    description:
      "We provide custom AI chatbot development in India using RAG architecture, connecting LLMs with verified business data through document processing, vector embeddings and contextual information retrieval.",
    icon: <BookOpen className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. LLM Integration and Customization",
    description:
      "Our LLM chatbot development in India includes model integration, prompt engineering and configuration of model settings to create intelligent chatbot solutions for specific business requirements.",
    icon: <Sliders className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. AI Agent and Tool Integration",
    description:
      "We deliver AI agent chatbot development in India by connecting chatbots with APIs, databases and business applications to retrieve information, perform defined tasks and automate workflows.",
    icon: <Wrench className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Omnichannel Chatbot Integration",
    description:
      "Our AI chatbot integration services in India connect chatbots with websites, mobile apps, WhatsApp Business API and CRM platforms for consistent customer communication across channels.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. Secure Deployment and Continuous Optimization",
    description:
      "Our enterprise AI chatbot development in India covers secure cloud or private deployment, access controls, performance monitoring and continuous optimization to improve response quality, speed and operating costs.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Part 1: 12 Chatbot Development Services */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our AI Chatbot Development Services in India
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CHATBOT_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[22px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#12141a] mb-2.5">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: 6 Advanced AI Chatbot Capabilities */}
        <div id="capabilities" className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-neutral-200/80">
          <div className="max-w-4xl mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#12141a] leading-tight">
              Advanced AI Chatbot Capabilities and Technologies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-[22px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#12141a] mb-2.5">
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

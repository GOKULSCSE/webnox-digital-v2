"use client";

import React from "react";
import {
  Bot,
  Zap,
  Network,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const SOLUTION_PILLARS = [
  {
    title: "Automate Customer Interactions",
    description:
      "Develop AI-powered chatbots that understand customer questions, provide relevant information and handle repetitive enquiries across digital channels.",
    icon: <Bot className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Improve Response Efficiency",
    description:
      "Enable instant responses to frequently asked questions, product enquiries, service requests and customer support queries.",
    icon: <Zap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Connect Existing Business Systems",
    description:
      "Integrate chatbots with CRM platforms, ERP software, databases, websites and third-party applications to retrieve relevant business information.",
    icon: <Network className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Support Multiple Communication Channels",
    description:
      "Deploy conversational chatbots across websites, mobile applications, WhatsApp Business and other supported messaging platforms.",
    icon: <MessageSquare className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Maintain Data Security",
    description:
      "Implement controlled access, secure API connections and appropriate data-handling practices to protect business and customer information.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Build for Business Growth",
    description:
      "Develop scalable chatbot architectures that support increasing conversation volumes, additional integrations and evolving business requirements.",
    icon: <TrendingUp className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Custom AI Chatbot Development Solutions for Indian Businesses
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Businesses across India handle customer enquiries, sales conversations, appointment requests and internal support tasks every day. Managing these interactions manually can increase response times and operational workloads.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our custom AI chatbot development solutions help businesses automate these interactions while maintaining relevant, context-aware conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SOLUTION_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

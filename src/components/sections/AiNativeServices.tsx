"use client";

import React from "react";
import {
  Brain,
  Bot,
  Zap,
  Code2,
  TrendingUp,
  Palette,
  Cloud,
  Radio,
  Compass,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  ctaText: string;
  icon: React.ReactNode;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ai-development",
    number: "01",
    title: "AI Development",
    description:
      "Build AI applications and digital products around a defined business requirement. Our AI development work covers generative AI, LLM applications, AI software, AI SaaS, AI platforms, AI agents and AI integration. We can develop new AI products or add AI capabilities to existing software, depending on the product and workflow.",
    ctaText: "Explore AI Development",
    icon: <Brain className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "ai-agents-chatbots",
    number: "02",
    title: "AI Agents and Chatbots",
    description:
      "Build intelligent AI agents and chatbots that understand information, interact with users, and perform business tasks. We develop custom AI agents, enterprise agents, voice agents, sales agents, customer service agents, multi-agent systems, and RAG chatbots connected to your data, applications, APIs, and workflows.",
    ctaText: "Explore AI Agents and Chatbots",
    icon: <Bot className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI Automation",
    description:
      "Automate business processes by connecting AI with recurring tasks, systems and workflows. Our AI automation services cover workflow automation, business process automation, AI workflow automation, CRM automation, sales automation and marketing automation. The workflow can combine AI with existing applications and systems where automation is appropriate.",
    ctaText: "Explore AI Automation",
    icon: <Zap className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "software-digital-products",
    number: "04",
    title: "Software and Digital Product Development",
    description:
      "Build web applications, mobile apps, SaaS products, and custom software with an AI-forward approach. We use AI across product planning, coding, testing, integration, and optimisation to build software faster and add intelligent capabilities throughout the product lifecycle.",
    ctaText: "Explore Software Development",
    icon: <Code2 className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "ai-powered-digital-marketing",
    number: "05",
    title: "AI-Powered Digital Marketing",
    description:
      "Build and improve your digital presence with AI-powered SEO, AI SEO, GEO, Google Ads, Meta Ads, social media, content marketing, and performance marketing. We integrate AI across keyword research, content creation, campaign analysis, reporting, and optimisation to speed up execution, identify trends, and support marketing decisions.",
    ctaText: "Explore Digital Marketing",
    icon: <TrendingUp className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "ui-ux-digital-experience",
    number: "06",
    title: "UI/UX and Digital Experience",
    description:
      "Design interfaces and digital experiences for websites, applications, and digital products. The work covers user research, interface design, interaction patterns, and product thinking to create digital experiences that fit the product, audience, and business requirement.",
    ctaText: "Explore UI/UX Services",
    icon: <Palette className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "cloud-infrastructure",
    number: "07",
    title: "Cloud and Infrastructure",
    description:
      "Provide the technical foundation required to deploy and operate software and AI systems. Our capabilities cover cloud environments, application deployment, APIs, infrastructure, and scaling requirements for modern digital products and AI-powered applications.",
    ctaText: "Explore Cloud and Infrastructure",
    icon: <Cloud className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "iot-intelligent-systems",
    number: "08",
    title: "IoT and Intelligent Systems",
    description:
      "Connect devices, sensors, software, and data to build systems for connected business environments. IoT and intelligent systems can be used for monitoring, automation, data collection, operational visibility, and real-time insights across connected processes.",
    ctaText: "Explore IoT Services",
    icon: <Radio className="w-5 h-5 text-[#ff5e00]" />,
  },
  {
    id: "ai-consulting-strategy",
    number: "09",
    title: "AI Consulting and Strategy",
    description:
      "Define where AI fits before development begins. Our consulting services cover AI consulting, AI strategy, AI transformation, AI POC development, and enterprise AI consulting, helping businesses assess requirements, plan implementation, and connect AI with existing products and operations.",
    ctaText: "Explore AI Consulting",
    icon: <Compass className="w-5 h-5 text-[#ff5e00]" />,
  },
];

export default function AiNativeServices() {
  const scrollToContact = () => {
    const contactEl =
      document.getElementById("contact") ||
      document.querySelector("section:last-of-type");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="ai-services"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#140803] leading-[1.18]">
            AI-Native Services Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e00] via-[#ff7230] to-[#ff8f45]">
              Technology and Digital Growth
            </span>
          </h2>
          {/* <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto">
            From proof-of-concept to resilient production deployments, we turn business ideas into intelligent, connected digital solutions.
          </p> */}
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-[26px] p-7 sm:p-8 border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(255,94,0,0.1)] hover:border-[#ff5e00]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle_at_top_right,rgba(255,94,0,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Card Top: Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-orange-50/80 border border-orange-200/60 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#ff5e00] transition-all duration-300">
                    <span className="transition-colors duration-300 group-hover:text-white [&>svg]:group-hover:text-white">
                      {service.icon}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-[#140803] tracking-tight leading-snug mb-3.5 group-hover:text-[#ff5e00] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Explore Link Button */}
              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#140803] group-hover:text-[#ff5e00] transition-colors duration-200 cursor-pointer"
                >
                  <span>{service.ctaText} →</span>
                </button>
                <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-[#ff5e00] flex items-center justify-center text-neutral-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

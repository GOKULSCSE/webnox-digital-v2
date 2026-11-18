"use client";

import React from "react";
import {
  Award,
  Sparkles,
  Users,
  FileCode2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const REASONS = [
  {
    title: "01. 15+ Years of Software Development Experience",
    description:
      "With 15+ years of software development experience and 2,570+ client projects delivered globally, we bring proven engineering expertise to AI chatbot development solutions in India.",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "02. Custom-Built AI Chatbot Solutions",
    description:
      "Our custom AI chatbot development in India focuses on your business workflows, customer requirements and data sources to create chatbots that address specific operational needs.",
    icon: <Sparkles className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "03. Experienced AI Chatbot Developers",
    description:
      "Our AI chatbot developers in India work with artificial intelligence, LLMs, backend engineering and API integration to build intelligent and scalable conversational applications.",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "04. 100% Intellectual Property Ownership",
    description:
      "You retain ownership of the custom chatbot source code, prompt libraries, integration scripts and agreed deliverables, giving your business full control over its AI chatbot software development.",
    icon: <FileCode2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "05. Enterprise Security and Business Integration",
    description:
      "Our enterprise AI chatbot development services in India include secure API communication, access controls and integrations with CRM, ERP, databases and existing business applications.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "06. From Prototype to Production Deployment",
    description:
      "Our AI chatbot development services cover architecture planning, proof-of-concept development, testing, deployment and ongoing optimization to turn your business requirements into working solutions.",
    icon: <Rocket className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Why Choose Webnox Digital as Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              AI Chatbot Development Company in India?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

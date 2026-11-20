"use client";

import React from "react";
import {
  Award,
  CheckCircle2,
  FileCode2,
  ShieldCheck,
  Users,
  Plug,
} from "lucide-react";

const REASONS = [
  {
    title: "1. 15+ Years of Software Development Experience",
    description:
      "With 15+ years of experience and 2,570+ projects delivered, our RAG development team brings established software engineering knowledge to custom enterprise AI projects.",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Business Data-Grounded RAG Development",
    description:
      "Our custom RAG development solutions connect AI models with approved company information and implement retrieval controls to provide context-based responses with supporting references.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. Ownership of Custom RAG Software Development",
    description:
      "Our RAG software development approach supports client ownership of agreed project deliverables, including custom application code and related components.",
    icon: <FileCode2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Enterprise RAG Security and Data Privacy",
    description:
      "Our secure enterprise RAG development includes access controls, secure integrations and deployment options based on your organisation's privacy and security requirements.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Direct Access to RAG Development Teams",
    description:
      "Work directly with our RAG development team throughout architecture planning, application development, integration and testing, with clear communication at each stage.",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. RAG Integration with Business Applications",
    description:
      "Our RAG integration services in India connect AI applications with suitable business platforms such as Salesforce, HubSpot, Zoho, SAP, Zendesk and WhatsApp, depending on your workflow and integration requirements.",
    icon: <Plug className="w-5 h-5 text-[#FF7230]" />,
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
            Why Choose Webnox Digital for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              RAG Development in India?
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Choose Webnox Digital for enterprise RAG development in India, supported by software engineering experience, custom AI development and business application integration.
          </p>
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

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
    title: "1. 15+ Years of Proven Software Stability",
    description:
      "With 15+ years of software experience and 2,570+ delivered projects globally, Webnox Digital is a trusted RAG development company offering long term reliability that temporary agencies lack.",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Accurate Answers with Zero Guesswork",
    description:
      "Our accurate custom RAG development stops AI from making up wrong facts by checking your approved company files first and showing the exact page used anytime.",
    icon: <CheckCircle2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. You Own 100% of Everything We Build",
    description:
      "You receive full RAG code and database ownership, with all custom software, search setups, and files handed straight to your team with zero extra monthly royalties.",
    icon: <FileCode2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Enterprise-Grade Data Privacy & Security",
    description:
      "We guarantee enterprise RAG data security by keeping your files isolated inside your own cloud on AWS, Azure or Google Cloud, compliant with international privacy laws.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Direct Work with Expert RAG Developers",
    description:
      "You work directly with our expert RAG developers from day one, ensuring clear project communication, fast prototype changes, and zero delays from non-technical middleman account managers.",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. Custom RAG Integration with Daily Tools",
    description:
      "Through custom RAG integration services, we connect your AI to Salesforce, HubSpot, SAP, Zendesk and WhatsApp, automating daily work without disrupting how your team works today.",
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
            Why Choose Webnox Digital as Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              RAG Development Company?
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

"use client";

import React from "react";
import {
  FileSearch,
  Lock,
  ShieldCheck,
  Languages,
  Cloud,
  FileCode2,
} from "lucide-react";

const CHALLENGE_CARDS = [
  {
    title: "Context Based Answers from Business Data",
    description:
      "When AI models lack internal business context, responses may miss relevant information. Our custom RAG development services in India connect AI models with company documents and databases to generate source backed answers.",
    icon: <FileSearch className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Secure Access to Confidential Documents",
    description:
      "Unrestricted document access can expose sensitive business information to employees. Our enterprise RAG solutions in India implement role-based permissions to ensure users retrieve only authorised documents.",
    icon: <Lock className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Data Residency and Privacy Requirements",
    description:
      "Storing sensitive business information requires suitable security and data controls. Our RAG application development in India supports deployment options based on organisational privacy and data residency requirements.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Multilingual Business Information Search",
    description:
      "Searching documents across different languages can make information retrieval difficult. Our multilingual RAG development solutions in India support English, Hindi and selected regional languages based on the chosen AI models.",
    icon: <Languages className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Flexible Enterprise Cloud Deployment",
    description:
      "Businesses need cloud infrastructure that meets their technical and operational requirements. Our private cloud RAG development in India supports deployment through suitable AWS and Microsoft Azure regions.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Customisation and Software Ownership",
    description:
      "Off the shelf AI platforms may limit application customisation and control. Our custom RAG software development in India includes retrieval components, application features and integrations, with ownership defined by the project scope.",
    icon: <FileCode2 className="w-5 h-5 text-[#FF7230]" />,
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
            Custom RAG Development Company in India for Enterprise Data Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CHALLENGE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-neutral-700 text-sm sm:text-base md:text-lg font-medium max-w-4xl">
          With 15+ years of software experience and 2,570+ projects delivered, Webnox Digital develops enterprise RAG applications for business information retrieval challenges.
        </p>
      </div>
    </section>
  );
}

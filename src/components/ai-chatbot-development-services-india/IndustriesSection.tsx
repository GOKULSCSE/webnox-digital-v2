"use client";

import React from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Factory,
  GraduationCap,
  Plane,
  Code2,
  Building2,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "1. Healthcare and Medical Services",
    description:
      "We develop healthcare chatbots that help medical organizations automate patient enquiries, appointment requests, service information and frequently asked questions.",
    useCases:
      "Appointment booking assistant, patient enquiry chatbot, healthcare information assistant.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. Banking, Financial Services and Insurance",
    description:
      "We build AI chatbot solutions that support financial service enquiries, product information, policy-related questions and customer service workflows.",
    useCases:
      "Banking enquiry chatbot, insurance policy assistant, financial service support chatbot.",
    icon: <Landmark className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. E-Commerce and Retail",
    description:
      "We develop intelligent shopping chatbots that help customers discover products, check product information, receive order updates and access support.",
    useCases:
      "AI shopping assistant, product recommendation chatbot, order tracking assistant.",
    icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Manufacturing and Industrial Businesses",
    description:
      "We create AI-powered chatbots that retrieve technical information from product catalogues, equipment manuals and internal documentation to support customers and employees.",
    useCases:
      "Technical support chatbot, product enquiry assistant, equipment documentation chatbot.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Education and E-Learning",
    description:
      "We develop educational chatbots that automate student enquiries, provide course information, assist with admissions and retrieve relevant learning resources.",
    useCases:
      "Student support chatbot, admission enquiry assistant, learning support chatbot.",
    icon: <GraduationCap className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. Travel, Tourism and Hospitality",
    description:
      "We build conversational assistants that help customers access travel information, check service details, submit booking enquiries and receive assistance.",
    useCases:
      "Travel booking assistant, hotel enquiry chatbot, customer support assistant.",
    icon: <Plane className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "7. SaaS and Technology Companies",
    description:
      "We integrate AI chatbots into software products to help users understand product features, resolve common issues, navigate applications and access technical information.",
    useCases:
      "In-app AI assistant, SaaS support chatbot, technical documentation chatbot.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "8. Real Estate and Property Management",
    description:
      "We develop property enquiry chatbots that provide project information, capture prospective buyer details, schedule site visits and support customer communication.",
    useCases:
      "Property enquiry chatbot, real estate lead qualification assistant, site visit scheduling chatbot.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Industries We Serve with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              AI Chatbot Development Services in India
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                  {industry.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-light mb-5">
                  {industry.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF7230] mb-1">
                  Top Use Cases:
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {industry.useCases}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

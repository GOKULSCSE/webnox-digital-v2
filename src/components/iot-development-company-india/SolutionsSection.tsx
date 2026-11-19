"use client";

import React from "react";
import {
  Compass,
  Smartphone,
  Code2,
  Building2,
  BarChart3,
  Wrench,
  ArrowRight,
} from "lucide-react";

const IOT_SOLUTIONS = [
  {
    title: "1. IoT Consulting Services",
    description:
      "We assess your business needs, identify opportunities, and guide you with strategic, cost-effective IoT development services that drive growth.",
    icon: <Compass className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. IoT Mobile Application Development",
    description:
      "We build secure, user-friendly IoT mobile applications that connect seamlessly with smart devices and deliver real-time control and insights.",
    icon: <Smartphone className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. IoT Software Development",
    description:
      "Our expert team builds scalable, cloud-enabled IoT software that ensures device interoperability, automation, and improved data processing.",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. IoT Enterprise Solutions",
    description:
      "We develop enterprise-grade Internet of Things development services that improve workflows, reduce operational costs, and increase process transparency.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. IoT Data Analytics & AI",
    description:
      "Our AI-powered analytics help unlock hidden data patterns from your connected devices to enable smarter, faster business decisions.",
    icon: <BarChart3 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. IoT Support & Maintenance",
    description:
      "As the best IoT development company, we offer ongoing support and performance monitoring to ensure your systems run smoothly with zero disruptions and downtime.",
    icon: <Wrench className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Smart IoT Development Solutions Tailored to Your Business Goals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IOT_SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integration Callout Strip */}
        <div className="mt-14 sm:mt-16 rounded-[28px] bg-[#160a04] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-[#FF7230]/25 shadow-lg">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Struggling with Complex IoT Integration? We&apos;ll Make It Simple
            </h3>
            <p className="mt-2.5 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Our IoT development experts streamline the entire process from strategy to deployment, ensuring faster delivery, zero disruptions, and scalable outcomes across industries.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white shrink-0 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_24px_rgba(255,114,48,0.28)]"
            style={{
              background:
                "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
            }}
          >
            <span>Talk to Our IoT Experts</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

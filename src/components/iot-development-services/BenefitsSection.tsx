"use client";

import React from "react";
import {
  Activity,
  Wrench,
  Workflow,
  BarChart3,
  TrendingDown,
  Server,
} from "lucide-react";

const BENEFITS = [
  {
    title: "Real-Time Operational Monitoring",
    description:
      "Access live information from connected devices, equipment and operational assets through centralised dashboards.",
    icon: <Activity className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Predictive Maintenance",
    description:
      "Identify unusual equipment behaviour through sensor data and condition monitoring before failures disrupt operations.",
    icon: <Wrench className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Automated Business Workflows",
    description:
      "Trigger alerts, equipment actions and operational workflows based on predefined sensor readings and system conditions.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Data-Driven Decision-Making",
    description:
      "Analyse IoT data to understand performance trends, resource usage and operational requirements.",
    icon: <BarChart3 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Reduced Operating Costs",
    description:
      "Improve energy management, automate manual monitoring and reduce unnecessary equipment inspection activities.",
    icon: <TrendingDown className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Scalable Device Management",
    description:
      "Manage connected devices through flexible architectures that support additional hardware, users and applications.",
    icon: <Server className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Business Benefits of Implementing IoT Solutions
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Implementing IoT technology helps businesses connect physical operations with real-time digital information. Connected systems can improve operational visibility, automate routine activities and support better resource management across different business environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 hover:border-[#FF7230]/40 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {benefit.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

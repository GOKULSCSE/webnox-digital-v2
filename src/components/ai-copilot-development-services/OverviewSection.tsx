"use client";

import React from "react";
import { Workflow, BadgeDollarSign, AppWindow, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    title: "Does Real Work",
    description:
      "Your copilot does not just answer questions. It updates records in your CRM, writes email drafts, checks live inventory and pulls invoice details with your approval.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Zero Monthly Per-User Fees",
    description:
      "You own 100% of all software, models and code we build. Add as many team members as you want without paying extra 30-dollar monthly user bills.",
    icon: <BadgeDollarSign className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Works Inside Your Daily Tools",
    description:
      "We build your custom copilot right where your team works, including web apps, browser extensions, VS Code, Slack, Microsoft Teams, Salesforce and internal ERP systems.",
    icon: <AppWindow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Keeps Private Business Data Safe",
    description:
      "Your files stay locked inside your own private cloud on AWS, Azure, or Google Cloud, fully protected by your company's normal employee access rules.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF7230]" />,
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
            Custom AI Copilot Development Built for Real Enterprise Workflows
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            At Webnox Digital, our custom AI copilot development services help businesses automate everyday tasks and connect AI assistants directly with existing enterprise workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-[#12141a] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-neutral-700 text-sm sm:text-base md:text-lg font-medium max-w-4xl">
          Backed by 15+ years of software experience across 20+ countries, Webnox Digital turns slow daily chores into fast, automated tasks your team can trust.
        </p>
      </div>
    </section>
  );
}

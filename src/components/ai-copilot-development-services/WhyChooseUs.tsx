"use client";

import React from "react";
import {
  Award,
  FileCode2,
  BadgeDollarSign,
  Workflow,
  Users,
  Plug,
} from "lucide-react";

const REASONS = [
  {
    title: "1. 15+ Years of Proven Software Stability",
    description:
      "With 15+ years of software experience and 2,570+ delivered projects globally, Webnox Digital is a trusted AI copilot development company offering stability that temporary agencies lack.",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. 100% Code and Software Ownership",
    description:
      "You receive full custom AI copilot code ownership, with all software, fine-tuned models and database setups handed straight to your team with zero extra monthly royalties.",
    icon: <FileCode2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. Zero Ongoing Per-User Licensing Fees",
    description:
      "Unlike commercial tools charging 30 dollars per person each month, our custom AI copilot development supports unlimited team members with zero ongoing monthly software seat fees.",
    icon: <BadgeDollarSign className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Active Copilots That Do Real Work",
    description:
      "Our enterprise AI copilot solutions take real action, updating database records, drafting emails and calling software tools rather than just repeating text from old static documents.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Direct Work with Senior AI Developers",
    description:
      "You work directly with our expert AI copilot developers from day one, ensuring clear project milestones, fast prototype updates and zero delays from middleman account managers.",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. Smooth Integration with Your Daily Stack",
    description:
      "Through expert AI copilot integration services, we connect assistants to Salesforce, HubSpot, SAP, Zendesk, Slack and internal databases, helping teams work faster without changing their tools.",
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
              AI Copilot Development?
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

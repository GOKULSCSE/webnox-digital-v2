"use client";

import React from "react";
import {
  Award,
  Cpu,
  Users,
  Layers,
  Workflow,
  Target,
} from "lucide-react";

const WHY_CHOOSE_ITEMS = [
  {
    title: "15+ Years of Technology Experience",
    description:
      "Our technology experience across software development and digital solutions provides an engineering foundation for building and integrating Generative AI applications.",
    icon: <Award className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "AI-Native Engineering Approach",
    description:
      "We incorporate AI into application development, digital products and business workflows rather than treating it as a standalone technology feature.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2,570+ Clients Across Different Markets",
    description:
      "Our experience working with businesses across different requirements and markets provides an understanding of diverse software and operational challenges.",
    icon: <Users className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "20+ Proprietary Products",
    description:
      "Our experience developing and maintaining digital products supports our approach to application architecture, product engineering and AI integration.",
    icon: <Layers className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Complete Development Lifecycle",
    description:
      "We support the complete journey from consulting and architecture to application development, enterprise integration, deployment and ongoing optimisation.",
    icon: <Workflow className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Business Focused AI Implementation",
    description:
      "We prioritise practical applications, relevant data, user requirements and measurable business objectives when planning Generative AI solutions.",
    icon: <Target className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Why Choose Webnox Digital as Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Generative AI Development Company in India?
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Selecting the right development partner is important when moving from AI experimentation to production implementation. Webnox Digital combines established software engineering experience with an AI-native approach to develop practical Generative AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


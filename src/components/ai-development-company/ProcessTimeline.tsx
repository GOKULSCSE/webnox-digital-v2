"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    title: "01 - Discover",
    description:
      "We understand your business goals, users, workflows, existing software and data to identify where AI development can provide practical value.",
  },
  {
    number: "02",
    title: "02 - Design",
    description:
      "We define the AI solution architecture, technology stack, AI models, data flow, integrations and application structure required for the project.",
  },
  {
    number: "03",
    title: "03 - Develop",
    description:
      "Our team builds the custom AI software, applications, APIs and AI functionality using technologies such as AI agents, LLMs, RAG and machine learning.",
  },
  {
    number: "04",
    title: "04 - Integrate",
    description:
      "The AI solution is connected with your existing websites, mobile apps, SaaS platforms, databases, APIs, CRMs, ERPs and business workflows.",
  },
  {
    number: "05",
    title: "05 - Test",
    description:
      "We validate the AI software for functionality, accuracy, output quality, performance, security and reliability against the defined business requirements.",
  },
  {
    number: "06",
    title: "06 - Deploy",
    description:
      "The completed AI development solution is deployed to the required cloud, on-premises or hybrid environment and prepared for production use.",
  },
  {
    number: "07",
    title: "07 - Improve",
    description:
      "We monitor AI software performance, usage, output quality and business results to identify improvements as your data, workflows, and requirements change.",
  },
];

export default function ProcessTimeline() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo("#contact", { duration: 1.2 });
    } else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4">
            7-Step Engineering Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            From AI Idea to Deploy: Our Custom AI Development Process
          </h2>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Our AI development process takes your business requirement from initial discovery to production deployment. We combine AI and software development to build, integrate, test, and improve AI solutions that work with your applications, data, and workflows.
          </p>
        </div>

        {/* Stepper Component */}
        <div className="w-full flex justify-center">
          <Stepper
            initialStep={1}
            theme="light"
            accentColor="#ff5e00"
            width="100%"
            radius={28}
            frame={true}
            linear={false}
            indicator="numbers"
            orientation="horizontal"
            transition="slide"
            backButtonText="Previous Step"
            nextButtonText="Next Step"
            completeButtonText="Finish Review"
            className="w-full max-w-4xl shadow-xl border border-neutral-200/90 bg-white/95"
            contentClassName="px-4 sm:px-8"
            completedContent={
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-[#ff5e00] flex items-center justify-center mb-4 shadow-inner">
                  <HugeiconsIcon icon={Tick02Icon} size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                  Ready to Deploy Your AI Solution?
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base max-w-xl mb-7 leading-relaxed">
                  Our structured process guarantees seamless integration with your existing software, data privacy, and production resilience.
                </p>
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Build Your AI Solution</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {STEPS_DATA.map((step) => (
              <Step
                key={step.number}
                title={step.title}
                description={step.title}
              >
                <div className="py-6 sm:py-8 text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </section>
  );
}

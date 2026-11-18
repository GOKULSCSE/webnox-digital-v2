"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProcessStepData {
  number: string;
  shortTitle: string;
  fullTitle: string;
  whatWeDo: string;
  whatYouReceive: string;
}

const STEPS_DATA: ProcessStepData[] = [
  {
    number: "01",
    shortTitle: "Planning",
    fullTitle: "Phase 01: Requirement Analysis and Chatbot Planning",
    whatWeDo:
      "We understand your business objectives, target users, communication channels and requirements to plan the right custom AI chatbot development solution in India. Identify chatbot use cases, analyze conversation workflows, define integration requirements and evaluate suitable AI models.",
    whatYouReceive:
      "Project requirement document, chatbot architecture plan and proposed technology stack.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    fullTitle: "Phase 02: Chatbot Architecture and Prototype Development",
    whatWeDo:
      "We design the conversational experience and develop a working prototype to validate functionality, response quality and the suitability of AI-powered chatbot development in India for your business. Configure LLMs, design conversation flows, prepare knowledge sources, implement prompts and develop initial chatbot interfaces.",
    whatYouReceive:
      "Functional chatbot prototype with initial testing and evaluation results.",
  },
  {
    number: "03",
    shortTitle: "Integration",
    fullTitle: "Phase 03: AI Chatbot Development and Integration",
    whatWeDo:
      "We build the complete AI chatbot software solution in India and connect it with the required business systems, databases and communication platforms. Develop backend services, configure APIs, build RAG pipelines, integrate business applications and establish security controls.",
    whatYouReceive:
      "Developed AI chatbot application with agreed integrations and technical documentation.",
  },
  {
    number: "04",
    shortTitle: "Optimization",
    fullTitle: "Phase 04: Testing, Deployment and Optimization",
    whatWeDo:
      "We test the chatbot across different user scenarios, deploy it to the selected environment and optimize its performance after launch. Conduct functional testing, evaluate response accuracy, monitor latency, configure analytics and optimize chatbot workflows.",
    whatYouReceive:
      "Deployed chatbot application, performance reports and ongoing maintenance support as agreed.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            AI Chatbot Development Process: From Planning to Deployment
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            We follow a structured AI chatbot development process in India to build applications that meet your business requirements, technical needs and customer communication goals.
          </p>
        </div>

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
            backButtonText="Previous Phase"
            nextButtonText="Next Phase"
            completeButtonText="Talk to Our AI Chatbot Experts"
            className="w-full max-w-4xl shadow-xl border border-neutral-200/90 bg-white/95"
            contentClassName="px-4 sm:px-8"
            completedContent={
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 text-[#ff5e00] flex items-center justify-center mb-4 shadow-inner">
                  <HugeiconsIcon icon={Tick02Icon} size={28} strokeWidth={2.5} />
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Talk to Our AI Chatbot Experts</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
                </a>
              </div>
            }
          >
            {STEPS_DATA.map((step) => (
              <Step
                key={step.number}
                title={step.shortTitle}
                description={step.fullTitle}
              >
                <div className="py-4 sm:py-6 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-5 leading-snug">
                    {step.fullTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-1.5">
                        What We Do
                      </span>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {step.whatWeDo}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#fcf8f2] border border-neutral-200/80 p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF532B] block mb-1.5">
                        What You Receive
                      </span>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {step.whatYouReceive}
                      </p>
                    </div>
                  </div>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </section>
  );
}

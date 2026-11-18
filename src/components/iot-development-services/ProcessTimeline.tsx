"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

const STEPS_DATA = [
  {
    number: "01",
    shortTitle: "Discovery",
    fullTitle: "1. Discovery, Feasibility & IoT Architecture",
    description:
      "We evaluate your business objectives, hardware requirements, operating environment and connectivity needs. Our team defines the device architecture, communication protocols, cloud infrastructure and development roadmap before implementation begins.",
  },
  {
    number: "02",
    shortTitle: "Prototype",
    fullTitle: "2. Hardware Integration & Proof of Concept",
    description:
      "We configure selected microcontrollers, sensors and communication modules to validate device functionality. A working proof of concept helps test firmware behaviour, device connectivity and initial data transmission before full-scale development.",
  },
  {
    number: "03",
    shortTitle: "Development",
    fullTitle: "3. Firmware, Cloud & Application Development",
    description:
      "We develop embedded firmware, cloud backends and user applications based on the approved architecture. This stage connects device communication, real-time data processing, dashboards, mobile interfaces and application controls into one system.",
  },
  {
    number: "04",
    shortTitle: "Validation",
    fullTitle: "4. IoT Testing, Security & Validation",
    description:
      "We test device functionality, communication reliability, firmware performance and application workflows under expected operating conditions. Our validation process also covers access controls, data encryption, network behaviour and firmware update reliability.",
  },
  {
    number: "05",
    shortTitle: "Deployment",
    fullTitle: "5. IoT Deployment & Lifecycle Support",
    description:
      "We prepare connected devices and cloud applications for production deployment. Our team supports device provisioning, system monitoring, firmware updates, performance improvements and technical maintenance as your IoT network grows.",
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
            Our 5-Step IoT Software Development Process
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our IoT software development process connects hardware engineering, embedded programming and application development through structured project stages. Each stage focuses on technical validation, system reliability and smooth integration before production deployment.
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
            backButtonText="Previous Step"
            nextButtonText="Next Step"
            completeButtonText="Talk to Our IoT Experts"
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
                  <span>Talk to Our IoT Experts</span>
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
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FF532B] mb-2">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4 leading-snug">
                    {step.fullTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
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

"use client";

import React from "react";
import Stepper, { Step } from "@/components/ui/Stepper";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

const STEPS_DATA = [
  {
    number: "01",
    shortTitle: "Discovery",
    fullTitle: "1. Discovery",
    description:
      "We begin by understanding your business goals and challenges, identifying how our custom IoT development services can drive efficiency, improve user experience, and deliver measurable business value.",
  },
  {
    number: "02",
    shortTitle: "Architecture",
    fullTitle: "2. Architecture Planning",
    description:
      "Our IoT solutions experts define the system architecture, choose the right tech stack, and design secure, scalable frameworks aligned with your goals, ensuring the foundation of your IoT application is rock solid.",
  },
  {
    number: "03",
    shortTitle: "Prototyping",
    fullTitle: "3. Prototyping",
    description:
      "We build a quick, interactive prototype to visualize the final solution. This lets stakeholders validate functionality early, refine features, and fast-track product-market fit for your IoT application development project.",
  },
  {
    number: "04",
    shortTitle: "Development",
    fullTitle: "4. Development",
    description:
      "Using agile methods, our IoT app development company in India writes clean, modular code, integrating sensors, devices, and software to build robust IoT applications that meet your specific use cases and goals.",
  },
  {
    number: "05",
    shortTitle: "Testing",
    fullTitle: "5. Testing",
    description:
      "We perform extensive testing across all layers of the IoT solution—device, network, application, and data—to ensure performance, compatibility, security, and user satisfaction before moving into deployment.",
  },
  {
    number: "06",
    shortTitle: "Deployment",
    fullTitle: "6. Deployment",
    description:
      "Our team handles the complete deployment, from cloud setup to device provisioning. We develop your IoT software to go live with zero disruption and maximum uptime, meeting every business objective.",
  },
  {
    number: "07",
    shortTitle: "Support",
    fullTitle: "7. Support",
    description:
      "We offer 24/7 maintenance and support services. Our IoT development company monitors performance, pushes updates, and resolves issues proactively, ensuring your custom IoT ecosystem continues to scale without friction.",
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
            Our IoT Product Development Company Process Engineered for Results
          </h2>
          <p className="mt-3 sm:mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our custom IoT development process ensures scalable, secure, and high-performing solutions by combining deep domain expertise, agile practices, and industry-proven tools from discovery to post-launch support.
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
            className="w-full max-w-5xl shadow-xl border border-neutral-200/90 bg-white/95"
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

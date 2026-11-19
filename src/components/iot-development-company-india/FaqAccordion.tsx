"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "What is an IoT company?",
    answer:
      "An IoT company designs and develops smart devices, apps, and platforms that connect and exchange data over the internet. These companies build custom IoT ecosystems that help businesses automate operations, monitor assets in real time, and create seamless user experiences by integrating hardware, software, and cloud infrastructure.",
  },
  {
    question: "Is IoT in high demand?",
    answer:
      "Yes, IoT is in very high demand across industries like manufacturing, healthcare, logistics, retail, and agriculture. Businesses are increasingly investing in IoT solutions to streamline processes, reduce manual tasks, improve safety, and gain real-time visibility into operations. The global demand is expected to grow rapidly as digital transformation accelerates.",
  },
  {
    question: "Is IoT replaced by AI?",
    answer:
      "No, IoT and AI are complementary technologies, not replacements. IoT collects and transmits data from connected devices, while AI processes that data to generate insights and make decisions. Combining AI with IoT (AIoT) makes devices smarter, enabling automation, predictive maintenance, and real-time decision-making in complex environments.",
  },
  {
    question: "Why is IoT important for businesses?",
    answer:
      "IoT helps businesses reduce costs, boost efficiency, and improve customer experiences. It enables real-time monitoring, automation of repetitive tasks, and data-driven decision-making. With IoT, companies can remotely manage assets, detect issues early, and unlock new revenue streams through smart products and services.",
  },
  {
    question: "What IoT development services do you offer?",
    answer:
      "We offer end-to-end IoT development services, including consulting, device integration, IoT app development, platform engineering, cloud connectivity, data analytics, and post-launch support. Our solutions are custom-built to match your goals, industry needs, and budget.",
  },
  {
    question: "How much does it cost to build an IoT solution?",
    answer:
      "The cost depends on your project’s complexity, scale, and features. A basic IoT app may start at a few thousand dollars, while advanced, enterprise-level solutions can go higher. We provide clear estimates and flexible engagement models that fit your timeline and investment plans.",
  },
  {
    question: "Which industries benefit most from IoT solutions?",
    answer:
      "IoT benefits a wide range of industries, including manufacturing, logistics, healthcare, smart homes, energy, and retail. We build custom IoT software and products that solve specific business challenges, from asset tracking and condition monitoring to customer personalization and automation.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Frequently Asked Questions About IoT Development Services
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-orange-500/40 shadow-sm"
                    : "bg-white/80 hover:bg-white border-neutral-200/90 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-neutral-900 tracking-tight">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#ff5e00] text-white rotate-180"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-5 sm:pb-7 text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

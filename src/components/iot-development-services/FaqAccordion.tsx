"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS_LIST: FaqItem[] = [
  {
    question: "1. What do IoT development services include?",
    answer:
      "IoT development services include designing and building connected device ecosystems using embedded firmware, hardware integration, wireless communication, cloud platforms and mobile applications. These services help businesses collect device data, monitor operations, automate processes and manage connected products.",
  },
  {
    question: "2. How much do custom IoT development services cost?",
    answer:
      "The cost of custom IoT development services depends on hardware requirements, firmware complexity, sensor integration, cloud infrastructure, application features and security requirements. A basic proof of concept generally requires less development effort than a complete commercial IoT product. A technical assessment helps establish the project scope, timeline and estimated budget.",
  },
  {
    question: "3. How long does an IoT development project take?",
    answer:
      "An IoT development project timeline depends on hardware availability, device complexity, connectivity requirements and testing needs. A basic proof of concept may take a few weeks, while a complete IoT product involving firmware, cloud infrastructure, mobile applications and field validation may require several months.",
  },
  {
    question: "4. What is AIoT (Artificial Intelligence of Things)?",
    answer:
      "AIoT combines Artificial Intelligence (AI) with the Internet of Things (IoT). It uses machine learning and data analytics to process information collected from connected devices. AIoT solutions can support anomaly detection, predictive maintenance, intelligent monitoring and automated decision-making across connected systems.",
  },
  {
    question: "5. How do you secure IoT devices and data?",
    answer:
      "IoT security involves protecting connected devices, communication networks, cloud platforms and user applications. Common measures include encrypted device-cloud communication, device authentication, secure boot, role-based access control, encrypted data storage and digitally signed Over-The-Air firmware updates.",
  },
  {
    question: "6. Which IoT communication protocols do you support?",
    answer:
      "IoT communication protocols depend on device capabilities, transmission range, power consumption and data requirements. We work with MQTT, CoAP and HTTP for messaging, BLE and Zigbee for short-range communication, and LoRaWAN, NB-IoT and LTE-M for specific long-range and low-power applications.",
  },
  {
    question: "7. Can IoT applications integrate with ERP, CRM and legacy systems?",
    answer:
      "Yes. IoT applications can integrate with existing ERP, CRM and legacy platforms through APIs, webhooks and middleware. This allows businesses to transfer device data into operational systems, automate notifications and connect equipment monitoring with existing business workflows.",
  },
  {
    question: "8. What are Over-The-Air (OTA) firmware updates?",
    answer:
      "Over-The-Air firmware updates allow connected devices to receive and install software updates remotely without requiring physical access. A secure OTA process can include encrypted downloads, digital signature verification, update validation and rollback mechanisms to reduce deployment risks.",
  },
  {
    question: "9. Can you develop IoT solutions using custom hardware?",
    answer:
      "Yes. IoT firmware and software can be developed for both off-the-shelf development boards and custom-designed hardware. Depending on your requirements, development can include microcontroller programming, sensor integration, communication modules, device drivers and hardware-software testing.",
  },
  {
    question: "10. How do I choose the right IoT development company?",
    answer:
      "Choose an IoT development company with experience in embedded firmware, hardware integration, cloud infrastructure and application development. Evaluate its technical capabilities, security practices, communication protocol knowledge, enterprise integration experience and ability to support your project from development through deployment.",
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
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/80 overflow-hidden"
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

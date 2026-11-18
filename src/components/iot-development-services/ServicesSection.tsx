"use client";

import React from "react";
import {
  Cpu,
  Cloud,
  Smartphone,
  CircuitBoard,
  BrainCircuit,
  Factory,
} from "lucide-react";

const IOT_SERVICES = [
  {
    title: "1. IoT Firmware & Embedded Software Development",
    description:
      "Develop reliable embedded software for connected devices using platforms such as ESP32, STM32 and ARM Cortex. Our IoT firmware development covers embedded C/C++, device drivers, RTOS integration, peripheral communication, power optimisation and secure OTA updates to support stable device performance.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "2. IoT Cloud Platform Integration",
    description:
      "Connect connected devices with scalable cloud infrastructure for secure communication and real-time data processing. Our IoT cloud platform integration includes MQTT messaging, device management, telemetry storage, cloud APIs and backend development using platforms such as AWS IoT Core and Azure IoT Hub.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "3. IoT Mobile & Web Application Development",
    description:
      "Manage connected devices through user-friendly mobile applications and web-based dashboards. Our IoT application development services include real-time device monitoring, remote configuration, Bluetooth connectivity, push notifications, user authentication and data visualisation to simplify device management.",
    icon: <Smartphone className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "4. Hardware Integration & Sensor Engineering",
    description:
      "Connect microcontrollers, sensors and communication modules to develop functional connected products. Our IoT hardware integration services cover temperature, pressure, vibration and environmental sensors, device compatibility, peripheral communication and power requirements to support reliable hardware-software interaction.",
    icon: <CircuitBoard className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "5. Edge Computing & AIoT Integration",
    description:
      "Bring intelligent data processing closer to connected devices through edge computing and AIoT integration. We implement machine learning models, anomaly detection and predictive maintenance capabilities to process sensor information locally, reduce unnecessary cloud communication and support faster operational decisions.",
    icon: <BrainCircuit className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "6. Industrial IoT & Enterprise Automation (IIoT)",
    description:
      "Connect industrial machinery, sensors and enterprise applications through industrial IoT development. Our IIoT solutions integrate PLCs, SCADA systems and industrial communication protocols to support equipment monitoring, production tracking, predictive maintenance and automated workflows across manufacturing environments.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our IoT Software Development and Engineering Services
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Our IoT software development services cover the complete connected product lifecycle, from firmware programming and device integration to cloud infrastructure and application development. We combine technical expertise across hardware, software and connectivity to build IoT systems that meet specific business and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IOT_SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

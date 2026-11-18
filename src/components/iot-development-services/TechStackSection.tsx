"use client";

import React from "react";
import {
  Cpu,
  Radio,
  Wifi,
  Cloud,
  Database,
  Code2,
} from "lucide-react";

const TECH_CATEGORIES = [
  {
    title: "Hardware and Microcontroller Platforms",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
    items: [
      "ARM Cortex",
      "ESP32",
      "STM32",
      "Nordic nRF",
      "Raspberry Pi",
      "Custom IoT Gateways",
    ],
  },
  {
    title: "Communication Protocols",
    icon: <Radio className="w-5 h-5 text-[#FF7230]" />,
    items: [
      "MQTT",
      "CoAP",
      "Bluetooth Low Energy (BLE)",
      "Zigbee",
      "Z-Wave",
      "LoRaWAN",
      "HTTP/REST",
      "WebSockets",
      "Modbus",
      "OPC UA",
    ],
  },
  {
    title: "Wireless and Cellular Connectivity",
    icon: <Wifi className="w-5 h-5 text-[#FF7230]" />,
    items: [
      "Wi-Fi",
      "Bluetooth",
      "LTE-M",
      "NB-IoT",
      "4G",
      "5G",
      "Sub-GHz RF",
    ],
  },
  {
    title: "Cloud and Edge Platforms",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
    items: [
      "AWS IoT Core",
      "AWS Greengrass",
      "Azure IoT Hub",
      "Azure IoT Edge",
      "EMQX",
      "HiveMQ",
    ],
  },
  {
    title: "Databases and Telemetry Storage",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
    items: [
      "InfluxDB",
      "TimescaleDB",
      "MongoDB",
      "PostgreSQL",
      "BigQuery",
      "AWS Timestream",
    ],
  },
  {
    title: "Web and Mobile Technologies",
    icon: <Code2 className="w-5 h-5 text-[#FF7230]" />,
    items: [
      "React",
      "Next.js",
      "React Native",
      "Flutter",
      "Node.js",
      "Python",
      "Grafana",
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Technologies and Protocols Used in Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              IoT Development Services
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Selecting the right technology is essential for building connected devices that communicate reliably and process data efficiently. We work with embedded platforms, communication protocols, cloud infrastructure and application frameworks according to your product requirements, connectivity range and deployment environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TECH_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                {category.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.06] border border-white/10 text-neutral-200 hover:border-[#FF7230]/50 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

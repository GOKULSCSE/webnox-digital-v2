"use client";

import { useState } from "react";

interface IndustryItem {
  id: string;
  tabLabel: string;
  subheading: string;
  challenge: string;
  solution: string;
  tags: string[];
  image: string;
  hudWidgets: {
    widget1: {
      title: string;
      desc: string;
      type: "cardio" | "fraud" | "conversion" | "vibration" | "route" | "cognitive";
    };
    widget2: {
      title: string;
      desc: string;
      type: "biometrics" | "velocity" | "demand" | "oee" | "fuel" | "engagement";
    };
    widget3: {
      title: string;
      desc: string;
      type: "respiratory" | "liquidity" | "recovery" | "qa" | "eta" | "curriculum";
    };
  };
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    tabLabel: "Healthcare",
    subheading: "Healthcare and MedTech",
    challenge:
      "Fragmented patient records, isolated legacy systems, and manual paperwork create clinical bottlenecks, making vital patient information difficult to access in real time.",
    solution:
      "We build secure, compliant healthcare platforms, intelligent medical document extraction tools, and unified workflow applications that connect critical data across care teams.",
    tags: [
      "Clinical Workflow Automation",
      "Intelligent Document Processing",
      "EHR Data Integration",
      "Patient Management Platforms",
      "Connected Medical Systems",
    ],
    image: "/images/healthcare-biometrics.jpg",
    hudWidgets: {
      widget1: {
        title: "Cardio disturbances",
        desc: "Monitors your heart beats and detects unusual patterns",
        type: "cardio",
      },
      widget2: {
        title: "Biometric trends",
        desc: "Detects trends in your vitals, and alerts you to any outliers",
        type: "biometrics",
      },
      widget3: {
        title: "Respiratory disturbances",
        desc: "Monitors your breathing and alerts you to any interruption",
        type: "respiratory",
      },
    },
  },
  {
    id: "fintech",
    tabLabel: "Fintech",
    subheading: "Fintech and Banking Infrastructure",
    challenge:
      "Legacy core banking systems, escalating cyber-fraud vectors, and manual compliance audits slow transaction processing and drive up regulatory overhead.",
    solution:
      "We engineer high-throughput algorithmic transaction rails, real-time AI fraud detection engines, and automated KYC/AML pipelines with sub-millisecond settlement speeds.",
    tags: [
      "Real-Time Fraud Prevention",
      "Autonomous Risk Scoring",
      "High-Frequency Ledger Engines",
      "Automated Regulatory Compliance",
      "Instant KYC Verification",
    ],
    image: "/images/fintech-trading.jpg",
    hudWidgets: {
      widget1: {
        title: "Transaction velocity",
        desc: "Monitors 25,000 TPS with zero throughput latency spikes",
        type: "fraud",
      },
      widget2: {
        title: "Anomaly detection",
        desc: "Real-time neural risk scoring with zero false positives",
        type: "velocity",
      },
      widget3: {
        title: "Liquidity distribution",
        desc: "Autonomous multi-currency treasury balancing",
        type: "liquidity",
      },
    },
  },
  {
    id: "retail",
    tabLabel: "Retail & Ecommerce",
    subheading: "Retail and Omnichannel Commerce",
    challenge:
      "Stagnant conversion funnels, third-party cookie deprecation, and fragmented inventory across channels inflate customer acquisition costs and reduce customer lifetime value.",
    solution:
      "We deploy predictive recommendation engines, dynamic personalized pricing, and autonomous omnichannel inventory reordering systems that maximize customer lifetime value.",
    tags: [
      "Predictive Personalization",
      "Dynamic Pricing Algorithms",
      "Unified Omnichannel Sync",
      "AI Virtual Try-On",
      "Autonomous Supply Reordering",
    ],
    image: "/images/screen.jpg",
    hudWidgets: {
      widget1: {
        title: "Conversion lift",
        desc: "+38.4% average basket order value optimization",
        type: "conversion",
      },
      widget2: {
        title: "Demand forecasting",
        desc: "Predictive regional replenishment in real time",
        type: "demand",
      },
      widget3: {
        title: "Cart recovery intelligence",
        desc: "Autonomous personalized trigger engagement",
        type: "recovery",
      },
    },
  },
  {
    id: "manufacturing",
    tabLabel: "Manufacturing",
    subheading: "Industrial Automation and Smart Factory",
    challenge:
      "Unplanned machinery downtime, siloed telemetry data, and variable QA defect rates disrupt tight supply chains and inflate production costs.",
    solution:
      "We build IoT edge vision QA systems, predictive maintenance telemetry networks, and digital twins that monitor factory floor operations in real time.",
    tags: [
      "Predictive Equipment Maintenance",
      "Computer Vision Defect Detection",
      "Digital Factory Twin",
      "Supply Chain Bottleneck Alerting",
      "Edge Sensor Telemetry",
    ],
    image: "/images/cybersecurity_technology_assurance.png",
    hudWidgets: {
      widget1: {
        title: "Vibration telemetry",
        desc: "Sub-millimeter bearing anomaly isolated and flagged",
        type: "vibration",
      },
      widget2: {
        title: "Overall equipment effectiveness",
        desc: "94.8% factory uptime across active robotics lines",
        type: "oee",
      },
      widget3: {
        title: "Automated QA inspection",
        desc: "99.98% optical precision defect catch rate",
        type: "qa",
      },
    },
  },
  {
    id: "logistics",
    tabLabel: "Logistics & Transportation",
    subheading: "Logistics and Fleet Telematics",
    challenge:
      "Fuel price volatility, unexpected route disruptions, and complex multi-modal dispatching degrade delivery margins and lead to missed delivery SLAs.",
    solution:
      "We design autonomous dispatch algorithms, dynamic multi-stop route optimization, and live telematics dashboards reducing fleet mileage and operational latency.",
    tags: [
      "Dynamic Route Optimization",
      "Autonomous Fleet Dispatching",
      "Cold-Chain Telemetry Tracking",
      "Predictive Fuel Management",
      "Intermodal Freight Matching",
    ],
    image: "/images/services/3c9f5242ffe941cc07c5c01c35ea3ca9ce43ee6f.png",
    hudWidgets: {
      widget1: {
        title: "Transit telemetry",
        desc: "22% reduction in interstate commercial transit hours",
        type: "route",
      },
      widget2: {
        title: "Fleet fuel consumption",
        desc: "Sub-second engine idle cut-off optimization",
        type: "fuel",
      },
      widget3: {
        title: "Live ETA precision",
        desc: "Sub-minute delivery window accuracy guarantee",
        type: "eta",
      },
    },
  },
  {
    id: "edtech",
    tabLabel: "EdTech",
    subheading: "EdTech and Adaptive Learning",
    challenge:
      "Static one-size-fits-all curricula fail diverse learner paces, resulting in student disengagement, high drop-off rates, and overwhelmed educators.",
    solution:
      "We build adaptive learning engines that dynamically calibrate curriculum difficulty, generate personalized practice modules, and automate formative student feedback.",
    tags: [
      "Adaptive Knowledge Graphs",
      "AI Formative Tutoring",
      "Automated Assessment Grading",
      "Student Engagement Analytics",
      "Personalized Curriculum Paths",
    ],
    image: "/images/services/20bd32e73df7a0088851915baca229308343d545.png",
    hudWidgets: {
      widget1: {
        title: "Cognitive mastery",
        desc: "Dynamic retention curve modeling and pace adjustment",
        type: "cognitive",
      },
      widget2: {
        title: "Engagement index",
        desc: "Real-time comprehension telemetry across cohorts",
        type: "engagement",
      },
      widget3: {
        title: "Curriculum pacing",
        desc: "Automated formative task recommendation engine",
        type: "curriculum",
      },
    },
  },
];

function HudGraph({ type }: { type: string }) {
  switch (type) {
    case "cardio":
      return (
        <div className="w-full h-8 flex items-center justify-center mt-1">
          <svg viewBox="0 0 160 36" fill="none" className="w-full h-full stroke-pink-500">
            <path
              d="M0 18 H35 L42 8 L48 28 L54 18 H65 L70 2 H76 34 L82 18 H98 L103 12 L108 24 L113 18 H160"
              stroke="url(#pinkGlow)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="pinkGlow" x1="0" y1="0" x2="160" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="0.5" stopColor="#f43f5e" />
                <stop offset="1" stopColor="#ec4899" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case "biometrics":
      return (
        <div className="w-full h-8 relative flex items-center mt-1">
          <svg viewBox="0 0 140 32" fill="none" className="w-full h-full">
            <path
              d="M0 24 C30 26, 45 10, 75 14 C100 18, 120 6, 140 10"
              stroke="url(#blueTrend)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="108" cy="8" r="3" fill="#38bdf8" className="animate-ping" />
            <circle cx="108" cy="8" r="2.5" fill="#38bdf8" />
            <defs>
              <linearGradient id="blueTrend" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818cf8" />
                <stop offset="0.75" stopColor="#38bdf8" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    case "respiratory":
    default:
      return (
        <div className="w-full h-8 flex items-end gap-1 mt-1 px-1">
          <svg viewBox="0 0 150 32" fill="none" className="w-full h-full">
            <path
              d="M0 30 L15 16 L25 28 L40 6 L55 24 L70 12 L85 28 L100 8 L115 22 L130 14 L150 30"
              fill="url(#purpleArea)"
              stroke="#a855f7"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="purpleArea" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ec4899" stopOpacity="0.4" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
  }
}

export default function IndustrySolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = INDUSTRIES_DATA[activeIndex];

  return (
    <section className="relative w-full bg-[#fdfaf6] text-neutral-900 py-20 sm:py-28 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#12141a] leading-tight">
            AI Solutions{" "}
            <span className="text-[#525866] font-normal">
              Engineered for Industry Scale
            </span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-[17px] font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            Domain-specific intelligence, automated workflows, and connected platforms built around real operational challenges.
          </p>
        </div>

        {/* Industry Pill Selector Capsule Track */}
        <div className="flex justify-center mb-10 sm:mb-14 px-2">
          <div className="inline-flex items-center p-1.5 sm:p-2 bg-[#dfd9cf] border border-[#d5cdc1] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.08),0_4px_20px_rgba(0,0,0,0.03)] max-w-full overflow-x-auto scrollbar-none gap-1.5 sm:gap-2">
            {INDUSTRIES_DATA.map((ind, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`whitespace-nowrap px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13.5px] font-medium tracking-tight transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff6825] via-[#ff540f] to-[#f33c00] text-white shadow-[0_4px_16px_rgba(255,94,0,0.45)] font-semibold scale-[1.01]"
                      : "bg-[#4a4744] hover:bg-[#56534f] text-white/95 hover:text-white"
                  }`}
                >
                  {ind.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Big White/Cream Showcase Card */}
        <div className="w-full bg-[#fcfaf7] border border-[#ebe4db] rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-neutral-900 tracking-tight mb-6">
                {activeIndustry.subheading}
              </h3>

              {/* Block 1: The Industry challenge */}
              <div className="mb-6">
                <h4 className="text-xs sm:text-[13px] font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  The Industry challenge
                </h4>
                <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                  {activeIndustry.challenge}
                </p>
              </div>

              {/* Block 2: How Webnox engineers custom healthcare platforms */}
              <div className="mb-7">
                <h4 className="text-xs sm:text-[13px] font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  How Webnox engineers custom {activeIndustry.tabLabel.toLowerCase()} platforms
                </h4>
                <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                  {activeIndustry.solution}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeIndustry.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg border border-neutral-300/80 bg-white/90 text-neutral-800 text-[11px] sm:text-xs font-medium tracking-tight shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Visual Dashboard Display */}
            <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl sm:rounded-[26px] overflow-hidden bg-neutral-950 shadow-xl border border-neutral-800/60 group">
              
              {/* Background Athlete / Context Photograph */}
              <img
                key={activeIndustry.id}
                src={activeIndustry.image}
                alt={activeIndustry.subheading}
                className="w-full h-full object-cover object-center absolute inset-0 brightness-[0.88] transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

              {/* HUD Widget 1: Top Left */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 bg-black/70 backdrop-blur-md border border-white/15 rounded-xl p-3 sm:p-3.5 max-w-[190px] sm:max-w-[210px] shadow-2xl transition-transform hover:-translate-y-0.5 duration-200">
                <div className="text-[11px] sm:text-xs font-semibold text-white tracking-tight">
                  {activeIndustry.hudWidgets.widget1.title}
                </div>
                <div className="text-[8.5px] sm:text-[9px] text-neutral-300 mt-0.5 leading-tight line-clamp-2">
                  {activeIndustry.hudWidgets.widget1.desc}
                </div>
                <HudGraph type={activeIndustry.hudWidgets.widget1.type} />
              </div>

              {/* HUD Widget 2: Bottom Left */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 z-10 bg-black/70 backdrop-blur-md border border-white/15 rounded-xl p-3 sm:p-3.5 max-w-[180px] sm:max-w-[195px] shadow-2xl transition-transform hover:-translate-y-0.5 duration-200">
                <div className="text-[11px] sm:text-xs font-semibold text-white tracking-tight">
                  {activeIndustry.hudWidgets.widget2.title}
                </div>
                <div className="text-[8.5px] sm:text-[9px] text-neutral-300 mt-0.5 leading-tight line-clamp-2">
                  {activeIndustry.hudWidgets.widget2.desc}
                </div>
                <HudGraph type={activeIndustry.hudWidgets.widget2.type} />
              </div>

              {/* HUD Widget 3: Bottom Right */}
              <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 z-10 bg-black/70 backdrop-blur-md border border-white/15 rounded-xl p-3 sm:p-3.5 max-w-[185px] sm:max-w-[205px] shadow-2xl transition-transform hover:-translate-y-0.5 duration-200">
                <div className="text-[11px] sm:text-xs font-semibold text-white tracking-tight">
                  {activeIndustry.hudWidgets.widget3.title}
                </div>
                <div className="text-[8.5px] sm:text-[9px] text-neutral-300 mt-0.5 leading-tight line-clamp-2">
                  {activeIndustry.hudWidgets.widget3.desc}
                </div>
                <HudGraph type={activeIndustry.hudWidgets.widget3.type} />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

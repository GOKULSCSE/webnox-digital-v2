"use client";

import { useState } from "react";
import {
  Clock,
  Users2,
  Cpu,
  CodeXml,
  Rocket,
  Share2,
  Globe2,
  ArrowRight,
} from "lucide-react";

interface PillarItem {
  id: string;
  number: string;
  tabLabel: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  icon: React.ReactNode;
}

const PILLARS_DATA: PillarItem[] = [
  {
    id: "save-time",
    number: "01",
    tabLabel: "Save Time Across\nProduct Lifecycle",
    title: "Save Time Across the Product Lifecycle",
    description:
      "AI-assisted workflows help reduce repetitive research, development, testing, documentation, reporting, and marketing tasks. This allows teams to move from planning to execution faster while spending more time on strategy, problem-solving, and decisions that require human expertise.",
    highlights: [
      "AI-accelerated research, code scaffolding, and testing workflows",
      "Automated technical documentation and reporting generation",
      "Rapid feedback loops shortening planning-to-execution timelines",
      "More time focused on core architecture and strategic business logic",
    ],
    image: "/images/ai-crystal-orb.jpg",
    icon: <Clock className="w-4 h-4" />,
  },
  {
    id: "one-team",
    number: "02",
    tabLabel: "Build and Market\nWith One Team",
    title: "Build and Market With One Team",
    description:
      "When you come to Webnox to build a product, you do not need to manage separate development and marketing partners. Our AI, software, SEO, GEO, paid advertising, content, and performance marketing teams can take the product from development to launch, promotion, user acquisition, and growth.",
    highlights: [
      "Full product lifecycle ownership from code to commercial launch",
      "In-house AI, software, SEO, GEO, and growth marketing squads",
      "Unified sprint cycles synchronizing features with market demand",
      "Seamless communication with zero agency handoff friction",
    ],
    image: "/images/ai-neural-cube.jpg",
    icon: <Users2 className="w-4 h-4" />,
  },
  {
    id: "existing-systems",
    number: "03",
    tabLabel: "Bring AI Into\nExisting Systems",
    title: "Bring AI Into Existing Systems",
    description:
      "We integrate AI with your applications, APIs, databases, SaaS platforms, cloud infrastructure, and business workflows. This helps you add AI capabilities to existing technology without replacing systems that are already important to your operations.",
    highlights: [
      "Seamless integration with legacy ERPs, CRMs, APIs, and databases",
      "Custom middleware, webhooks, and secure RAG data pipelines",
      "Zero disruption to mission-critical operational stacks",
      "Enterprise security, access controls, and compliance standards",
    ],
    image: "/images/ai-concept-prism.jpg",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    id: "ai-engineers",
    number: "04",
    tabLabel: "Work Directly With\nAI Engineers",
    title: "Work Directly With AI Engineers",
    description:
      "Our Forward Deployed AI Engineers work alongside your technical team to understand your systems, solve engineering challenges, build AI applications, and deploy them within your existing development environment, reducing delays caused by traditional vendor handoffs.",
    highlights: [
      "Forward Deployed AI Engineers embedded alongside your squads",
      "Direct technical alignment on architecture and codebase practices",
      "Rapid resolution of edge cases and engineering hurdles",
      "Elimination of slow vendor management and spec delays",
    ],
    image: "/images/ai-quantum-stack.jpg",
    icon: <CodeXml className="w-4 h-4" />,
  },
  {
    id: "idea-to-production",
    number: "05",
    tabLabel: "Idea to Production\nFaster",
    title: "Move From Idea to Production Faster",
    description:
      "Our AI and software engineering teams support product planning, architecture, development, testing, integration, deployment, and optimisation. AI-assisted development helps shorten repetitive development cycles and accelerate the path from an initial concept to a working product.",
    highlights: [
      "Fast-track prototyping with production-grade engineering rigor",
      "Automated CI/CD pipelines and neural integration testing",
      "Shortened release cycles moving products to market in weeks",
      "Scalable cloud-native deployment ready for user scale",
    ],
    image: "/images/ai-torus-ring.jpg",
    icon: <Rocket className="w-4 h-4" />,
  },
  {
    id: "tech-marketing-connected",
    number: "06",
    tabLabel: "Keep Tech and Marketing\nConnected",
    title: "Keep Technology and Marketing Connected",
    description:
      "Because software engineering, AI, automation, and digital marketing work within one organisation, product and marketing teams can work from connected data and goals. This reduces communication gaps and makes it easier to improve both the product and its market performance.",
    highlights: [
      "Continuous synchronization between product metrics and marketing data",
      "Reduced communication silos between dev and acquisition teams",
      "Data-driven product optimization based on live campaign behavior",
      "Cohesive brand, user experience, and conversion funnel design",
    ],
    image: "/images/ai-growth-core.jpg",
    icon: <Share2 className="w-4 h-4" />,
  },
  {
    id: "global-delivery",
    number: "07",
    tabLabel: "Global Product\nDelivery",
    title: "Global Product Delivery",
    description:
      "With 2,570+ clients across 20+ countries, Webnox has experience delivering software, AI, websites, digital products, and marketing services for businesses operating across different markets and technology environments.",
    highlights: [
      "15+ years delivering software across 20+ international markets",
      "Deep understanding of multi-region compliance and localization",
      "Over 2,570+ satisfied client engagements and 20+ proprietary products",
      "Round-the-clock engineering reliability and dedicated SLA support",
    ],
    image: "/images/ai-crystal-orb.jpg",
    icon: <Globe2 className="w-4 h-4" />,
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = PILLARS_DATA[activeIndex];

  const scrollToContact = () => {
    const contactEl =
      document.getElementById("contact") ||
      document.querySelector("section:last-of-type");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#0a0604] py-24 sm:py-32 lg:py-36 overflow-hidden select-none border-t border-white/[0.08]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,rgba(255,94,0,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[#ff5e00] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00] animate-pulse" />
            Competitive Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
            Why Choose Webnox as Your{" "}
            <span className="text-[#ff5e00]">AI-Native Partner</span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto font-light">
            Webnox combines 15+ years of software engineering experience, AI capabilities, digital marketing expertise, 2,570+ clients, 20+ own products, and delivery across 20+ countries. Our AI-native approach helps businesses build, launch, market, automate, and continuously improve digital products through one connected team.
          </p>
        </div>

        {/* 3-Column Cockpit Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left Column: Navigation Tabs with Connected Active Rail */}
          <div className="lg:col-span-4 xl:col-span-3 flex relative">
            {/* Tabs List */}
            <div className="w-full flex flex-col gap-2 sm:gap-2.5">
              {PILLARS_DATA.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative text-left w-full rounded-2xl p-3 sm:p-3.5 transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                      isActive
                        ? "bg-gradient-to-r from-[#ff6b2b] via-[#ff5511] to-[#f43f00] text-white shadow-[0_8px_30px_rgba(255,94,0,0.35)]"
                        : "bg-[#140f0b]/80 hover:bg-[#1f1712] border border-white/[0.06] hover:border-white/15 text-neutral-300"
                    }`}
                  >
                    {/* Icon Box */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white/20 border border-white/30 backdrop-blur-sm text-white"
                          : "bg-white/[0.04] border border-white/[0.08] text-neutral-400 group-hover:border-white/20 group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Button Text */}
                    <span
                      className={`text-[12px] sm:text-[12.5px] font-semibold tracking-tight whitespace-pre-line leading-tight flex-1 ${
                        isActive
                          ? "text-white font-bold"
                          : "text-neutral-400 group-hover:text-neutral-200"
                      }`}
                    >
                      {item.tabLabel}
                    </span>

                    {/* Active Tab Accent Glow */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Vertical Divider Rail with Animated Orange Bar (Hidden on small screens) */}
            <div className="hidden lg:flex flex-col items-center ml-4 relative w-[3px] bg-white/[0.07] rounded-full my-2">
              <div
                className="absolute w-full bg-[#ff5e00] rounded-full transition-all duration-300 shadow-[0_0_12px_#ff5e00]"
                style={{
                  height: `${100 / PILLARS_DATA.length}%`,
                  top: `${(activeIndex * 100) / PILLARS_DATA.length}%`,
                }}
              />
            </div>
          </div>

          {/* Middle Column: Feature Details Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex">
            <div className="w-full relative overflow-hidden rounded-[26px] bg-gradient-to-b from-[#22160d]/95 via-[#160e08]/95 to-[#0f0905]/98 border border-[#ff5e00]/25 p-7 sm:p-9 lg:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Background Ambient Gradient inside Card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(255,94,0,0.12),transparent_70%)] pointer-events-none" />

              {/* Upper Text Content */}
              <div className="relative z-10">
                <span className="font-mono text-xs font-bold text-[#ff5e00] tracking-wider block mb-2">
                  PILLAR {activeItem.number}
                </span>
                <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold text-white tracking-tight leading-[1.22] mb-4">
                  {activeItem.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-[13.5px] leading-relaxed mb-6 font-normal">
                  {activeItem.description}
                </p>

                {/* Highlights List with Custom Orange Chevron Glyphs */}
                <ul className="space-y-3">
                  {activeItem.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <svg
                        className="w-3.5 h-3.5 text-[#ff5e00] shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.5 3.5L7.5 8L3.5 12.5H5.5L9.5 8L5.5 3.5H3.5ZM7.5 3.5L11.5 8L7.5 12.5H9.5L13.5 8L9.5 3.5H7.5Z" />
                      </svg>
                      <span className="text-neutral-300 text-xs sm:text-[13px] leading-normal font-normal">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row: Number + CTA */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-neutral-500">
                  {activeItem.number} / 0{PILLARS_DATA.length}
                </span>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#ff5e00] hover:text-white transition-colors cursor-pointer group"
                >
                  <span>Build, Launch and Grow With Webnox →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Visual 3D Showcase Card */}
          <div className="lg:col-span-3 xl:col-span-4 flex">
            <div className="w-full relative overflow-hidden rounded-[26px] border border-white/10 bg-[#090604] min-h-[380px] lg:min-h-[460px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              {/* Backing Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,94,0,0.15),transparent_65%)] pointer-events-none" />

              {/* Main 3D Artwork Image */}
              <img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                draggable={false}
              />

              {/* Soft overlay gradient on image edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

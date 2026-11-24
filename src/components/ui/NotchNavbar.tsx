"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  ChevronDown,
  Cpu,
  AppWindow,
  Compass,
  Plug,
  Sparkles,
  BrainCircuit,
  Database,
  Bot,
  MessageSquare,
  Workflow,
  Radio,
  ArrowRight,
} from "lucide-react";

export interface NavLinkItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface NotchNavbarProps {
  className?: string;
  logoSrc?: string;
  leftLinks?: NavLinkItem[];
  rightLinks?: NavLinkItem[];
}

interface ServiceMenuItem {
  label: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceMenuCategory {
  title: string;
  items: ServiceMenuItem[];
}

const GENERAL_SERVICE_CATEGORIES: ServiceMenuCategory[] = [
  {
    title: "AI Engineering & Strategy",
    items: [
      {
        label: "AI Development Company",
        description: "Custom AI software & systems",
        href: "/ai-development-company",
        icon: Cpu,
      },
      {
        label: "AI Application Development",
        description: "Full-stack intelligent apps",
        href: "/ai-application-development-services",
        icon: AppWindow,
      },
      {
        label: "AI Consulting Services",
        description: "Strategy, ROI & architecture",
        href: "/ai-consulting-services",
        icon: Compass,
      },
      {
        label: "AI Integration Services",
        description: "Connect AI to CRM & ERP",
        href: "/ai-integration-services",
        icon: Plug,
      },
    ],
  },
  {
    title: "Generative AI & Knowledge",
    items: [
      {
        label: "Generative AI Services",
        description: "Multimodal & GenAI workflows",
        href: "/generative-ai-development-services",
        icon: Sparkles,
      },
      {
        label: "LLM Development",
        description: "Fine-tuning & private LLMs",
        href: "/llm-development-services",
        icon: BrainCircuit,
      },
      {
        label: "RAG Development",
        description: "Enterprise search & retrieval",
        href: "/rag-development-services",
        icon: Database,
      },
    ],
  },
  {
    title: "Agents, Automation & IoT",
    items: [
      {
        label: "AI Copilot Development",
        description: "Action-taking team copilots",
        href: "/ai-copilot-development-services",
        icon: Bot,
      },
      {
        label: "AI Chatbot Development",
        description: "24/7 conversational AI",
        href: "/ai-chatbot-development-services",
        icon: MessageSquare,
      },
      {
        label: "n8n Automation Services",
        description: "Self-hosted workflow pipelines",
        href: "/n8n-automation-services",
        icon: Workflow,
      },
      {
        label: "IoT Development Services",
        description: "Connected devices & AIoT",
        href: "/iot-development-services",
        icon: Radio,
      },
    ],
  },
];

const DEFAULT_LEFT_LINKS: NavLinkItem[] = [
  {
    label: "Services",
    href: "/ai-application-development-services",
    hasDropdown: true,
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Us", href: "/why-choose-us" },
];

const DEFAULT_RIGHT_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_CORE_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function normalizePath(path: string | null | undefined): string {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed || "/";
}

export default function NotchNavbar({
  className = "",
  logoSrc = "/images/Webnox logo White.png",
  leftLinks = DEFAULT_LEFT_LINKS,
  rightLinks = DEFAULT_RIGHT_LINKS,
}: NotchNavbarProps) {
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname);

  const [isHovered, setIsHovered] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  const isMobileMenuOpen = mobileOpenPath === pathname;
  const hasServicesDropdown = leftLinks.some((l) => l.hasDropdown);

  const isServiceRouteActive = GENERAL_SERVICE_CATEGORIES.some((cat) =>
    cat.items.some((item) => normalizePath(item.href) === normalizedPathname)
  );

  // Scroll direction tracking: hide on scroll down, reveal on scroll up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const prevScrollY = lastScrollYRef.current;

          if (currentScrollY <= 40) {
            setIsVisible(true);
          } else if (currentScrollY > prevScrollY && currentScrollY - prevScrollY > 8) {
            setIsVisible(false);
            setIsServicesOpen(false);
          } else if (currentScrollY < prevScrollY && prevScrollY - currentScrollY > 8) {
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setIsHovered(false);
        setMobileOpenPath(null);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
        setMobileOpenPath(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const shouldShowNavbar = isVisible || isHovered || isServicesOpen;

  const closeAllMenus = () => {
    setIsServicesOpen(false);
    setIsHovered(false);
    setMobileOpenPath(null);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 select-none ${className}`}
    >
      {/* 1. Desktop Notch Navbar (visible on md and up) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: shouldShowNavbar ? 0 : -110 }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="hidden md:flex justify-center w-full pointer-events-none"
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsServicesOpen(false);
          }}
          className="relative flex flex-col items-center pointer-events-auto"
        >
          <motion.div
            className="relative h-[85px] flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] cursor-pointer"
            animate={{
              width: isHovered || isServicesOpen ? "min(1240px, 94vw)" : "417px",
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 24,
              mass: 0.75,
            }}
            style={{ transformOrigin: "top center" }}
          >
            {/* Unified Continuous Notch Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 flex items-start overflow-hidden">
              {/* Left Shoulder Cap: Fixed 83px width */}
              <svg
                width="83"
                height="85"
                viewBox="0 0 83 85"
                fill="none"
                className="flex-shrink-0 pointer-events-none"
              >
                <path
                  d="M0 0 L3.617 2.862 C13.571 10.74 20.691 21.642 23.902 33.923 L25.835 41.319 C32.563 67.051 55.808 85 82.405 85 H83 V0 H0 Z"
                  fill="#181818"
                />
              </svg>

              {/* Center Body */}
              <div className="flex-1 h-[85px] bg-[#181818] -mx-[0.5px]" />

              {/* Right Shoulder Cap: Fixed 82px width */}
              <svg
                width="82"
                height="85"
                viewBox="0 0 82 85"
                fill="none"
                className="flex-shrink-0 pointer-events-none"
              >
                <path
                  d="M0 85 C25.477 85 48.021 68.504 55.73 44.222 L60.293 29.847 C63.382 20.119 68.963 11.368 76.482 4.466 L81.347 0 H82 V0 H0 V85 Z"
                  fill="#181818"
                />
              </svg>
            </div>

            {/* Symmetrical 3-Column Navigation Grid: Left Wing, Center Logo, Right Wing */}
            <div className="relative w-full h-full flex items-center justify-center px-6 md:px-16 lg:px-24">
              {/* Left Navigation Wing */}
              <div className="flex-1 flex justify-end items-center overflow-hidden h-full pr-4 md:pr-7">
                <nav
                  key="left-nav-wing"
                  aria-label="Primary Left Navigation"
                  aria-hidden={!isHovered && !isServicesOpen}
                  style={{ transformOrigin: "right center" }}
                  className={`flex items-center gap-6 md:gap-9 text-[13.5px] font-medium tracking-wide whitespace-nowrap pl-4 transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered || isServicesOpen
                      ? "opacity-100 translate-x-0 scale-x-100 pointer-events-auto"
                      : "opacity-0 translate-x-[36px] scale-x-[0.7] pointer-events-none"
                  }`}
                >
                  {leftLinks.map((link) => {
                    if (link.hasDropdown) {
                      const isActive = isServicesOpen || isServiceRouteActive;
                      return (
                        <button
                          key={link.label}
                          type="button"
                          tabIndex={isHovered || isServicesOpen ? 0 : -1}
                          aria-expanded={isServicesOpen}
                          aria-controls="webnox-services-megamenu"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onClick={() => setIsServicesOpen((prev) => !prev)}
                          className={`inline-flex items-center gap-1.5 transition-colors duration-200 relative group py-1.5 cursor-pointer ${
                            isActive
                              ? "text-[#ff5e00] font-semibold"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              isServicesOpen ? "rotate-180 text-[#ff5e00]" : ""
                            }`}
                          />
                          <span
                            className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff5e00] rounded-full transition-all duration-300 ${
                              isActive
                                ? "opacity-100 scale-x-100"
                                : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                            }`}
                          />
                        </button>
                      );
                    }

                    const isActive = normalizePath(link.href) === normalizedPathname;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        tabIndex={isHovered || isServicesOpen ? 0 : -1}
                        onMouseEnter={() => setIsServicesOpen(false)}
                        onClick={closeAllMenus}
                        className={`transition-colors duration-200 relative group py-1.5 ${
                          isActive
                            ? "text-[#ff5e00] font-semibold"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff5e00] rounded-full transition-all duration-300 ${
                            isActive
                              ? "opacity-100 scale-x-100"
                              : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Center Logo Anchor */}
              <div
                className="flex-shrink-0 z-20 flex items-center justify-center px-4"
                onMouseEnter={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/"
                  onClick={closeAllMenus}
                  className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  aria-label="Webnox Home"
                >
                  <Image
                    src={logoSrc}
                    alt="Webnox Logo"
                    width={160}
                    height={32}
                    className="h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,94,0,0.18)]"
                    priority
                  />
                </Link>
              </div>

              {/* Right Navigation Wing */}
              <div className="flex-1 flex justify-start items-center overflow-hidden h-full pl-4 md:pl-7">
                <nav
                  key="right-nav-wing"
                  aria-label="Primary Right Navigation"
                  aria-hidden={!isHovered && !isServicesOpen}
                  style={{ transformOrigin: "left center" }}
                  className={`flex items-center gap-6 md:gap-9 text-[13.5px] font-medium tracking-wide whitespace-nowrap pr-4 transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHovered || isServicesOpen
                      ? "opacity-100 translate-x-0 scale-x-100 pointer-events-auto"
                      : "opacity-0 -translate-x-[36px] scale-x-[0.7] pointer-events-none"
                  }`}
                >
                  {rightLinks.map((link) => {
                    const isActive = normalizePath(link.href) === normalizedPathname;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        tabIndex={isHovered || isServicesOpen ? 0 : -1}
                        onMouseEnter={() => setIsServicesOpen(false)}
                        onClick={closeAllMenus}
                        className={`transition-colors duration-200 relative group py-1.5 ${
                          isActive
                            ? "text-[#ff5e00] font-semibold"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span
                          className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#ff5e00] rounded-full transition-all duration-300 ${
                            isActive
                              ? "opacity-100 scale-x-100"
                              : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </motion.div>

          {/* Desktop Services Mega-Dropdown (Always mounted in DOM for SSR & zero hydration mismatch) */}
          {hasServicesDropdown && (
            <div
              id="webnox-services-megamenu"
              aria-hidden={!isServicesOpen}
              className={`absolute top-[85px] left-1/2 -translate-x-1/2 w-[min(980px,92vw)] pt-2.5 transition-all duration-200 ease-out ${
                isServicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="relative rounded-[28px] bg-[#140d09]/95 backdrop-blur-2xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.65)] p-6 lg:p-7 overflow-hidden">
                {/* Subtle Solar Orange Ambient Glow */}
                <div
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[180px] rounded-full bg-[#FF7230]/12 blur-[70px] pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 grid grid-cols-3 gap-6">
                  {GENERAL_SERVICE_CATEGORIES.map((category) => (
                    <div key={category.title} className="flex flex-col gap-2">
                      <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF7230] px-2.5 mb-1">
                        {category.title}
                      </p>
                      <div className="flex flex-col gap-1">
                        {category.items.map((item) => {
                          const Icon = item.icon;
                          const isItemActive =
                            normalizePath(item.href) === normalizedPathname;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              tabIndex={isServicesOpen ? 0 : -1}
                              onClick={closeAllMenus}
                              className={`group flex items-start gap-3 p-2.5 rounded-2xl border transition-all duration-200 ${
                                isItemActive
                                  ? "bg-[#FF7230]/12 border-[#FF7230]/45"
                                  : "border-transparent hover:bg-white/[0.05] hover:border-white/10"
                              }`}
                            >
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                                  isItemActive
                                    ? "bg-gradient-to-br from-[#FF7230] to-[#FF532B] text-white shadow-[0_4px_14px_rgba(255,114,48,0.4)]"
                                    : "bg-white/[0.06] border border-white/10 text-[#FF8935] group-hover:bg-[#FF7230]/20 group-hover:border-[#FF7230]/40"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <span
                                  className={`block text-[13px] font-semibold leading-tight transition-colors ${
                                    isItemActive
                                      ? "text-[#FF7230]"
                                      : "text-white group-hover:text-[#FF8935]"
                                  }`}
                                >
                                  {item.label}
                                </span>
                                <span className="block text-[11.5px] text-neutral-400 mt-0.5 leading-snug">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Strip CTA */}
                <div className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-[#FF7230] shadow-[0_0_8px_#FF7230]" />
                    <span>
                      15+ years of software engineering &middot; Production-ready AI systems
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    tabIndex={isServicesOpen ? 0 : -1}
                    onClick={closeAllMenus}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-[0_4px_18px_rgba(255,114,48,0.35)] hover:brightness-110 transition-all"
                    style={{
                      background:
                        "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                    }}
                  >
                    <span>Book a Scoping Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* 2. Mobile Floating Navbar Header (visible below md) */}
      <div className="flex md:hidden flex-col items-center w-full px-3 pt-3 pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: shouldShowNavbar || isMobileMenuOpen ? 0 : -80 }}
          transition={{ duration: 0.25 }}
          className="w-full h-14 bg-[#181818]/92 backdrop-blur-2xl border border-white/10 rounded-full px-4 flex items-center justify-between shadow-[0_8px_24px_rgba(0,0,0,0.4)] pointer-events-auto"
        >
          {/* Mobile Logo */}
          <Link href="/" onClick={closeAllMenus} className="flex items-center">
            <Image
              src={logoSrc}
              alt="Webnox Logo"
              width={130}
              height={26}
              className="h-6 w-auto object-contain"
              priority
            />
          </Link>

          {/* Mobile Hamburger / Close Button */}
          <button
            type="button"
            onClick={() =>
              setMobileOpenPath((prev) => (prev === pathname ? null : pathname))
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="webnox-mobile-drawer"
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5 text-[#ff5e00]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </motion.div>

        {/* Mobile Dropdown Drawer Menu (Always mounted via CSS grid collapse for SSR) */}
        <div
          id="webnox-mobile-drawer"
          aria-hidden={!isMobileMenuOpen}
          className={`w-full max-w-sm grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
            isMobileMenuOpen
              ? "grid-rows-[1fr] opacity-100 pointer-events-auto mt-2"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="w-full max-h-[78vh] overflow-y-auto bg-[#140d09]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.65)] flex flex-col gap-3">
              {/* Services Expandable Section */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                <button
                  type="button"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between py-3 px-4 text-sm font-semibold tracking-wide cursor-pointer transition-colors ${
                    isServiceRouteActive ? "text-[#FF7230]" : "text-white"
                  }`}
                >
                  <span>Services (11)</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-[#FF7230]" : "text-white/70"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                    mobileServicesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 pb-3 pt-1 flex flex-col gap-3 border-t border-white/10">
                      {GENERAL_SERVICE_CATEGORIES.map((category) => (
                        <div key={category.title} className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF7230] px-2 pt-1">
                            {category.title}
                          </span>
                          {category.items.map((item) => {
                            const isItemActive =
                              normalizePath(item.href) === normalizedPathname;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                tabIndex={isMobileMenuOpen && mobileServicesOpen ? 0 : -1}
                                onClick={closeAllMenus}
                                className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-medium transition-colors ${
                                  isItemActive
                                    ? "bg-[#ff5e00] text-white font-semibold"
                                    : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                                }`}
                              >
                                <span>{item.label}</span>
                                <span className="text-[11px] opacity-60">&rarr;</span>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Pages */}
              <div className="flex flex-col gap-1.5">
                {MOBILE_CORE_LINKS.map((link) => {
                  const isActive = normalizePath(link.href) === normalizedPathname;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      onClick={closeAllMenus}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                        isActive
                          ? "bg-[#ff5e00] text-white shadow-md shadow-orange-500/25"
                          : "bg-white/[0.04] text-white/90 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-60">&rarr;</span>
                    </Link>
                  );
                })}
              </div>

              {/* Direct CTA */}
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={closeAllMenus}
                  className="w-full py-3 px-4 rounded-xl text-white font-bold text-center text-sm shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
                  }}
                >
                  <span>Book a Scoping Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NotchNavbarProps {
  className?: string;
  logoSrc?: string;
  leftLinks?: NavLinkItem[];
  rightLinks?: NavLinkItem[];
}

const DEFAULT_LEFT_LINKS: NavLinkItem[] = [
  { label: "Ai", href: "/ai-application-development-services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "/contact" },
];

const DEFAULT_RIGHT_LINKS: NavLinkItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Solution", href: "/solutions" },
];

export default function NotchNavbar({
  className = "",
  logoSrc = "/images/Webnox logo White.png",
  leftLinks = DEFAULT_LEFT_LINKS,
  rightLinks = DEFAULT_RIGHT_LINKS,
}: NotchNavbarProps) {
  const pathname = usePathname();
  // Initially shrunk by default; expands while hovering navbar; shrinks when mouse leaves
  const [isHovered, setIsHovered] = useState(false);
  const [isLockedExpanded, setIsLockedExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Responsive viewport check
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Scroll direction tracking: hide on scroll down, show only on scroll up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always visible near top of page
          if (currentScrollY <= 40) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
            // Scrolling DOWN -> hide navbar
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
            // Scrolling UP -> reveal navbar
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navbar is visible when scrolling up, near top of page, or hovered
  const shouldShowNavbar = isVisible || isHovered;

  // Expanded when hovering navbar or locked via mobile tap
  const isExpanded = isHovered || isLockedExpanded;

  const handleToggleMobile = () => {
    if (isMobile) {
      setIsLockedExpanded((prev) => !prev);
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 select-none ${className}`}>
      {/* 1. Desktop Notch Navbar (visible on md and up: hidden md:flex) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: shouldShowNavbar ? 0 : -100,
        }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="hidden md:flex justify-center w-full pointer-events-none"
      >
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[85px] pointer-events-auto flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] cursor-pointer"
          animate={{
            width: isHovered
              ? "min(1240px, 94vw)"
              : "417px",
          }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 24,
            mass: 0.75,
          }}
          style={{
            transformOrigin: "top center",
          }}
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
              <AnimatePresence>
                {isHovered && (
                  <motion.nav
                    key="left-nav-wing"
                    initial={{ opacity: 0, x: 36, scaleX: 0.7 }}
                    animate={{ opacity: 1, x: 0, scaleX: 1 }}
                    exit={{ opacity: 0, x: 36, scaleX: 0.7, filter: "blur(3px)" }}
                    transition={{
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "right center" }}
                    className="flex items-center gap-6 md:gap-9 text-[13.5px] font-medium tracking-wide whitespace-nowrap pl-4"
                  >
                    {leftLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
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
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>

            {/* Center Logo Anchor */}
            <div className="flex-shrink-0 z-20 flex items-center justify-center px-4">
              <Link
                href="/"
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
              <AnimatePresence>
                {isHovered && (
                  <motion.nav
                    key="right-nav-wing"
                    initial={{ opacity: 0, x: -36, scaleX: 0.7 }}
                    animate={{ opacity: 1, x: 0, scaleX: 1 }}
                    exit={{ opacity: 0, x: -36, scaleX: 0.7, filter: "blur(3px)" }}
                    transition={{
                      duration: 0.22,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "left center" }}
                    className="flex items-center gap-6 md:gap-9 text-[13.5px] font-medium tracking-wide whitespace-nowrap pr-4"
                  >
                    {rightLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
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
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 2. Mobile Floating Navbar Header (visible below md: flex md:hidden) */}
      <div className="flex md:hidden flex-col items-center w-full px-3 pt-3 pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: shouldShowNavbar ? 0 : -80,
          }}
          transition={{ duration: 0.25 }}
          className="w-full h-14 bg-[#181818]/92 backdrop-blur-2xl border border-white/10 rounded-full px-4 flex items-center justify-between shadow-[0_8px_24px_rgba(0,0,0,0.4)] pointer-events-auto"
        >
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
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
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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

        {/* Mobile Dropdown Drawer Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto mt-2 w-full max-w-sm bg-[#181818]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.65)] flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1.5">
                {[
                  { label: "AI Applications", href: "/ai-application-development-services" },
                  { label: "LLM Development", href: "/llm-development-services" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Services Range", href: "#services" },
                  { label: "Case Studies", href: "#projects" },
                  { label: "Our Process", href: "#process" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                        isActive
                          ? "bg-[#ff5e00] text-white shadow-md shadow-orange-500/25"
                          : "bg-white/[0.04] text-white/90 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs opacity-60">→</span>
                    </Link>
                  );
                })}
              </div>

              {/* Direct CTA */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff5e00] to-[#ff7230] text-white font-bold text-center text-sm shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

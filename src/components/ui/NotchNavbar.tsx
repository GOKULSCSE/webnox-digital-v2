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
  { label: "Contact", href: "#contact" },
];

const DEFAULT_RIGHT_LINKS: NavLinkItem[] = [
  { label: "About", href: "#about" },
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

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: shouldShowNavbar ? 0 : -100,
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none select-none ${className}`}
    >
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggleMobile}
        className="relative h-[85px] pointer-events-auto flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)] cursor-pointer"
        animate={{
          width: isExpanded
            ? isMobile
              ? "96vw"
              : "min(1240px, 94vw)"
            : isMobile
            ? "300px"
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
        {/* Unified Continuous Notch Background (Generates seamlessly from mini notch, zero overlapping) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 flex items-start overflow-hidden">
          {/* Left Shoulder Cap: Fixed 83px width, exact mini notch shoulder curve */}
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

          {/* Center Body: Smoothly stretches and expands outward between the shoulders */}
          <div className="flex-1 h-[85px] bg-[#181818] -mx-[0.5px]" />

          {/* Right Shoulder Cap: Fixed 82px width, exact mini notch shoulder curve */}
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
        <div className="relative w-full h-full flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24">
          {/* Left Navigation Wing: Expands outward to the left FROM the logo, shrinks back UP TO the logo */}
          <div className="flex-1 flex justify-end items-center overflow-hidden h-full pr-3 sm:pr-5 md:pr-7">
            <AnimatePresence>
              {isExpanded && (
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
                  className="flex items-center gap-5 sm:gap-7 md:gap-9 text-[13px] sm:text-[14px] font-medium tracking-wide whitespace-nowrap pl-4"
                >
                  {leftLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => e.stopPropagation()}
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

          {/* Center Logo Anchor: Permanently anchored at center, zero mingling */}
          <div className="flex-shrink-0 z-20 flex items-center justify-center px-3 sm:px-5">
            <Link
              href="/"
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
              aria-label="Webnox Home"
            >
              <Image
                src={logoSrc}
                alt="Webnox Logo"
                width={160}
                height={32}
                className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,94,0,0.18)]"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation Wing: Expands outward to the right FROM the logo, shrinks back UP TO the logo */}
          <div className="flex-1 flex justify-start items-center overflow-hidden h-full pl-3 sm:pl-5 md:pl-7">
            <AnimatePresence>
              {isExpanded && (
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
                  className="flex items-center gap-5 sm:gap-7 md:gap-9 text-[13px] sm:text-[14px] font-medium tracking-wide whitespace-nowrap pr-4"
                >
                  {rightLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => e.stopPropagation()}
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
    </motion.header>
  );
}

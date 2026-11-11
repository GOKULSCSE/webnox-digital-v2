"use client";

import React, { useState, useRef, useEffect } from "react";
import FolderFloat from "@/components/ui/FolderFloat";
import { cn } from "@/lib/utils";

export interface MobileTechCategory {
  title: string;
  technologies: string[];
  shortTitle?: string;
  badge?: string;
}

interface MobileTechStackProps {
  categories: MobileTechCategory[];
  sectionTitle?: string;
  className?: string;
}

export default function MobileTechStack({
  categories,
  className = "",
}: MobileTechStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Auto-scroll active category tab into view
  useEffect(() => {
    if (tabListRef.current) {
      const activeTab = tabListRef.current.children[activeIndex] as HTMLElement;
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  const scrollToCategory = (index: number) => {
    setActiveIndex(index);
    if (scrollTrackRef.current) {
      isProgrammaticScroll.current = true;
      const slideWidth = scrollTrackRef.current.clientWidth;
      scrollTrackRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400);
    }
  };

  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollTrackRef.current) return;
    const scrollLeft = scrollTrackRef.current.scrollLeft;
    const slideWidth = scrollTrackRef.current.clientWidth;
    if (slideWidth > 0) {
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (
        newIndex >= 0 &&
        newIndex < categories.length &&
        newIndex !== activeIndex
      ) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <div className={cn("w-full block md:hidden select-none", className)}>
      {/* 1. Horizontal Scrollable Category Tabs */}
      <div
        ref={tabListRef}
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map((cat, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCategory(idx)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all border",
                isSelected
                  ? "bg-[#ff5e00] border-[#ff5e00] text-white shadow-xs shadow-orange-500/25 scale-[1.02]"
                  : "bg-white/85 border-neutral-200 text-neutral-700 hover:bg-white"
              )}
            >
              <span className="opacity-70 mr-1.5 font-mono text-[10px]">
                0{idx + 1}
              </span>
              {cat.shortTitle || cat.title}
            </button>
          );
        })}
      </div>

      {/* 2. Pure Folder Horizontal Scroll Container (No outer cards, sits directly on page background) */}
      <div
        ref={scrollTrackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full pt-32 sm:pt-36 pb-8"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="w-full shrink-0 snap-center flex justify-center items-end"
          >
            <FolderFloat
              items={cat.technologies}
              label={cat.title}
              trigger="hover"
              physics={false}
              drift={0.3}
              folderColor="#D34B16"
              frontColor="#FF6A2F"
              paperColor="#FFFFFF"
              itemColor="#FFFFFF"
              itemTextColor="#12141A"
              labelColor="#FFFFFF"
              width={240}
              height={155}
              radius={18}
              spread={140}
              lift={16}
              tilt={4}
              rowHeight={36}
              openDuration={420}
              stagger={35}
              className="mx-auto"
            />
          </div>
        ))}
      </div>

      {/* 3. Subtle Pagination Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-1 pb-2">
        {categories.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToCategory(idx)}
            aria-label={`Go to stack ${idx + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              idx === activeIndex
                ? "w-6 bg-[#ff5e00]"
                : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}

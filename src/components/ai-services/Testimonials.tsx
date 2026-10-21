"use client";

import React, { useState, useEffect, useCallback } from "react";
import { defaultWebnoxReviews, type Review } from "@/components/ui/marquee-03";

const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = defaultWebnoxReviews;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  // Subtle auto-advance when user is not hovering
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section
      className="relative w-full py-24 sm:py-32 md:py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(96.82deg, #FF7230 8.11%, #FF6A2F 28.74%, #FF7631 43.14%, #FF8935 63.76%, #FF532B 87.55%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with original title preserved */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          {/* What clients say about us? pill tag */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-white/95 text-xs sm:text-sm font-medium tracking-wide">
              What clients say about us?
            </span>
          </div>

          {/* Original Existing Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white text-center leading-[1.2] tracking-tight">
            Trusted by Businesses. Proven by Results.
          </h2>
        </div>
      </div>

      {/* Horizontal Carousel of Testimonial Cards */}
      <div
        className="relative w-full z-10 overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={
          {
            "--card-w": "min(86vw, 420px)",
            "--gap": "24px",
          } as React.CSSProperties
        }
      >
        <div
          className="flex items-center will-change-transform"
          style={{
            gap: "var(--gap)",
            transform: `translateX(calc(50% - (${activeIndex} + 0.5) * (var(--card-w) + var(--gap))))`,
            transition: "transform 650ms cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {reviews.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{ width: "var(--card-w)" }}
                className={`flex-shrink-0 cursor-pointer select-none rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 h-[340px] sm:h-[350px] flex flex-col justify-between transition-all duration-500 ease-out ${
                  isActive
                    ? "bg-white text-neutral-900 z-20"
                    : "bg-white/[0.08] backdrop-blur-md border border-white/35 text-white opacity-75 hover:opacity-100 z-10"
                }`}
              >
                {/* Review Body */}
                <div className="flex flex-col gap-3">
                  {/* 5-star rating */}
                  <div
                    className={`flex items-center gap-1 text-xs ${
                      isActive ? "text-amber-500" : "text-amber-300"
                    }`}
                  >
                    {"★".repeat(item.stars || 5)}
                  </div>
                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed font-normal ${
                      isActive ? "text-neutral-800" : "text-white/95"
                    }`}
                  >
                    &ldquo;{item.body}&rdquo;
                  </p>
                </div>

                {/* Divider Line & Author Footer */}
                <div
                  className={`pt-5 mt-6 border-t flex items-center justify-between gap-3.5 ${
                    isActive ? "border-neutral-100" : "border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar Profile or Initials */}
                    {item.profile ? (
                      <img
                        src={item.profile}
                        alt={item.name}
                        className={`w-10 h-10 rounded-full object-cover flex-shrink-0 ${
                          isActive
                            ? "border border-neutral-200"
                            : "border border-white/30"
                        }`}
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive
                            ? "bg-neutral-100 text-neutral-800"
                            : "bg-white/20 text-white border border-white/30"
                        }`}
                      >
                        {getInitials(item.name)}
                      </div>
                    )}

                    {/* Name and Meta */}
                    <div className="flex flex-col text-left">
                      <span
                        className={`text-sm font-bold tracking-tight ${
                          isActive ? "text-neutral-900" : "text-white"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-xs font-normal mt-0.5 ${
                          isActive ? "text-neutral-500" : "text-white/75"
                        }`}
                      >
                        {item.meta || "Verified Client"}
                      </span>
                    </div>
                  </div>

                  {/* External Google Review link if present */}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors flex items-center gap-1 ${
                        isActive
                          ? "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                          : "bg-white/15 text-white hover:bg-white/25"
                      }`}
                    >
                      <span>Google</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Logo matching Vector (1).svg in pure white */}
      <div className="relative z-10 flex justify-center mt-12 sm:mt-16">
        <div className="w-16 sm:w-20 h-auto text-white opacity-95 hover:opacity-100 transition-transform duration-300 hover:scale-105">
          <svg
            viewBox="0 0 79 35"
            fill="none"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.17075 19.3681C5.82808 24.926 10.2804 29.5068 15.8998 30.0698C22.8229 30.7641 27.5718 25.8744 32.0515 21.4303C36.4355 17.0818 40.6583 12.5516 45.0942 8.24681C49.7461 3.73435 53.7625 0.132027 60.6692 0.00356829C70.1615 -0.174088 77.2568 6.59051 78.208 15.9161C79.5089 28.6732 66.9418 37.9878 54.9555 34.1122C51.155 32.8836 48.3043 30.3992 45.5821 27.5922C43.7235 25.6763 41.8595 23.3175 39.7659 21.6845C39.6361 21.5833 39.1905 21.2225 39.0717 21.2143C38.9159 21.2048 38.6275 21.4918 38.4922 21.612C36.5694 23.3285 34.8216 25.2745 32.9329 27.0346C27.1291 32.4395 20.9466 36.6349 12.5872 34.2611C1.4878 31.1084 -3.77628 16.9424 3.04845 7.44326C9.25411 -1.19356 22.7109 -2.87173 29.9907 5.37289C34.9432 10.9827 33.4851 19.1686 25.1721 19.3681L5.17212 19.3654L5.17075 19.3681ZM5.24045 14.8748H25.4468C26.3897 14.8748 27.1209 13.7747 27.2657 12.9397C27.7673 10.0521 25.4741 7.3271 23.0607 6.09308C16.4396 2.71078 7.57458 6.39509 5.4837 13.541C5.40171 13.8211 5.19262 14.5235 5.18989 14.7777C5.18989 14.8324 5.19535 14.8379 5.24045 14.8734V14.8748ZM59.8465 4.88091C56.1799 5.12143 53.2746 7.11665 50.633 9.47674C47.8738 11.9407 45.362 14.693 42.8462 17.3975C42.7573 17.5164 42.8024 17.6653 42.8954 17.7706C46.2722 20.8918 49.0641 25.0996 52.7976 27.7931C62.9404 35.1071 77.0546 25.3674 72.6951 13.2294C70.7095 7.70291 65.7269 4.4969 59.8479 4.88091H59.8465Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

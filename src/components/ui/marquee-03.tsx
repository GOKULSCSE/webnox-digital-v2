"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-03-utils/marquee";

export type Review = {
  name: string;
  username?: string;
  meta?: string;
  time?: string;
  body: string;
  profile?: string;
  stars?: number;
  url?: string;
};

export const defaultWebnoxReviews: Review[] = [
  {
    name: "Chocolettehub",
    meta: "1 review • 0 photos",
    time: "13 weeks ago",
    stars: 5,
    url: "https://www.google.com/maps/contrib/115048807378843678455/reviews?hl=en-GB",
    body: "one e-commerce website and android application we did from webnox technologies. Very good quality and on time. I really liked there service and respond.",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Myvizhi R",
    meta: "2 reviews • 0 photos",
    time: "36 weeks ago",
    stars: 5,
    url: "https://www.google.com/maps/contrib/100677884866527412717/reviews?hl=en-GB",
    body: "Webnox did an exceptional job with my recent water meter app development project. I really appreciated how they kept me updated throughout every step of the process. I couldn’t be happier with the outcome. Thank you team!",
    profile:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Subash K",
    meta: "1 review • 0 photos",
    time: "26 Sept 2025",
    stars: 5,
    url: "https://www.google.com/maps/contrib/113859263798004639471/reviews?hl=en-GB",
    body: "I used Webnox for Mobile App development service. Their team spirit, problem solving ability and dedication are truly appreciated and the final mobile app they developed is very responsive, cost effective, really met my expectations and would love to work with them again.",
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "senthil Kumar",
    meta: "4 reviews • 0 photos",
    time: "14 Sept 2025",
    stars: 5,
    url: "https://www.google.com/maps/contrib/107992016297297852764/reviews?hl=en-GB",
    body: "Webnox is the best app development company that delivers innovative solutions in Coimbatore. I am extremely satisfied with their work as they delivered my mobile app on time and it is performing well. They deliver what they promise. MUST Recommend everybody to try Webnox Technologies in Coimbatore if you are looking for a great and affordable mobile app for your business.",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Udhaya0991 Kumar",
    meta: "2 reviews • 0 photos",
    time: "15 Aug 2025",
    stars: 5,
    url: "https://www.google.com/maps/contrib/105753538256601306293/reviews?hl=en-GB",
    body: "Mr.Rathina and their mobile app development team were very supportive and understanding of what I wanted to create. They completely understand my business and produced an app that we are extremely happy with. I would recommend these guys if you are looking for a team that wants you to succeed and build a mobile app that matches your imagination. Big thanks to Webnox!",
    profile:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Ashok Kumar V",
    meta: "5 reviews • 0 photos",
    time: "27 Jun 2025",
    stars: 5,
    url: "https://www.google.com/maps/contrib/105304244171521020918/reviews?hl=en-GB",
    body: "Our mobile app development process was excellent from the first consultation to the launch. They made me feel involved at every stage and were always available to answer my inquiries. They made great software, and they even included elements I didn't think of. My app looks great and functions well. I am very happy that I chose Webnox for my mobile app development service",
    profile:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Mukesh Kumar Mk",
    meta: "1 review • 2 photos",
    time: "27 Jun 2025",
    stars: 5,
    url: "https://www.google.com/maps/contrib/104420720757808599763/reviews?hl=en-GB",
    body: "One of the finest mobile app developers still going strong after 14 years, building fantastic apps. Innovative company with world-class quality, I highly recommend Webnox for quality and budget",
    profile:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
  },
];

export const ReviewCard = ({ profile, name, username, meta, time, body, stars = 5, url }: Review) => {
  return (
    <Card className="relative w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl border border-neutral-200/90 hover:border-orange-500/40 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.09)] transition-all duration-300 p-6 my-2">
      <CardContent className="p-0 flex flex-col gap-3">
        {/* Header with avatar, author, and external link */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {profile ? (
              <img
                className="rounded-full object-cover w-10 h-10 border border-neutral-200/60 shadow-sm"
                width="40"
                height="40"
                alt={name}
                src={profile}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff7230] to-[#ff532b] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex flex-col">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-neutral-900 hover:text-[#ff5e00] transition-colors inline-flex items-center gap-1 group/link"
                >
                  <span>{name}</span>
                  <span className="text-[10px] text-neutral-400 group-hover/link:text-[#ff5e00]">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="text-sm font-bold text-neutral-900">{name}</p>
              )}
              <p className="text-xs text-neutral-500 font-medium">
                {meta || username || "Verified Client"}
              </p>
            </div>
          </div>
          {time && (
            <span className="text-[11px] text-neutral-400 font-medium whitespace-nowrap bg-[#fcf8f2] px-2 py-0.5 rounded-full border border-neutral-200/50">
              {time}
            </span>
          )}
        </div>

        {/* 5-star rating */}
        <div className="flex items-center gap-1 text-amber-500 text-xs">
          {"★".repeat(stars)}
        </div>

        {/* Review body */}
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
          &ldquo;{body}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
};

interface VerticalMarqueeProps {
  items?: Review[];
  className?: string;
  heightClass?: string;
}

export const VerticalMarqueeDemo = ({
  items = defaultWebnoxReviews,
  className = "",
  heightClass = "h-[620px]",
}: VerticalMarqueeProps) => {
  return (
    <div
      className={`relative flex w-full flex-row items-center justify-center overflow-hidden bg-transparent select-none ${heightClass} ${className}`}
    >
      <div className="flex flex-row items-center justify-center w-full gap-5 px-4 h-full">
        {/* Column 1: Forward scroll */}
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:32s] h-full sm:flex hidden flex-1"
        >
          {items
            .filter((_, i) => i % 3 === 0)
            .map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
        </Marquee>

        {/* Column 2: Reverse scroll */}
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:28s] h-full hidden sm:flex flex-1"
        >
          {items
            .filter((_, i) => i % 3 === 1)
            .map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
        </Marquee>

        {/* Column 3: Forward scroll */}
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:36s] h-full hidden lg:flex flex-1"
        >
          {items
            .filter((_, i) => i % 3 === 2)
            .map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
        </Marquee>

        {/* Mobile View: Single continuous stream */}
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:26s] h-full sm:hidden flex flex-1"
        >
          {items.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Top and Bottom Gradient Fade Masks synchronized with Webnox theme background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fcf8f2] via-[#fcf8f2]/80 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fcf8f2] via-[#fcf8f2]/80 to-transparent z-10"
        aria-hidden="true"
      />
    </div>
  );
};

export default VerticalMarqueeDemo;

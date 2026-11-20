"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkle,
  FileText,
  MousePointer,
  BarChart3,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { PILLARS, PillarData } from "@/lib/data";
import { sparkSignalLottie } from "@/lib/lottie-data";
import LottieAnimation from "../animation/lottie-animation";

interface HeroExactProps {
  onSelectPillar: (pillar: PillarData) => void;
  onOpenBooking: () => void;
}

const HEADLINE_LINES = [
  {
    id: "line-1",
    parts: [
      {
        text: "NEEDS MARKETING THAT",
        className: "text-black font-semibold",
      },
    ],
  },
  {
    id: "line-2",
    parts: [{ text: "CONNECTS?", className: "text-[#989ea7] font-semibold" }],
  },
];

const BRANCH_X = [100, 300, 500, 700, 900];

export default function HeroExact({ onSelectPillar }: HeroExactProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getPillarIcon = (type: string) => {
    switch (type) {
      case "brand":
        return <Sparkle className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />;
      case "content":
        return (
          <FileText className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
        );
      case "digital":
        return (
          <MousePointer className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
        );
      case "campaigns":
        return (
          <BarChart3 className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
        );
      case "offline":
        return (
          <Megaphone className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />
        );
      default:
        return <Sparkle className="w-4.5 h-4.5 text-white" strokeWidth={2.2} />;
    }
  };

  return (
    <section
      id="hero-exact-section"
      className="relative pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-16 flex flex-col justify-between bg-[#f4f1ea]"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between">
        <div className="pt-4 sm:pt-8 text-center max-w-5xl mx-auto w-full">
          <h1
            id="hero-main-title"
            className="font-headline text-[2.65rem] sm:text-[4.25rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.25rem] leading-[0.92] uppercase tracking-[-0.015em] text-center"
          >
            {HEADLINE_LINES.map((line, lineIdx) => (
              <span key={line.id} className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.72,
                    delay: lineIdx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {line.parts.map((part, pIdx) => (
                    <span key={pIdx} className={part.className}>
                      {part.text}
                    </span>
                  ))}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="relative flex flex-col items-center justify-center mt-8 sm:mt-10">
            <div className="w-px h-14 sm:h-20 bg-[#ded8cb] relative overflow-hidden">
              <motion.div
                animate={{
                  y: ["-100%", "220%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  ease: "easeInOut",
                }}
                className="w-full h-8 bg-[#0b1320]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.36,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 flex items-center gap-2.5"
            >
              <div className="w-4 h-4 shrink-0" aria-hidden="true">
                <LottieAnimation
                  animationData={sparkSignalLottie}
                  className="w-full h-full"
                />
              </div>
              <p
                id="hero-subtitle"
                className="text-[#0b1320] text-sm sm:text-base md:text-lg font-semibold tracking-tight"
              >
                We connect the pieces.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:block w-full mt-5" aria-hidden="true">
          <svg
            viewBox="0 0 1000 56"
            preserveAspectRatio="none"
            className="w-full h-14 overflow-visible"
          >
            <line
              x1="500"
              y1="0"
              x2="500"
              y2="24"
              stroke="#ded8cb"
              strokeWidth="1.25"
            />
            <line
              x1="100"
              y1="24"
              x2="900"
              y2="24"
              stroke="#ded8cb"
              strokeWidth="1.25"
            />
            {BRANCH_X.map((x, idx) => {
              const isActive = hoveredIndex === idx;
              const pillarColor = PILLARS[idx].color;
              return (
                <g key={x}>
                  <line
                    x1={x}
                    y1="24"
                    x2={x}
                    y2="56"
                    stroke={isActive ? pillarColor : "#ded8cb"}
                    strokeWidth={isActive ? "2" : "1.25"}
                    className="transition-colors duration-200"
                  />
                  {isActive && (
                    <line
                      x1={Math.min(x, 500)}
                      y1="24"
                      x2={Math.max(x, 500)}
                      y2="24"
                      stroke={pillarColor}
                      strokeWidth="2"
                    />
                  )}
                  <circle
                    cx={x}
                    cy="24"
                    r={isActive ? "3.5" : "2"}
                    fill={isActive ? pillarColor : "#9aa1aa"}
                    className="transition-all duration-200"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div id="pillars" className="mt-8 lg:mt-0 border-y border-[#ded8cb]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[#ded8cb]">
            {PILLARS.map((pillar, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.button
                  type="button"
                  key={pillar.id}
                  id={`pillar-card-${pillar.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + index * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onFocus={() => setHoveredIndex(index)}
                  onBlur={() => setHoveredIndex(null)}
                  onClick={() => onSelectPillar(pillar)}
                  className="group relative text-left p-5 sm:p-6 cursor-pointer transition-colors duration-200 hover:bg-[#ece7db]/70 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0b1320] flex flex-col justify-between min-h-47 sm:border-b sm:border-r lg:border-b-0 lg:border-r-0 border-[#ded8cb] last:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 left-0 right-0 h-0.5 origin-left transition-transform duration-200 ease-out ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ backgroundColor: pillar.color }}
                  />

                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-0.5"
                        style={{ backgroundColor: pillar.color }}
                      >
                        {getPillarIcon(pillar.iconType)}
                      </div>

                      <span className="font-mono-num text-xs font-medium text-[#767d87] tracking-wider">
                        {pillar.number}
                      </span>
                    </div>

                    <h2 className="font-headline text-2xl sm:text-[26px] font-bold text-[#0b1320] tracking-tight mb-1.5">
                      {pillar.name}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-[#0b1320]/75 font-medium leading-relaxed">
                      {pillar.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#ded8cb]/60 flex items-center justify-between text-[11px] font-semibold text-[#767d87] group-hover:text-[#0b1320] transition-colors">
                    <span>Inspect Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

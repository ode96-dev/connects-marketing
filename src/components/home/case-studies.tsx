"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Layers } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

const CASE_IMAGES: Record<string, string> = {
  vanguard: "/assets/images/case_vanguard_health_1795201393005.jpg",
  aethel: "/assets/images/case_aethel_living_1795201392794.jpg",
  kestrel: "/assets/images/case_kestrel_logistics_1795201392743.jpg",
};

export default function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeCase = CASE_STUDIES[activeIndex];
  const activeImage = CASE_IMAGES[activeCase.id];
  const isImageFailed = failedImages[activeCase.id];

  return (
    <section
      id="cases"
      className="py-20 lg:py-28 bg-[#f4f1ea] border-b border-[#ded8cb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono-num text-xs font-medium uppercase tracking-widest text-[#767d87] mb-3">
              Selected Client Outcomes
            </p>
            <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#0b1320] font-bold leading-[1.02] text-balance">
              Connected marketing in action
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0b1320]/75 max-w-md leading-relaxed">
            When Brand, Content, Digital, Campaigns, and Offline share one
            strategy, acquisition cost stabilizes and pipeline compounds.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 border border-[#ded8cb] divide-y md:divide-y-0 md:divide-x divide-[#ded8cb] mb-8"
          role="tablist"
          aria-label="Client case studies"
        >
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                type="button"
                key={cs.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(idx)}
                className={`p-5 text-left transition-colors duration-150 cursor-pointer relative focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0b1320] ${
                  isActive
                    ? "bg-[#0b1320] text-[#f4f1ea]"
                    : "bg-[#f4f1ea] text-[#0b1320] hover:bg-[#ece7db]/70"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`font-mono-num text-xs ${
                      isActive ? "text-[#ff7a00]" : "text-[#767d87]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[11px] font-medium ${
                      isActive ? "text-[#f4f1ea]/70" : "text-[#767d87]"
                    }`}
                  >
                    {cs.timeframe}
                  </span>
                </div>
                <div className="font-headline text-xl font-bold tracking-tight">
                  {cs.title}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    isActive ? "text-[#f4f1ea]/75" : "text-[#767d87]"
                  }`}
                >
                  {cs.category}
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="border border-[#ded8cb] bg-[#f4f1ea] grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-6 relative bg-[#ece7db] border-b lg:border-b-0 lg:border-r border-[#ded8cb] min-h-70 sm:min-h-90 lg:min-h-full overflow-hidden">
              {activeImage && !isImageFailed ? (
                <Image
                  src={activeImage}
                  alt={activeCase.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedImages((prev) => ({
                      ...prev,
                      [activeCase.id]: true,
                    }))
                  }
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-linear-to-br from-[#ece7db] to-[#ded8cb]">
                  <Layers className="w-8 h-8 text-[#0b1320]/40 mb-3" />
                  <span className="font-headline text-xl font-bold text-[#0b1320]">
                    {activeCase.title}
                  </span>
                  <span className="text-xs text-[#767d87] mt-1">
                    {activeCase.category}
                  </span>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0b1320]/85 via-[#0b1320]/40 to-transparent p-5 sm:p-6">
                <p className="text-xs text-[#f4f1ea]/90 font-medium">
                  {activeCase.category} · {activeCase.timeframe}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div>
                  <p className="text-xs text-[#767d87] font-medium mb-2">
                    {activeCase.connectedPillars.join(" · ")}
                  </p>
                  <h3 className="font-headline text-3xl sm:text-4xl font-bold text-[#0b1320]">
                    {activeCase.title}
                  </h3>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#ded8cb]">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#767d87] mb-1">
                      The Disconnect
                    </h4>
                    <p className="text-sm text-[#0b1320]/80 leading-relaxed">
                      {activeCase.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#767d87] mb-1">
                      The Connected Fix
                    </h4>
                    <p className="text-sm text-[#0b1320]/85 leading-relaxed">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                <blockquote className="pt-4 border-t border-[#ded8cb]">
                  <p className="text-sm italic text-[#0b1320]/85 leading-relaxed">
                    &ldquo;{activeCase.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-[#767d87]">
                    <span className="font-semibold text-[#0b1320]">
                      {activeCase.quoteAuthor}
                    </span>
                    <span aria-hidden="true"> · </span>
                    <span>{activeCase.quoteRole}</span>
                  </footer>
                </blockquote>
              </div>

              <div className="grid grid-cols-3 border-t border-[#ded8cb] divide-x divide-[#ded8cb] bg-[#ece7db]/40">
                {activeCase.results.map((res, rIdx) => (
                  <div key={rIdx} className="p-4 sm:p-5">
                    <span className="font-mono-num text-xl sm:text-2xl font-bold text-[#0b1320] block">
                      {res.value}
                    </span>
                    <span className="text-xs font-semibold text-[#0b1320]/85 block mt-1 leading-snug">
                      {res.label}
                    </span>
                    <span className="text-[11px] text-[#767d87] block mt-0.5">
                      {res.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 p-6 sm:p-8 bg-[#0b1320] text-[#f4f1ea] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#f4f1ea] text-balance">
              Stop funding isolated channels that compete against each other.
            </h3>
            <p className="text-xs sm:text-sm text-[#f4f1ea]/75 mt-1.5 max-w-xl">
              Book a 30-minute diagnostic call to map where your five marketing
              pillars are disconnected.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full md:w-auto px-5 py-3 bg-[#ff7a00] text-[#0b1320] rounded-sm text-xs sm:text-sm font-bold hover:bg-[#ff8f26] transition-colors inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span>Schedule Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

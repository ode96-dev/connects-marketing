"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkle,
  FileText,
  MousePointer,
  BarChart3,
  Megaphone,
  Check,
  ArrowRight,
} from "lucide-react";
import { PillarData } from "@/lib/data";

interface PillarModalProps {
  pillar: PillarData | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function PillarModal({
  pillar,
  onClose,
  onOpenBooking,
}: PillarModalProps) {
  useEffect(() => {
    if (!pillar) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [pillar, onClose]);

  const getPillarIcon = (type: string) => {
    switch (type) {
      case "brand":
        return <Sparkle className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case "content":
        return <FileText className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case "digital":
        return (
          <MousePointer className="w-5 h-5 text-white" strokeWidth={2.2} />
        );
      case "campaigns":
        return <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case "offline":
        return <Megaphone className="w-5 h-5 text-white" strokeWidth={2.2} />;
      default:
        return <Sparkle className="w-5 h-5 text-white" strokeWidth={2.2} />;
    }
  };

  return (
    <AnimatePresence>
      {pillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pillar-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0b1320]/65 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#f4f1ea] border border-[#ded8cb] shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            <div
              className="h-0.75 w-full"
              style={{ backgroundColor: pillar.color }}
            />

            <div className="p-6 sm:p-8 border-b border-[#ded8cb] flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: pillar.color }}
                >
                  {getPillarIcon(pillar.iconType)}
                </div>
                <div>
                  <span className="font-mono-num text-xs text-[#767d87] block">
                    Pillar {pillar.number}
                  </span>
                  <h2
                    id="pillar-modal-title"
                    className="font-headline text-3xl font-bold text-[#0b1320] tracking-tight"
                  >
                    {pillar.name}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 border border-[#ded8cb] bg-[#ece7db] text-[#0b1320] flex items-center justify-center hover:bg-[#ded8cb] transition-colors cursor-pointer shrink-0"
                aria-label="Close pillar details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-base sm:text-lg font-semibold text-[#0b1320] mb-2">
                  {pillar.tagline}
                </p>
                <p className="text-sm text-[#0b1320]/80 leading-relaxed">
                  {pillar.deepDive.overview}
                </p>
              </div>

              <div className="border-y border-[#ded8cb] py-4 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono-num text-[11px] uppercase tracking-wider text-[#767d87] block">
                    Observed Connected Impact
                  </span>
                  <span className="text-sm font-semibold text-[#0b1320]">
                    {pillar.keyMetricLabel}
                  </span>
                </div>
                <span
                  className="font-mono-num text-3xl sm:text-4xl font-bold shrink-0"
                  style={{ color: pillar.color }}
                >
                  {pillar.keyMetric}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#ded8cb] divide-y sm:divide-y-0 sm:divide-x divide-[#ded8cb]">
                <div className="p-4 bg-[#ece7db]/40">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#b91c1c] block mb-1.5">
                    When Siloed
                  </span>
                  <p className="text-xs text-[#0b1320]/80 leading-relaxed">
                    {pillar.disconnectSymptom}
                  </p>
                </div>
                <div className="p-4 bg-[#f4f1ea]">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4d7c0f] block mb-1.5">
                    When Connected
                  </span>
                  <p className="text-xs text-[#0b1320]/85 leading-relaxed">
                    {pillar.connectedAdvantage}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] mb-3">
                  Core Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {pillar.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm font-medium text-[#0b1320] py-1"
                    >
                      <Check className="w-4 h-4 text-[#0b1320] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-5 border-t border-[#ded8cb] bg-[#ece7db]/35 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-[#767d87] hover:text-[#0b1320] transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0b1320] text-[#f4f1ea] rounded-sm text-xs font-semibold hover:bg-[#1a273a] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Scope {pillar.name} Strategy</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ff7a00]" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

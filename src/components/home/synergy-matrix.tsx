"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PILLARS, PillarData } from "@/lib/data";
import { connectingNodesLottie } from "@/lib/lottie-data";
import { NODE_POSITIONS } from "@/lib/node-positions";
import LottieAnimation from "../animation/lottie-animation";

interface SynergyMatrixProps {
  onSelectPillar: (pillar: PillarData) => void;
  onOpenBooking: () => void;
}

export default function SynergyMatrix({
  onSelectPillar,
  onOpenBooking,
}: SynergyMatrixProps) {
  const [selectedPillars, setSelectedPillars] = useState<string[]>([
    "brand",
    "content",
    "digital",
    "campaigns",
    "offline",
  ]);

  const togglePillar = (id: string) => {
    if (selectedPillars.includes(id)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter((p) => p !== id));
      }
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  const setPreset = (preset: "all" | "digital_only" | "brand_content") => {
    if (preset === "all") {
      setSelectedPillars([
        "brand",
        "content",
        "digital",
        "campaigns",
        "offline",
      ]);
    } else if (preset === "digital_only") {
      setSelectedPillars(["digital", "campaigns"]);
    } else {
      setSelectedPillars(["brand", "content", "digital"]);
    }
  };

  const count = selectedPillars.length;
  const multiplier = (
    count * 0.8 +
    (count >= 5 ? 0.8 : count >= 3 ? 0.4 : 0)
  ).toFixed(1);

  const getSeamDiagnosis = () => {
    const hasBrand = selectedPillars.includes("brand");
    const hasContent = selectedPillars.includes("content");
    const hasDigital = selectedPillars.includes("digital");
    const hasCampaigns = selectedPillars.includes("campaigns");
    const hasOffline = selectedPillars.includes("offline");

    if (count === 5) {
      return {
        headline: "Full five-pillar continuity",
        detail:
          "Brand codes lower paid CPMs, content answers buyer objections before calls, digital pages convert intent, and offline touchpoints feed back into lifecycle retention.",
      };
    }
    if (hasCampaigns && !hasBrand) {
      return {
        headline: "Paid media running without brand memory",
        detail:
          "Without Brand active, ad creative blends into category noise and forces you to outbid competitors purely on price.",
      };
    }
    if (hasCampaigns && !hasDigital) {
      return {
        headline: "Traffic leaking at the landing page seam",
        detail:
          "You are paying to generate clicks without purpose-built Digital conversion environments to match the exact ad promise.",
      };
    }
    if (!hasContent && (hasDigital || hasCampaigns)) {
      return {
        headline: "Conversion friction from missing buyer proof",
        detail:
          "High-consideration buyers need Content depth before booking. Without it, sales teams handle basic objections manually.",
      };
    }
    if (!hasOffline) {
      return {
        headline: "Digital-only ceiling on enterprise trust",
        detail:
          "Digital channels capture immediate demand, while adding Offline touchpoints solidifies high-value relationships and referral velocity.",
      };
    }
    return {
      headline: `${count} of 5 pillars active — partial continuity`,
      detail:
        "Activating the remaining disconnected channels removes handoff leaks between awareness, conversion, and retention.",
    };
  };

  const diagnosis = getSeamDiagnosis();

  const isPresetAll = count === 5;
  const isPresetBrandContent =
    count === 3 &&
    selectedPillars.includes("brand") &&
    selectedPillars.includes("content") &&
    selectedPillars.includes("digital");
  const isPresetSilo =
    count === 2 &&
    selectedPillars.includes("digital") &&
    selectedPillars.includes("campaigns");

  return (
    <section
      id="synergy"
      className="py-20 lg:py-28 bg-[#ece7db] border-b border-[#ded8cb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono-num text-xs font-medium uppercase tracking-widest text-[#767d87] mb-3">
              Connected Architecture
            </p>
            <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#0b1320] font-bold leading-[1.02] text-balance">
              Simulate how five connected pillars compound return
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0b1320]/75 max-w-md leading-relaxed">
            Toggle individual disciplines below to inspect where budget leaks
            when channels operate in isolation—and how continuity stabilizes
            acquisition cost.
          </p>
        </div>

        <div className="bg-[#f4f1ea] border border-[#ded8cb] grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-[#ded8cb]">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="px-5 py-4 border-b border-[#ded8cb] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[#767d87]">
                  Active Channels
                </span>
                <div
                  className="inline-flex items-center p-0.5 bg-[#ece7db] border border-[#ded8cb] rounded-sm"
                  role="group"
                  aria-label="Channel presets"
                >
                  <button
                    type="button"
                    onClick={() => setPreset("all")}
                    className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isPresetAll
                        ? "bg-[#0b1320] text-[#f4f1ea]"
                        : "text-[#0b1320]/70 hover:text-[#0b1320]"
                    }`}
                  >
                    All Five
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreset("brand_content")}
                    className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isPresetBrandContent
                        ? "bg-[#0b1320] text-[#f4f1ea]"
                        : "text-[#0b1320]/70 hover:text-[#0b1320]"
                    }`}
                  >
                    Core Three
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreset("digital_only")}
                    className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isPresetSilo
                        ? "bg-[#0b1320] text-[#f4f1ea]"
                        : "text-[#0b1320]/70 hover:text-[#0b1320]"
                    }`}
                  >
                    Paid Silo
                  </button>
                </div>
              </div>

              <div className="divide-y divide-[#ded8cb]">
                {PILLARS.map((pillar) => {
                  const isSelected = selectedPillars.includes(pillar.id);
                  return (
                    <div
                      key={pillar.id}
                      className={`px-5 py-4 flex items-center justify-between gap-4 transition-colors duration-150 ${
                        isSelected
                          ? "bg-[#f4f1ea]"
                          : "bg-[#ece7db]/45 opacity-65"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => togglePillar(pillar.id)}
                        aria-pressed={isSelected}
                        className="flex-1 flex items-center gap-3.5 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b1320]"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-xs shrink-0 transition-transform duration-150 group-hover:scale-125"
                          style={{
                            backgroundColor: isSelected
                              ? pillar.color
                              : "#c5bfae",
                          }}
                        />
                        <span className="font-mono-num text-xs text-[#767d87] shrink-0">
                          {pillar.number}
                        </span>
                        <div className="min-w-0">
                          <div className="font-headline text-lg font-bold text-[#0b1320] leading-tight">
                            {pillar.name}
                          </div>
                          <div className="text-xs text-[#0b1320]/70 truncate">
                            {pillar.tagline}
                          </div>
                        </div>
                      </button>

                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          type="button"
                          onClick={() => onSelectPillar(pillar)}
                          className="text-[11px] font-medium text-[#767d87] hover:text-[#0b1320] underline underline-offset-4 cursor-pointer whitespace-nowrap"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={() => togglePillar(pillar.id)}
                          aria-label={`Toggle ${pillar.name}`}
                          className={`w-6 h-6 rounded-xs flex items-center justify-center border transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#0b1320] border-[#0b1320] text-[#f4f1ea]"
                              : "bg-transparent border-[#c5bfae] text-transparent hover:border-[#0b1320]"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="px-5 py-4 border-t border-[#ded8cb] bg-[#ece7db]/30 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b1320] hover:text-[#ff7a00] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Map your architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 border-[#ded8cb]">
            <div className="p-6 sm:p-8 flex flex-col items-center justify-center relative">
              <div className="w-full max-w-100 aspect-400/330 relative">
                <svg
                  viewBox="0 0 400 330"
                  className="w-full h-full overflow-visible"
                  aria-hidden="true"
                >
                  {PILLARS.map((pillar, i) => {
                    const nextPillar = PILLARS[(i + 1) % PILLARS.length];
                    const p1 = NODE_POSITIONS[pillar.id];
                    const p2 = NODE_POSITIONS[nextPillar.id];
                    const bothActive =
                      selectedPillars.includes(pillar.id) &&
                      selectedPillars.includes(nextPillar.id);

                    return (
                      <line
                        key={`${pillar.id}-${nextPillar.id}`}
                        x1={p1.x}
                        y1={p1.y}
                        x2={p2.x}
                        y2={p2.y}
                        stroke={bothActive ? "#0b1320" : "#ded8cb"}
                        strokeWidth={bothActive ? "1.5" : "1"}
                        strokeDasharray={bothActive ? undefined : "4 4"}
                        opacity={bothActive ? 0.35 : 0.7}
                        className="transition-all duration-300"
                      />
                    );
                  })}

                  {PILLARS.map((pillar) => {
                    const pos = NODE_POSITIONS[pillar.id];
                    const active = selectedPillars.includes(pillar.id);

                    return (
                      <line
                        key={`spoke-${pillar.id}`}
                        x1="200"
                        y1="175"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={active ? pillar.color : "#ded8cb"}
                        strokeWidth={active ? "2" : "1"}
                        strokeDasharray={active ? undefined : "4 4"}
                        opacity={active ? 0.85 : 0.6}
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>

                <div className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 pointer-events-none flex items-center justify-center">
                  <LottieAnimation
                    animationData={connectingNodesLottie}
                    className="w-full h-full opacity-90"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-mono-num text-2xl sm:text-3xl font-bold text-[#0b1320] bg-[#f4f1ea]/85 px-2 rounded-xs">
                      {multiplier}x
                    </span>
                  </div>
                </div>

                {PILLARS.map((pillar) => {
                  const pos = NODE_POSITIONS[pillar.id];
                  const active = selectedPillars.includes(pillar.id);
                  const leftPct = (pos.x / 400) * 100;
                  const topPct = (pos.y / 330) * 100;

                  return (
                    <button
                      type="button"
                      key={`node-${pillar.id}`}
                      onClick={() => togglePillar(pillar.id)}
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                      }}
                      className={`-translate-x-1/2 -translate-y-1/2 absolute px-2.5 py-1 rounded-sm border text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        active
                          ? "bg-[#0b1320] text-[#f4f1ea] border-[#0b1320] shadow-xs"
                          : "bg-[#f4f1ea] text-[#767d87] border-[#ded8cb] hover:border-[#0b1320]"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-xs shrink-0"
                        style={{
                          backgroundColor: active ? pillar.color : "#c5bfae",
                        }}
                      />
                      <span>{pillar.name}</span>
                    </button>
                  );
                })}
              </div>

              <motion.div
                key={diagnosis.headline}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full mt-4 pt-5 border-t border-[#ded8cb] text-left"
              >
                <p className="text-sm font-bold text-[#0b1320]">
                  {diagnosis.headline}
                </p>
                <p className="text-xs sm:text-sm text-[#0b1320]/75 mt-1 leading-relaxed">
                  {diagnosis.detail}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-[#ded8cb] divide-y sm:divide-y-0 divide-x divide-[#ded8cb]">
              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium text-[#767d87] block">
                  Active Nodes
                </span>
                <span className="font-mono-num text-xl sm:text-2xl font-semibold text-[#0b1320] mt-1 block">
                  {count} / 5
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium text-[#767d87] block">
                  Est. CAC Delta
                </span>
                <span className="font-mono-num text-xl sm:text-2xl font-semibold text-[#0b1320] mt-1 block">
                  {count >= 5 ? "-48%" : count >= 3 ? "-24%" : "-4%"}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium text-[#767d87] block">
                  Conversion Lift
                </span>
                <span className="font-mono-num text-xl sm:text-2xl font-semibold text-[#0b1320] mt-1 block">
                  {count >= 5 ? "+180%" : count >= 3 ? "+72%" : "+14%"}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-[11px] font-medium text-[#767d87] block">
                  Deal Velocity
                </span>
                <span className="font-mono-num text-xl sm:text-2xl font-semibold text-[#0b1320] mt-1 block">
                  {count >= 5 ? "3.4x" : count >= 3 ? "1.8x" : "1.0x"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

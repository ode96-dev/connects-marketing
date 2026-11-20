"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPARISON_ROWS } from "@/lib/data";

export default function ComparisonSection() {
  const [mobileMode, setMobileMode] = useState<"siloed" | "connected">(
    "connected",
  );

  return (
    <section
      id="disconnect"
      className="py-20 lg:py-28 bg-[#f4f1ea] border-b border-[#ded8cb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-mono-num text-xs font-medium uppercase tracking-widest text-[#767d87] mb-3">
              The Diagnosis
            </p>
            <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#0b1320] font-bold leading-[1.02] text-balance">
              Why more marketing fails. Why connected marketing wins.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#0b1320]/75 max-w-md leading-relaxed">
            Hiring four disconnected vendors produces noise rather than
            momentum. Compare what happens across every discipline when strategy
            shares one spine.
          </p>
        </div>

        <div className="flex md:hidden mb-6">
          <div
            className="inline-flex w-full p-1 bg-[#ece7db] border border-[#ded8cb] rounded-sm"
            role="tablist"
            aria-label="Compare approaches"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mobileMode === "siloed"}
              onClick={() => setMobileMode("siloed")}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                mobileMode === "siloed"
                  ? "bg-[#0b1320] text-[#f4f1ea]"
                  : "text-[#0b1320]/70"
              }`}
            >
              Siloed Vendors
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mobileMode === "connected"}
              onClick={() => setMobileMode("connected")}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xs transition-colors cursor-pointer ${
                mobileMode === "connected"
                  ? "bg-[#0b1320] text-[#f4f1ea]"
                  : "text-[#0b1320]/70"
              }`}
            >
              Connected System
            </button>
          </div>
        </div>

        <div className="hidden md:block border-t border-b border-[#0b1320]">
          <div className="grid grid-cols-12 border-b border-[#ded8cb] bg-[#ece7db]/50">
            <div className="col-span-2 px-4 py-4 font-mono-num text-xs font-semibold uppercase tracking-wider text-[#767d87]">
              Discipline
            </div>
            <div className="col-span-5 px-6 py-4 border-l border-[#ded8cb] text-xs font-semibold uppercase tracking-wider text-[#767d87]">
              Siloed Vendor Model
            </div>
            <div className="col-span-5 px-6 py-4 border-l border-[#ded8cb] text-xs font-semibold uppercase tracking-wider text-[#0b1320]">
              Connected Architecture
            </div>
          </div>

          <div className="divide-y divide-[#ded8cb]">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.pillarNumber}
                className="grid grid-cols-12 transition-colors hover:bg-[#ece7db]/35"
              >
                <div className="col-span-2 px-4 py-6 flex items-start gap-2.5">
                  <span
                    className="w-2 h-2 rounded-xs mt-1.5 shrink-0"
                    style={{ backgroundColor: row.color }}
                  />
                  <div>
                    <span className="font-mono-num text-[11px] text-[#767d87] block">
                      {row.pillarNumber}
                    </span>
                    <span className="font-headline text-lg font-bold text-[#0b1320]">
                      {row.pillarName}
                    </span>
                  </div>
                </div>

                <div className="col-span-5 px-6 py-6 border-l border-[#ded8cb]">
                  <h3 className="text-sm font-semibold text-[#0b1320]/70">
                    {row.siloedTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#767d87] mt-1.5 leading-relaxed">
                    {row.siloedDesc}
                  </p>
                </div>

                <div className="col-span-5 px-6 py-6 border-l border-[#ded8cb]">
                  <h3 className="text-sm font-bold text-[#0b1320]">
                    {row.connectedTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0b1320]/80 mt-1.5 leading-relaxed">
                    {row.connectedDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden border-y border-[#ded8cb] divide-y divide-[#ded8cb]">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileMode}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="divide-y divide-[#ded8cb]"
            >
              {COMPARISON_ROWS.map((row) => (
                <div key={row.pillarNumber} className="py-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-2 h-2 rounded-xs shrink-0"
                      style={{ backgroundColor: row.color }}
                    />
                    <span className="font-mono-num text-xs text-[#767d87]">
                      {row.pillarNumber}
                    </span>
                    <span className="font-headline text-lg font-bold text-[#0b1320]">
                      {row.pillarName}
                    </span>
                  </div>

                  {mobileMode === "siloed" ? (
                    <>
                      <h3 className="text-sm font-semibold text-[#0b1320]/80">
                        {row.siloedTitle}
                      </h3>
                      <p className="text-xs text-[#767d87] mt-1 leading-relaxed">
                        {row.siloedDesc}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-sm font-bold text-[#0b1320]">
                        {row.connectedTitle}
                      </h3>
                      <p className="text-xs text-[#0b1320]/80 mt-1 leading-relaxed">
                        {row.connectedDesc}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

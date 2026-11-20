"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PillarData, PILLARS } from "@/lib/data";
import BookingModal from "../booking-modal/booking-modal";
import PillarModal from "../pillar-modal/pillar-modal";

export default function Footer() {
  const [selectedPillar, setSelectedPillar] = useState<PillarData | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  const handleSelectPillarById = (id: string) => {
    const found = PILLARS.find((p) => p.id === id);
    if (found) {
      setSelectedPillar(found);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <footer className="bg-[#0b1320] text-[#f4f1ea] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1f2c40]">
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <div>
                <span className="font-headline text-2xl sm:text-3xl font-bold tracking-wider uppercase text-[#f4f1ea] block">
                  CONNECTS
                </span>
                <p className="mt-4 text-xs sm:text-sm text-[#f4f1ea]/70 max-w-sm leading-relaxed">
                  Your business does not need more marketing. It needs Brand,
                  Content, Digital, Campaigns, and Offline working as one
                  connected system.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="px-5 py-2.5 bg-[#ff7a00] text-[#0b1320] rounded-sm text-xs font-bold hover:bg-[#ff8f26] transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="md:col-span-4">
              <span className="font-mono-num text-[11px] font-medium uppercase tracking-widest text-[#9aa1aa] block mb-4">
                Five Pillars
              </span>
              <div className="flex flex-col divide-y divide-[#1f2c40] text-xs">
                {PILLARS.map((p) => (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => handleSelectPillarById(p.id)}
                    className="py-2.5 text-left hover:text-[#ff7a00] transition-colors flex items-center justify-between gap-3 group cursor-pointer"
                  >
                    <span className="font-medium text-[#f4f1ea]/90 group-hover:text-[#ff7a00]">
                      <span className="font-mono-num text-[#9aa1aa] mr-2">
                        {p.number}
                      </span>
                      {p.name}
                    </span>
                    <span className="text-[11px] text-[#9aa1aa] group-hover:text-[#f4f1ea] transition-colors truncate">
                      {p.tagline}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between gap-6">
              <div>
                <span className="font-mono-num text-[11px] font-medium uppercase tracking-widest text-[#9aa1aa] block mb-4">
                  Sections
                </span>
                <nav
                  className="flex flex-col gap-2.5 text-xs text-[#f4f1ea]/80"
                  aria-label="Footer navigation"
                >
                  <a
                    href="#hero-exact-section"
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    Manifesto
                  </a>
                  <a
                    href="#pillars"
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    The Five Pillars
                  </a>
                  <a
                    href="#synergy"
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    Connected Architecture
                  </a>
                  <a
                    href="#disconnect"
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    Siloed vs. Connected
                  </a>
                  <a
                    href="#audit"
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    60-Second Diagnostic
                  </a>
                  <a
                    href="#cases"
                    className="hover:text-[#f4f1ea] transition-colors"
                  >
                    Client Outcomes
                  </a>
                </nav>
              </div>

              <div>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-[#9aa1aa] hover:text-[#f4f1ea] transition-colors font-mono-num cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9aa1aa]">
            <div>&copy; {year} Connects Marketing. All rights reserved.</div>
            <div className="flex items-center gap-3 text-xs">
              <a
                href="#hero-exact-section"
                className="hover:text-[#f4f1ea] transition-colors"
              >
                Privacy Policy
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="#hero-exact-section"
                className="hover:text-[#f4f1ea] transition-colors"
              >
                Terms of Engagement
              </a>
            </div>
          </div>
        </div>
      </footer>
      <PillarModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}

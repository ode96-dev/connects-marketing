"use client";

import BookingModal from "@/components/booking-modal/booking-modal";
import HeroExact from "@/components/home/hero-exact";
import PillarModal from "@/components/pillar-modal/pillar-modal";
import { PillarData } from "@/lib/data";
import { MotionConfig } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [selectedPillar, setSelectedPillar] = useState<PillarData | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#f4f1ea] text-[#0b1320] flex flex-col justify-between selection:bg-[#0b1320] selection:text-[#f4f1ea]">
        <main>
          <HeroExact
            onSelectPillar={(pillar) => setSelectedPillar(pillar)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        </main>

        <PillarModal
          pillar={selectedPillar}
          onClose={() => setSelectedPillar(null)}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BookingModal from "../booking-modal/booking-modal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 240,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Pillars", href: "#pillars" },
    { label: "Architecture", href: "#synergy" },
    { label: "Comparison", href: "#disconnect" },
    { label: "Diagnostic", href: "#audit" },
    { label: "Work", href: "#cases" },
  ];

  return (
    <>
      {" "}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          isScrolled
            ? "bg-[#f4f1ea]/92 backdrop-blur-md border-b border-[#ded8cb]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <motion.div
          style={{ scaleX }}
          className="absolute top-0 left-0 right-0 h-0.5 bg-[#0b1320] origin-left pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-8">
          <Link
            href="#"
            id="nav-logo"
            className="font-headline text-xl sm:text-2xl font-bold tracking-wider uppercase text-[#0b1320] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1320]"
          >
            CONNECTS
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#0b1320]/75"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#0b1320] transition-colors duration-150 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1320]"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0b1320] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="nav-cta-btn"
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#0b1320] text-[#f4f1ea] rounded-sm text-xs font-semibold tracking-wide hover:bg-[#1a273a] transition-colors duration-150 whitespace-nowrap shrink-0 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b1320]"
            >
              <span>Schedule Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ff7a00] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-sm border border-[#ded8cb] text-[#0b1320] bg-[#f4f1ea] hover:bg-[#ece7db] transition-colors min-w-10 min-h-10 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#0b1320]"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-[#f4f1ea] border-b border-[#ded8cb] px-4 py-5"
            >
              <nav
                className="flex flex-col divide-y divide-[#ded8cb]"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-base font-semibold text-[#0b1320] hover:text-[#ff7a00] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#0b1320] text-[#f4f1ea] rounded-sm text-sm font-semibold"
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff7a00]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}

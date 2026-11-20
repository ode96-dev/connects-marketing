"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { PILLARS } from "@/lib/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedPillars, setSelectedPillars] = useState<string[]>([
    "brand",
    "digital",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    monthlyBudget: "$10k - $25k / mo",
    notes: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePillar = (id: string) => {
    if (selectedPillars.includes(id)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter((p) => p !== id));
      }
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setEmailError("Please enter a valid work email address.");
      return;
    }
    setEmailError("");
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setEmailError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#0b1320]/65 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#f4f1ea] border border-[#ded8cb] shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 sm:p-8 border-b border-[#ded8cb] flex items-start justify-between gap-4">
              <div>
                <span className="font-mono-num text-xs text-[#767d87] uppercase tracking-wider block mb-1">
                  30-Minute Discovery Call
                </span>
                <h2
                  id="booking-modal-title"
                  className="font-headline text-2xl sm:text-3xl font-bold text-[#0b1320]"
                >
                  Schedule Discovery Call
                </h2>
                <p className="text-xs sm:text-sm text-[#0b1320]/75 mt-1">
                  Identify where your channels are disconnected and review a
                  practical integration plan.
                </p>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-9 h-9 border border-[#ded8cb] bg-[#ece7db] text-[#0b1320] flex items-center justify-center hover:bg-[#ded8cb] transition-colors cursor-pointer shrink-0"
                aria-label="Close booking dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 flex flex-col gap-5"
                noValidate
              >
                <div>
                  <span className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] block mb-2.5">
                    Focus Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PILLARS.map((p) => {
                      const isSelected = selectedPillars.includes(p.id);
                      return (
                        <button
                          type="button"
                          key={p.id}
                          aria-pressed={isSelected}
                          onClick={() => togglePillar(p.id)}
                          className={`px-3 py-1.5 rounded-sm text-xs font-semibold border transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                            isSelected
                              ? "bg-[#0b1320] text-[#f4f1ea] border-[#0b1320]"
                              : "bg-[#ece7db]/60 text-[#0b1320]/75 border-[#ded8cb] hover:border-[#0b1320]"
                          }`}
                        >
                          <span className="font-mono-num opacity-70">
                            {p.number}
                          </span>
                          <span>{p.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] block mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="booking-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 bg-[#f4f1ea] border border-[#c5bfae] text-sm text-[#0b1320] placeholder:text-[#9aa1aa] focus:outline-none focus:border-[#0b1320]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] block mb-1.5"
                    >
                      Work Email *
                    </label>
                    <input
                      id="booking-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (emailError) setEmailError("");
                      }}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2.5 bg-[#f4f1ea] border text-sm text-[#0b1320] placeholder:text-[#9aa1aa] focus:outline-none focus:border-[#0b1320] ${
                        emailError ? "border-[#b91c1c]" : "border-[#c5bfae]"
                      }`}
                    />
                    {emailError && (
                      <p className="text-xs text-[#b91c1c] mt-1">
                        {emailError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-company"
                      className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] block mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      id="booking-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Vanguard Health"
                      className="w-full px-3.5 py-2.5 bg-[#f4f1ea] border border-[#c5bfae] text-sm text-[#0b1320] placeholder:text-[#9aa1aa] focus:outline-none focus:border-[#0b1320]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-budget"
                      className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] block mb-1.5"
                    >
                      Monthly Marketing Spend
                    </label>
                    <select
                      id="booking-budget"
                      value={formData.monthlyBudget}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          monthlyBudget: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#f4f1ea] border border-[#c5bfae] text-sm text-[#0b1320] focus:outline-none focus:border-[#0b1320]"
                    >
                      <option>$5k - $10k / mo</option>
                      <option>$10k - $25k / mo</option>
                      <option>$25k - $50k / mo</option>
                      <option>$50k+ / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="booking-notes"
                    className="font-mono-num text-xs font-medium uppercase tracking-wider text-[#767d87] block mb-1.5"
                  >
                    Primary Bottleneck
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="e.g. Strong paid search volume, but low landing page conversion..."
                    className="w-full px-3.5 py-2.5 bg-[#f4f1ea] border border-[#c5bfae] text-sm text-[#0b1320] placeholder:text-[#9aa1aa] focus:outline-none focus:border-[#0b1320]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full py-3 px-5 bg-[#0b1320] text-[#f4f1ea] rounded-sm text-xs sm:text-sm font-semibold hover:bg-[#1a273a] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Discovery Call</span>
                  <ArrowRight className="w-4 h-4 text-[#ff7a00]" />
                </button>
              </form>
            ) : (
              <div className="p-8 sm:p-10 text-center">
                <div className="w-12 h-12 border border-[#ded8cb] bg-[#ece7db] text-[#4d7c0f] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#0b1320]">
                  Discovery Call Requested
                </h3>
                <p className="mt-2 text-sm text-[#0b1320]/75 max-w-md mx-auto leading-relaxed">
                  Thank you,{" "}
                  <span className="font-semibold text-[#0b1320]">
                    {formData.name || "there"}
                  </span>
                  . We will send calendar availability and a pre-call
                  architecture brief to{" "}
                  <span className="font-mono-num text-[#0b1320]">
                    {formData.email}
                  </span>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 bg-[#0b1320] text-[#f4f1ea] rounded-sm text-xs font-semibold hover:bg-[#1a273a] transition-colors cursor-pointer"
                >
                  Return to Page
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

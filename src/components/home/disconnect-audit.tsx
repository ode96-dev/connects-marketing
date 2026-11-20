"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { DIAGNOSTIC_QUESTIONS } from "@/lib/data";

interface DisconnectAuditProps {
  onOpenBooking: () => void;
}

export default function DisconnectAudit({
  onOpenBooking,
}: DisconnectAuditProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (score: number) => {
    const updated = { ...answers, [currentStep]: score };
    setAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const totalScore = Object.values(answers).reduce(
    (acc, curr) => acc + curr,
    0,
  );
  const maxScore = DIAGNOSTIC_QUESTIONS.length * 2;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const progressRatio = (currentStep + 1) / DIAGNOSTIC_QUESTIONS.length;

  const getAssessmentSummary = () => {
    if (percentage >= 75) {
      return {
        label: "Strong Structural Alignment",
        summary:
          "Your core channels already share strategic continuity. Tightening physical-to-digital handoffs and landing-page experimentation will capture incremental efficiency.",
      };
    }
    if (percentage >= 40) {
      return {
        label: "Moderate Seam Leakage",
        summary:
          "Individual channels are producing activity, but handoffs between ad hooks, editorial proof, and conversion pages are leaking qualified pipeline.",
      };
    }
    return {
      label: "High Channel Fragmentation",
      summary:
        "Your marketing spend is fighting internal friction: paid acquisition drives cold traffic into unaligned pages with no narrative continuity.",
    };
  };

  const outcome = getAssessmentSummary();

  const getScoreLabel = (score: number | undefined) => {
    if (score === 2) return "Aligned";
    if (score === 1) return "Partial";
    return "Disconnected";
  };

  return (
    <section
      id="audit"
      className="py-20 lg:py-28 bg-[#ece7db] border-b border-[#ded8cb]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-mono-num text-xs font-medium uppercase tracking-widest text-[#767d87] mb-3">
              60-Second Self Diagnostic
            </p>
            <h2 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-[#0b1320] font-bold leading-[1.02] text-balance">
              Is your marketing connected or leaking?
            </h2>
          </div>
          <p className="text-sm text-[#0b1320]/75 max-w-sm">
            Four operational questions to pinpoint where handoffs break between
            spend and revenue.
          </p>
        </div>

        <div className="bg-[#f4f1ea] border border-[#ded8cb]">
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-[#ded8cb]">
                  <div className="flex items-center justify-between text-xs font-medium text-[#767d87] mb-3">
                    <span className="font-mono-num">
                      {DIAGNOSTIC_QUESTIONS[currentStep].pillarLabel}
                    </span>
                    <span className="font-mono-num">
                      0{currentStep + 1} / 0{DIAGNOSTIC_QUESTIONS.length}
                    </span>
                  </div>
                  <div className="w-full h-0.5 bg-[#ded8cb] overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{ scaleX: progressRatio }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-[#0b1320] origin-left"
                    />
                  </div>
                </div>

                <div className="px-6 sm:px-8 pt-8 pb-6">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#0b1320] leading-tight text-balance">
                    {DIAGNOSTIC_QUESTIONS[currentStep].question}
                  </h3>
                </div>

                <div className="divide-y divide-[#ded8cb] border-t border-[#ded8cb]">
                  {DIAGNOSTIC_QUESTIONS[currentStep].options.map(
                    (option, idx) => {
                      const isPreviousSelection =
                        answers[currentStep] === option.score;
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => handleSelectOption(option.score)}
                          className={`w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-4 transition-colors duration-150 group cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#0b1320] ${
                            isPreviousSelection
                              ? "bg-[#ece7db]/70"
                              : "hover:bg-[#ece7db]/50"
                          }`}
                        >
                          <div className="flex items-baseline gap-4 min-w-0">
                            <span className="font-mono-num text-xs text-[#767d87] shrink-0">
                              0{idx + 1}
                            </span>
                            <span className="text-sm sm:text-base font-medium text-[#0b1320] leading-relaxed">
                              {option.text}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#767d87] group-hover:text-[#0b1320] group-hover:translate-x-1 transition-all duration-150 shrink-0" />
                        </button>
                      );
                    },
                  )}
                </div>

                {currentStep > 0 && (
                  <div className="px-6 sm:px-8 py-4 border-t border-[#ded8cb] bg-[#ece7db]/30">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#767d87] hover:text-[#0b1320] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous question</span>
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#ded8cb]">
                  <div className="md:col-span-4 md:border-r md:border-[#ded8cb] md:pr-8">
                    <span className="font-mono-num text-xs uppercase tracking-widest text-[#767d87] block mb-2">
                      Connection Index
                    </span>
                    <span className="font-mono-num text-5xl sm:text-6xl font-bold text-[#0b1320] tracking-tight block">
                      {percentage}%
                    </span>
                    <span className="text-xs font-semibold text-[#ff7a00] mt-2 block">
                      {outcome.label}
                    </span>
                  </div>

                  <div className="md:col-span-8">
                    <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#0b1320] mb-2">
                      Diagnostic Assessment
                    </h3>
                    <p className="text-sm text-[#0b1320]/80 leading-relaxed">
                      {outcome.summary}
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-[#ded8cb]">
                  {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
                    const score = answers[idx] ?? 0;
                    const statusText = getScoreLabel(score);
                    return (
                      <div
                        key={q.id}
                        className="px-6 sm:px-10 py-4 flex items-center justify-between gap-4 text-xs sm:text-sm"
                      >
                        <span className="font-mono-num text-[#0b1320] font-medium">
                          {q.pillarLabel}
                        </span>
                        <span
                          className={`font-mono-num font-semibold shrink-0 ${
                            score === 2
                              ? "text-[#4d7c0f]"
                              : score === 1
                                ? "text-[#0369a1]"
                                : "text-[#b91c1c]"
                          }`}
                        >
                          {statusText}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="px-6 sm:px-10 py-6 border-t border-[#ded8cb] bg-[#ece7db]/35 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#ded8cb] bg-[#f4f1ea] text-[#0b1320] rounded-sm text-xs font-semibold hover:border-[#0b1320] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Diagnostic</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0b1320] text-[#f4f1ea] rounded-sm text-xs font-semibold hover:bg-[#1a273a] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Schedule Discovery Call</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff7a00]" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useLottie } from "lottie-react";

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationData,
  className = "w-full h-full",
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const options = {
    animationData,
    loop,
    autoplay,
    style: { width: "100%", height: "100%" },
  };

  const lottieInstance = useLottie(options as any) as any;

  return <div className={className}>{lottieInstance?.View || null}</div>;
}

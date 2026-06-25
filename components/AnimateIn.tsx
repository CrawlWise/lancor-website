"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimationType = "fade" | "slide-up" | "slide-down" | "left" | "right" | "scale";

interface AnimateInProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  viewTrigger?: boolean;
  className?: string;
  viewportOptions?: {
    once?: boolean;
    amount?: "some" | "all" | number;
    margin?: string;
  };
}

export default function AnimateIn({
  children,
  type = "slide-up",
  delay = 0,
  duration = 0.7,
  viewTrigger = true,
  className = "",
  viewportOptions = { once: true, margin: "-80px" },
}: AnimateInProps) {
  const getVariants = () => {
    switch (type) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "slide-down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView={viewTrigger ? "visible" : undefined}
      animate={!viewTrigger ? "visible" : undefined}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1.0], // premium custom ease-out curve
      }}
      viewport={viewTrigger ? viewportOptions : undefined}
    >
      {children}
    </motion.div>
  );
}

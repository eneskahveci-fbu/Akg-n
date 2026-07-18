"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Scroll'a girdiğinde yumuşak, göz yormayan bir fade + slide-up animasyonu
 * ile içeriği ortaya çıkarır. Sadece bir kez tetiklenir (viewport once:true),
 * her scroll'da tekrar oynamaz.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 18,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

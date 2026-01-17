"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <motion.span
        className="relative z-10 block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 -z-10 block text-neon-red opacity-70"
        animate={{
          x: [-2, 2, -1, 0],
          y: [1, -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatType: "mirror",
          repeatDelay: 3,
        }}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
          transform: "translate(-2px, -2px)",
        }}
      >
        {text}
      </motion.span>
      
      <motion.span
        className="absolute top-0 left-0 -z-10 block text-neon-yellow opacity-70"
        animate={{
          x: [2, -2, 1, 0],
          y: [-1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          repeatType: "mirror",
          repeatDelay: 4,
        }}
        style={{
          clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
          transform: "translate(2px, 2px)",
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}

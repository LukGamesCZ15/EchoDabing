"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={cn(
            "bg-slate-900 rounded-xl overflow-hidden border transition-colors",
            activeIndex === index ? "border-neon-red/50 bg-slate-900/80" : "border-white/5 hover:border-white/10"
          )}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <span className={cn("text-lg font-bold transition-colors", activeIndex === index ? "text-neon-red" : "text-white")}>
              {item.question}
            </span>
            <ChevronDown 
              className={cn("w-5 h-5 transition-transform duration-300", activeIndex === index ? "rotate-180 text-neon-red" : "text-gray-400")} 
            />
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setExpanded] = useState<boolean>(false);

  return (
    <div className="py-4 group border-b">
      <div
        className="pr-8 font-medium list-none cursor-pointer text-slate-700 focus-visible:outline-none transition-colors duration-300 group-hover:text-slate-900"
        onClick={() => setExpanded(!isOpen)}
      >
        {question}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              height: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
              opacity: { duration: 0.4, delay: 0.2 }, // Delay opacity to start after height begins
            }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-3 select-none text-gray-500">{answer}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;

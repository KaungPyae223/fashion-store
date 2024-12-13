"use client";
import React from "react";
import { motion } from "framer-motion";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration:0.3,ease:'linear'}}
    >
      {children}
    </motion.div>
  );
};

export default template;

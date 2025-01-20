"use client";
import React from "react";
import { motion } from "framer-motion";
import NavNotificationText from "./NavNotificationText";

const NotiBar = ({ NotiText }) => {
  return (
    <motion.div
      initial={{ x: "0%" }}
      animate={{ x: "-100%" }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: "easeOut",
      }}
      className="flex items-center gap-6 w-fit pe-6"
    >
      {NotiText.map((Text, i) => (
        <NavNotificationText title={Text} key={i} />
      ))}
    </motion.div>
  );
};

export default NotiBar;

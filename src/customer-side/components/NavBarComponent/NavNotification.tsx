"use client";
import React from "react";
import NavNotificationText from "./NavNotificationText";
import { motion } from "framer-motion";

const NavNotification = () => {
  const NotiText: string[] = [
    "Nike Air Force is available now",
    "Sambas are available here",
    "Winter fashions are for you",
    "Sneaker Fair is in February 2025",
    "Burmese hype is available now",
    "Nike authentic reseller",
    "Shop together with Alexa",
  ];

  return (
    <div className="bg-black">
      <div className="flex py-2 w-full text-sm text-white overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
          className="flex items-center gap-6 w-fit pe-6"
        >
          {NotiText.map((Text, i) => (
            <NavNotificationText title={Text} key={i} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
          className="flex items-center gap-6 w-fit pe-6"
        >
          {NotiText.map((Text, i) => (
            <NavNotificationText title={Text} key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NavNotification;

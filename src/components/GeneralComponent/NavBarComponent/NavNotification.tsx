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
      <div className="py-2 mx-12 text-sm text-white overflow-hidden">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="flex items-center gap-6 w-fit"
        >
          {NotiText.map((Text, i) => (
            <NavNotificationText title={Text} key={i} />
          ))}
          {NotiText.map((Text, i) => (
            <NavNotificationText title={Text} key={i} />
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default NavNotification;

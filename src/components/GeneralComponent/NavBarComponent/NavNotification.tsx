import React from "react";
import NavNotificationText from "./NavNotificationText";
import  {motion}  from "framer-motion";

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
    <div className="container bg-black py-2 px-12 text-sm text-white overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="flex justify-start items-center gap-6 overflow-hidden"
      >
        {NotiText.map((Text, i) => (
          <NavNotificationText title={Text} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default NavNotification;

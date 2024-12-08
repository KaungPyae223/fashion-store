"use client";

import React, { useEffect, useRef, useState } from "react";
import Noti from "./NavBarComponent/NavNotification";
import NavBody from "./NavBarComponent/NavBody";
import NavLink from "./NavBarComponent/NavLink";
import SearchSection from "./NavBarComponent/SearchSection";
import { AnimatePresence, motion } from "motion/react";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>();

  const [previousScroll, setPreviousScroll] = useState<number>(0);
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  const [openSearchSection, setOpenSearchSection] = useState<boolean>(false);

  const handleScroll = () => {
    if (!navRef.current || !containerRef.current) return;

    setCurrentScroll(window.scrollY);
    setCurrentScroll(window.scrollY);


    if (currentScroll > previousScroll) {
      navRef.current.classList.add("-translate-y-[100%]");
    } else if (window.scrollY < previousScroll) {
      navRef.current.classList.remove("-translate-y-[100%]");
    }
    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Fix cleanup function
    };
  }, [currentScroll]);

  useEffect(() => {
    if (navRef.current && containerRef.current) {
      containerRef.current.style.height = `${navRef.current.offsetHeight}px`;
    }
  }, [navRef.current,containerRef.current]);

  return (
    <div ref={containerRef}>
      <div ref={navRef} className="duration-300 fixed w-full bg-white z-30">
        <Noti />
        <NavBody setOpenSearchSection={setOpenSearchSection} />
        <NavLink />
      </div>
      <AnimatePresence>
        {openSearchSection && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            key="search-section"
            transition={{ duration: 0.3, ease: "linear" }}
            className="w-screen h-screen bg-white fixed top-0 left-0 z-50"
          >
            <SearchSection setOpenSearchSection={setOpenSearchSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

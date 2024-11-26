"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Noti from "./NavBarComponent/NavNotification";
import NavBody from "./NavBarComponent/NavBody";
import NavLink from "./NavBarComponent/NavLink";
import SearchSection from "./NavBarComponent/SearchSection";
import { AnimatePresence, motion } from "motion/react";

const NavBar = () => {
  const navRef = useRef();
  const blankRef = useRef();

  const [previousScroll, setPreviousScroll] = useState<number>(0);
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  const [openSearchSection, setOpenSearchSection] = useState<boolean>(false);

  const handleScroll = () => {
    if (!navRef.current || !blankRef.current) return;

    setCurrentScroll(window.scrollY);
    setCurrentScroll(window.scrollY);

    if (window.scrollY > navRef.current.offsetHeight) {
      navRef.current.classList.add("fixed");
      blankRef.current.style.height = `${navRef.current.offsetHeight}px`;
    } else if (window.scrollY == 0) {
      navRef.current.classList.remove("fixed");
      blankRef.current.style.height = `0px`;
    }

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

  return (
    <>
      <div ref={navRef} className="duration-300 bg-white">
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
            className="w-screen h-screen bg-white fixed top-0 left-0"
          >
            <SearchSection setOpenSearchSection={setOpenSearchSection} />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={blankRef}></div>
    </>
  );
};

export default NavBar;

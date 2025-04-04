"use client";

import React, { useEffect, useRef, useState } from "react";
import Noti from "./NavBarComponent/NavNotification";
import NavBody from "./NavBarComponent/NavBody";
import NavLink from "./NavBarComponent/NavLink";
import SearchSection from "./NavBarComponent/SearchSection";
import { AnimatePresence, motion } from "motion/react";
import Craft from "./NavBarComponent/Craft";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [previousScroll, setPreviousScroll] = useState<number>(0);
  const [openSearchSection, setOpenSearchSection] = useState<boolean>(false);
  const [openCraft, setOpenCraft] = useState<boolean>(false);

  // Handle body scroll locking for the craft section
  useEffect(() => {
    if (openCraft || openSearchSection) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [openCraft, openSearchSection]);

  // Handle scroll behavior
  const handleScroll = () => {
    if (!navRef.current) return;

    const currentScroll = window.scrollY;

    if (
      currentScroll > previousScroll &&
      currentScroll > navRef.current.offsetHeight
    ) {
      navRef.current.classList.add("-translate-y-full");
    } else {
      navRef.current.classList.remove("-translate-y-full");
    }

    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScroll]);

  // Adjust container height based on nav height
  useEffect(() => {
    if (navRef.current && containerRef.current) {
      containerRef.current.style.height = `${navRef.current.offsetHeight}px`;
    }
  }, []);

  const pathName = usePathname();

  useEffect(() => {
    navRef.current?.classList.remove("-translate-y-full");
  }, [pathName]);

  return (
    <div ref={containerRef}>
      <div
        ref={navRef}
        className="duration-300 Navigation fixed w-full bg-white z-30"
      >
        <Noti />
        <div className="block md:hidden text-center py-3 border-b ">
          <Link href={"/"} className="text-3xl font-bold">
            Alexa
          </Link>
          
        </div>
        <div>
          <NavBody
            setOpenCraft={setOpenCraft}
            setOpenSearchSection={setOpenSearchSection}
          />
          <NavLink />
        </div>
      </div>

      <AnimatePresence>
        {openSearchSection && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            key="search-section"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-screen h-screen bg-white fixed top-0 left-0 z-50"
          >
            <SearchSection setOpenSearchSection={setOpenSearchSection} />
          </motion.div>
        )}

        {openCraft && (
          <>
            <motion.div
              onClick={() => setOpenCraft(false)}
              className="w-screen h-screen fixed top-0 left-0 z-40"
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              key="Craft-slider"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-fit h-screen  fixed top-0 right-0 z-50"
            >
              <Craft setOpenCraft={setOpenCraft} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

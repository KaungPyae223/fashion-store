"use client";

import React, { use, useEffect, useRef, useState } from "react";
import Noti from "./NavBarComponent/NavNotification";
import NavBody from "./NavBarComponent/NavBody";
import NavLink from "./NavBarComponent/NavLink";

const NavBar = () => {
  const navRef = useRef();
  const blankRef = useRef();

  const [previousScroll, setPreviousScroll] = useState<number>(0);
  const [currentScroll, setCurrentScroll] = useState<number>(0);

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
        <NavBody />
        <NavLink />
      </div>
      <div ref={blankRef}></div>
    </>
  );
};

export default NavBar;

"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { ReactElement, SetStateAction, useEffect, useRef } from "react";

interface ModalInterface {
  openModal: boolean;
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
  
}

const Modal = ({
  openModal,
  setOpenModal,
  children,
}: ModalInterface) => {
  useEffect(() => {
    if (openModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [openModal]);

  const backgroundRef = useRef()

  useEffect(() => {
    if (backgroundRef.current) {
      // Example of setting the position using style (instead of directly manipulating offsetTop/offsetLeft)
      backgroundRef.current.style.top = "0px";
      backgroundRef.current.style.left = "0px";
    }
  }, []);


  return (
    <AnimatePresence>
      {openModal && (
        <>
          <motion.div
            ref={backgroundRef}
            onClick={() => setOpenModal(false)}
            className="w-screen h-screen fixed top-0 left-0 z-40"
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="Craft-slider"
            transition={{ duration: 0.3, ease: "linear" }}
            className="w-fit h-fit fixed top-1/2 bg-white right-1/2 translate-x-1/2 -translate-y-1/2 z-50"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

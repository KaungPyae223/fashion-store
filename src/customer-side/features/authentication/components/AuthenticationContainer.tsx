"use client";
import { AnimatePresence, motion } from "motion/react";
import React, { useRef, useState } from "react";
import CheckEmail from "./CheckEmail";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";

const AuthenticationContainer = () => {
  const [email, setEmail] = useState<string>("");
  const [typeOfNavigation, setTypeOfNavigation] =
    useState<string>("CheckEmail");

  return (
    <div className="flex-1 overflow-hidden flex justify-center items-center my-16">
      <AnimatePresence mode="wait">
        {typeOfNavigation === "CheckEmail" ? (
          <motion.div
            key={"CheckEmail"}
            initial={{ x: "0%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-140%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <CheckEmail
              setTypeOfNavigation={setTypeOfNavigation}
              setEmail={setEmail}
            />
          </motion.div>
        ) : typeOfNavigation === "LogIn" ? (
          <motion.div
            key={"LogIn"}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-140%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <SignIn setTypeOfNavigation={setTypeOfNavigation} email={email} />
          </motion.div>
        ) : (
          <motion.div
            key={"CreateAccount"}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-140%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <CreateAccount
              setTypeOfNavigation={setTypeOfNavigation}
              email={email}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthenticationContainer;

"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { useSignIn } from "../hooks/useSignIn";

interface SignInInterface {
  email: string;
}

const SignIn = ({ email }: SignInInterface) => {
  const { handleSignIn, loading, passwordRef } = useSignIn();

  return (
    <div>
      <p className="uppercase text-xl text-center tracking-wider mb-10">
        Log in
      </p>
      <div className="mb-6">
        <p className="uppercase font-medium text-sm">email address</p>
        <input
          type="email"
          value={email}
          disabled
          className="border-b w-[380px] border-b-black py-2 outline-none"
        />
      </div>
      <div>
        <p className="uppercase font-medium text-sm">password</p>
        <input
          type="password"
          ref={passwordRef}
          className="border-b w-[380px] border-b-black py-2 outline-none"
        />
      </div>

      <div className="flex justify-center mt-8">
        <div
          onClick={handleSignIn}
          className="h-11 w-48 flex items-center justify-center bg-green-900 text-white cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                key={"loading"}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <l-tailspin size="15" stroke="2" speed="0.9" color="white" />
              </motion.div>
            ) : (
              <motion.span
                className="uppercase tracking-wider"
                initial={{ y: "0%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Sign In
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

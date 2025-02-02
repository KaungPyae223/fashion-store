"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../../../components/FormErrorMessage";
import { fetchHome } from "@/customer-side/services/HomePage";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setTypeOfNavigation: React.Dispatch<React.SetStateAction<string>>;
}

const CheckEmail = ({ setEmail, setTypeOfNavigation }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckEmail = async (formData) => {
    setLoading(true);

    const data = await fetchHome(
      process.env.NEXT_PUBLIC_BASE_URL + "/check-email?email=" + formData.email
    );

    if (data.status == "admin") {
      toast.error("This is an admin account");
      setLoading(false);
      return;
    } else if (data.status == "logIn") {
      setTypeOfNavigation("LogIn");
      setEmail(formData.email);
    } else {
      setTypeOfNavigation("CreateAccount");
      setEmail(formData.email);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleCheckEmail)}>
        <Toaster />

        <p className="uppercase text-xl text-center tracking-wider mb-10">
          check email
        </p>
        <p className="uppercase font-medium text-sm">email address *</p>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          className="border-b w-[380px] border-b-black py-2 outline-none"
        />
        {errors.email && <FormErrorMessage message={errors.email.message} />}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className="h-11 w-48 flex items-center justify-center bg-green-900 text-white cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  key={"loading"}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div
                    className="animate-spin inline-block size-5 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </motion.div>
              ) : (
                <motion.span
                  className="uppercase tracking-wider"
                  initial={{ y: "0%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  Continue
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckEmail;

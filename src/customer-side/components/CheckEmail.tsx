'use client'
import React, { useState } from "react";
import { tailspin } from "ldrs";
import { AnimatePresence, motion } from "motion/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface CheckEmailInterface {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setTypeOfNavigation: React.Dispatch<React.SetStateAction<string>>;
}

const CheckEmail = ({ setEmail, setTypeOfNavigation }: CheckEmailInterface) => {
  tailspin.register();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [loading, isLoading] = useState<boolean>(false);

  const handleCheckEmail: SubmitHandler<FormValues> = (data) => {
    isLoading(true);
    setTypeOfNavigation("CreateAccount");
    setEmail(data.email);
  };

  return (
    <form onSubmit={handleSubmit(handleCheckEmail)}>
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
      {errors.email && (
        <span className="text-xs mt-2 block text-red-800">
          {errors.email.message}
        </span>
      )}
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
                transition={{ duration: 0.3, ease: "linear" }}
              >
                <l-tailspin size="15" stroke="2" speed="0.9" color="white" />
              </motion.div>
            ) : (
              <motion.span
                className="uppercase tracking-wider"
                initial={{ y: "0%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                Continue
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </form>
  );
};

export default CheckEmail;

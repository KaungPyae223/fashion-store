import React from "react";
import { AnimatePresence, motion } from "motion/react";
import ValidOrNot from "./ValidOrNot";

import FormErrorMessage from "@/customer-side/components/FormErrorMessage";
import { Toaster } from "react-hot-toast";
import { useCreateAccount } from "../hooks/useCreateAccount";

interface CreateAccountInterface {
  email: string;
}

const CreateAccount = ({ email }: CreateAccountInterface) => {
  const {
    handleCreateAccount,
    handleSubmit,
    register,
    errors,
    loading,
    handlePasswordChange,
    validations,
  } = useCreateAccount(email);

  return (
    <form onSubmit={handleSubmit(handleCreateAccount)}>
      <Toaster />
      <p className="uppercase text-xl text-center tracking-wider mb-10">
        create account
      </p>
      <div className="mb-6">
        <p className="uppercase font-medium text-sm">email address</p>
        <input
          type="email"
          {...register("email")}
          
          disabled
          className="border-b w-[380px] border-b-black py-2 outline-none"
        />
      </div>
      <div className="mb-6 ">
        <p className="uppercase font-medium text-sm">customer name *</p>
        <input
          type="text"
          {...register("name", {
            required: "Customer name is required",
          })}
          className="border-b w-[380px] border-b-black py-2 outline-none"
        />
        {errors.name && <FormErrorMessage message={errors.name.message} />}
      </div>
      <div className="mb-6">
        <p className="uppercase font-medium text-sm">create password *</p>
        <input
          type="text"
          {...register("password", {
            required: "Password is required",
            onChange: handlePasswordChange,
            validate: {
              hasUppercase: (value) =>
                (/[A-Z]/.test(value) && /[a-z]/.test(value)) ||
                "Password must include at least one uppercase and one lowercase letter",
              hasNumberOrSymbol: (value) =>
                /[\d!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Password must include at least one number or special character",
              minLength: (value) =>
                value.length >= 8 || "Password must be at least 8 characters",
            },
          })}
          className="border-b w-[380px] border-b-black py-2 outline-none"
        />
        {errors.password && (
          <FormErrorMessage message={errors.password.message} />
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-5 items-center">
          <ValidOrNot valid={validations.hasUppercaseOrLowercase} />
          <p className="text-sm">
            Include both uppercase or lowercase characters
          </p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <ValidOrNot valid={validations.hasNumberOrSymbol} />
          <p className="text-sm">Include at least one number or symbol</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <ValidOrNot valid={validations.hasMinLength} />
          <p className="text-sm">Be at least 8 characters long</p>
        </div>
      </div>

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
                transition={{ duration: 0.3, ease: "easeOut" }}
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
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                create
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </form>
  );
};

export default CreateAccount;

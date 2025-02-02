"use client";
import reactUseCookie from "react-use-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { registerAccount } from "@/customer-side/services/Register";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const useCreateAccount = (email: string) => {
  const Router = useRouter();
  const [Token, setToken] = reactUseCookie("user_token");

  const [validations, setValidations] = useState({
    hasUppercaseOrLowercase: false,
    hasNumberOrSymbol: false,
    hasMinLength: false,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update validations
    setValidations({
      hasUppercaseOrLowercase: /[A-Z]/.test(value) && /[a-z]/.test(value),
      hasNumberOrSymbol: /[\d!@#$%^&*(),.?":{}|<>]/.test(value),
      hasMinLength: value.length >= 8,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email,
    },
  });

  const [loading, isLoading] = useState<boolean>(false);

  const handleCreateAccount = async (data) => {
    console.log(data);

    isLoading(true);
    const res = await registerAccount(data.name, data.email, data.password);

    const json = await res.json();

    if (json.token) {
      setToken(json.token);
      Router.back();
    } else {
      toast.error(json.message);
      isLoading(false);
    }
  };

  return {
    handleCreateAccount,
    handleSubmit,
    register,
    errors,
    loading,
    handlePasswordChange,
    validations,
  };
};

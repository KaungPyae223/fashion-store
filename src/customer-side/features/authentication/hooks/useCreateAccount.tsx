import reactUseCookie from "react-use-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Register } from "@/customer-side/services/Register";
import { useForm } from "react-hook-form";
import { tailspin } from "ldrs";
import { useState } from "react";

export const useCreateAccount = () => {
  tailspin.register();

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
  } = useForm();

  const [loading, isLoading] = useState<boolean>(false);

  const handleCreateAccount = async (data) => {
    isLoading(true);
    const res = await Register(data.name, data.email, data.password);

    const json = await res.json();

    if (json.token) {
      setToken(json.token);
      Router.back();
    } else {
      toast.error("Error in create account");
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

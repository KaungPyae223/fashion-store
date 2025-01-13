"use client";
import AdminInput from "@/admin-side/components/AdminInput";
import React from "react";
import { useForm } from "react-hook-form";
import { login } from "@/admin-side/services/login";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import useCookie from "react-use-cookie";

const LogInPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [Token, setToken] = useCookie("token");

  const HandleLogIn = async (data) => {
    const logInData = {
      email: data.Email,
      password: data.Password,
    };

    const res = await login(logInData);
    const json = await res.json();

    if (json.status === 200) {
      toast.success("Log In Successful");
      setToken(json.token);

      router.push("/admin");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="w-fit p-8 bg-white shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit(HandleLogIn)}>
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Email"}
            type={"text"}
            required={true}
          />
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Password"}
            type={"password"}
            required={true}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-800 focus:outline-none focus:ring-2 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;

"use client";
import Lottie from "lottie-react";
import React from "react";
import AdminWelcome from "@/assets/AdminWelcome.json";
import { getCookie } from "react-use-cookie";

const DefaultPage = () => {
  const admintoken = getCookie("token");
  console.log(admintoken);

  return (
    <div
      style={{ height: "calc(100vh - 2.5rem)" }}
      className="flex justify-center items-center"
    >
      <div>
        <Lottie animationData={AdminWelcome} className="h-72" />
        <div className="mt-6 flex flex-row gap-6 items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1>
            <p className="text-gray-500 mt-2">
              You can manage your website from here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;

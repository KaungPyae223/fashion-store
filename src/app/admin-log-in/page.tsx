import LogInPage from "@/admin-side/features/log-in/page/LogInPage";
import React from "react";
import "../../styles/globals.css";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <div>
      <Toaster />
      <LogInPage />
    </div>
  );
};

export default page;

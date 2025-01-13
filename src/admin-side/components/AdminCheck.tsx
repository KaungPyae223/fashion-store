"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import reactUseCookie from "react-use-cookie";
import useAdminProfileStore from "../stores/useAdminProfileStore";

const AdminCheck = ({ allow, children }) => {
  const [token] = reactUseCookie("token");

  const { adminData } = useAdminProfileStore();

  const [check, setCheck] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      toast.error("Please Log In First");
      router.push("/admin-log-in");
    }
    if (adminData) {
      if (adminData.role !== allow && allow !== "All") {
        toast.error("You do not have permission to use this feature");
        router.push("/admin-log-in");
      } else {
        setCheck(false);
      }
    }
  }, [adminData, token]);

  if (check) return <></>;
  else return <>{children}</>;
};

export default AdminCheck;

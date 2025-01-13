"use client";
import React, { useEffect, useState } from "react";
import NotiBar from "./NotiBar";
import { fetchHome } from "@/customer-side/services/HomePage";
import useSWR from "swr";

const NavNotification = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/ads";

  const [NotiText, setNotiText] = useState([]);

  const { data, isLoading, error } = useSWR(url, fetchHome);

  useEffect(() => {
    if (!isLoading) {
      setNotiText(data.ads.split("/"));
    }
  }, [isLoading]);

  return (
    <div className="bg-black">
      <div className="flex py-2 w-full text-sm text-white overflow-hidden">
        <NotiBar NotiText={NotiText} />
        <NotiBar NotiText={NotiText} />
      </div>
    </div>
  );
};

export default NavNotification;

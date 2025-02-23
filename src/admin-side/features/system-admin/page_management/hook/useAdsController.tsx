"use client";
import { updateAds } from "@/admin-side/services/page";
import { fetchHome } from "@/customer-side/services/HomePage";
import { useRevalidatedData } from "@/hooks/useRevalidatedData";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

export const useAdsController = () => {
  const router = useRouter();

  const url = process.env.NEXT_PUBLIC_BASE_URL + "/ads";

  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setAds(json.ads.split("/"));
    };

    fetchAds();
  }, []);

  const HeaderAdsRef = useRef();

  const addHeaderAds = () => {
    if (ads.length >= 12) return;

    if (!HeaderAdsRef.current.value) return;

    if (ads.includes(HeaderAdsRef.current.value)) return;

    setAds([...ads, HeaderAdsRef.current.value]);
    HeaderAdsRef.current.value = "";
  };

  const removeHeaderAds = (headerAds) => {
    setAds(ads.filter((el) => el !== headerAds));
  };

  const handleUpdateAds = async () => {
    if (window.confirm("Are you sure to update the Ads")) {
      try {
        const adsData = ads.join("/");

        const res = await updateAds(adsData);

        const json = await res.json();

        if (res.status != 200) {
          toast.error(json.message);
          return;
        }
        toast.success("Ads updated successfully");
        router.push("/admin/page-management");
      } catch (error) {
        toast.error("An error occurred while updating the ads.");
        console.error("Error:", error);
      }
    }
  };

  return { ads, handleUpdateAds, removeHeaderAds, addHeaderAds, HeaderAdsRef };
};

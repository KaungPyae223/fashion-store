"use client"
import { fetchAllAds, updateAds } from "@/admin-side/services/page";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export const useAdsController = () => {
  const [ads, setAds] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAds = async () => {
      const adsData = await fetchAllAds();
      const ads = adsData.ads.split("/");
      setAds(ads);
    };

    fetchAds();
  }, []);

  const HeaderAdsRef = useRef();

  const addHeaderAds = () => {
    if (ads.length >= 12) return;

    if (!HeaderAdsRef.current.value) return;

    if (ads.includes(HeaderAdsRef.current.value)) return;

    setAds([...ads, HeaderAdsRef.current.value]);
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

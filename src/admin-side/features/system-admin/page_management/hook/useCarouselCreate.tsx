import { storeCarousel } from "@/admin-side/services/page";
import useCarouselStore from "@/admin-side/stores/useCarouselStore";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

export const useCarouselCreate = () => {
  const [confirmText, setConfirmText] = useState<string>("");
  const { data } = useCarouselStore();
  const router = useRouter();

  const carouselCardData = {
    ...data,
    image: data.photo.preview,
  };

  const handleCreateCarousel = async () => {
    const storeData = {
      title: data.title,
      sub_title: data.sub_title,
      link: data.link,
      link_title: data.link_title,
      image: data.photo.file,
    };

    try {
      const res = await storeCarousel(storeData);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }
      
      toast.success("Carousel created successfully");
      router.push("/admin/page-management");
    } catch (error) {
      toast.error("An error occurred while creating the carousel.");
      console.error("Error:", error);
    }
  };

  return {
    confirmText,
    setConfirmText,
    carouselCardData,
    handleCreateCarousel,
    data,
  };
};

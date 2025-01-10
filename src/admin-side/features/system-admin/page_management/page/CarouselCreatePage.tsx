"use client";
import AdminInput from "@/admin-side/components/AdminInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCarouselStore from "@/admin-side/stores/useCarouselStore";
import SingleImageUpload from "@/admin-side/components/SingleImageUpload";
import Image from "next/image";
import ProductBlankImage from "@/assets/image.png";
import { useRouter } from "next/navigation";

const CarouselCreatePage = () => {
  const { data, setData } = useCarouselStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      Title: data.title,
      Sub_Title: data.sub_title,
      Link: data.link,
      Link_Title: data.link_title,
    },
  });

  const [coverImage, setCoverImage] = useState(data.photo);

  const [coverImageUploadModal, setCoverImageUploadModal] = useState();

  const handleCreateCarousel = (data) => {
    const newData = {
      title: data.Title,
      sub_title: data.Sub_Title,
      link: data.Link,
      link_title: data.Link_Title,
      photo: coverImage,
    };

    setData(newData);

    router.push("/admin/page-management/carousel-create/confirm");
  };

  return (
    <div className="mt-6">
      <div>
        <p className="text-2xl font-medium tracking-wide">
          Carousel Create Form
        </p>
        <form onSubmit={handleSubmit(handleCreateCarousel)} className="mt-9">
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Title"}
            type={"text"}
            required={true}
          />
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Sub_Title"}
            type={"text"}
            required={true}
          />
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Link_Title"}
            type={"text"}
            required={true}
          />
          <AdminInput
            register={register}
            errors={errors}
            inputName={"Link"}
            type={"text"}
            required={true}
          />

          <label className="text-sm text-gray-700 mb-2">Carousel Image *</label>
          <div className="mt-6">
            {coverImage?.preview ? (
              <Image
                alt="Preview Image"
                src={coverImage.preview}
                width={280}
                height={280}
                className="w-[400px] h-[300px] object-cover"
              />
            ) : (
              <Image
                className="border mt-1.5 border-gray-300 cursor-pointer object-cover"
                src={ProductBlankImage}
                alt="Product Cover Image"
                width={280}
                height={280}
              />
            )}
            <div
              onClick={() => setCoverImageUploadModal(true)}
              className="mt-3 px-6 py-2 bg-gray-800 text-white w-fit cursor-pointer"
            >
              Upload an Image
            </div>
          </div>
          <SingleImageUpload
            setImage={setCoverImage}
            openModal={coverImageUploadModal}
            setOpenModal={setCoverImageUploadModal}
          />

          <div className="flex flex-row items-center justify-end w-[400px] mt-6 gap-3">
            <button type="submit" className="px-9 py-2 bg-gray-800 text-white">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarouselCreatePage;

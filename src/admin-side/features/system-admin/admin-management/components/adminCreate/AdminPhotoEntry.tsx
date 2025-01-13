import Image from "next/image";
import React, { useState } from "react";
import ProductBlankImage from "@/assets/image.png";
import SingleImageUpload from "@/admin-side/components/SingleImageUpload";
import useAdminStore from "@/admin-side/stores/useAdminStore";
import toast, { Toaster } from "react-hot-toast";

const AdminPhotoEntry = ({
  setStage,
}: {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    setAdminImage,
    data: { adminPhoto },
  } = useAdminStore();


  const [coverImage, setCoverImage] = useState(adminPhoto);

  const [coverImageUploadModal, setCoverImageUploadModal] = useState();

  const handleCoverImageUpload = (stage) => {
    if (coverImage == null) {
      toast.error("Please upload a product profile image");
      return;
    }
    setAdminImage(coverImage);
    setStage(stage);
  };

  return (
    <div>
      <Toaster />
      <p className="text-2xl font-medium tracking-wide">Admin Profile</p>
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
          className="mt-3 px-6 py-2 bg-gray-800 text-white w-fit"
        >
          Upload an Image
        </div>
      </div>
      <SingleImageUpload
        setImage={setCoverImage}
        openModal={coverImageUploadModal}
        setOpenModal={setCoverImageUploadModal}
      />
      <div className="flex mt-6 flex-row items-center justify-end w-[400px] gap-3">
        <button
          onClick={() => handleCoverImageUpload(1)}
          className="px-9 py-2 border border-gray-800 "
        >
          Back
        </button>

        <button
          onClick={() => handleCoverImageUpload(3)}
          className="px-9 py-2 bg-gray-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminPhotoEntry;

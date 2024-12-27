"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "./Modal";


const SingleImageUpload = ({ setImage,openModal,setOpenModal }) => {
  
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage({
      file,
      preview: URL.createObjectURL(file),
    });
    setOpenModal(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className={`${openModal?"fixed top-0 left-0 w-screen h-screen z-50":""}`}>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="bg-white p-5 z-50">
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload Image</h2>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed p-6 py-20 my-6 text-center ${
              isDragActive ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500">Drop the images here...</p>
            ) : (
              <p className="text-gray-500">
                Drag and drop images here, or click to select files
              </p>
            )}
          </div>

          <div
            onClick={()=>setOpenModal(false)}
            className="mt-4 w-fit cursor-pointer px-6 py-2 border border-gray-300 hover:border-gray-800 text-gray-500 hover:text-gray-800 duration-150  transition"
          >
            Close
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleImageUpload;

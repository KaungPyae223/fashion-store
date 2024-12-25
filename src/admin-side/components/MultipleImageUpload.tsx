"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "./Modal";


const MultipleImageUpload = ({ setImages }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles) => {
    const images = acceptedFiles.slice(0, 4).map((file) => ({
      file: file,
      preview: URL.createObjectURL(file),
    }));
    setImages(images);
    setOpenModal(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="mt-3">
      <button
        onClick={() => setOpenModal(true)}
        className="px-6 py-2 bg-gray-800 text-white"
      >
        Upload Images
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="bg-white p-5">
          <h2 className="text-2xl font-semibold mb-4 text-center">Upload Images</h2>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed p-6 text-center ${
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

          <button
            onClick={() => setOpenModal(false)}
            className="mt-4 px-6 py-2 border border-gray-300 hover:border-gray-800 text-gray-500 hover:text-gray-800 duration-150  transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MultipleImageUpload;

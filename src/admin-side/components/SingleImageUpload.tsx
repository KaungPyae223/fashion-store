"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Necessary for accessibility



const SingleImageUpload = ({setImage}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]; 
    setImage({
      file,
      preview: URL.createObjectURL(file),
    });
    closeModal()
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="mt-3">
      <button onClick={openModal} className="px-6 py-2 bg-gray-800 text-white">
        Upload Image
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white shadow-lg p-6 w-96 mx-auto mt-20 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
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
          onClick={closeModal}
          className="mt-4 px-6 py-2 border border-gray-300 hover:border-gray-800 text-gray-500 hover:text-gray-800 duration-150  transition"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default SingleImageUpload;

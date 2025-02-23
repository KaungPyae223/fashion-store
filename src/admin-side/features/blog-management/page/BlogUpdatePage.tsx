"use client";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import useBlogStore from "@/admin-side/stores/useBlogStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BlogUpdatePage = () => {
  const { setData, data } = useBlogStore();

  const editor = useRef(null);
  const [content, setContent] = useState(data.content);
  const [title, setTitle] = useState(data.title);
  const [image, setImage] = useState(data.image);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const config = {
    readonly: false,
    height: 600,
    toolbarAdaptive: false,
  };

  const router = useRouter();

  const setBlogData = () => {
    setData({
      content: content,
      title: title,
      image: image,
      id: data.id,
      coverImage: data.coverImage,
    });

    router.push("/admin/blog-list/details/" + data.id + "/update/confirm");
  };

  // Check if all fields are filled
  const isFormComplete = title.trim() !== "" && content.trim() !== "";

  return (
    <div className="mt-6 max-w-3xl mx-auto p-6 bg-white shadow-md">
      {/* Blog Title */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Title
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Enter blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload Blog Photo
        </label>
        <div className="flex items-center gap-4">
          <label className="cursor-pointer flex items-center gap-2 border border-gray-600 px-4 py-2 text-sm">
            Upload Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          {image ? (
            <Image
              width={64}
              height={64}
              src={URL.createObjectURL(image)}
              alt="Uploaded preview"
              className="h-16 w-16 object-cover shadow-md"
            />
          ) : (
            <Image
              width={64}
              height={64}
              src={data.coverImage}
              alt="Uploaded preview"
              className="h-16 w-16 object-cover shadow-md"
            />
          )}
        </div>
      </div>

      {/* Blog Content Editor */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
        />
      </div>

      {/* Next Button - Disabled Until Form is Complete */}
      <div className="flex justify-end">
        <button
          className={`px-6 py-2 text-white shadow-md transition ${
            isFormComplete
              ? "bg-gray-800 hover:bg-gray-900"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!isFormComplete}
          aria-disabled={!isFormComplete}
          onClick={setBlogData}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogUpdatePage;

import BlogDetailsPage from "@/customer-side/features/blogs/pages/BlogDetailsPage";
import React from "react";

async function fetchBlogData(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/get-blog-details/${id}`
  );
  if (!res.ok) {
    console.error(
      `Error fetching Blog data for ID ${id}:`,
      res.status,
      res.statusText
    );
    return {
      title: "Blog Not Found",
      photo: "",
      content: "",
      time: "",
      author: "",
    }; // Default object to avoid crashes
  }
  return res.json();
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = await fetchBlogData(id);

  return {
    title: blog.title,
    openGraph: {
      title: blog.title,
      url: `https://alexa.com.mm/blogs/${id}`,
      images: [
        {
          url: blog.photo,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
      siteName: "Alexa",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      images: [blog.photo],
    },
    icons: {
      icon: process.env.NEXT_PUBLIC_ICON_URL,
      shortcut: process.env.NEXT_PUBLIC_ICON_URL,
      apple: process.env.NEXT_PUBLIC_ICON_URL,
    },
  };
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const blog = await fetchBlogData(id);

  return (
    <div>
      <BlogDetailsPage blog={blog} />
    </div>
  );
};

export default page;

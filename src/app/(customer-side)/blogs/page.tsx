import React from "react";
import BlogPage from "@/customer-side/features/blogs/pages/BlogPage";

export const metadata = {
  title: "Life Style Blog | Fashion Trends & Style Inspiration", // Fashion-focused title
  description:
    "Stay up-to-date with the latest fashion trends, style tips, outfit inspiration, and more on the Alexa Fashion Store Life Style Blog.", // Fashion-focused description
  keywords: [
    "Fashion Blog",
    "Style Blog",
    "Fashion Trends",
    "Outfit Inspiration",
    "Style Tips",
    "Fashion Advice",
    "Personal Style",
    "Fashion Inspiration",
    "Street Style",
  ], 
  openGraph: {
    title: "Life Style Blog | Fashion Trends & Style Inspiration",
    description:
      "Discover the latest fashion trends, style tips, and outfit inspiration on the Alexa Fashion Store Life Style Blog. Get inspired and elevate your wardrobe.", // Fashion-focused description
    url: "https://alex.com.mm/life-style/blog", // Assuming /blog is your blog route
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL,
        width: 1200,
        height: 630,
        alt: "Life Style Blog - Fashion Trends & Style Inspiration", // Fashion-focused alt text
      },
    ],
    siteName: "Alexa Fashion Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Style Blog | Fashion Trends & Style Inspiration",
    description:
      "Get inspired with our Life Style Blog! Discover the latest fashion trends, style tips, and outfit ideas to elevate your wardrobe.", // Fashion-focused description
    images: process.env.NEXT_PUBLIC_ICON_URL,
  },
  icons: {
    icon: process.env.NEXT_PUBLIC_ICON_URL,
    shortcut: process.env.NEXT_PUBLIC_ICON_URL,
    apple: process.env.NEXT_PUBLIC_ICON_URL,
  },
};

const page = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default page;

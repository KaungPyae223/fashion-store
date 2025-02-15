import LifeStylePage from "@/customer-side/features/life-style/pages/LifeStylePage";
import React from "react";

export const metadata = {
  title:
    "Life Style Collection | Furniture & Home Decor at Alexa Fashion Store",
  description:
    "Discover a curated collection of furniture and home decor at Alexa Fashion Store. Shop stylish pieces to elevate your living space.", // Modified description
  keywords: [
    "Furniture",
    "Home Decor",
    "Interior Design",
    "Living Room Furniture",
    "Bedroom Furniture",
    "Dining Room Furniture",
    "Home Accessories",
    "Decor",
    "Modern Furniture",
    "Contemporary Furniture",
  ], // Modified keywords
  openGraph: {
    title:
      "Life Style Collection | Shop Furniture & Home Decor at Alexa Fashion Store",
    description:
      "Explore a curated selection of furniture and home decor to create the perfect ambiance in your home. Find stylish pieces for every room at Alexa Fashion Store.", // Modified description
    url: "https://alex.com.mm/life-style", // Replace with actual category URL
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL, // Dynamic URL from environment variables
        width: 1200,
        height: 630,
        alt: "Furniture and Home Decor Collection at Alexa Fashion Store", // Modified alt text
      },
    ],
    siteName: "Alexa Fashion Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Life Style Collection | Shop Furniture & Home Decor at Alexa Fashion Store", // Modified title
    description:
      "Discover stylish furniture and home decor to elevate your living space. Find the perfect pieces to create your dream home at Alexa Fashion Store.", // Modified description
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
      <LifeStylePage />
    </div>
  );
};

export default page;

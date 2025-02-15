import React from "react";
import AccessoriesPage from "@/customer-side/features/accessories/pages/AccessoriesPage";

export const metadata = {
  title: "Accessories Collection | Luxury Bags, Glasses & More at Alexa Fashion Store",
  description: "Shop the latest collection of luxury accessories, including designer bags, sunglasses, watches, and more. Elevate your style with high-end fashion accessories from top brands.",
  keywords: ["Accessories", "Luxury Bags", "Designer Glasses", "Sunglasses", "Watches", "Fashion Accessories", "Handbags", "Luxury Accessories", "Men's Accessories", "Women's Accessories"],
  openGraph: {
    title: "Accessories Collection | Shop Luxury Bags, Glasses & More at Alexa Fashion Store",
    description: "Explore a wide range of high-end fashion accessories, including bags, sunglasses, and watches from top luxury brands. Find the perfect addition to your style at Alexa Fashion Store.",
    url: "https://alex.com.mm/accessories", // Replace with actual category URL
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL, // Dynamic URL from environment variables
        width: 1200,
        height: 630,
        alt: "Luxury Accessories Collection at Alexa Fashion Store",
      },
    ],
    siteName: "Alexa Fashion Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessories Collection | Shop Luxury Bags & Sunglasses at Alexa Fashion Store",
    description: "Discover premium accessories, including luxury bags, sunglasses, and watches from top brands. Elevate your style with the best fashion accessories at Alexa Fashion Store.",
    images: process.env.NEXT_PUBLIC_ICON_URL 
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
      <AccessoriesPage />
    </div>
  );
};

export default page;

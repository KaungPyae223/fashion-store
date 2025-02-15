import FootwearPage from "@/customer-side/features/footwears/pages/FootwearPage";
import React from "react";

export const metadata = {
  title:
    "Footwear Collection | Premium Shoes & Sneakers at Alexa Fashion Store",
  description:
    "Shop a wide range of premium footwear including sneakers, boots, heels, and more from top luxury brands like Nike, Gucci, and Adidas. Find your perfect pair today at Alexa Fashion Store.",
  keywords: [
    "Footwear",
    "Shoes",
    "Sneakers",
    "Boots",
    "Heels",
    "Luxury Footwear",
    "Designer Shoes",
    "Men's Footwear",
    "Women's Footwear",
    "Premium Footwear",
  ],
  openGraph: {
    title: "Footwear Collection | Shop Premium Shoes at Alexa Fashion Store",
    description:
      "Discover a vast collection of luxury footwear including sneakers, boots, and heels from the world's top brands. Shop the latest trends in footwear at Alexa Fashion Store.",
    url: "https://alexa.com.mm/footwears", // Replace with actual URL
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL, // Replace with your actual banner image URL
        width: 1200,
        height: 630,
        alt: "Footwear Collection at Alexa Fashion Store",
      },
    ],
    siteName: "Alexa Fashion Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Footwear Collection | Shop Shoes & Sneakers at Alexa Fashion Store",
    description:
      "Shop premium footwear including sneakers, boots, and heels from the top brands at Alexa Fashion Store. Find the latest trends in footwear for men and women.",
    images: [process.env.NEXT_PUBLIC_ICON_URL], 
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
      <FootwearPage />
    </div>
  );
};

export default page;

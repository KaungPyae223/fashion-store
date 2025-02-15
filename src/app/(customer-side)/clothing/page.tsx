import React from "react";
import ClothesPage from "@/customer-side/features/clothes/page/ClothesPage";

export const metadata = {
  title: "Alexa Fashion Store | Trendy Clothing for Men & Women",
  description:
    "Discover the latest fashion trends at Alexa Fashion Store. Shop high-quality clothing for men and women, from casual wear to stylish outfits.",

  keywords: [
    "Clothing",
    "Men's Fashion",
    "Women's Fashion",
    "Trendy Wear",
    "Casual Wear",
    "Formal Outfits",
  ],
  openGraph: {
    title: "Alexa Fashion Store | Stylish Clothing for Everyone",
    description:
      "Upgrade your wardrobe with premium-quality fashion from Alexa Fashion Store. Shop stylish clothing for men and women today!",
    url: "https://alexa.com.mm/clothing",
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL,
        width: 1200,
        height: 630,
        alt: "Trendy clothing from Alexa Fashion Store",
      },
    ],
    siteName: "Alexa Fashion Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Trendy Clothing at Alexa Fashion Store",
    description:
      "Find the perfect outfit from our collection of stylish men's and women's fashion. Shop now at Alexa Fashion Store!",
    images: [process.env.NEXT_PUBLIC_ICON_URL],
  },
};

const page = () => {
  return (
    <div>
      <ClothesPage />
    </div>
  );
};

export default page;

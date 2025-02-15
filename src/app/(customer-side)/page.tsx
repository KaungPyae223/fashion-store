import React from "react";
import HomePage from "@/customer-side/features/home/page/HomePage";

export const metadata = {
  title: "Alexa Fashion Store | Trendy Clothing for Men & Women",
  description:
    "Discover the latest trends in fashion at Alexa Fashion Store. Shop high-quality clothing for men and women, including casual wear, formal outfits, and trendy accessories.",
  keywords: [
    "Clothing",
    "Men's Fashion",
    "Accessories",
    "Life-Styles",
    "Foot-Wears",
    "Women's Fashion",
    "Trendy Wear",
    "Casual Wear",
    "Formal Outfits",
    "Fashion Store",
    "Online Clothing Shop",
  ],
  openGraph: {
    title: "Alexa Fashion Store | Your One-Stop Fashion Destination",
    description:
      "Explore a wide selection of stylish clothing for men and women at Alexa Fashion Store. Find trendy outfits for all occasions and shop with confidence!",
    url: "https://alexa.com.mm", // Change to your actual homepage URL
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL, // Banner image for homepage (ideal size: 1200x630)
        width: 1200,
        height: 630,
        alt: "Alexa Fashion Store homepage - Trendy Fashion for Men & Women",
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
    images: [process.env.NEXT_PUBLIC_ICON_URL], // Use the same image as Open Graph for consistency
  },
  icons: {
    icon: process.env.NEXT_PUBLIC_ICON_URL, // Favicon for browser tab
    shortcut: process.env.NEXT_PUBLIC_ICON_URL, // Shortcut icon for Windows
    apple: process.env.NEXT_PUBLIC_ICON_URL,
  },
};

const Home = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;

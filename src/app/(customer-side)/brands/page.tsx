import React from "react";
import BrandPage from "@/customer-side/features/brands/pages/BrandPage";

export const metadata = {
  title: "Alexa Fashion Store | Explore Our Multi-Vendor Fashion Marketplace",
  description:
    "Discover Alexa Fashion Store, a multi-vendor fashion marketplace offering a wide variety of high-quality clothing for men and women from trusted brands and designers. Shop the latest trends today!",
  keywords: [
    "Multi-Vendor Fashion",
    "Fashion Marketplace",
    "Men's Fashion",
    "Women's Fashion",
    "Clothing Marketplace",
    "Sustainable Fashion",
    "Designer Clothing",
  ],
  openGraph: {
    title: "Alexa Fashion Store | Multi-Vendor Fashion Marketplace",
    description:
      "Explore our diverse collection of clothing from multiple brands and designers at Alexa Fashion Store. Find everything from casual wear to premium collections for men and women.",
    url: "https://alexa.com.mm/brands", // Update with your actual brand page URL
    images: [
      {
        url: process.env.NEXT_PUBLIC_ICON_URL,
        width: 1200,
        height: 630,
        alt: "Explore Alexa Fashion Store Multi-Vendor Marketplace",
      },
    ],
    siteName: "Alexa Fashion Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexa Fashion Store | Multi-Vendor Fashion Marketplace",
    description:
      "Shop from a variety of trusted brands and designers at Alexa Fashion Store. Explore a wide selection of men's and women's fashion, from casual to premium collections.",
    images: [
      process.env.NEXT_PUBLIC_ICON_URL,
    ],
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
      <BrandPage />
    </div>
  );
};

export default page;

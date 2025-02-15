import BrandDetailsPage from "@/customer-side/features/brands/pages/BrandDetailsPage";
import React from "react";

export const generateMetadata = ({
  params: { name },
}: {
  params: { name: string };
}) => {
  return {
    title: `${name} | Shop Luxury & Trendy Fashion at Alexa Fashion Store`,
    description: `Explore the latest collection from ${name} at Alexa Fashion Store. Discover luxury fashion, accessories, and premium clothing from top designers.`,
    keywords: [
      `${name} Fashion`,
      `${name} Clothing`,
      `${name} Accessories`,
      "Luxury Fashion",
      "Designer Clothing",
      "High-End Fashion",
    ],
    openGraph: {
      title: `${name} | Luxury & Trendy Fashion Collection`,
      description: `Shop authentic ${name} fashion at Alexa Fashion Store. Browse designer clothing, accessories, and high-end fashion trends from ${name}.`,
      url: `https://alexa.com.mm/brands/${name}`, // Use the dynamic brand URL
      images: [
        {
          url: process.env.NEXT_PUBLIC_ICON_URL, // Use brand logo or fallback
          width: 1200,
          height: 630,
          alt: `${name} at Alexa Fashion Store`,
        },
      ],
      siteName: "Alexa Fashion Store",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Luxury & Designer Fashion`,
      description: `Find the latest ${name} fashion at Alexa Fashion Store. Explore designer collections, premium apparel, and accessories.`,
      images: [process.env.NEXT_PUBLIC_ICON_URL], // Use brand logo or fallback
    },
    icons: {
      icon: process.env.NEXT_PUBLIC_ICON_URL,
      shortcut: process.env.NEXT_PUBLIC_ICON_URL,
      apple: process.env.NEXT_PUBLIC_ICON_URL,
    },
  };
};

const page = ({ params: { name } }: { params: { name: string } }) => {
  return <BrandDetailsPage name={name} />;
};

export default page;

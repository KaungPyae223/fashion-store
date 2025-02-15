import React from "react";
import DetailsPage from "@/customer-side/features/product-details/pages/DetailsPage";

async function fetchProductData(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product-details-data/${id}`
  );
  if (!res.ok) {
    console.error(
      `Error fetching product data for ID ${id}:`,
      res.status,
      res.statusText
    );
    return {
      DetailsData: {
        title: "Product Not Found",
        excerpt: "",
        description: "",
        id: "",
        cover_image: "",
      },
    }; // Default object to avoid crashes
  }
  return res.json();
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await fetchProductData(id);

  return {
    title: product.DetailsData.title,
    description: product.DetailsData.excerpt,
    openGraph: {
      title: product.DetailsData.title,
      description: product.DetailsData.description,
      url: `https://alexa.com.mm/footwears/details/${product.DetailsData.id}`,
      images: [
        {
          url: product.DetailsData.cover_image,
          width: 800,
          height: 600,
          alt: product.DetailsData.title,
        },
      ],
      siteName: "Alexa",
    },
    twitter: {
      card: "summary_large_image",
      title: product.DetailsData.title,
      description: product.DetailsData.description,
      images: [product.DetailsData.cover_image],
    },
    icons: {
      icon: process.env.NEXT_PUBLIC_ICON_URL,
      shortcut: process.env.NEXT_PUBLIC_ICON_URL,
      apple: process.env.NEXT_PUBLIC_ICON_URL,
    },
  };
}

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await fetchProductData(id); // Fetch data again for the page component

  return (
    <DetailsPage
      PreviousSection={[
        { link: "/", title: "Home" },
        { link: "/footwears", title: "Footwears" },
      ]}
      data={product} // Pass the product data as a prop
    />
  );
};

export default page;

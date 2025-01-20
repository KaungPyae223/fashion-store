"use client";
import BreadCrumb from "@/customer-side/components/BreadCrumb";
import Container from "@/customer-side/components/Container";
import React from "react";
import ProductData from "../components/ProductData";
import RatingContainer from "../components/RatingContainer";
import RelativeProducts from "../components/RelativeProducts";
import useSWR from "swr";
import { fetchHome } from "@/customer-side/services/HomePage";
import Loading from "@/admin-side/components/Loading";

const DetailsPage = ({
  id,
  PreviousSection,
}: {
  id: string;
  PreviousSection: { link: string; title: string }[];
}) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const detailsData = useSWR(
    `${baseURL}/product-details-data/${id}`,
    fetchHome
  );

  return (
    <div className="py-5">
      <Container>
        <div className="col-span-full">
          <div className="py-6">
            {!detailsData.isLoading && (
              <BreadCrumb
                previousSection={PreviousSection}
                title={detailsData.data.DetailsData.title}
              />
            )}
          </div>

          {detailsData.isLoading ? (
            <Loading />
          ) : (
            <>
              <ProductData productData={detailsData.data.DetailsData} />
              <RelativeProducts
                relativeProducts={detailsData.data.RelativeProducts}
              />
              <RatingContainer ratingData = {detailsData.data.ReviewData} id={id} />
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default DetailsPage;

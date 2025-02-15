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
  data,
  PreviousSection,
}: {
  data: any;
  PreviousSection: { link: string; title: string }[];
}) => {
  return (
    <div className="py-5">
      <Container>
        <div className="col-span-full">
          <div className="py-6">
            <BreadCrumb previousSection={PreviousSection} title={data.DetailsData.title} />
          </div>

          <ProductData productData={data.DetailsData} />
          <RelativeProducts relativeProducts={data.RelativeProducts} />
          <RatingContainer ratingData={data.ReviewData} id={data.DetailsData.id} />
        </div>
      </Container>
    </div>
  );
};

export default DetailsPage;

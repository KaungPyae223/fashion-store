"use client";
import Container from "@/customer-side/components/Container";
import SectionTitle from "@/customer-side/components/SectionTitle";
import React from "react";
import HomeBrandTypeCard from "../../../components/HomeBrandCard";
import { fetchHome } from "@/customer-side/services/HomePage";
import useSWR from "swr";
import useAddParamsToURL from "@/hooks/useAddParamsToURL";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import AdminPagination from "@/admin-side/components/AdminPagimation";

const BrandContainer = () => {
  const AddParamsToURL = useAddParamsToURL();

  const { isLoading, error, data } = useSWR(
    AddParamsToURL(process.env.NEXT_PUBLIC_BASE_URL + "/all-brands"),
    fetchHome
  );

  return isLoading ? (
    <Loading />
  ) : data.data && data?.data.length ? (
    <div className="py-10">
      <Container>
        <div className="col-span-full">
          <SectionTitle title="available brands" />
          <div className="grid grid-cols-4 gap-x-3 gap-y-6">
            {data.data.map((brand) => (
              <HomeBrandTypeCard
                key={brand.id}
                img={brand.img}
                link={`/brands/${brand.name}`}
                title={brand.name}
              />
            ))}
          </div>
          <AdminPagination meta={data?.meta} />
        </div>
      </Container>
    </div>
  ) : (
    <NoData />
  );
};

export default BrandContainer;

"use client";
import AdminPagination from "@/admin-side/components/AdminPagimation";
import Loading from "@/admin-side/components/Loading";
import NoData from "@/admin-side/components/NoData";
import Container from "@/customer-side/components/Container";
import SearchProductCard from "@/customer-side/components/NavBarComponent/SearchProductCard";
import { fetchHome } from "@/customer-side/services/HomePage";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import reactUseCookie from "react-use-cookie";
import useSWR from "swr";

const SearchPage = ({ q }) => {
  const searchParams = useSearchParams();

  const [gender, setGender] = useState<string>("");

  const [history, setHistory] = reactUseCookie("search-history");

  useEffect(() => {
    const genderParam = searchParams.get("gender");
    if (genderParam) {
      setGender(genderParam);
    }

    const historyArr = history ? JSON.parse(history) : [];

    if (!historyArr.includes(q)) {
      historyArr.unshift(q);
      if (historyArr.length > 10) {
        historyArr.splice(10);
      }
      setHistory(JSON.stringify(historyArr));
    }
  }, []);

  const { data, isLoading, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + "/search?q=" + q + "&gender=" + gender,
    fetchHome
  );

  console.log(data);

  return (
    <div>
      <p className="text-xl text-center my-20 tracking-wide">
        Search Result for{" "}
        <span className="font-semibold mx-1 text-2xl">" {q} "</span>
      </p>
      {isLoading ? (
        <Loading />
      ) : data?.data && data?.data.length ? (
        <Container>
          <div className="grid grid-cols-5 col-span-full gap-x-3 gap-y-6 mb-6">
            {data.data.map((SearchProduct) => (
              <SearchProductCard
                q={q}
                discount_percent={SearchProduct.discount_percent}
                discount_price={SearchProduct.discount_price}
                id={SearchProduct.id}
                key={SearchProduct.id}
                img={SearchProduct.cover_photo}
                brand={SearchProduct.brand}
                title={SearchProduct.name}
                amount={SearchProduct.price}
              />
            ))}
          </div>
          <div className="col-span-full mb-12">
            <AdminPagination meta={data?.meta} />
          </div>
        </Container>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default SearchPage;

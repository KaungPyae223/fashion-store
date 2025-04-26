import React, { useRef, useState } from "react";
import { debounce } from "lodash";
import Container from "../Container";
import SearchTitle from "./SearchTitle";
import SearchProducts from "./SearchProducts";
import SearchTitleList from "./SearchTitleList";
import { fetchHome } from "@/customer-side/services/HomePage";
import useSWR from "swr";
import NoData from "@/admin-side/components/NoData";
import { useRouter, useSearchParams } from "next/navigation";
import { getCookie } from "react-use-cookie";

interface SearchSectionInterface {
  setOpenSearchSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSection = ({ setOpenSearchSection }: SearchSectionInterface) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const gender = searchParams.get("gender");

  const history = getCookie("search-history");

  const searchHistory = history ? JSON.parse(history) : [];

  const [searchURl, setSearchURl] = useState<string>(
    process.env.NEXT_PUBLIC_BASE_URL + "/search-input?q=&gender=" + gender
  );

  const handleSearchInput = debounce((e) => {
    setSearchURl(
      process.env.NEXT_PUBLIC_BASE_URL +
        "/search-input?q=" +
        e.target.value +
        (gender ? "&gender=" + gender : "")
    );
  }, 500);

  

  const { data, isLoading, error } = useSWR(searchURl, fetchHome);

  const searchRef = useRef("");

  const changeSearchRoute = () => {
    if (searchRef.current.value === "") return;
 
    router.push("/search/" + searchRef.current.value + (gender ? "?gender=" + gender : ""));
   
    setOpenSearchSection(false);
  };

  return (
    <div className="w-full h-full overflow-y-scroll z-50">
      <div className="py-4 border-b col-span-full">
        <div className="flex flex-row md:hidden items-center mb-3 justify-between p-3">
          <div className="text-3xl font-medium">Alexa</div>
          <div
            onClick={() => setOpenSearchSection(false)}
            className="flex flex-row gap-3 items-center border w-fit px-5 py-1.5  rounded-full border-gray-300 "
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            Cancel
          </div>
        </div>

        <Container>
          <div className="col-span-full flex items-center justify-between">
            <div className="hidden md:block"></div>
            <div className="flex gap-1.5 w-full md:w-1/2 items-center bg-gray-100 border rounded-md px-2 py-3">
              <input
                type="text"
                ref={searchRef}
                onChange={handleSearchInput}
                placeholder="Search Input"
                className="bg-transparent text-sm flex-1 focus:outline-none px-2 placeholder:text-gray-400"
              />
              <div
                onClick={changeSearchRoute}
                className="border-l flex items-center gap-3 border-gray-200 px-3 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Search
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer hidden md:block"
              onClick={() => setOpenSearchSection(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </Container>
      </div>
      <div className="py-6 md:py-16">
        <Container>
          <div className="col-span-3 hidden md:block">
            <SearchTitle title="Recently Search" />
            <SearchTitleList
            gender = {gender}
              setOpenSearchSection={setOpenSearchSection}
              searchHistory={searchHistory}
            />
          </div>
          <div className="col-span-full md:col-span-9">
            <SearchTitle title="Relative Products" />
            {!isLoading && data?.data && data?.data.length ? (
              <SearchProducts data={data.data} q={searchRef.current.value} />
            ) : (
              <NoData />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SearchSection;

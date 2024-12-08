import React from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import SearchTitle from "./SearchTitle";
import SearchProducts from "./SearchProducts";
import SearchTitleList from "./SearchTitleList";

interface SearchSectionInterface {
  setOpenSearchSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSection = ({ setOpenSearchSection }: SearchSectionInterface) => {
  return (
    <div className="w-full h-full overflow-y-scroll z-50">
      <div className="py-4 border-b col-span-12">
        <Container>
          <div className="col-span-12 flex items-center justify-between">
            <div></div>
            <div className="flex gap-1.5 w-1/2 items-center bg-gray-100 border rounded-md px-2 py-3">
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
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm flex-1 focus:outline-none px-2 placeholder:text-black"
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
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
      <div className="py-16">
        <Container>
          <div className="col-span-3">
            <SearchTitle title="Recently Search" />
            <SearchTitleList />
          </div>
          <div className="col-span-9">
            <SearchTitle title="Recently Viewed" />
            <SearchProducts />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SearchSection;

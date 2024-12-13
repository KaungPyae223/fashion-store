import Container from "@/customer-side/components/Container";
import React from "react";
import WishListContainer from "../components/WishListContainer";
import BreadCrumb from "@/customer-side/components/BreadCrumb";

const WishListPage = () => {
  return (
    <div>
      <Container>
        <div className="h-[200px] col-span-full flex flex-col gap-6 items-center justify-center">
          <p className="uppercase text-4xl font-semibold tracking-[0.3rem]">
            Wishlist
          </p>
          <BreadCrumb
            previousSection={[{ title: "Home", link: "/" }]}
            title="Wishlist"
          />
        </div>
        <div className="col-span-full pb-10">
          <WishListContainer />
        </div>
      </Container>
    </div>
  );
};

export default WishListPage;

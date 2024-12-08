import Container from "@/customer-side/components/Container";
import React from "react";
import WishListContainer from "../components/WishListContainer";

const WishListPage = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="col-span-full">
          <p className="uppercase text-3xl mb-6 font-medium text-center tracking-widest">
            WishList
          </p>
          <WishListContainer />
        </div>
      </Container>
    </div>
  );
};

export default WishListPage;

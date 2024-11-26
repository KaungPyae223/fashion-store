import React from "react";
import SearchProductCard from "./SearchProductCard";

interface SearchProductsListInterface {
  img: string;
  title: string;
  color: string;
}

const SearchProducts = () => {
  const SearchProductsList: SearchProductsListInterface[] = [
    {
      img: "https://www.sans-sans.com.sg/wp-content/uploads/51-2815-SK-SKIRT-STREEL-BLUE.jpg",
      title: "Sisburma Mora Skirt",
      color: "Black",
    },
    {
      img: "https://down-sg.img.susercontent.com/file/e9056de381f72e15f4546f89976b0a32.webp",
      title: "Korea Dress",
      color: "White",
    },
    {
      img: "https://i.ebayimg.com/images/g/orcAAOSwdGFYu4ls/s-l1600.webp",
      title: "Korea Traditional Dress",
      color: "Black",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Pink-Shirt-For-Men.png",
      title: "Men Suit",
      color: "White",
    },
    
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {SearchProductsList.map((SearchProduct, i) => (
        <SearchProductCard
          key={i}
          img={SearchProduct.img}
          color={SearchProduct.color}
          title={SearchProduct.title}
        />
      ))}
    </div>
  );
};

export default SearchProducts;

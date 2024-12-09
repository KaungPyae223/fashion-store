import React from "react";
import WishCard from "./WishCard";

const WishListContainer = () => {
  interface Cloth {
    img: string;
    title: string;
    color: string;
    amount: string;
  }

  const Clothes: Cloth[] = [
    {
      img: "https://www.sans-sans.com.sg/wp-content/uploads/51-2815-SK-SKIRT-STREEL-BLUE.jpg",
      title: "Sisburma Mora Skirt",
      color: "Black",
      amount: "32000",
    },
    {
      img: "https://down-sg.img.susercontent.com/file/e9056de381f72e15f4546f89976b0a32.webp",
      title: "Korea Dress",
      color: "White",
      amount: "45000",
    },
    {
      img: "https://i.ebayimg.com/images/g/orcAAOSwdGFYu4ls/s-l1600.webp",
      title: "Korea Traditional Dress",
      color: "Black",
      amount: "24000",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Pink-Shirt-For-Men.png",
      title: "Men Suit",
      color: "White",
      amount: "30000",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Cream-Kurta-And-Pyjama-For-Men.png",
      title: "India Traditional Dress",
      color: "White",
      amount: "42000",
    },
    {
      img: "https://www.sans-sans.com.sg/wp-content/uploads/51-2815-SK-SKIRT-STREEL-BLUE.jpg",
      title: "Sisburma Mora Skirt",
      color: "Black",
      amount: "32000",
    },
    {
      img: "https://down-sg.img.susercontent.com/file/e9056de381f72e15f4546f89976b0a32.webp",
      title: "Korea Dress",
      color: "White",
      amount: "45000",
    },
    {
      img: "https://i.ebayimg.com/images/g/orcAAOSwdGFYu4ls/s-l1600.webp",
      title: "Korea Traditional Dress",
      color: "Black",
      amount: "24000",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Pink-Shirt-For-Men.png",
      title: "Men Suit",
      color: "White",
      amount: "30000",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Cream-Kurta-And-Pyjama-For-Men.png",
      title: "India Traditional Dress",
      color: "White",
      amount: "42000",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Cream-Kurta-And-Pyjama-For-Men.png",
      title: "India Traditional Dress",
      color: "White",
      amount: "42000",
    },
    {
      img: "https://louisphilippe.abfrl.in/blog/wp-content/uploads/2022/06/Cream-Kurta-And-Pyjama-For-Men.png",
      title: "India Traditional Dress",
      color: "White",
      amount: "42000",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-5 gap-6 gap-y-12">
      {Clothes.map((cloth, index) => (
        <WishCard img={cloth.img} title={cloth.title} color={cloth.color} amount={cloth.amount} key={index} />
      ))}
    </div>
  );
};

export default WishListContainer;
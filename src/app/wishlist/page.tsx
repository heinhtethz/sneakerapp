"use client";

import NewArrivalsCarousel from "@/components/NewArrivalsCarousel";
import React from "react";

const WishListData = [
  {
    id: 1,
    name: "Nike Air Max Plus",
    image: "https://shorturl.at/GgGEt",
    brand: "Lifestyle",
    size: 7.5,
    price: 179.44,
  },
  {
    id: 2,
    name: "Air Jordan 4RM",
    image: "/airJordan4RM.png",
    brand: "Jordan",
    color: 3,
    price: 84.99,
  },
];

const RecentlyViewedData = [
  {
    id: 1,
    name: "Future 7 Pro Firm Ground/Artificial Ground",
    image: "https://tinyurl.com/bdh4t3pf",
    brand: "Soccer",
    size: 7.5,
    price: 110,
  },
  {
    id: 2,
    name: "F50 Pro Firm Ground Cleats",
    image: "https://tinyurl.com/5n8pft46  ",
    brand: "Football",
    size: 7.5,
    price: 150,
  },
  {
    id: 3,
    name: "Nike Tempo Legend 10 Club",
    image: "https://tinyurl.com/y6txubd3",
    brand: "Football",
    size: 7.5,
    price: 49.99,
  },
  {
    id: 4,
    name: "Ultra 5 Ultimate Senna Firm Ground",
    image: "https://tinyurl.com/566y5ccv",
    brand: "Soccer",
    size: 7.5,
    price: 230,
  },
];

const WishlistPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="mt-20 mb-10">
        <h1 className="text-3xl font-bold text-center mb-4">Wishlist</h1>
        <p className="text-[#525252] text-center">
          Your wishlist is only saved in this browser.{" "}
          <a href={""} className="text-blue-500 border-b-[1px] border-blue-500">
            Sign in{" "}
          </a>
          or{" "}
          <a href={""} className="text-blue-500 border-b-[1px] border-blue-500">
            Create an Account{" "}
          </a>
          or to save your wishlist across all your devices.
        </p>
      </div>
      {/* Wishlist Items */}
      <table className="w-[80%] mx-auto text-left ">
        <thead>
          <tr className="border-y-[1px] border-[#E5E5E5] h-16 text-[#525252] text-xl">
            <th className="font-medium">Sneaker</th>
            <th className="w-[200px] font-medium">Size</th>
            <th className="w-[200px] font-medium">Price</th>
          </tr>
        </thead>
        <tbody>
          {WishListData.map((item) => {
            return (
              <tr key={item.id}>
                <td className="flex items-center gap-8 mt-8">
                  <img
                    src={item.image}
                    className="w-[178px] bg-[#F6F6F6] rounded-md"
                  ></img>
                  <div>
                    <h2 className="font-semibold text-xl">{item.name}</h2>
                    <p className="text-[#525252]">{item.brand}</p>
                  </div>
                </td>
                <td className="text-xl font-semibold">UK {item.size}</td>
                <td className="text-xl font-semibold">$ {item.price}</td>
                <td>
                  <button className="text-xs w-[100px] h-[32px] rounded-full border-[1px] border-black mr-4">
                    Remove
                  </button>
                  <button className="bg-black text-white text-xs w-[100px] h-[32px] rounded-full ">
                    Add to Bag
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Recently Viewed */}
      <NewArrivalsCarousel
        sneakers={RecentlyViewedData}
        title={"Recently Viewed"}
      />
    </div>
  );
};

export default WishlistPage;

"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import { NikeShoes } from "../page";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import NewArrivalsCarousel from "@/components/NewArrivalsCarousel";

export const ShoeSizes = [
  "3",
  "3.5",
  "4",
  "4.5",
  "5",
  "5.5",
  "6 (EU 39)",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "13.5",
];

const YouMightAlsoLikedShoes = [
  {
    id: 1,
    name: "Nike Air Max Plus",
    image: "https://shorturl.at/GgGEt",
    brand: "Lifestyle",
    color: 4,
    price: 174.99,
  },
  {
    id: 2,
    name: "Air Jordan 4RM",
    image: "/airJordan4RM.png",
    brand: "Jordan",
    color: 3,
    price: 84.99,
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    image: "/nikeAirForce107.png",
    brand: "Lifestyle",
    color: 1,
    price: 119.99,
  },
  {
    id: 4,
    name: "Air Jordan 1 Low",
    image: "https://shorturl.at/7R3kM",
    brand: "Jordan",
    color: 17,
    price: 119.99,
  },
  {
    id: 5,
    name: "Nike P-6000 Premium",
    image: "https://shorturl.at/FtIgR",
    brand: "Lifestyle",
    color: 8,
    price: 109.99,
  },
  {
    id: 6,
    name: "Nike React Vision",
    image: "https://tinyurl.com/msu89rtb",
    brand: "Lifestyle",
    color: 1,
    price: 129.99,
  },
  {
    id: 7,
    name: "Nike Pegasus 41 Blueprint",
    image: "https://tinyurl.com/26xhneky",
    brand: "Running",
    color: 9,
    price: 129.99,
  },
  {
    id: 8,
    name: "Nike Air Max Plus Drift",
    image: "https://tinyurl.com/ytw6wcsf",
    brand: "Lifestyle",
    color: 3,
    price: 184.99,
  },
  {
    id: 9,
    name: "Nike Air Max Plus 3",
    image: "https://tinyurl.com/52uyn463",
    brand: "Lifestyle",
    color: 1,
    price: 174.99,
  },
  {
    id: 10,
    name: "Nike Dunk Low Retro SE ",
    image: "https://tinyurl.com/575ptndf",
    brand: "Lifestyle",
    color: 1,
    price: 109.99,
  },
];

const NikeAddToBagPage = () => {
  const { id } = useParams();
  const [arrow, setArrow] = useState(false);

  const validShoeById = NikeShoes.find((shoe) => shoe.id === Number(id));
  const firstThreeShoes = NikeShoes.filter((item) => {
    return item.id <= 3;
  });

  return (
    <div className="mt-8">
      <div className="max-w-[1216px] mx-auto">
        <div className="flex justify-evenly">
          <div>
            {validShoeById?.detailImage.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item}
                  className={
                    index === 0
                      ? "border-2 border-black w-[60px] h-[60px] mb-4 rounded-[8px] bg-[#f6f6f6]"
                      : "w-[60px] h-[60px] mb-4 rounded-[8px] bg-[#f6f6f6]"
                  }
                ></img>
              );
            })}
          </div>
          <img
            src={validShoeById?.image}
            className="w-[620px] h-[665px] bg-[#f6f6f6] p-4"
          />
          <div>
            <h1 className="text-3xl font-bold">Nike Air Max Plus</h1>
            <p className="text-[#525252] "> Lifestyle</p>
            <p className="font-bold mt-6">$ 174.99</p>
            <div className="flex mt-7">
              {firstThreeShoes.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.image}
                    className={
                      index === 0
                        ? "border-2 border-black w-[60px] h-[60px] mr-2 rounded-[8px] bg-[#f6f6f6]"
                        : "w-[60px] h-[60px] mr-2 rounded-[8px] bg-[#f6f6f6]"
                    }
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-8">
              {ShoeSizes.map((size, index) => (
                <button
                  key={index}
                  className="w-[155px] h-[46px] border-[1px] border-gray-300 rounded-[8px] hover:bg-green-500
              hover:text-white"
                >
                  UK {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <div className="w-[480px]">
            <div className="flex justify-between border-b-[1px] pb-4">
              <h1 className="text-xl font-bold">Descriptions</h1>
              <div onClick={() => setArrow(!arrow)}>
                {arrow ? <GoChevronUp /> : <GoChevronDown />}
              </div>
            </div>
            <div>
              {arrow && (
                <p className="mt-8 text-[#525252]">
                  The Nike Air Max Plus is a sneaker that has been around for
                  over 20 years. It is a classic shoe that has been worn by many
                  people over the years. The shoe is known for its comfort and
                  style. The Nike Air Max Plus is a great shoe for anyone who is
                  looking for a comfortable and stylish sneaker.
                </p>
              )}
            </div>
            <div className="flex justify-between mt-8">
              <button className="w-[230px] h-[50px] border-black border-2 rounded-full">
                Favourite
              </button>
              <button className="w-[230px] h-[50px] bg-black text-white rounded-full">
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      <NewArrivalsCarousel
        sneakers={YouMightAlsoLikedShoes}
        title="You Might Also Like"
      />
    </div>
  );
};

export default NikeAddToBagPage;

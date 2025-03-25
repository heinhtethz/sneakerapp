"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import NewArrivalsCarousel, {
  Sneakers,
} from "@/components/NewArrivalsCarousel";
import { ShoesProp } from "./PagesByBrands";
import { useNavigate } from "react-router";

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

interface Props {
  shoes: ShoesProp[];
  youMightAlsoLikeShoes: Sneakers[];
}

const ShoeDetailPage = ({ shoes, youMightAlsoLikeShoes }: Props) => {
  const { id } = useParams();
  const [arrow, setArrow] = useState(false);
  const router = useRouter();

  const validShoeById = shoes.find(
    (item) => item.id === Number(id)
  ) as ShoesProp;
  const firstThreeShoes = shoes.filter((item) => {
    return item.id <= 3;
  });

  return (
    <div className="mt-8">
      <div className="max-w-[1216px] mx-auto">
        <div className="flex justify-evenly">
          <div>
            {validShoeById.detailImage &&
              validShoeById?.detailImage.map((item, index) => {
                return (
                  <img
                    key={index}
                    tabIndex={index}
                    src={item}
                    className={
                      "w-[60px] h-[60px] mb-4 rounded-[8px] bg-[#f6f6f6] focus:border-2 focus:border-black"
                    }
                  ></img>
                );
              })}
          </div>
          <img
            src={validShoeById?.image}
            className="w-[620px] h-[665px] bg-[#f6f6f6] "
          />
          <div>
            <h1 className="text-3xl font-bold">{validShoeById.name}</h1>
            <p className="text-[#525252] "> {validShoeById.brand} </p>
            <p className="font-bold mt-6">$ {validShoeById.price}</p>
            <div className="flex mt-7">
              {firstThreeShoes.map((item, index) => {
                return (
                  <div
                    key={index}
                    tabIndex={item.id}
                    className="w-[60px] h-[60px] mr-2 rounded-[8px] bg-[#f6f6f6] focus:border-2 focus:border-black"
                  >
                    <img src={item.image} className={""} />
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-8">
              {ShoeSizes.map((size, index) => (
                <button
                  key={index}
                  className="w-[155px] h-[46px] border-[1px] border-gray-300 rounded-[8px] focus:bg-green-500
              focus:text-white"
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
              <button
                onClick={() => router.push("/wishlist")}
                className="w-[230px] h-[50px] border-black border-2 rounded-full"
              >
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
        sneakers={youMightAlsoLikeShoes}
        title="You Might Also Like"
      />
    </div>
  );
};

export default ShoeDetailPage;

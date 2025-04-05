"use client";

import { inputCss } from "@/utils/page";
import { useRouter } from "next/navigation";
import React from "react";

export const ItemsInCart = [
  {
    id: 1,
    name: "Nike Air Max Plus",
    image: "https://shorturl.at/GgGEt",
    brand: "Lifestyle",
    color: 4,
    price: 174.99,
    size: 7.5,
  },
  {
    id: 2,
    name: "Air Jordan 4RM",
    image: "/airJordan4RM.png",
    brand: "Jordan",
    color: 3,
    price: 84.99,
    size: 6.5,
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    image: "/nikeAirForce107.png",
    brand: "Lifestyle",
    color: 1,
    price: 119.99,
    size: 12,
  },
];

const UserInformation = () => {
  const router = useRouter();

  return (
    <div className="flex justify-around mt-10">
      {/* User Information */}
      <div className="w-[592px]">
        <h1 className="text-3xl font-semibold pb-8">User Information</h1>
        <div className="grid grid-cols-6 gap-6">
          <input
            className={`${inputCss} col-start-1 col-end-4`}
            placeholder="First Name"
          />
          <input
            className={`${inputCss} col-start-4 col-end-7`}
            placeholder="Last Name"
          />
          <input className={`${inputCss} col-span-6`} placeholder="Email" />
          <input
            className={`${inputCss} col-span-6`}
            placeholder="Phone Number"
          />
          <input
            className={`${inputCss} col-span-6`}
            placeholder="Address Line 1"
          />
          <input
            className={`${inputCss} col-span-6`}
            placeholder="Address LIne 2 (Optional)"
          />
          <input className={`${inputCss} col-span-2`} placeholder="City" />
          <input className={`${inputCss} col-span-2`} placeholder="State" />
          <input className={`${inputCss} col-span-2`} placeholder="Postal" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-14">
          <button
            className="p-3 border-black border-[1px] rounded-full"
            onClick={() => router.push("/cart")}
          >
            Prev
          </button>
          <button
            className="p-3 bg-black text-white rounded-full"
            onClick={() => router.push("/checkout/payment")}
          >
            Next
          </button>
        </div>
      </div>
      {/* Summary */}
      <div className="w-[420px] h-fit bg-[#F6F6F6] p-5">
        <h1 className="text-3xl font-semibold pb-8 rounded-md">Summary</h1>
        {ItemsInCart.map((item, index) => {
          return (
            <div
              className="flex justify-between mb-5 text-[18px]"
              key={item.id}
            >
              <p className="w-[60%]">{item.name}</p>
              <p className="w-[10%]">x 2</p>
              <p className="w-[20%]">$ {(item.price * 2).toFixed(2)}</p>
            </div>
          );
        })}
        <div className="flex justify-between text-[18px] mb-5">
          <p>Subtotal</p>
          <p className="w-[20%]">$ 549.92</p>
        </div>
        <div className="flex justify-between text-[18px]">
          <p>Shipping Fees</p>
          <p className="w-[20%]">$ 100</p>
        </div>
        <div className="flex justify-between text-[18px] font-semibold mt-10 border-y-[1px] border-black py-5">
          <p>Total</p>
          <p className="w-[20%]">$ 649.92</p>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;

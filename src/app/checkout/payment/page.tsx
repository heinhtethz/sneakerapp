"use client";

import { inputCss } from "@/utils/page";
import React from "react";
import { ItemsInCart } from "../userInformation/page";
import { useRouter } from "next/navigation";

const AvailablePaymentMethods = [
  { id: 1, name: "Card", image: "/Cards.png" },
  { id: 2, name: "Paypal", image: "/Paypal.png" },
  { id: 3, name: "Apple", image: "/Apple.png" },
];

const PaymentMethod = () => {
  const router = useRouter();
  return (
    <div className="mt-10 flex justify-around ">
      {/* Payment Method*/}
      <div className="w-[592px]">
        <h2 className="text-3xl font-semibold">Payment Method</h2>
        <div className="grid grid-cols-3 gap-3 gap-y-8 mt-10">
          {AvailablePaymentMethods.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[186px] px-7 py-3 rounded-md bg-[#f6f6f6] hover:border-black hover:border-[1px]"
              >
                <div className="rounded-sm flex justify-center">
                  <img src={item.image} />
                </div>
                <p className="text-center mt-2 text-sm">{item.name}</p>
              </div>
            );
          })}
          <div className="inline-grid col-span-3">
            <p className="text-sm text-[#171717] ">Name</p>
            <input className={`${inputCss}`} placeholder="Name" />
          </div>
          <div className="inline-grid col-span-3">
            <p className="text-sm text-[#171717]">Card Number</p>
            <input
              className={`${inputCss} col-span-3`}
              placeholder="Card number"
            />
          </div>
          <div className="inline-grid ">
            <p className="text-sm text-[#171717]">Expires</p>
            <input className={`${inputCss} w-[187px]`} placeholder="Expires" />
          </div>

          <div className="inline-grid">
            <p className="text-sm text-[#171717]">Year</p>
            <input className={`${inputCss} w-[187px]`} placeholder="Year" />
          </div>
          <div className="inline-grid">
            <p className="text-sm text-[#171717]">CVC</p>
            <input className={`${inputCss} w-[187px]`} placeholder="CVC" />
          </div>
        </div>
        {/* Buttons*/}
        <div className="grid grid-cols-2 mt-14 gap-4">
          <button
            className="p-3 border-black border-[1px] rounded-full"
            onClick={() => router.push("/checkout/userInformation")}
          >
            Prev
          </button>
          <button
            className="p-3 bg-black text-white rounded-full"
            onClick={() => router.push("/thankyou")}
          >
            Proceed to Payment
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

export default PaymentMethod;

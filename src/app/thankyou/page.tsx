"use client";

import NewArrivalsCarousel from "@/components/NewArrivalsCarousel";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RecentlyViewedData } from "../wishlist/page";

const orderDetails = [
  {
    content: "Shipping Address",
    text: "1744(A), Shwe Myitter Street, 1/Anawmar Ward, Thaketa, Yangon",
  },
  { content: "Date", text: "March 14, 2025" },
  { content: "Payment", text: "Visa: **** **** **** 8395" },
];

const ThankyouPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-around">
        {/* Thankyou for your order*/}
        <div className="w-[380px]">
          <div className="flex items-center gap-2 mt-20">
            <div className="bg-[#22C55E]  w-fit h-fit rounded-full p-2">
              <IoMdCheckmark className="text-2xl text-[#FFFFFF]" />
            </div>
            <div>
              <p className="text-sm">Order # 11223344</p>
              <h3 className="text-2xl font-semibold">
                Thank you for your order!
              </h3>
            </div>
          </div>
          <div className="mt-16">
            {orderDetails.map((item, index) => {
              return (
                <div key={index} className="mt-8">
                  <h4 className="font-semibold text-xl">{item.content}</h4>
                  <p className="text-[#525252] text-base">{item.text}</p>
                </div>
              );
            })}
          </div>
          <button
            className="bg-black text-white rounded-full px-8 py-2 mt-8"
            onClick={() => {
              router.push("/nike");
            }}
          >
            Continue Shopping
          </button>
        </div>
        {/* Thankyou Page Image */}
        <img src="/thankyouPageImage.png" className="mt-20" />
      </div>
      {/* Recently viewed */}
      <NewArrivalsCarousel
        sneakers={RecentlyViewedData}
        title={"Recently Viewed"}
      />
    </div>
  );
};

export default ThankyouPage;

import { brands } from "@/components/Brands";
import OurShoes from "@/components/OurShoes";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="relative  w-[80%] m-auto">
      <div className="bg-[rgb(246,246,246)] border border-[#A3A3A3] rounded-lg mt-20">
        <img src="peopleImage.png" />
      </div>
      <div className="absolute top-24 left-1 m-0">
        <div className="w-[587px] p-8 border border-[#E5E5E5] rounded-lg bg-white">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-xl text-[#525252] mt-8">
            At PERFECTPAIR, we are passionate about delivering the finest
            selection of sneakers from the world’s top brands. Whether you’re a
            fan of Nike, Adidas, Puma, or Converse, we’ve got the perfect pair
            for you.
          </p>
        </div>
        <div className="w-[587px] flex items-center mt-8 gap-10 mx-10">
          {brands.map((item, index) => {
            return (
              <img
                src={item.image}
                alt="logo"
                key={index}
                className={item.id === 1 ? `w-[32px]` : `w-[24px]`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex h-[800px] justify-between mt-20">
        <img src="missionImg.png" className="flex flex-col self-end"></img>
        <img src="visionImg.png" className="flex flex-col self-center"></img>
        <img src="valueImg.png" className="flex flex-col self-start"></img>
      </div>
      <OurShoes />
    </div>
  );
};

export default AboutUsPage;

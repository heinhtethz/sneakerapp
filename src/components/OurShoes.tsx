import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const OurStores = [
  {
    state: "New York 11741, USA",
    city: "Holbrook",
    street: "396 Lillian Bolavandy",
  },
  {
    state: "California 32806, USA",
    city: "San Francisco",
    street: "514 S. Magnolia St.",
  },
];

const OurShoes = () => {
  return (
    <div className="w-[1216px] m-auto flex mt-32">
      <img src="/ourstoresImage.png" className="w-[50%]" />
      <div className="bg-[#F6F6F6] w-[50%] rounded-r-md flex flex-col justify-center px-20">
        <h2 className="text-3xl font-semibold">Our Stores</h2>
        {OurStores.map((item, index) => {
          return (
            <div key={index} className="mt-10">
              <p className="text-[#525252] text-base">{item.state}</p>
              <p className="text-[#525252] text-base">
                {item.street}, {item.city}
              </p>
              <p className="flex items-center font-bold text-base mt-5">
                Show on map <FaChevronRight />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurShoes;

import Link from "next/link";
import React from "react";

export const brands = [
  { id: 1, name: "Nike", route: "/nike", image: "/nikeLogo.png" },
  { id: 2, name: "Adidas", route: "/adidas", image: "/adidasLogo.png" },
  { id: 3, name: "Converse", route: "/converse", image: "/converseLogo.png" },
  { id: 4, name: "Puma", route: "/puma", image: "/pumaLogo.png" },
];

const Brands = () => {
  return (
    <div className="mt-32">
      <h1 className="flex justify-center font-bold text-3xl mb-8">Brands</h1>
      <div className="flex justify-between items-center gap-8 w-[70%] mx-auto">
        {brands.map((item, index) => {
          return (
            <Link href={item.route} key={index}>
              <div className="bg-[#F6F6F6] w-[150px] h-[150px] rounded-full flex items-center justify-center">
                <img src={item.image} alt="Logo" className="w-[80px]" />
              </div>
              <p className="flex justify-center text-xl font-semibold mt-4">
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;

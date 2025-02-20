import Link from "next/link";
import React from "react";

const Brands = () => {
  const brands = [
    { route: "/nike", image: "/nikeLogo.png" },
    { route: "/adidas", image: "/adidasLogo.png" },
    { route: "/converse", image: "/converseLogo.png" },
    { route: "/puma", image: "/pumaLogo.png" },
  ];
  return (
    <div className="mt-32">
      <h1 className="flex justify-center font-bold text-3xl mb-8">Brands</h1>
      <div className="flex justify-center items-center gap-8">
        {brands.map((item, index) => {
          return (
            <Link href={item.route} key={index}>
              <img src={item.image} alt="Logo" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;

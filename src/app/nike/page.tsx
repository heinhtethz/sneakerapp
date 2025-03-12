import PagesByBrands from "@/components/PagesByBrands";
import React from "react";

const NikeShoes = [
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

const NikePage = () => {
  return (
    <div>
      <PagesByBrands
        shoesData={NikeShoes}
        posterImage="/nikeCoverImage.png"
        title="Nike"
      />
    </div>
  );
};

export default NikePage;

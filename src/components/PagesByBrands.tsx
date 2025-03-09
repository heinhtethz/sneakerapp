"use client";

import FilterBar from "@/components/FilterBar";
import { motion } from "framer-motion";
import { useState } from "react";

interface ShoesProp {
  id: number;
  name: string;
  image: string;
  brand: string;
  color: number;
  price: number;
}

interface Props {
  shoeData: ShoesProp[];
  posterImage: string;
  title: string;
}

const PagesByBrands = ({ shoeData, posterImage, title }: Props) => {
  const [hovered, setHovered] = useState(shoeData.map(() => false));

  const firstThreeShoes = shoeData.filter((item) => {
    return item.id <= 3;
  });

  const hovering = (index: number) => {
    setHovered((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const notHovering = (index: number) => {
    setHovered((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className="">
      <img src={posterImage} className="w-full"></img>
      <FilterBar name={title} />
      <div className="w-[85%] mx-auto grid grid-cols-4 mt-10">
        {shoeData.map((items, index) => {
          return (
            <div
              className="w-[280px] h-[412px]"
              key={items.id}
              onMouseEnter={() => hovering(index)}
              onMouseLeave={() => notHovering(index)}
            >
              <div className="h-[250px] bg-[#f6f6f6] rounded-lg">
                <img src={items.image} className="w-[250px] mx-auto" />
              </div>

              <motion.div
                className="flex gap-2 mt-2"
                animate={{ opacity: hovered[index] ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {firstThreeShoes.map((items, index) => {
                  return (
                    <div
                      key={items.id}
                      className={
                        index === 0
                          ? "rounded-lg w-16 h-16 bg-[#f6f6f6] border-slate-800 border-2"
                          : "rounded-lg w-16 h-16 bg-[#f6f6f6]"
                      }
                    >
                      <img src={items.image} className="w-14 m-auto" />
                    </div>
                  );
                })}
                <div className="rounded-lg w-16 h-16 bg-[#f6f6f6] text-center p-5 font-bold">
                  {shoeData.length - 3}+
                </div>
              </motion.div>

              <motion.div
                className="mt-4"
                animate={{ y: hovered[index] ? -30 : -90 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.h1
                  className="text-lg font-bold"
                  animate={{ y: hovered[index] ? 25 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {items.name}
                </motion.h1>

                <motion.div
                  animate={{
                    y: hovered[index] ? 20 : 0,
                    opacity: hovered[index] ? 0 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h4 className="text-[#525252]">{items.brand}</h4>
                  <h4 className="text-[#525252]">{items.color} Colors</h4>
                </motion.div>

                <motion.h4
                  className="font-bold"
                  animate={{ y: hovered[index] ? -20 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  $ {items.price}
                </motion.h4>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PagesByBrands;

"use client";

import FilterBar from "@/components/FilterBar";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface ShoesProp {
  id: number;
  name: string;
  image: string;
  detailImage?: string[];
  brand: string;
  color: number;
  price: number;
}

interface Props {
  shoesData: ShoesProp[];
  posterImage: string;
  title: string;
}

const PagesByBrands = ({ shoesData, posterImage, title }: Props) => {
  const pathname = usePathname();

  const [hovered, setHovered] = useState(shoesData.map(() => false));

  const firstThreeShoes = shoesData.filter((item) => {
    return item.id <= 3;
  });

  const hovering = (index: number) => {
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
      <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-5 mt-10 gap-x-2">
        {shoesData.map((items, index) => {
          return (
            <Link href={`${pathname}/${items.id}`} key={items.id}>
              <div
                className="min-w-[170px]"
                onMouseEnter={() => hovering(index)}
                onMouseLeave={() => hovering(index)}
              >
                <div className="bg-[#f6f6f6] rounded-lg">
                  <img src={items.image} className="w-full mx-auto" />
                </div>

                <motion.div
                  className="flex gap-1 mt-5"
                  animate={{ opacity: hovered[index] ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {firstThreeShoes.map((items, index) => {
                    return (
                      <div
                        key={items.id}
                        className={
                          index === 0
                            ? "rounded-lg w-1/4 bg-[#f6f6f6] border-slate-800 border-2"
                            : "rounded-lg w-1/4 bg-[#f6f6f6]"
                        }
                      >
                        <img src={items.image} className="rounded-md" />
                      </div>
                    );
                  })}
                  {items.color > 3 && (
                    <div className="rounded-lg w-1/4 bg-[#f6f6f6] flex items-center justify-center font-semibold text-base sm:text-xl md:text-lg">
                      {items.color - 3}+
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className="mt-5 ml-2"
                  animate={{ y: hovered[index] ? -30 : -90 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.h1
                    className="text-base sm:text-xl md:text-lg text-[#171717] font-semibold"
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
                    <h4 className="text-[#525252] text-sm sm:text-lg md:text-base">
                      {items.brand}
                    </h4>
                    <h4 className="text-[#525252] text-sm sm:text-lg md:text-base">
                      {items.color} Colors
                    </h4>
                  </motion.div>

                  <motion.h4
                    className="font-bold text-sm sm:text-lg md:text-base"
                    animate={{ y: hovered[index] ? -20 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    $ {items.price}
                  </motion.h4>
                </motion.div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PagesByBrands;

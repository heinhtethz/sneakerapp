"use client";

import React from "react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DialogComponent from "./Dialog";
import { CiFilter } from "react-icons/ci";

interface FilterBarProps {
  name: string;
}

const FilterBar = ({ name }: FilterBarProps) => {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  const NikeLinks = [
    { name: "Men", route: "nike/men" },
    { name: "Women", route: "nike/women" },
    { name: "Kids", route: "nike/kids" },
  ];
  return (
    <div>
      <div className="flex justify-between w-[85%] mx-auto mt-10 items-center flex-wrap">
        <span className="text-lg font-bold">{name}</span>
        <span></span>
        <div className="flex gap-x-8 font-[600] text-md">
          {NikeLinks.map((item, index) => {
            return (
              <Link
                href=""
                className={
                  pathname === item.route
                    ? "border-b-[3px] border-green-500 text-green-500"
                    : index === 0
                    ? "border-b-[3px] border-green-500 text-green-500"
                    : "border-b-[3px] border-white hover:text-green-500 hover:border-green-500"
                }
                key={index}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="relative flex gap-x-5">
          <SearchInput />
          <div
            className="bg-black text-white text-lg rounded-full w-9 h-9 flex items-center justify-center hover:bg-green-500 hover:text-black"
            onClick={() => setOpen(!open)}
          >
            <CiFilter />
          </div>
        </div>
      </div>
      <DialogComponent open={open} setOpen={setOpen} />
    </div>
  );
};

export default FilterBar;

"use client";

import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

interface DialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const filterContents = [
  "Icons",
  "Activities",
  "Shop By Price",
  "Sizes",
  "Gender",
];

export default function DialogComponent({ open, setOpen }: DialogProps) {
  const [openIndexes, setOpenIndexes] = useState(
    filterContents.map(() => false)
  );

  const toggleArrow = (index: number) => {
    setOpenIndexes((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index]; // Toggle the specific index
      return newState;
    });
  };

  return (
    <div className="relative z-10">
      <AnimatePresence>
        {open && (
          <div>
            <div
              className="bg-gray-300/75 fixed inset-0"
              onClick={() => setOpen(!open)}
            ></div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[420px] bg-white shadow-lg text-lg"
            >
              <div className="flex justify-between items-center p-5">
                <h3 className="text-lg font-bold">Sneaker Filters</h3>
                <div
                  className="bg-black text-white text-lg rounded-full w-9 h-9 flex items-center justify-center"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <RxCross2 />
                </div>
              </div>
              <div className="border-b-2"></div>
              <div className="mt-5 px-5">
                {filterContents.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center py-6 border-b-[1px]"
                      onClick={() => toggleArrow(index)}
                    >
                      <div>{item}</div>
                      <div>
                        {openIndexes[index] ? (
                          <GoChevronUp />
                        ) : (
                          <GoChevronDown />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-white bg-black rounded-full w-[120px] p-2 mx-auto text-center mt-28">
                <button>Apply</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

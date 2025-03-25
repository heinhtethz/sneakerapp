"use client";

import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ItemsInCart = [
  {
    id: 1,
    name: "Nike Air Max Plus",
    image: "https://shorturl.at/GgGEt",
    brand: "Lifestyle",
    color: 4,
    price: 174.99,
    size: 7.5,
  },
  {
    id: 2,
    name: "Air Jordan 4RM",
    image: "/airJordan4RM.png",
    brand: "Jordan",
    color: 3,
    price: 84.99,
    size: 6.5,
  },
  {
    id: 3,
    name: "Nike Air Force 1 '07",
    image: "/nikeAirForce107.png",
    brand: "Lifestyle",
    color: 1,
    price: 119.99,
    size: 12,
  },
];

const CartPage = () => {
  const [quantities, setQuantities] = useState(ItemsInCart.map(() => 1));
  const [itemPrice, setItemPrice] = useState(
    ItemsInCart.map((item) => item.price)
  );
  let totalPrice = 0;
  itemPrice.forEach((item, index) => {
    totalPrice += item * quantities[index];
  });

  const quantityIncrease = (index: number) => {
    setQuantities((prev) => {
      const newState = [...prev];
      newState[index] += 1;
      return newState;
    });
  };

  const quantityDecrease = (index: number) => {
    setQuantities((prev) => {
      const newState = [...prev];
      newState[index] -= 1;
      return newState;
    });
  };

  return (
    <div className="flex justify-around">
      <div className="w-[30%] px-5">
        <h1 className="text-xl font-semibold py-8">Shopping Cart</h1>
        <div className="border-b-[1px] border-[#E5E5E5]"></div>
        {ItemsInCart.map((item, index) => {
          return (
            <div
              className="flex justify-between py-8 border-b-[1px] border-[#E5E5E5]"
              key={item.id}
            >
              <div className="flex gap-x-4">
                <img
                  src={item.image}
                  className="w-[100px] h-[100px] rounded-s bg-[#f6f6f6]"
                ></img>
                <div>
                  <h2 className="text-[16px] font-semibold">{item.name}</h2>
                  <p className="text-[#525252] text-sm">{item.brand}</p>
                  <p className="text-[#525252] text-sm">size: UK {item.size}</p>
                  <h2 className="text-[16px] font-semibold">$ {item.price}</h2>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 flex items-center gap-2 justify-center text-[16px] border-[1px] border-[#525252] rounded-full">
                  <FaMinus
                    onClick={() => {
                      if (quantities[index] > 1) {
                        quantityDecrease(index);
                      }
                    }}
                  />
                  <h4 className="text-lg font-bold select-none">
                    {quantities[index]}
                  </h4>
                  <FaPlus onClick={() => quantityIncrease(index)} />
                </div>
                <div className="border-[1px] border-[#525252] rounded-full p-1">
                  <AiOutlineDelete />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[30%] px-5">
        <h1 className="text-xl font-semibold py-8">Summary</h1>
        {ItemsInCart.map((item, index) => {
          return (
            <div
              className="flex justify-between mb-5 text-[18px]"
              key={item.id}
            >
              <p className="w-[60%]">{item.name}</p>
              <p className="w-[10%]">x {quantities[index]}</p>
              <p className="w-[20%]">
                $ {(item.price * quantities[index]).toFixed(2)}
              </p>
            </div>
          );
        })}
        <div className="flex justify-between text-[18px] font-semibold mt-10">
          <p>Subtotal</p>
          <p className="w-[20%]">$ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
export default CartPage;

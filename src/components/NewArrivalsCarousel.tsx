import { motion } from "framer-motion";
import { useRef } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export interface Sneakers {
  name: string;
  image: string;
  brand: string;
  price: number;
  color?: number;
}

interface Props {
  sneakers: Sneakers[];
  title: string;
}

const NewArrivalsCarousel = ({ sneakers, title }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -520, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 520, behavior: "smooth" });
    }
  };
  return (
    <div className="mt-20 flex flex-col items-center py-10">
      <div className="flex justify-between w-[80%] mb-5">
        <h3 className="text-[32px] font-bold">{title}</h3>
        <div className="flex  items-center gap-2">
          <button
            onClick={scrollLeft}
            className="text-4xl bg-[#e5e5e5] rounded-full hover:bg-gray-700 transition"
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="text-4xl bg-[#e5e5e5] rounded-full  hover:bg-gray-700 transition"
          >
            <GoChevronRight />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex w-[80%] overflow-x-auto scroll-smooth scrollbar-hide gap-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {sneakers.map((item, index) => {
          return (
            <div key={index}>
              <div className="relative bg-[#f6f6f6] w-[300px] h-[300px] rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt="Air Max Shoe"
                  className="w-[488px]"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg">{item.name}</h1>
                <p className="text-gray-400 text-sm">{item.brand}</p>
                {item.color && (
                  <p className="text-gray-400 text-sm">{item.color} Color</p>
                )}
                <h3 className="font-bold text-sm">${item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalsCarousel;

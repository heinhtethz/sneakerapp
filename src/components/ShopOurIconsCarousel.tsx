import { motion } from "framer-motion";
import { useRef } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface Sneakers {
  name: string;
  image: string;
}

interface Props {
  sneakers: Sneakers[];
}

const ShopOurIconsCarousel = ({ sneakers }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#171717] mt-[-2] text-white flex flex-col items-center py-10">
      <div className="flex justify-between w-[80%] mb-5">
        <h3 className="text-[32px]">Shop Our Icons</h3>
        <div className="flex  items-center gap-2">
          <button
            onClick={scrollLeft}
            className="text-4xl bg-[#404040] rounded-full hover:bg-gray-700 transition"
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="text-4xl bg-[#404040] rounded-full  hover:bg-gray-700 transition"
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
            <motion.div
              className="relative bg-[#262626] p-6 rounded-lg min-w-[420px] h-[250px] flex items-center justify-center"
              key={index}
            >
              <img src={item.image} alt="Air Max Shoe" className="" />

              <div className="absolute bottom-2 left-6 bg-white text-black text-sm font-medium px-3 py-1 rounded-full shadow-md">
                {item.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopOurIconsCarousel;

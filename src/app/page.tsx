"use client";

import Link from "next/link";
import ShopOurIconsCarousel from "@/components/ShopOurIconsCarousel";
import NewArrivalsCarousel from "@/components/NewArrivalsCarousel";
import Poster from "@/components/Poster";
import Brands from "@/components/Brands";
import Testimonial from "@/components/Testimonial";
import DownloadApp from "@/components/DownloadApp";

export default function Home() {
  const sneakers = [
    {
      name: "Nike",
      image: "/airmax.svg",
    },
    {
      name: "Air Force 1",
      image: "/airforce1.svg",
    },
    {
      name: "Nike",
      image: "/airmax.svg",
    },
    {
      name: "Air Force 1",
      image: "/airforce1.svg",
    },
    {
      name: "Nike",
      image: "/airmax.svg",
    },
    {
      name: "Air Force 1",
      image: "/airforce1.svg",
    },
    {
      name: "Nike",
      image: "/airmax.svg",
    },
    {
      name: "Air Force 1",
      image: "/airforce1.svg",
    },
    {
      name: "Nike",
      image: "/airmax.svg",
    },
    {
      name: "Air Force 1",
      image: "/airforce1.svg",
    },
  ];

  const newArrivals = [
    {
      name: "Nike Air Force 1 '07",
      brand: "Air Force",
      image: "https://bit.ly/4gYwZiV",
      price: 100,
    },
    {
      name: "Air Jordan 4RM",
      brand: "Jordan",
      image: "https://bit.ly/4gIyQYE",
      price: 150,
    },
    {
      name: "Nike Air Force 1 '07",
      brand: "Air Force",
      image: "https://bit.ly/4gYwZiV",
      price: 100,
    },
    {
      name: "Air Jordan 4RM",
      brand: "Jordan",
      image: "https://bit.ly/4gIyQYE",
      price: 150,
    },
    {
      name: "Nike Air Force 1 '07",
      brand: "Air Force",
      image: "https://bit.ly/4gYwZiV",
      price: 100,
    },
    {
      name: "Air Jordan 4RM",
      brand: "Jordan",
      image: "https://bit.ly/4gIyQYE",
      price: 150,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <img src="/textImage.png" alt="Text" className="" />
        <Link
          href="/nike"
          className="bg-black text-white w-[181px] h-[52px] scale-50 sm:scale-100 rounded-full mt-10 hover:bg-green-500 flex items-center justify-center"
        >
          Shop Now
        </Link>
      </div>
      <div>
        <img src="/shoes.png" className="w-full"></img>
        <ShopOurIconsCarousel sneakers={sneakers} />
        <img src="/bottomCurve.svg" className="w-full mt-[-2px]" />
        <NewArrivalsCarousel sneakers={newArrivals} title="New Arrivals" />
      </div>
      <Poster />
      <Brands />
      <Testimonial />
      <DownloadApp />
    </div>
  );
}

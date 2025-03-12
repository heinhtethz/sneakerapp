import PagesByBrands from "@/components/PagesByBrands";

const PumaShoes = [
  {
    id: 1,
    name: "Suede XL Sneakers",
    image: "https://tinyurl.com/b2d47475",
    brand: "Classics",
    color: 14,
    price: 85,
  },
  {
    id: 2,
    name: "Suede Terrace Sneakers",
    image: "https://tinyurl.com/2enwvh9p",
    brand: "Classics",
    color: 1,
    price: 75,
  },
  {
    id: 3,
    name: "GV Special Sneakers",
    image: "https://tinyurl.com/mpdad58j",
    brand: "Lifestyle",
    color: 5,
    price: 90,
  },
  {
    id: 4,
    name: "Suede Classic Sneakers",
    image: "https://tinyurl.com/bfbd9deu",
    brand: "LifeStyle",
    color: 7,
    price: 75,
  },
  {
    id: 5,
    name: "Puma x The NeverWorn IV Clyde  ",
    image: "https://tinyurl.com/2jyuudzk",
    brand: "Lifestyle",
    color: 1,
    price: 110,
  },
  {
    id: 6,
    name: "Voltaic Evo Fast",
    image: "https://tinyurl.com/ycy8b2pd",
    brand: "Lifestyle",
    color: 2,
    price: 80,
  },
  {
    id: 7,
    name: "Easy Rider Supertifo",
    image: "https://tinyurl.com/46j64rx4",
    brand: "Lifestyle",
    color: 1,
    price: 90,
  },
  {
    id: 8,
    name: "A$AP Rocky x Puma Inhale Distressed Sneakers",
    image: "https://tinyurl.com/bdcwx672",
    brand: "Lifestyle",
    color: 1,
    price: 80,
  },
  {
    id: 9,
    name: "Ultra 5 Ultimate Senna Firm Ground",
    image: "https://tinyurl.com/566y5ccv",
    brand: "Soccer",
    color: 1,
    price: 230,
  },
  {
    id: 10,
    name: "Puma x Neymar JR 7 Match “BNA” Firm Ground/Artificial Ground",
    image: "https://tinyurl.com/yjacyyhv",
    brand: "Soccer",
    color: 1,
    price: 75,
  },
];

const PumaPages = () => {
  return (
    <div>
      <PagesByBrands
        shoesData={PumaShoes}
        posterImage={"/pumaCoverImage.png"}
        title={"Puma"}
      />
    </div>
  );
};

export default PumaPages;

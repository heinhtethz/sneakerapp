import PagesByBrands from "@/components/PagesByBrands";
const AdidasShoes = [
  {
    id: 1,
    name: "Dropset 3 GFX Shoes",
    image: "https://tinyurl.com/bdz29hp8",
    brand: "Training",
    color: 2,
    price: 130,
  },
  {
    id: 2,
    name: "Dropset 3 Shoes",
    image: "https://tinyurl.com/uaz37f59",
    brand: "Training",
    color: 4,
    price: 130,
  },
  {
    id: 3,
    name: "Gazelle Indoor Shoes",
    image: "https://tinyurl.com/y7m3pck5",
    brand: "Lifestyle",
    color: 16,
    price: 120,
  },
  {
    id: 4,
    name: "Ultraboost 5X Shoes",
    image: "https://tinyurl.com/2y7panwd",
    brand: "Running",
    color: 13,
    price: 180,
  },
  {
    id: 5,
    name: "Harden Volume 8 Shoes",
    image: "https://tinyurl.com/45aykcxx",
    brand: "Basketball",
    color: 5,
    price: 160,
  },
  {
    id: 6,
    name: "Stabil Next Gen Shoes",
    image: "https://tinyurl.com/2s3nyk85",
    brand: "Volleyball",
    color: 3,
    price: 160,
  },
  {
    id: 7,
    name: "Copa Pure 2 League Turf",
    image: "https://tinyurl.com/mry8d87j",
    brand: "Soccer",
    color: 2,
    price: 80,
  },
  {
    id: 8,
    name: "F50 Pro Firm Ground Cleats",
    image: "https://tinyurl.com/5n8pft46",
    brand: "Soccer",
    color: 5,
    price: 150,
  },
  {
    id: 9,
    name: "Box Hog 4 Shoes",
    image: "https://tinyurl.com/2jcyx59c",
    brand: "Training",
    color: 4,
    price: 130,
  },
  {
    id: 10,
    name: "Adipower Weightlifting 3 Shoes",
    image: "https://tinyurl.com/tmjzkypz",
    brand: "Weightlifting",
    color: 5,
    price: 230,
  },
];

const AdidasPage = () => {
  return (
    <div>
      <PagesByBrands
        shoesData={AdidasShoes}
        posterImage={"/adidasCoverImage.png"}
        title={"Adidas"}
      />
    </div>
  );
};

export default AdidasPage;

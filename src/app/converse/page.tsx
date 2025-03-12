import PagesByBrands from "@/components/PagesByBrands";

const ConverseShoes = [
  {
    id: 1,
    name: "Run Star Hike High Top",
    image: "/runStarHikeHighTop.png",
    brand: "Canvas",
    color: 1,
    price: 120,
  },
  {
    id: 2,
    name: "Chuck 70 High Top",
    image: "/chuck70HighTop.png",
    brand: "Canvas",
    color: 3,
    price: 100,
  },
  {
    id: 3,
    name: "Chuck 70 Low Top",
    image: "/chuck70LowTop.png",
    brand: "Canvas",
    color: 3,
    price: 95,
  },
  {
    id: 4,
    name: "Chuck Taylor All Star Low Top",
    image: "/chuckTaylorAllStarLowTop.png",
    brand: "Canvas",
    color: 9,
    price: 75,
  },
  {
    id: 5,
    name: "Cold Fashion Chuck Taylor All Star Lugged Winter 2.0 High Top",
    image: "/coldFashionChuckTaylor.png",
    brand: "Fashion",
    color: 1,
    price: 160,
  },
  {
    id: 6,
    name: "Chuck Taylor All Star Utility All Terrain Boot High Top",
    image: "/chuckTaylorAllStarUtility.png",
    brand: "Fashion",
    color: 2,
    price: 80,
  },
  {
    id: 7,
    name: "Chuck Taylor All Star Wide Low Top",
    image: "/chuckTaylorAllStarWide.png",
    brand: "Fashion",
    color: 3,
    price: 75,
  },
  {
    id: 8,
    name: "Mono Color Chuck 70 High Top",
    image: "/monoColorChuck.png",
    brand: "Fashion",
    color: 1,
    price: 59.99,
  },
  {
    id: 9,
    name: "CTAS Pro Suede Low Top",
    image: "/ctas.png",
    brand: "Skate & Suede",
    color: 1,
    price: 85,
  },
  {
    id: 10,
    name: "Louie Lopez Pro Low Top",
    image: "/louieLopezProLowTop.png",
    brand: "Skate & Suede",
    color: 1,
    price: 100,
  },
];

const ConversePage = () => {
  return (
    <div>
      <PagesByBrands
        shoesData={ConverseShoes}
        posterImage={"/converseCoverImage.png"}
        title={"Converse"}
      />
    </div>
  );
};

export default ConversePage;

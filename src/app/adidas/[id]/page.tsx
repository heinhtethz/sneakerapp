import ShoeDetailPage from "@/components/ShoeDetailPage";
import React from "react";
import { AdidasShoes } from "../page";

const AdidasDetailPage = () => {
  return (
    <div>
      <ShoeDetailPage shoes={AdidasShoes} youMightAlsoLikeShoes={AdidasShoes} />
    </div>
  );
};

export default AdidasDetailPage;

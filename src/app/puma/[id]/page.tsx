import ShoeDetailPage from "@/components/ShoeDetailPage";
import React from "react";
import { PumaShoes } from "../page";

const PumaDetailPage = () => {
  return (
    <div>
      <ShoeDetailPage shoes={PumaShoes} youMightAlsoLikeShoes={PumaShoes} />
    </div>
  );
};

export default PumaDetailPage;

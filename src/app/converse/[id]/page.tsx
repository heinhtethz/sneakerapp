import ShoeDetailPage from "@/components/ShoeDetailPage";
import React from "react";
import { ConverseShoes } from "../page";

const ConverseDetailPage = () => {
  return (
    <div>
      <ShoeDetailPage
        shoes={ConverseShoes}
        youMightAlsoLikeShoes={ConverseShoes}
      />
    </div>
  );
};

export default ConverseDetailPage;

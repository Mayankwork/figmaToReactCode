import React from "react";
import Header from "./Header";
import { LowerHeader } from "./LowerHeader";
import CardsSection from "./CardsSection";

const MainContent = () => {
  return (
    <div className="w-full m-4">
      <Header />
      <LowerHeader/>
      <CardsSection/>
    </div>
  );
};

export default MainContent;

import React from "react";
import SmallCard from "../Misc/SmallCard";
import cardgraph from "../images/card/cardgraph.png";
import LargeCard from "../Misc/LargeCard";
import MediumCard from "../Misc/MediumCard";

const CardsSection = () => {
  return (
    <>
      <div className="flex justify-start align-items-center flex-wrap">
        <LargeCard />
        <div className="w-1/2 h-full  flex flex-wrap  align-top">
          <SmallCard
            icon={cardgraph}
            profit={true}
            percentage={"48.19 %"}
            profitpercentage={"14%"}
            text={"Bounce Rate"}
            qmark={true}
            showprofit={true}
          />
          <SmallCard
            icon={cardgraph}
            profit={true}
            percentage={"48.19 %"}
            profitpercentage={"14%"}
            text={"Bounce Rate"}
            qmark={true}
            showprofit={true}
          />
          <SmallCard
            icon={cardgraph}
            profit={true}
            percentage={"48.19 %"}
            profitpercentage={"14%"}
            text={"Bounce Rate"}
            qmark={true}
            showprofit={true}
          />
          <SmallCard
            icon={cardgraph}
            profit={true}
            percentage={"48.19 %"}
            profitpercentage={"14%"}
            text={"Bounce Rate"}
            qmark={true}
            showprofit={true}
          />
        </div>
      </div>
      <div className="flex ">
        <MediumCard />
        <div className="m-2"></div>
        <MediumCard />
      </div>
    </>
  );
};

export default CardsSection;

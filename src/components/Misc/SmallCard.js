import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profitimg from "../images/card/profit.png";
import lossimg from "../images/card/loss.png";
import qmarkimg from "../images/card/qcard.png";
const SmallCard = ({
  icon,
  profit,
  percentage,
  profitpercentage,
  text,
  qmark,
  showprofit,
}) => {
  return (
    <Card className=" ml-3 mb-1 " style={{ border: "0px solid" }}>
      <Card.Body className="theme-background w-60 h-40 rounded-3xl">
        <div className="flex justify-start align-items-center mt-2 ms-2 ">
          {" "}
          <img width={"40px"} src={icon} />
          {profit && showprofit && (
            <img className="ms-16 me-2" src={profitimg} />
          )}
          {!profit && showprofit && (
            <img className="ms-16 me-2" src={lossimg} />
          )}
          <div className="text-sm">{profitpercentage}</div>
        </div>
        <div className="flex justify-start align-items-center mt-4 ms-2 ">
          <div className="text-2xl font-semibold">{percentage} </div>
          {qmark && <img className="ms-4 pt-3" src={qmarkimg} />}
        </div>
        <div className="ms-2 text-xs">{text}</div>
        {}
      </Card.Body>
    </Card>
  );
};

export default SmallCard;

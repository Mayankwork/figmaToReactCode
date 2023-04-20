import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MediumCard = () => {
  return (
    <Card style={{ border: "0px solid" }}>
      <Card.Body style={{width:'500px'}} className="theme-background  h-40 rounded-3xl">
        <div className="flex font-medium">Traffic Sources</div>
        <div className="divider mt-3 mb-2"></div>
        <div>
            <div className="w-3/5">
                <div className="flex py-2 px-4 w-full justify-between align-items-center rounded-2xl bg-slate-200"><div className="text-xs">Sources</div ><div className="text-xs">Sources %</div></div>
                <div className="flex py-2 px-4 w-full justify-between align-items-center rounded-2xl"><div className="text-xs font-semibold"><span className="bg-pink-600 w-4 h-1 me-2 rounded-md"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Direct</div ><div className="text-xs font-semibold">50 %</div></div>
                <div className="flex py-2 px-4 w-full justify-between align-items-center rounded-2xl"><div className="text-xs font-semibold"><span className="bg-blue-300 w-4 h-1 me-2 rounded-md"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Direct</div ><div className="text-xs font-semibold">50 %</div></div>
            </div>
            <div className="w-2/5"></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MediumCard;

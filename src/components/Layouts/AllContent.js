import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const AllContent = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};

export default AllContent;

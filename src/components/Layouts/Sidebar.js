import React from "react";
import searchIcon from "../images/searchIcon.png";
import houseIcon from "../images/houseIcon.png";
import fireIcon from "../images/fireIcon.png";
import userIcon from "../images/userIcon.png";
import fileIcon from "../images/fileIcon.png";
import tagIcon from "../images/tagIcon.png";
import settingIcon from "../images/settingIcon.png";
import helpIcon from "../images/helpIcon.png";
import logoutIcon from "../images/logoutIcon.png";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen  theme-background pt-8 px-4">
      <div className="flex justify-center align-items-center pe-5  ">
        <img width={"50px"} src={searchIcon} className="rounded-full me-3" />
        <b>Concured</b>
      </div>

      <div className="mt-16">
        <div className="flex justify-start align-items-center m-3  text-sm ">
          <img width={"20px"} src={houseIcon} className=" me-3" />
          Overview
        </div>

        <div className="flex justify-start align-items-center  m-3 text-sm ">
          <img width={"20px"} src={fireIcon} className=" me-3" />
          Opportunities
        </div>

        <div className="flex justify-start align-items-center  m-3  text-sm">
          <img width={"20px"} src={userIcon} className=" me-3" />
          My Competitors
        </div>

        <div className="flex justify-start align-items-center  m-3  text-sm">
          <img width={"20px"} src={fileIcon} className=" me-3" />
          Briefs
        </div>
        <div className="flex justify-start align-items-center  m-3  text-sm">
          <img width={"20px"} src={tagIcon} className=" me-3" />
          Saved
        </div>
      </div>

      <div className="mt-16">
        <div className="flex justify-start align-items-center  m-3 text-sm ">
          <img width={"20px"} src={settingIcon} className=" me-3" />
          Settings
        </div>
        <div className="flex justify-start align-items-center  m-3  text-sm ">
          <img width={"20px"} src={helpIcon} className=" me-3" />
          Help
        </div>
      </div>
      <div className="mt-16">
      <div className="flex justify-start align-items-center  m-3  text-sm ">
          <img width={"20px"} src={logoutIcon} className=" me-3 text-muted" />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import headerUserIcon from "../images/header/headerUserIcon.png";
import drop from "../images/header/headerDrop.png";
import plus from "../images/header/headerPlus.png";
import user from "../images/header/headerUser.png";
const Header = () => {
  return (<>
    <div className="flex justify-start align-items-center w-full">
      <div className="w-2/5 flex justify-start align-items-center">
        <img width={"40px"} src={headerUserIcon}></img>
        <span className="font-medium ms-2">Boro Team</span>
        <img src={drop} className="ms-2" />
        <img width={"20px"} src={plus} className="ms-4" />
      </div>
      <div className="w-3/5 flex justify-end align-items-center">
        <img width={'30px'} src={user} />
        <b className="ms-2">Zahra Hastag</b>
        <img src={drop} className="ms-2" />
      </div>
    </div>
    <div className="divider mt-1 mb-2">
  </div>
  </>
  );
};

export default Header;

import React from "react";
import "./DrawerMenu.scss";
import MainMenu from "../MainMenu/MainMenu";

const DrawerMenu = ({ showMenu }) => {
  return (
    <div className={`drawer ${!!showMenu ? "is_active" : ""}`}>
      <div className="drawer__overlay js-drawer-overlay"></div>
      <div className="drawer__sidebar drawer__sidebar_pos_right">
        <MainMenu />
      </div>
    </div>
  );
};

export default DrawerMenu;

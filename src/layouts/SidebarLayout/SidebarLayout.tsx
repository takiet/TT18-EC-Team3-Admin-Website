import React from "react";
import { SideBar } from "../../components/common";
import "./SidebarLayout.scss";

export const SidebarLayout: React.FC<ILayout> = ({ sidebar, children }) => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-layout__left"><SideBar/></div>
      <div className="sidebar-layout__center" id="layout-center">
        {children}
      </div>
    </div>
  );
};

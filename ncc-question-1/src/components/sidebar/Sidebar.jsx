import React, { useState } from "react";
import "./Sidebar.css";

const menuList = [
  {
    name: "Home",
    active: true,
  },
  {
    name: "Services",
    active: false,
  },
  {
    name: "News",
    active: false,
  },
  {
    name: "Blog",
    active: false,
  },
  {
    name: "Content",
    active: false,
  },
];
const Sidebar = ({isOpen}) => {
  const [menuListState, setMenuListState] = useState(menuList);
  const activeMenu = (position) => {
    setMenuListState(
      [...menuListState].map((menu, index) => {
        if (index === position) {
          return { ...menu, active: true };
        } else return { ...menu, active: false };
      })
    );
  };
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div style={{ position: "relative", width: "100%" }}>
        {menuListState.map((menu, index) => (
          <div
            className={`sidebar-menu ${menu.active && "sidebar-menu-active"}`}
            onClick={() => activeMenu(index)}
            key={index}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

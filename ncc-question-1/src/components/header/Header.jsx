import React from "react";
import "./Header.css";
const Header = ({ openMenu }) => {
  const [isChange, setChange] = React.useState(false);
  const excuteOpen = (event) => {
    // event.preventDefault();
    setChange(!isChange);
    openMenu(!isChange);
  };
  return (
    <div className="header">
      <div
        className={`container ${isChange && "change"}`}
        onClick={(e) => excuteOpen(e)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Logo from "../../assets/logoNCC.png";
import CssIcon from "../../assets/css-icon.png";
import HtmlIcon from "../../assets/html-icon.png";
import UrlIcon from "../../assets/url-icon.png";

import "./Main.css";
const cardArray = [
  {
    title: "Lorem ipsum dolor sit amet",
    picture: CssIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    picture: HtmlIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    picture: UrlIcon,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];
const Main = () => {
  return (
    <div className="main">
      <img className="logo" src={Logo} alt="Logo NCC"></img>
      <div className="text-area-large">
        <p style={{ fontWeight: "bold" }}>Lorem ipsum dolor sit asmet?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="text-area-row">
        {cardArray.map((card, index) => (
          <div className="text-area-col-3" key={index}>
            <p style={{ fontWeight: "bold" }}>{card.title}</p>
            <div>
              <img className="card-picture" src={card.picture} alt="Logo NCC"></img>
              <div className="card-content">{card.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

import React, { useRef } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Listitem from "../listitem/Listitem";
import "./list.scss";

const List = ({ list }) => {
  const listRef = useRef();
  const handleClick = (dir) => {
    const distance = listRef.current.getBoundingClientRect();
    let screenWidth = window.screen.availWidth;
    let distFromLeft = distance.x - 50;
    const value = screenWidth < 768 ? 230 : 460;
    if (dir === "left" && distFromLeft < 0) {
      distFromLeft = Math.min(distFromLeft + value, 0);
      listRef.current.style.transform = `translateX(${distFromLeft}px)`;
    } else if (dir === "right") {
      distFromLeft = Math.max(
        distFromLeft - value,
        screenWidth - distance.width - 95
      );
      listRef.current.style.transform = `translateX(${distFromLeft}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, ind) => (
            <Listitem key={ind} index={ind} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;

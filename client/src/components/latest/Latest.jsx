import React, { useRef, useState, useEffect } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import Listitem from "../listitem/Listitem";
import axios from "axios";
import { baseUrl } from "../../App";

const Latest = ({ list }) => {
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
  const [movies, setMovies] = useState([]);
  useEffect(
    () => {
      const getLatestMovies = async () => {
        try {
          const res = await axios.get(baseUrl + "movies/latest", {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setMovies(res.data);
        } catch (err) {
          console.log("Error in latest movies connecting...");
          // console.log(err);
        }
      };
      getLatestMovies();
    },
    [],
    () => {
      console.log(movies);
    }
  );
  return (
    <div className="list">
      <span className="listTitle">{"Latest Movies & series"}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {movies.map((item, ind) => (
            <Listitem key={ind} index={ind} item={item._id} />
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

export default Latest;

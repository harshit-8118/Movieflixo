import "./ViewPage.scss";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowBackOutlined,
  Favorite,
  FavoriteBorder,
  Flag,
  ListAltOutlined,
  PlayArrow,
  StarBorder,
  StarRate,
} from "@mui/icons-material";
import Footer from "../footer/Footer";
import { cast_crew_data } from "./CastCrewData";
const progress = require("./progress.png");

function ViewPage() {
  const movie = useLocation().state;
  const [like, setLike] = useState(false);
  const [likeStar, setLikeStar] = useState(false);

  return (
    <div className="viewPage">
      <Link to={"/movies"} className="link">
        <div className="back">
          <ArrowBackOutlined /> Movies
        </div>
      </Link>
      <div
        className="wrapper"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0.8) , rgba(0,0,0,0.8)) ,url('${movie.img}') center`,
        }}
      >
        <div className="movie-img">
          <img src={movie.img} alt="png"/>
        </div>
        <div className="movie-desc">
          <span className="movie-title-year">
            {movie.title} ( {movie.year} )
          </span>
          <ul className="movie-date-genre-duration">
            <li>19/11/1993</li>
            <li>{movie.genre}</li>
            <li>{movie.duration}</li>
          </ul>
          <div className="movie-bottom">
            <div className="movie-rating">
              <span className="movie-rating-number">80%</span>
              <img src={progress} alt="png"/>
              <span>User Score</span>
            </div>
            <div className="movie-reaction">
              <a href="" className="link">
                <ListAltOutlined className="icon" />
              </a>
              <a onClick={() => setLike(!like)}>
                {like ? (
                  <Favorite className="icon" />
                ) : (
                  <FavoriteBorder className="icon" />
                )}
              </a>
              <a onClick={() => setLikeStar(!likeStar)}>
                {likeStar ? (
                  <StarBorder className="icon" />
                ) : (
                  <StarRate className="icon" />
                )}
              </a>
              <a>
                <Flag className="icon" />
              </a>
              <Link
                to={`/watch`}
                state={movie}
                className="link"
                style={{ display: "flex", alignItems: "center" }}
              >
                <a>
                  <PlayArrow className="icon" />
                </a>
              </Link>
            </div>
          </div>
          <div className="movie-desc-desc">
            <span>Overview</span>
            <p>{movie.desc}</p>
          </div>
          <div className="director-content">
            <div className="director">
              <span>Ava DuVernay</span>
              <i>Director, Writer</i>
            </div>
            <div className="director">
              <span className="director2">Spencer Averick</span>
              <i>Writer</i>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-cast-budget">
        <h1>Full Cast & Crew</h1>
        <div className="movie-b-left">
          {cast_crew_data.map((data, ind) => (
            <div className="movie-cast-card">
              <img src={data["img-src"]} alt="png" />
              <div className="movie-cast-card-bottom">
                <span>{data.name}</span>
                <p>Self</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="movie-b-right">
        <div className="item">
          <span>Status</span>
          <p>Released</p>
        </div>
        <div className="item">
          <span>Original Language</span>
          <p>English</p>
        </div>
        <div className="item">
          <span>Budget</span>
          <p>$ 6,432,233.00</p>
        </div>
        <div className="item">
          <span>Revenue</span>
          <p>$ 22,432,233.00</p>
        </div>
        <div className="item">
          <span>Keywords</span>
          <div className="movie-keywords">
            <span>suicide</span>
            <span>prison</span>
            <span>cocaine</span>
            <span>slavery</span>
            <span>politics</span>
            <span>crack</span>
            <span>murder</span>
            <span>conspiracy</span>
            <span>race</span>
            <span>illegal drugs</span>
            <span>woman director</span>
            <span>usa history</span>
            <span>statics</span>
            <span>african american history</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewPage;

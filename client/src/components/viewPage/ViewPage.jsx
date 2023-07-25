import "./ViewPage.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Add,
  ArrowBackOutlined,
  Favorite,
  Flag,
  HeartBroken,
  ListAltOutlined,
  PlayArrow,
  Star,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import Footer from "../footer/Footer";
import { cast_crew_data } from "./CastCrewData";
const progress = require("./progress.png");

function ViewPage() {
  const movie = useLocation().state;
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
          <img src={movie.img} />
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
              <img src={progress} />
              <span>User Score</span>
            </div>
            <div className="movie-reaction">
              <i>
                <ListAltOutlined className="icon" />
              </i>
              <i>
                <Favorite className="icon" />
              </i>
              <i>
                <Star className="icon" />
              </i>
              <i>
                <Flag className="icon" />
              </i>
              <Link to={`/watch`} state={movie} className="link" style={{display: 'flex', alignItems: 'center'}}>
                <i>
                  <PlayArrow className="icon" />
                </i>
                Play
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
              <img src={data["img-src"]} />
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

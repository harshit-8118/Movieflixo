import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState();
  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await axios.get(`movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        // console.log(err);
      }
    };
    getContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content && content.img} alt="" />
      <div className="info">
        <img src={content && content.imgTitle} alt="" className="bgimg" />
        <span className="desc">{content && content.desc}</span>
        <div className="buttons">
          <Link to={"/watch"} state={content} className="play link">
            <PlayArrow />
            <span>Play</span>
          </Link>
          <Link to={`/view/${content && content._id}`} state={content} className="more link">
            <InfoOutlined />
            <span>Info</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;

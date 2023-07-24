import { useEffect, useState } from "react";
import axios from "axios";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitem.scss";
import { Link } from "react-router-dom";

const Listitem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/${item}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        // console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return movie ? (
    <div
      className="listitem"
      style={{ left: isHovered && index * 225 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="" />
      <h3>{movie && movie.title && movie.title.substring(0, Math.min(33, movie.title.length))}{movie && movie.title && movie.title.length > 33?'...':''}</h3>
      {isHovered ? (
        <>
          <Link to="/watch" state={movie} className="link">
          <video src={movie.trailer} autoPlay={true} loop />
          </Link>
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch" state={movie} className="link">
                <PlayArrow className="icon makeFocus" />
              </Link>
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
          <Link to={`/view/${movie._id}`} state={movie} className="link">
            <span className="watchButton">Watch</span>
          </Link>
        </>
      ) : null}
    </div>
  ) : (
    <></>
  );
};

export default Listitem;

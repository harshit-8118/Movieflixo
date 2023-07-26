import { useEffect, useState } from "react";
import axios from "axios";
import {
  Add,
  PlayArrow,
  ThumbDown,
  ThumbDownAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./listitem.scss";
import { Link } from "react-router-dom";
import { baseUrl } from "../../App";

const Listitem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(baseUrl + `movies/find/${item}`, {
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

  const handleClick = (value) => {
    if (value === "like") {
      setLike(!like);
      if (dislike) {
        setDisLike(!dislike);
      }
    } else {
      setDisLike(!dislike);
      if (like) {
        setLike(!like);
      }
    }
  };
  return movie ? (
    <Link
      to={`/view/${movie._id}`}
      state={movie}
      className="listitem link"
      style={{ left: isHovered && index * 225 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="png" />
      {isHovered ? (
        <div className="list-mobile">
          <h3>
            {movie &&
              movie.title &&
              movie.title.substring(0, Math.min(26, movie.title.length))}
            {movie && movie.title && movie.title.length > 26 ? "..." : ""}
          </h3>
          <Link to="/watch" state={movie} className="link">
            <video src={movie.trailer} autoPlay={true} loop />
          </Link>
          <div className="itemInfo">
            <div className="icons">
              <Link to="/watch" state={movie} className="link">
                <PlayArrow className="icon makeFocus" />
              </Link>
              <Link to="" state={movie} className="link">
                <Add className="icon" />
              </Link>
              <Link onClick={() => handleClick("like")} className="link">
                {!like ? (
                  <ThumbUpAltOutlined className="icon" />
                ) : (
                  <ThumbUp className="icon" />
                )}
              </Link>
              <Link onClick={() => handleClick("dislike")} className="link">
                {!dislike ? (
                  <ThumbDownAltOutlined className="icon" />
                ) : (
                  <ThumbDown className="icon" />
                )}
              </Link>
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
          </div>
          <div className="desc">{movie.desc}</div>
          <div className="genre">{movie.genre}</div>
          <Link to={`/watch`} state={movie} className="link">
            <span className="watchButton">Watch</span>
          </Link>
        </div>
      ) : null}
    </Link>
  ) : (
    <></>
  );
};

export default Listitem;

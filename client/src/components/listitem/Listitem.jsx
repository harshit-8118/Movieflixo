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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjFhYjBlNGJjYjE3OWRjMDBlOWRkZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODk2MjcwMTMsImV4cCI6MTY5MDA1OTAxM30.rjKtgQdRx04Lv00J58gqqB96d0PwKRO9nL8kMva39V4",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <>
      <Link to='/watch' state={ movie }>
        <div
          className="listitem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={movie.img} alt="" />
          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownAltOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>1 hour 14 mins</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};

export default Listitem;

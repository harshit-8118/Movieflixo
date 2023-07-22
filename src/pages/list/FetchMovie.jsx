import axios from "axios";
import "./fetchMovie.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchMovie({ id }) {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getMovie = async () => {
      const res = await axios.get(`/movies/find/${id}`, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setMovie(res.data);
    };
    getMovie();
  }, []);
  return (
    <div>
      {movie && (
        <div className="movieL">
          <div className="movieLTop">
            <div className="movieLInfoTop">
              <img src={movie.img} className="movieLInfoImg" alt="" />
              <span className="movieLName">{movie.title}</span>
            </div>
            <div className="movieLInfoBottom">
              <div className="movieLInfoItem">
                <span className="movieLInfoKey">id:</span>
                <span className="movieLInfoValue">{movie._id}</span>
              </div>
              <div className="movieLInfoItem">
                <span className="movieLInfoKey">genre:</span>
                <span className="movieLInfoValue">{movie.genre}</span>
              </div>
              <div className="movieLInfoItem">
                <span className="movieLInfoKey">year:</span>
                <span className="movieLInfoValue">{movie.year}</span>
              </div>
              <div className="movieLInfoItem">
                <span className="movieLInfoKey">limit:</span>
                <span className="movieLInfoValue">{movie.limit}</span>
              </div>
              <Link to={`/movies/${movie._id}`} state={{ movie: movie }}>
                <button className="movieLListEdit">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchMovie;

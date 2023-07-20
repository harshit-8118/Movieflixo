import { Link, useLocation } from "react-router-dom";
import "./movie.scss";
import Chart from '../../components/chart/Chart';
import { Publish } from "@mui/icons-material";

function Movie() {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie)
  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">movie</h1>
        <Link to="/newmovie">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
            <div className="movieInfoTop">
                <img src={movie.img} className="movieInfoImg" alt="" />
                <span className="movieName">{movie.title}</span>
            </div>
            <div className="movieInfoBottom">
                <div className="movieInfoItem">
                    <span className="movieInfoKey">id:</span>
                    <span className="movieInfoValue">{movie._id}</span>
                </div>
                <div className="movieInfoItem">
                    <span className="movieInfoKey">genre:</span>
                    <span className="movieInfoValue">{movie.genre}</span>
                </div>
                <div className="movieInfoItem">
                    <span className="movieInfoKey">year:</span>
                    <span className="movieInfoValue">{movie.year}</span>
                </div>
                <div className="movieInfoItem"> 
                    <span className="movieInfoKey">limit:</span>
                    <span className="movieInfoValue">{movie.limit}</span>
                </div>
            </div>
        </div>
      </div>

      <div className="movieBottom">
        <form className="movieForm">
            <div className="movieFormLeft">
                <label>Movie Name</label>
                <input type="text" placeholder={movie.title} />
                <label>Genre</label>
                <input type="text" placeholder={movie.genre} />
                <label>Year</label>
                <input type="text" placeholder={movie.year} />
                <label>Limit</label>
                <input type="text" placeholder={movie.limit} />
                <label>Trailer</label>
                <input type="file" placeholder={movie.trailer} />
                <label>Video</label>
                <input type="file" placeholder={movie.video} />
                
            </div>
            <div className="movieFormRight">
                <div className="movieUpload">
                    <img src={movie.img} alt="" />
                    <label htmlFor="file"><Publish /></label>
                    <input type="file" id="file" style={{display:'none'}}/>
                </div>
                <button className="movieButton">Create</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Movie;

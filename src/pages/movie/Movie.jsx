import { Link, useLocation } from "react-router-dom";
import "./movie.scss";
import { Publish } from "@mui/icons-material";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { updateMovie } from "../../context/movieContext/MovieApiCalls";

function Movie() {
  const location = useLocation().state;

  const [movie, setMovie] = useState(location.movie);
  const [img, setImg] = useState(location.movie.img);
  const [video, setVideo] = useState(location.movie.video);
  const [trailer, setTrailer] = useState(location.movie.trailer);
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
      items.forEach((item) => {

          const fileName = new Date().getTime() + item.label + item.file.name;
          const storageRef = ref(storage, `/items/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, item.file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              setProgress(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              switch (snapshot.state) {
                case "paused":
                  console.log("paused...");
                  break;
                case "running":
                  console.log("uploading...");
                  break;
                case "success":
                  console.log("uploaded");
                  break;
              }
            },
            (error) => {
              switch (error.code) {
                case "storage/unauthorized":
                  console.log("not authorized ");
                  break;
                case "storage/canceled":
                  console.log("cancelled");
                  break;
                case "storage/unknown":
                  console.log("unknown storage");
                  break;
              }
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setUploaded((prev) => prev + 1);
                setMovie((prev) => {
                  return { ...prev, [item.label]: url };
                });
              });
            }
          );
        });
      items = [];
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie, dispatch);
    setProgress(0);
    setUploaded(0);
  };
  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">movie</h1>
        <Link to="/newMovie">
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
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              placeholder={movie.title}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input type="text" name="genre" placeholder={movie.genre} onChange={handleChange} />
            <label>Year</label>
            <input type="text" name="year" placeholder={movie.year} onChange={handleChange} />
            <label>Limit</label>
            <input type="text" name="limit" placeholder={movie.limit} onChange={handleChange} />
            <label>Trailer</label>
            <input
              type="file"
              placeholder={movie.trailer}
              onChange={(e) => setTrailer(e.target.files[0])}
            />
            <label>Video</label>
            <input
              type="file"
              placeholder={movie.video}
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          <div className="movieFormRight">
            <div className="movieUpload">
              <img src={movie.img} alt="" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button
              className="movieButton"
              onClick={uploaded !== 3 ? handleUpload : handleSubmit}
            >
              {uploaded !== 3
                ? "Created " + progress.toFixed(0) + "%"
                : "Update Movie"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Movie;

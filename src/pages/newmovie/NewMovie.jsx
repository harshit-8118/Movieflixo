import { useContext, useState } from "react";
import "./newMovie.scss";
import storage from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createMovie } from "../../context/movieContext/MovieApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";


function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const [progress, setProgress] = useState(0);

  const {dispatch} = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    let flag = true;
    items.length && items.forEach(item => {
      if(item.file === null){
        flag = false;
      }
    });
    flag && items.forEach((item) => {
      if (item.file != null){
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
            setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          switch (snapshot.state) {
            case "paused":
              console.log("paused...");
              break;
            case "running":
              console.log("uploading...");
              break;
            case'success': console.log('uploaded'); break;
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
            setUploaded(prev => prev + 1);
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
          });
        }
        );
      }
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgsm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    setUploaded(0);
    setProgress(0);
  }

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">New Movie</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Image</label>
          <input required
            type="file"
            id="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Thumbnail image</label>
          <input
            type="file"
            id="imgsm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Interstellar"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Is series?</label>
          <select
            className="addMovieSelect"
            id="isSeries"
            name="isSeries"
            onChange={handleChange}
          >
            <option value={"false"}>No</option>
            <option value={"true"}>Yes</option>
          </select>
        </div>
        <div className="addMovieItem">
          <label>Trailer</label>
          <input type="file" onChange={(e) => setTrailer(e.target.files[0])} />
        </div>
        <div className="addMovieItem">
          <label>Video</label>
          <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <button className="addMovieButton" onClick={uploaded !== 5 ? handleUpload: handleSubmit}>
          {uploaded !== 5 ?
          'Created ' + progress.toFixed(0) + '%' : 'Upload Movie'}
        </button>
      </form>
    </div>
  );
}

export default NewMovie;

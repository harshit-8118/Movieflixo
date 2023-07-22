import { useContext, useEffect, useState } from "react";
import "./newList.scss";
import { getMovies } from "../../context/movieContext/MovieApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListsContext } from "../../context/listsContext/ListsContext";
import { createList } from "../../context/listsContext/ListsApiCalls";

function NewList() {
  const [list, setList] = useState(null);

  const { dispatch } = useContext(ListsContext);
  const { movies, dispatch: dispatchMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovies);
  }, [dispatchMovies]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
  };

  return (
    <div className="newList">
      <h1 className="addListTitle">New List</h1>
      <div style={{ display: "flex", flexWrap: 'wrap' }}>
        <div className="addListForm">
          <div className="addListItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Best Robbery Movie"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addListItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addListItem">
            <label>Type</label>
            <select
              className="addListSelect"
              id="isSeries"
              name="type"
              onChange={handleChange}
            >
              <option value={"movie"}>Movie</option>
              <option value={"series"}>Series</option>
            </select>
          </div>
        </div>
        <div className="addMovieForm">
          <div className="addListItem">
            <label>Movies</label>
            <select
              className="addListSelect"
              multiple
              id="isSeries"
              name="content"
              onChange={handleSelect}
              style={{ height: "300px", width: "400px" }}
            >
              {movies.map((movie, ind) => (
                <option key={ind} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <button className="addListButton" onClick={handleSubmit}>
            Add List
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewList;

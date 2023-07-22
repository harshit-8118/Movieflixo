import { Link, useLocation } from "react-router-dom";
import "./list.scss";
import { useContext, useState } from "react";
import FetchMovie from "./FetchMovie";
import {ListsContext} from '../../context/listsContext/ListsContext';
import { updateList } from "../../context/listsContext/ListsApiCalls";

function List() {
  const Org_List = useLocation().state.list;
  const [list, setList] = useState(Org_List);
  const { dispatch } = useContext(ListsContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(list, dispatch);
  };
  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Movie List</h1>
        <Link to="/newList">
          <button className="movieAddButton">Create</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <span className="movieName">{list.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">id:</span>
              <span className="movieInfoValue">{list._id}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">genre:</span>
              <span className="movieInfoValue">{list.genre}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">type:</span>
              <span className="movieInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">
            <label>List Title</label>
            <input
              type="text"
              name="title"
              placeholder={list.title}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder={list.genre}
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type="text"
              name="type"
              placeholder={list.type}
              onChange={handleChange}
            />
            <div className="movieFormRight">
              <button className="movieButton" onClick={handleSubmit}>
                Update
              </button>
            </div>
            {list.content.map((item, ind) => (
              <FetchMovie id={item} key={ind} />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default List;

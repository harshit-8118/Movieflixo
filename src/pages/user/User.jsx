import {
  CalendarMonth,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./user.scss";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { updateUser } from "../../context/userContext/UserApiCalls";
import { UsersContext } from "../../context/userContext/UserContext";

function User() {
  const location = useLocation().state;
  const [user, setUser] = useState(location.user);
  const {dispatch} = useContext(UsersContext);
  function handleChange(e) {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user, dispatch);
  };
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={user.profilePic} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.username}</span>
              <span className="userShowJobTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">16.02.2000</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91 923 423 2322</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Jankipuram | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  name="username"
                  onChange={handleChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Is Admin?</label>
                <select
                  className="newUserSelect"
                  name="isAdmin"
                  onChange={handleChange}
                >
                  <option value={"false"}>No</option>
                  <option value={"true"}>Yes</option>
                </select>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  disabled
                  type="text"
                  placeholder="+91 923 423 2322"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  disabled
                  type="text"
                  placeholder="Jankipuram | India"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateRight">
                <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;

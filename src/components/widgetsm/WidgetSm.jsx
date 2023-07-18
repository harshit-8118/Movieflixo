import { Visibility } from "@mui/icons-material";
import "./widgetsm.scss";
import { useEffect, useState } from "react";
import axios from 'axios';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUser = async () => {
      try{
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjE4YTJmODEzZjY5ZWZlMWI1M2UyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTY5MTQ0NiwiZXhwIjoxNjkwMTIzNDQ2fQ.ClkS8J_qW0VWDBvbecYEj8X5Lw1TYnWcQlgR69lI6LE",
          },
        });
        setNewUsers(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    getNewUser();
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          newUsers && newUsers.map((user, ind)=>(
            <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.profilePic || "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="btnIco" /> Display
          </button>
        </li>
          ))
        }
       
      </ul>
    </div>
  );
};

export default WidgetSm;

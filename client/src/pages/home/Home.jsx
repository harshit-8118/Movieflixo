import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjFhYjBlNGJjYjE3OWRjMDBlOWRkZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODk2MjcwMTMsImV4cCI6MTY5MDA1OTAxM30.rjKtgQdRx04Lv00J58gqqB96d0PwKRO9nL8kMva39V4",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {
        lists && lists.map(list => (
          <List key={list._id} list={list} />
        ))
      }
    </div>
  );
};

export default Home;

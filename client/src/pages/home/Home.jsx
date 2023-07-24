import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import axios from "axios";
import Footer from "../../components/footer/Footer";

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
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        // console.log(err);
      }
    };
    getRandomLists();
  }, [genre, type]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists && lists.map((list) => <List key={list._id} list={list} />)}
      <Footer />
    </div>
  );
};

export default Home;

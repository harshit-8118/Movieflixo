import "./app.scss";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Movie from "./pages/movie/Movie";
import MovieList from "./pages/movieList/MovieList";
import NewMovie from "./pages/newmovie/NewMovie";
import MovieListLists from "./pages/movieListLists/MovieListLists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {user && <Topbar />}
      <div className="container">
        <Router>
          {user && <Sidebar />}
          <div className="others">
            <Routes>
              <Route path="/" element={user ? <Home />: <Navigate to={'/login'}/>} />
              <Route path="/login" element={!user ? <Login />: <Navigate to={'/'} />} />
              <Route path="/users" element={user ? <UserList />: <Navigate to={'/login'} />} />
              <Route path="/user/:userId" element={user ? <User />: <Navigate to={'/login'} />} />
              <Route path="/newUser" element={user ? <NewUser />: <Navigate to={'/login'} />} />
              <Route path="/movies" element={user ? <MovieList />: <Navigate to={'/login'} />} />
              <Route path="/movies/:movieId" element={<Movie />} />
              <Route path="/newMovie" element={<NewMovie />} />
              <Route path="/lists" element={user ? <MovieListLists />: <Navigate to={'/login'} />} />
              <Route path="/lists/:listId" element={<List />} />
              <Route path="/newList" element={<NewList />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

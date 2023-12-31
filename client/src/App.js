import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ViewPage from "./components/viewPage/ViewPage";
export const baseUrl = "https://netflix-backend-gveq.onrender.com/api/";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/view/:id" element={<ViewPage />} />
            <Route path="/movies" element={<Home type={"movie"} />} />
            <Route path="/series" element={<Home type={"series"} />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
        <Route path="*" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

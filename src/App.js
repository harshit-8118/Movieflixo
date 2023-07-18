import "./app.scss";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

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
              <Route path="/movies" element={user ? <ProductList />: <Navigate to={'/login'} />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

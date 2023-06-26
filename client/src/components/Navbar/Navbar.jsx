import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  window.onscroll = () => {
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll= null;
  };
  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
      <div className="container">
        <div className="left">
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

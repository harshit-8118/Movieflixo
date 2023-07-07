import './topbar.scss'
import { Language, NotificationsNone, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Admin@NF</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">*</span>                 
            </div>
            <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">*</span>                 
            </div>
            <div className="topbarIconContainer">
                <Settings />
            </div>
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

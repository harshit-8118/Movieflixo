import "./sidebar.scss";
import {
  AttachMoneyOutlined,
  Email,
  ForumOutlined,
  LineStyle,
  ManageAccounts,
  MessageOutlined,
  PersonOutlineOutlined,
  Report,
  ShoppingCart,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <div className="sidebarList">
            <Link to={"/"} className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcons" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcons" />
              Sales
            </li>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <div className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PersonOutlineOutlined className="sidebarIcons" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcons" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyOutlined className="sidebarIcons" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <div className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarIcons" />
              Mail
            </li>
            <li className="sidebarListItem">
              <ForumOutlined className="sidebarIcons" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcons" />
              Messages
            </li>
          </div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <div className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccounts className="sidebarIcons" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcons" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcons" />
              Reports
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

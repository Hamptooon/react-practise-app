import React from "react";
import SidebarStyle from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className={SidebarStyle.sidebar}>
      <nav className="side-bar__nav">
        <ul>
          <li>
            <NavLink 
              to="/profile" 
              className={({ isActive }) => isActive ? SidebarStyle.active : ''}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/news" 
              className={({ isActive }) => isActive ? SidebarStyle.active : ''}>
              News
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dialogs" 
              className={({ isActive }) => isActive ? SidebarStyle.active : ''}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/friends" 
              className={({ isActive }) => isActive ? SidebarStyle.active : ''}>
              Friends
            </NavLink>
          </li>
          
        </ul>
        <div className={SidebarStyle.underlinks}>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => isActive ? SidebarStyle.active : ''}>
            Settings
          </NavLink>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

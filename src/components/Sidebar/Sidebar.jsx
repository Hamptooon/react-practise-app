import React from "react";
import SidebarStyle from "./Sidebar.module.scss";  
const Sidebar = () => {
  return (
    <aside className={SidebarStyle.sidebar}>
      <nav className="side-bar__nav">
        <ul>
          <li>
            <a href="#s">Profile</a>
          </li>
          <li>
            <a href="#s">Messages</a>
          </li>
          <li>
            <a href="#s">News</a>
          </li>
          <li>
            <a href="#s">Musics</a>
          </li>
        </ul>
        <div className={SidebarStyle.underlinks}>
          <a href="#s">Settings</a>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
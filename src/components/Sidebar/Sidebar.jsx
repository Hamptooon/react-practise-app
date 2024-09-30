import React from "react";
import SidebarStyle from "./Sidebar.module.scss";  
const Sidebar = () => {
  return (
    <aside className={SidebarStyle.sidebar}>
      <nav className="side-bar__nav">
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/dialogs">Messages</a>
          </li>
          <li>
            <a href="/news">News</a>
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
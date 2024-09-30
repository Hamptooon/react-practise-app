import React from "react";
import ProfileStyle from "./Profile.module.scss";
import ProfilePosts from "./Posts/ProfilePosts";
const Profile = () => {
  return (
    <div>
      <img
        className={ProfileStyle.image}
        src="https://c4.wallpaperflare.com/wallpaper/75/48/851/abstract-1920x1080-gradient-gradient-desktop-wallpaper-preview.jpg"
        alt="backProfile"
      />
      content
      <ProfilePosts />
    </div>
  );
}

export default Profile; 
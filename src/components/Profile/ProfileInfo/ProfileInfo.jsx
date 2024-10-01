import React from "react";
import ProfileInfoStyle from "./ProfileInfo.module.scss";
const ProfileInfo = () => {
  return (
    <div>
      <img
        className={ProfileInfoStyle.image}
        src="https://c4.wallpaperflare.com/wallpaper/75/48/851/abstract-1920x1080-gradient-gradient-desktop-wallpaper-preview.jpg"
        alt="backProfile"
      />
      <div>Profile info content</div>
    </div>
  );
}

export default ProfileInfo; 
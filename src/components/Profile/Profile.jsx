import React from "react";
import ProfileStyle from "./Profile.module.scss";
import ProfilePosts from "./Posts/ProfilePosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <div className={ProfileStyle.content}>
        <ProfilePosts postsData = {props.postsData} addPost = {props.addPost}/>
      </div>
    </div>
  );
}

export default Profile; 
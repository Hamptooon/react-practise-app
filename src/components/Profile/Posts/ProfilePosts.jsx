import React from "react";
import ProfilePostsStyle from "./ProfilePosts.module.scss";
import Post from "./Post/Post";
const ProfilePosts = () => {
  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea placeholder="New post"></textarea>
        <button>Add post</button>
      </div>
      <Post message = 'Hi, my name is Igor, How are you?)'/>
      <Post message = 'Today i was in Moscow, very comfortable city, but i dnt like many people!'/>
    </div>
  );
}

export default ProfilePosts; 
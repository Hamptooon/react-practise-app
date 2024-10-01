import React from "react";
import ProfilePostsStyle from "./ProfilePosts.module.scss";
import Post from "./Post/Post";
const ProfilePosts = () => {

  let posts = [
    { id: 1, message: 'Hi, my name is Igor, How are you?)' },
    { id: 2, message: 'Today i was in Moscow, very comfortable city, but i dnt like many people!' },
    { id: 3, message: 'I like to play football, and you?' },
  ]
  let postsElements = posts.map(p => <Post message={p.message} />)
  return (
    <div>
      <h3>My Posts</h3>
      <div className={ProfilePostsStyle.addPostContainer}>
        <textarea placeholder="New post"></textarea>
        <button>Add post</button>
      </div>
      {postsElements}
    </div>
  );
}

export default ProfilePosts; 
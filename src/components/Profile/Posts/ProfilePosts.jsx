import React from "react";
import ProfilePostsStyle from "./ProfilePosts.module.scss";
import Post from "./Post/Post";
const ProfilePosts = (props) => {

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  let postsElements = props.postsData.map(p => <Post message={p.message} />)
  return (
    <div>
      <h3>My Posts</h3>
      <div className={ProfilePostsStyle.addPostContainer}>
        <textarea ref={newPostElement} placeholder="New post"></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  );
}

export default ProfilePosts; 
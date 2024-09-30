import React from "react";
import PostStyle from "./Post.module.scss";
const Post = (props) => {
  return (
    <div className={PostStyle.post}>
      <img src="https://media.gq.com/photos/5ddd7d635bb28e00087a9e06/1:1/w_2342,h_2342,c_limit/MCDAVAT_FE023.jpg" alt="Post Image" />
      <p>{props.message}</p>
    </div>
  );
}

export default Post; 
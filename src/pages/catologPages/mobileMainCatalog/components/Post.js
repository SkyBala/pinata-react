import React from "react";
import c from "./Post.module.css";

const Post = ({image,caption}) => {
  return(
    <div className={c.post}>
      <img className={c.post__image} src={image} alt={`${caption} image`}/>
      <span className={c.post__caption}>{caption}</span>
    </div>
  )
}

export default Post;
import React from "react";
import { Link } from "react-router-dom";
import "../../style/PostItem.css";

const PostItem = ({ post }) => {
  console.log(post.acf);
  
  return (
    <section className="blog">
      <p>{post.date}</p>
      <h1>{post.acf.title}</h1>
      <img className="blog-image" src={post.acf.image.url} alt={post.acf.image.alt} />
      <p >{post.acf.description}</p>
      
      
      <Link to={`/post/${post.id}`}>
        <b>Read more</b>
      </Link>
    </section>
  );
};

export default PostItem;

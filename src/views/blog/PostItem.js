import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  console.log(post.acf);

  return (
    <section>
      <p>{post.date}</p>
      <h1>{post.acf.title}</h1>
      <p>{post.acf.description}</p>
      <Link to={`/post/${post.id}`}>
        <b>Read more</b>
      </Link>
    </section>
  );
};

export default PostItem;

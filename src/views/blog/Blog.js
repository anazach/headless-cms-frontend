import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";

const Blog = () => {
  const [post, setPost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    axios.get("http://localhost:8888/wordpress/wp-json/wp/v2/posts").then((res) => {
      setPost(res.data);
      setIsLoaded(true);
    });

  }, []);

  return (
    <section>
      {isLoaded &&
        post.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
    </section>
  );
};

export default Blog;

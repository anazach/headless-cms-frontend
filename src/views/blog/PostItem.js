import React from "react";
import { Link } from "react-router-dom";
import "../../style/PostItem.css";

const PostItem = ({ post }) => {
  console.log(post.acf);
  
  return (
    <section className="blog">
      
     
      <div className="container grid grid-cols-1  gap-2 mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ... ">
        <img className="blog-image" src={post.acf.image.url} alt={post.acf.image.alt} />
        <div>
           <h1 className=" font-bold textalign-center rounded-xl p-8">{post.acf.title}</h1>
          <p className="bg-gray open:bg-gray-100">{post.acf.description}</p>
      <p>{post.date}</p>
      
          <Link to={`/post/${post.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
  Read more
</button>      
      </Link>
        </div>
      </div>
     
     
    </section>
  );
};

export default PostItem;

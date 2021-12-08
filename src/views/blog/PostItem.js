import React from "react";
import { Link } from "react-router-dom";
//import ContactPage from "../contact/ContactPage";
//import "../../style/PostItem.css";

const PostItem = ({ post }) => {
  console.log(post.acf);
  
  return (
  
    <div className="flex flex-row p-8 h-full overflow-y-auto ">
               
    <section className="flex justify-center p-7 mt-2 bg-white rounded w-max">
       
     
        <div className="container grid grid-cols-1  gap-2 mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 ... ">
          
      <br />
        <img className=" m-auto max-w-full object-cover" src={post.acf.image.url} alt={post.acf.image.alt} />
        <div>
           <h2 className="  text-2xl ... font-sans...  my-1 font-bold flex justify-center rounded-xl p-8">{post.acf.title}</h2>
          <p className="bg-gray mt-2 open:bg-gray-100">{post.acf.description}</p>
      <p>{post.date}</p>
      <div>
          <Link to={`/post/${post.id}`}>
          <button className="bg-blue-500  ml-10 mt-5 p-3 hover:bg-blue-700 flex justify-center text-black font-bold py-2 px-2 rounded-lg">
  Read more
</button>      
      </Link>
      </div>
        </div>
      </div>
      
    </section>
     
 </div>
     
     
  );
  
};

export default PostItem;

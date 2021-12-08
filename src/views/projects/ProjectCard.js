import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, image, title, description }) => {
  return (
    <Link to={`/projects/${id}`}>
      <span className="card" style={{"display": "block"}}>
          
        <div
className="h-72 w-full cursor-pointer hover:scale-105 transform 
transition duration-300 rounded-md flex items-end"
style={
	{background: `url(${image})`, 
    backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
    }
	}
 
        >
          <h3 className="fixed text-3xl font-bold text-white z-50 p-2">{title}</h3>
          <div className=" relative opacity-0 hover:opacity-80 rounded-md z-0 bg-green-400 w-full h-full">
          <p>{description}</p>
          </div>
     
        </div>

      </span>

    </Link>
  );
};

export default ProjectCard;

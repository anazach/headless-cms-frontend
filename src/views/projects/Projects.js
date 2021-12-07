import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [project, setProject] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/wpreact/wordpress/wp-json/wp/v2/projects")
      .then((res) => {
        setProject(res.data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <section>
      {isLoaded &&
        project.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
    </section>
  );
};

export default Projects;

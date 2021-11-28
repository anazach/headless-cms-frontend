import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <section>
      <h2>{project.title.rendered}</h2>
      <Link to={`/projects/${project.id}`}>Read more</Link>
    </section>
  );
};

export default ProjectItem;

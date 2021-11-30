import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const res = await axios.get(`/wp-json/wp/v2/projects/${params.id}`);
      const data = await res.data;
      setProject(data);
      setIsLoaded(true);
      console.log(data);
    }
    fetch();
  }, []);

  return (
    <section>
      {isLoaded ? <h1>{project.title.rendered}</h1> : <p>Not found</p>}
    </section>
  );
};

export default ProjectPage;

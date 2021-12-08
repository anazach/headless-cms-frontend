import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const  [projects, setProjects] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios.get('http://localhost/wpreact/wp-json/wp/v2/projects/')
    .then(res => {
        setProjects(res.data)
        setIsLoaded(true)
        console.log(res)
        console.log(projects)
        console.log(isLoaded)
     
    })
  }, [])

    return (

      <div className=" h-screen w-full flex justify-around p-12">
      {isLoaded &&
        projects.map((project) => {

          return (    
              <div>
          <ProjectCard key={project.id} id={project.id} title={project.acf.title} description={project.acf.description} image={project.acf.image}  />
              </div>
          )
          
      
        })}
    </div>
    )
}

export default Projects
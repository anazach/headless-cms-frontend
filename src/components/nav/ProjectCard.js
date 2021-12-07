const ProjectCard = ({img, title}) => {
    console.log(img)
    return (
        <div className="cursor-pointer hover:scale-105 transform 
        transition duration-300 ease-out rounded-xl flex-col items-end justify-end"
        style={{backgroundImage:`url(${img})`}}
        >
          

            <div className="relative opacity-0 hover:opacity-80 h-80 w-80 flex items-end justify-end">
                <div className="rounded-xl h-full w-full bg-green-500">
                    <p className=""> project description goes here </p>
                </div>
       
            </div>

            <p className="text-3xl text-red font-bold z-1">
                {title}
            </p>
          
          

        
        </div>
    )
}

export default ProjectCard
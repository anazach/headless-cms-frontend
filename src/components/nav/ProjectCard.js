import React from 'react'


const projectCard = ({img, title}) => {
    return (
        <div className="cursor-pointer hover:scale-105 transform 
        transition duration-300 ease-out">
            <div className="relative h-auto w-80">
            <img src={img} 
             className="rounded-xl"
             alt=""
             />
           
            </div>

            <h3 className="text-2xl mt-3">
                {title}
            </h3>


        </div>
    )
}

export default projectCard
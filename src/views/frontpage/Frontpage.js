import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../projects/ProjectCard";
import projectImage1 from '../../assets/project_card_photo_1.jpeg';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import bannerImage from '../../assets/banner_image.jpg';
import image1 from '../../assets/info_image_1.jpg';




const Frontpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost/wpreact/wp-json/wp/v2/pages?slug=frontpage");
      const { acf } = res.data[0];
      console.log(acf);
      setTitle(acf.title);
      setDescription(acf.description);
    };
    fetchData();
  }, []);

  return (
<div>


<div className=" w-screen h-auto flex flex-col md:flex-row items-center px-0"  
style={
	{background: `url(${bannerImage})`, 
    backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
    }
	}>
		{/* <!--Left Col--> */}
		<div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-60 px-6">
			<h1 className="font-bold text-5xl text-white my-4">WE MAKE YOUR IT DREAMS COME TRUE</h1>
					
		</div>


	</div>	



<section >
<div className="container flex lg:flex-row md:flex-col sm:flex-col w-screen mx-12 p-12">

<div className="p-24 w-1/2 md:flex-row sm:flex-col items-center">
  <h1 className="mb-12 text-6xl font-bold">Engagerad & certifierad kompetens</h1>
  <div> 
	<p className="text-xl">Vi har ledande kompetens inom cloud och digital transformation. Våra specialister har tillsammans över 300 certifieringar, varav 150 är Microsoftcertifieringar. Vi inspirerar, utmanar och vägleder våra kunder till en högre nivå av digitalisering, alltid med slutanvändaren och affärsnytta i fokus.s </p>
	
</div>
</div>

<div className="p-5 w-1/2">
	<img className="w-full rounded" src={image1} alt="" />
</div>
</div>





  </section>




{/* PROJECT SECTION - get projects from API */}

<div>

<div className="p-12"> 
	<h1 className="font-bold text-5xl">Recent Projects</h1>
	<a> see all projects </a>

	</div>


<div className="flex lg:flex-row sm:flex-col w-screen items-center justify-around px-12">


<ProjectCard img={projectImage1} title="Solarwinds Orion"/>
<ProjectCard img={projectImage1} title="Solarwinds Orion" />
<ProjectCard img={projectImage1} title="Solarwinds Orion"/>



</div>
</div>




<div className="p-24 w-screen h-full flex flex-col md:flex-col sm:flex-col">

	<div className="p-12"> 
	<h1 className="font-bold text-5xl">Contact us</h1>
	<p> Do you have questions abour our services? Do not hesitate to contact us. </p>
	</div>

<div className="flex flex-row">

<div className="flex flex-col justify-items-start">
<img className="h-full  w-72 rounded-md object-cover" src={person2} alt="" />
<h1 className="font-bold text-3xl mt-12">Christina Johansson</h1>
<p> Consultant Manager</p>
<p> 0110 701 35 08 </p>
<p> christina.johansson@raiseit.se </p>
</div>


<div className="flex flex-col justify-items-start mx-12">
<img className="w-72 h-full rounded-md object-cover" src={person1} alt="" />
<h1 className="font-bold text-3xl mt-12">Magnus Rosén</h1>
<p> Affärsutvecklare </p>
<p> 0110 701 56 99 </p>
<p> magnus.rosen@raiseit.se </p>

</div>

</div>
</div>




  </div>
  );
};

export default Frontpage;

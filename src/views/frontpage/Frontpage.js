import React, { useEffect, useState } from "react";
import axios from "axios";
import image1 from './front_page_photo_1.jpeg'
import ProjectCard from "../../components/nav/ProjectCard";
import projectImage1 from '../../assets/project_card_photo_1.jpeg';
import person1 from '../../assets/person1.jpeg';
import person2 from '../../assets/person2.jpeg';
import person3 from '../../assets/person3.jpeg';
import bannerImage from '../../assets/banner_image.jpg';



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
<section>

<div className=" sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] flex flex-col md:flex-row items-center"  
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
		<div className="w-full lg:w-1/2 lg:py-6 text-center">			
		</div>

	</div>	
  </section>



  <section>



<div className="container flex lg:flex-row md:flex-col sm:flex-col w-screen mx-auto p-12">

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
<section>

<div className="flex lg:flex-row sm:flex-col w-screen items-center justify-around px-24">


<ProjectCard img={projectImage1} title="Solarwinds Orion"/>
<ProjectCard img={projectImage1} title="Solarwinds Orion" />
<ProjectCard img={projectImage1} title="Solarwinds Orion"/>
<ProjectCard img={projectImage1} title="Solarwinds Orion"/>
	{/* <div className="container flex items-center">

	<div className="flex py-7 px-2 pr-4 border-b cursor-pointer 
        hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
		style={{background: `url(https://links.papareact.com/0fm)`}}>
		<h1> Solarwinds Orion </h1>
		<p>Med hjälp av programvara från SolarWinds har du alltid kontroll på din infrastruktur. Som enda certifierade återförsäljare i Sverige har vi erfarenhet av att arbeta med Orion i många olika miljöer. 
			Våra kunder Martin&Servera och Securitas använder programvaran för att göra sin vardag tryggare.</p>
		<button> LÄS MER </button>
	</div>

	<div className="flex py-7 px-2 pr-4 border-b cursor-pointer 
        hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
		<h1> Solarwinds Orion </h1>
		<p>Med hjälp av programvara från SolarWinds har du alltid kontroll på din infrastruktur. Som enda certifierade återförsäljare i Sverige har vi erfarenhet av att arbeta med Orion i många olika miljöer. 
			Våra kunder Martin&Servera och Securitas använder programvaran för att göra sin vardag tryggare.</p>
		<button> LÄS MER </button>
	</div>

	<div className="bg-white flex flex-col items-center rounded w-full p-10 mx-5">
		<h1> Solarwinds Orion </h1>
		<p>Med hjälp av programvara från SolarWinds har du alltid kontroll på din infrastruktur. Som enda certifierade återförsäljare i Sverige har vi erfarenhet av att arbeta med Orion i många olika miljöer. 
			Våra kunder Martin&Servera och Securitas använder programvaran för att göra sin vardag tryggare.</p>
		<button> LÄS MER </button>
	</div>
	</div> */}

</div>

</section>



<section>




<div className="container flex flex-col md:flex-col sm:flex-col px-24">

	<div className="mb-12"> 
	<h1 className="font-bold text-3xl">Contact us</h1>
	<p> Do you have questions abour our services? Do not hesitate to contact us. </p>
	</div>

<div className="flex flex-row">

<div className="flex flex-col justify-items-start">
<img className="h-auto w-72 rounded-md object-cover" src={person1} alt="" />
<h1 className="font-bold text-3xl mt-12">Christina Johansson</h1>
<p> Consultant Manager </p>
<p> 0110 701 35 08 </p>
<p> christina.johansson@raiseit.se </p>
</div>


<div className="flex flex-col justify-items-start mx-12">
<img className="h-full w-72 rounded-md object-cover" src={person3} alt="" />
<h1 className="font-bold text-3xl mt-12">Magnus Rosén</h1>
<p> Business Developer </p>
<p> 0110 701 56 99 </p>
<p> magnus.rosen@raiseit.se </p>

</div>

</div>
</div>
</section>



  </div>
  );
};

export default Frontpage;

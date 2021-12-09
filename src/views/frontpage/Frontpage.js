import React, { useEffect, useState } from "react";
import axios from "axios";
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import bannerImage from '../../assets/banner_image.jpg';
import image1 from '../../assets/info_image_1.jpg';




const Frontpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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
<div className="container flex items-center lg:flex-row md:flex-col sm:flex-col mx-auto">



<div className="p-5 w-1/2">
	<img className="w-full rounded" src={image1} alt="" />
</div>

<div className="p-24 w-1/2 md:flex-row sm:flex-col items-center">
  <h1 className="mb-12 text-6xl font-bold">Engagerad & certifierad kompetens</h1>
  <div> 
	<p className="text-xl">Vi har ledande kompetens inom cloud och digital transformation. Våra specialister har tillsammans över 300 certifieringar, varav 150 är Microsoftcertifieringar. Vi inspirerar, utmanar och vägleder våra kunder till en högre nivå av digitalisering, alltid med slutanvändaren och affärsnytta i fokus.s </p>
	
</div>
</div>
</div>
  </section>


  <section >
<div className="container flex items-center  lg:flex-row md:flex-col sm:flex-col mx-auto">

<div className="p-24 w-1/2 md:flex-row sm:flex-col items-center">
  <h1 className="mb-12 text-6xl font-bold">Passion och kompetens för modern teknik</h1>
  <div> 
	<p className="text-xl">På Raiseit är vi övertygade om att de organisationer som snabbast omsätter strategier och ny teknik till framgångsrika projekt blir morgondagens vinnare. Med hjälp av Retunes it-experter kan våra kunder våga sig på förändring och därmed öka sin konkurrenskraft. Därför tillhandahåller vi spetskompetens, där du som kund får stöd och experthjälp av en eller fler it-konsulter när ni behöver.</p>
	
</div>
</div>

<div className="p-5 w-1/2">
	<img className="w-full rounded" src={image1} alt="" />
</div>
</div>
  </section>


<div className="p-24 w-screen h-full flex flex-col md:flex-col sm:flex-col">

	<div className="p-12"> 
	<h1 className="font-bold text-5xl">Kontakta oss</h1>
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

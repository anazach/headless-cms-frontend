import React, { useEffect, useState } from "react";
import axios from "axios";

const Frontpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {

      const res = await axios.get("http://localhost/raiseit/wordpress/wp-json/wp/v2/pages?slug=frontpage");

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
          <div className="">
           <img className="object-cover h-96 w-full" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
           
           />
           <div className="absolute top-1/2 w-full text-center font-bold">
               <h1 className="text-lg sm:text-lg"> WE MAKE YOUR IT DREAMS A REALITY.</h1>

      
           </div>
        </div>
    </section>

<section>
<div>
  
</div>

</section>

</div>

  );
};

export default Frontpage;

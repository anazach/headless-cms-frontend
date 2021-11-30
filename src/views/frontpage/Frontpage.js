import React, { useEffect, useState } from "react";
import axios from "axios";

const Frontpage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("wp-json/wp/v2/pages?slug=frontpage");
      const { acf } = res.data[0];
      console.log(acf);
      setTitle(acf.title);
      setDescription(acf.description);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Frontpage;

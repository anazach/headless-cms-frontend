import React, { useState, useEffect } from "react";
import axios from "axios";
import CareerItem from "./CareerItem";

const Career = () => {
  const [career, setCareer] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {


    axios.get("http://localhost:8888/wordpress/wp-json/wp/v2/career").then((res) => {
      setCareer(res.data);
      setIsLoaded(true);
    });

  }, []);

  return (
    <section>
      {isLoaded &&
        career.map((career) => {
          return <CareerItem key={career.id} career={career} />;
        })}
    </section>
  );
};

export default Career;

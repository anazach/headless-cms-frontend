import React, { useState, useEffect } from "react";
import axios from "axios";
import AboutItem from "./AboutItem";

const About = () => {
  const [about, setAbout] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/wpreact/wp-json/wp/v2/about")
      .then((res) => {
        setAbout(res.data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <section>
      {isLoaded &&
        about.map((about) => {
          return <AboutItem key={about.id} about={about} />;
        })}
    </section>
  );
};

export default About;

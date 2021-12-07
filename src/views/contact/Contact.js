import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    axios.get("http://localhost:8888/wp/wp-json/wp/v2/contact").then((res) => {
      setContact(res.data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="flex flex-row justify-center">
        {isLoaded &&
          contact.map((contact) => {
            return <ContactItem key={contact.id} contact={contact} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default Contact;

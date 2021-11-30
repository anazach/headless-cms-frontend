import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactItem from "./ContactItem";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("wp-json/wp/v2/contact").then((res) => {
      setContact(res.data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <section>
      {isLoaded &&
        contact.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
    </section>
  );
};

export default Contact;

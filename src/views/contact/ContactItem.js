import React from "react";
import { Link } from "react-router-dom";

const ContactItem = ({ contact }) => {
  return (
    <section>
      <h1>
        {contact.acf.firstname} {contact.acf.lastname}
      </h1>
      <p>{contact.acf.occupation}</p>
      <p>{contact.acf.email}</p>
      <Link to={`/contact/${contact.id}`}>LinkedIn</Link>
    </section>
  );
};

export default ContactItem;

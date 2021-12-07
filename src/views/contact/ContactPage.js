import React from 'react';
import ContactForm from "./ContactForm";
import Contact from "./Contact";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div className="w-full p-20 pb-40 bg-gray-800">
        <ContactForm />
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default ContactPage;

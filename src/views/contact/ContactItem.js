import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const ContactItem = ({ contact }) => {
  return (
    <React.Fragment>
      <div className="flex justify-center text-center pb-20 pt-20">
        <div className="flex flex-col bg-white rounded-lg m-6 pt-8 sm:w-52">
          <strong>{contact.acf.firstname} {contact.acf.lastname}</strong>
          <p>{contact.acf.occupation}</p>
          <div className="p-3 space-x-6 m-6 flex justify-center">
            <button className="bg-blue-500 transform border-2 w-12 h-12 rounded-full text-white text-2xl border-blue-500 hover:-translate-y-1 duration-500">
              <FontAwesomeIcon icon={faLinkedin} /></button>
            <button className="bg-blue-500 transform border-2 w-12 h-12 rounded-full text-white text-2xl border-blue-500 hover:-translate-y-1 duration-500">
              <FontAwesomeIcon icon={faEnvelopeSquare} /></button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactItem;

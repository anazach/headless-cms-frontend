import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../style/contact.css";

const Result = () => {
  return <p>Thanks for your message!</p>;
};

const ContactForm = () => {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkolx4j",
        "template_1hv3dvu",
        e.target,
        "user_94c5HzZZkTboFIVsT9Bh8"
      )
      .then(
        (result) => {
          console.log("Result: ", result.text);
        },
        (error) => {
          console.log("Error: ", error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <html>
      <head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </head>
      <section className="container">
        <form onSubmit={sendEmail} className="form">
            <input
              type="text"
              className="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              type="text"
              className="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              rows="5"
              cols="20"
              className="message"
              name="message"
              placeholder="Enter Message..."
            ></textarea>
          <div
            className="g-recaptcha"
            data-sitekey="6Lflh18dAAAAAFBoCPLnLYeb6oga6KO0JLh9HcAx"
          ></div>
          <input type="submit" className="btn" value="Send" />
          <p>{result ? <Result /> : null}</p>
        </form>
      </section>
    </html>
  );
};

export default ContactForm;

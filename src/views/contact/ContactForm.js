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
      <section class="container">
        <form onSubmit={sendEmail} className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
              tabindex="1"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="E-mail"
              tabindex="2"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Subject"
              tabindex="3"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="5"
              cols="20"
              id="message"
              name="message"
              placeholder="Enter Message..."
              tabindex="4"
            ></textarea>
          </div>
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

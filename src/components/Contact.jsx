import React, { useState } from "react";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const { handleSectionClick, activeSection } = props;

  // require('dotenv').config();
  const formEndpoint =
    "https://public.herotofu.com/v1/ec1f8aa0-12fd-11ee-8267-d3eb100789b4";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(formEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className="main-content">
        <NavBar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        ></NavBar>

        <article className="contact active" data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
          </section>
          <p style={{color:"white"}} >Thank you! I will contact you soon! </p>
        </article>
      </div>
    );
  }

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title"> Contact</h2>
        </header>

        {/* Map */}
        {/* <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section> */}

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form
            action={formEndpoint}
            onSubmit={handleSubmit}
            method="POST"
            className="form"
          >
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                required
                style={{background: "#85A082"}}
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                style={{background: "#85A082"}}
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your message"
              required
              style={{background: "#85A082"}}
            ></textarea>

            <button className="form-btn" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} name="paper-plane"> </FontAwesomeIcon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </div>
    
  );
};

export default Contact;

import React, { useEffect, useState } from "react";
import "../components/website.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import NavBar from "./Navbar";
import Main from "./Main";



const Sidebar = () => {

    const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar${showContacts ? " active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        {/* <figure className="avatar-box">
          <img src="./assets/avartar.png" alt="Bomi Kim" width="80" />
        </figure> */}
        <div className="info-content">
          <h1 className="name" title="Bomi Kim" style={{fontWeight: 700}}>
            Bomi Kim
          </h1>
          <p className="title">Data Scientist</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick = {() => setShowContacts(!showContacts)}>
          <span> {showContacts? "Hide Contacts" : "Show Contacts"} </span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon = {faEnvelope} name="mail-outline"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:rlaqhalx@gmail.com" className="contact-link">
                rlaqhalx@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon = {faGithub} name="phone-portrait-outline"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href="https://github.com/rlaqhalx" className="contact-link">
                https://github.com/rlaqhalx
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faLinkedin}name="linked-in"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              {/* <time dateTime="1982-06-23">June 23, 1982</time> */}
              <a
                href="https://www.linkedin.com/in/bomi-kim-623171205/"
                className="contact-link"
              >
                https://www.linkedin.com/in/bomi-kim-623171205/
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FontAwesomeIcon icon={faLocationPin} name="location-outline"></FontAwesomeIcon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Baltimore, Maryland</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        {/* <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul> */}
      </div>
    </aside>
  );
};

export default Sidebar;

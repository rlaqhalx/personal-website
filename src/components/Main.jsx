import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";
import Web_Dev_Img from "../assets/web_dev.png";
import Web_Design_Img from "../assets/web_design.png";
import Data_Sci_Img from "../assets/data-science.jpeg";
import Data_Visual_Img from "../assets/data_visualization.png";
import Front_End_Img from "../assets/front_end.png";
import Back_End_Img from "../assets/back_end.png";
import Dev_Ops_Img from "../assets/dev_ops.png";
import Data_Science_Img from "../assets/data_science.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
  const { activeSection, handleSectionClick } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(null);

  const openModal = (index) => {
    setIsModalOpen(true);
    setSelectedSkills(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const about_data = [
    {
      title: "Web Development",
      content:
        "Comprehensive web development clients, merging front-end and back-end technologies",
      img: Web_Dev_Img,
    },
    {
      title: "Web Design",
      content:
        "   Creative and user-centric approaches to craft visually appealing and intuitive website",
      img: Web_Design_Img,
    },
    {
      title: "Data Science",
      content:
        "   Proficiency in statistial analysis and machine learning algorithm to extract meaningful insights and drive data-informed decision-making",
      img: Data_Sci_Img,
    },
    {
      title: "Data Visualization",
      content:
        "   Skilled in data visualization, utilizing visual storytelling techniques to effectively convey complex information and insights",
      img: Data_Visual_Img,
    },
  ];

  const skills_data = [
    {
      title: "Frontend Development",
      content:
        "HTML, CSS, SCSS, Styled-Component, JavaScript, React.js, Redux.js, Vue.js, Next.js, TypeScript, Responsive Web Design",
      img: Front_End_Img,
    },
    {
      title: "Backend Development",
      content: "Python, Java, Node.js, Express",
      img: Back_End_Img,
    },
    {
      title: "Database Management & DevOps",
      content: "MongoDB, Firebase, Docker, Amazon AWS",
      img: Dev_Ops_Img,
    },
    {
      title: "Data Science",
      content:
        "Data analysis, Data visualization, Statistical analysis, Machine learning",
      img: Data_Science_Img,
    },
  ];

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      {/* ABOUT */}
      <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p style={{fontWeight: 700}}>
            Hello! I am a software developer with a keen interest in data
            visualization. I enjoy the process of analyzing large datasets and
            transforming them into meaningful and clear representations.
          </p>

          <p style={{fontWeight: 700}}>
            As a problem solver, I find satisfaction in devising innovative
            solutions that effectively communicate complex information. My goal
            is to utilize my frontend development clients to build
            user-friendly, universally designed websites and tools that empower
            individuals to easily explore and comprehend data.
          </p>
        </section>

        {/* Service */}
        <section className="service">
          <h3 className="h3 service-title">What I'm doing</h3>
          <ul className="service-list">
            {about_data.map((item, index) => (
              <li className="service-item" key={index}>
                <div className="service-icon-box">
                  <img src={item.img} alt={item.img} width="40" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{item.title}</h4>
                  <p className="service-item-text">{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* skills */}
        <section className="skills">
          <h3 className="h3 skills-title">skills</h3>
          <ul className="skills-list has-scrollbar">
            {/* THIS */}
            <>
              {skills_data.map((item, index) => (
                <li className="skills-item">
                  <div
                    className="content-card"
                    data-skills-item
                    onClick={() => openModal(index)}
                  >
                    <figure className="skills-avatar-box">
                      <img
                        src={item.img}
                        alt="Daniel lewis"
                        width="60"
                        data-skills-avatar
                      />
                    </figure>
                    <h4
                      className="h4 skills-item-title"
                      data-skills-title
                    >
                      {item.title}
                    </h4>
                    <div className="skills-text" data-skills-text>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </>
          </ul>
        </section>

        {/* skills Modal */}
        {isModalOpen && (
          <div className="modal-container active" data-modal-container>
            <div
              className="overlay active"
              data-overlay
              onClick={closeModal}
            ></div>
            <section className="skills-modal">
              <button
                className="modal-close-btn"
                data-modal-close-btn
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faClose} name="close-outline"></FontAwesomeIcon>
              </button>
              <div className="modal-img-wrapper" >
                <figure className="modal-avatar-box" style={{marginTop: "40px"}}>
                  <img
                    src={skills_data[selectedSkills].img}
                    alt={skills_data[selectedSkills].img}
                    width="80"
                    data-modal-img
                  />
                </figure>
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title  style={{marginTop: "20px", marginBottom: "20px"}}>
                  {skills_data[selectedSkills].title}
                </h4>
                <div data-modal-text>
                  <p> {skills_data[selectedSkills].content}</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* clients */}
        {/* <section className="clients">
          <h3 className="h3 clients-title">clients</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src={"./assets/avartar.png"} alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="client logo" />
              </a>
            </li>
            <li className="clients-item">
              <a href="#">
                <img src="./assets/avartar.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section> */}
        
      </article>
    </div>
  );
};

export default Main;

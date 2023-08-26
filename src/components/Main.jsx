import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";
import Web_Dev_Img from "../assets/web_dev.png";
import Machine_Learning_Img from "../assets/machine_learning.png"
import Data_Sci_Img from "../assets/data-science.jpeg";
import Data_Visual_Img from "../assets/data_visualization.png";
import Front_End_Img from "../assets/front_end.png";
import Back_End_Img from "../assets/back_end.png";
import Dev_Ops_Img from "../assets/dev_ops.png";
import Data_Science_Img from "../assets/data_science.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
      title: "Data Science",
      content:
        "Proficiency in in statistical analysis, data science algorithms, and optimization techniques to extract meaningful insights",
      img: Data_Sci_Img,
    },
    {
      title: "Machine Learing",
      content:
        "Utilizies cutting-edge algorithms to extract valuable patterns from data and apply them in guiding informed decision-making" 
        ,  img: Machine_Learning_Img,
    },
    {
      title: "Data Visualization",
      content:
        "Skilled in data visualization, utilizing visual storytelling techniques to effectively convey complex information and insights",
      img: Data_Visual_Img,
    },
    {
      title: "Web Development",
      content:
        "Comprehensive web development clients, merging front-end and back-end technologies",
      img: Web_Dev_Img,
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
          <p style={{ fontWeight: 700 }}>
            Hello! I'm a data scientist with a profound fascination for the
            realms of data visualization and machine learning. My journey
            thrives on the art of dissecting substantial datasets and sculpting
            them into purposeful portrayals.
          </p>

          <p style={{ fontWeight: 700 }}>
            As a problem solver, I find satisfaction in devising inventive
            solutions that convey intricate information in an accessible manner.
            My aim is to unravel insights from intricate data and consistently
            explore new approaches to extract valuable insights and convey
            complex patterns effectively.
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
                    <h4 className="h4 skills-item-title" data-skills-title>
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
                <FontAwesomeIcon
                  icon={faClose}
                  name="close-outline"
                ></FontAwesomeIcon>
              </button>
              <div className="modal-img-wrapper">
                <figure
                  className="modal-avatar-box"
                  style={{ marginTop: "40px" }}
                >
                  <img
                    src={skills_data[selectedSkills].img}
                    alt={skills_data[selectedSkills].img}
                    width="80"
                    data-modal-img
                  />
                </figure>
              </div>
              <div className="modal-content">
                <h4
                  className="h3 modal-title"
                  data-modal-title
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                >
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

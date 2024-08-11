import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";
import Web_Dev_Img from "../assets/web_dev.png";
import Machine_Learning_Img from "../assets/machine_learning.png";
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
      title: "Software Development",
      content:
        "Extensive experience in full-stack software development, integrating front-end and back-end technologies with a focus on building scalable, high-performance applications and robust system architectures.",
      img: Web_Dev_Img,
    },

    {
      title: "Data Science",
      content:
        "Expert in statistical analysis, data mining, and the application of advanced data science algorithms, including optimization techniques, to derive meaningful insights from complex datasets.",
      img: Data_Sci_Img,
    },
    {
      title: "Machine Learing & Deep Learning",
      content:
        "Proficient in deploying cutting-edge machine learning and deep learning algorithms to identify valuable patterns in data, implementing models that guide data-driven decision-making and predictive analytics.",
      img: Machine_Learning_Img,
    },
    {
      title: "Human-Computer Interaction (HCI)",
      content:
        "Specialized in designing and developing intuitive interfaces that bridge the gap between complex data processes and user-friendly experiences, enhancing accessibility and usability in software solutions.",
      img: Data_Visual_Img,
    },
  ];

  const skills_data = [
    {
      title: "Software Development",
      content:
        "Python, C#, Node.js, Express, Object-Oriented Programming, Software Architecture, API Development, Version Control (Git)",
      img: Back_End_Img,
    },
    {
      title: "Web Development",
      content:
        "HTML, CSS, SCSS, JavaScript, React.js, Redux.js, TypeScript, Responsive Web Design, Full-Stack Development",
      img: Front_End_Img,
    },
    {
      title: "Data Science & Machine Learning",
      content:
        "Data Analysis, Machine Learning, Deep Learning, TensorFlow, Scikit-learn, Data Wrangling, Model Evaluation, Data Pipelines, ETL Processes",
      img: Data_Science_Img,
    },
    {
      title: "Database Management & DevOps",
      content:
        "SQL, NoSQL (MongoDB, Firebase), Docker, Amazon AWS, Database Design, Cloud Services",
      img: Dev_Ops_Img,
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
            Hello! As a software developer with a strong foundation in machine
            learning and deep learning, I thrive at the intersection of
            data-driven insights and software innovation. My journey is centered
            on leveraging advanced data analysis techniques to build robust,
            scalable applications that not only solve complex problems but also
            enhance user experiences.
          </p>
          <p style={{ fontWeight: 700 }}>
            With a solid track record of developing software solutions and
            multiple projects in machine learning and deep learning, I bring a
            unique blend of technical skills and creativity to every project. My
            expertise lies in transforming complex data into actionable
            insights, and integrating these insights into software applications
            that are intuitive, efficient, and impactful.
          </p>

          <p style={{ fontWeight: 700 }}>
            Driven by a passion for problem-solving, I continuously explore new
            methods to push the boundaries of software development and data
            science, ensuring that the products I build are not only technically
            sound but also valuable and accessible to users. My goal is to
            continue creating software solutions that harness the power of data
            to drive innovation and improve decision-making across industries.
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

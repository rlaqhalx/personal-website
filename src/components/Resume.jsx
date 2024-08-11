import React from "react";
import "./website.css";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBuilding } from "@fortawesome/free-solid-svg-icons";

const Resume = (props) => {
  const { handleSectionClick, activeSection } = props;

  const experienceData = [
    {
      title: "Software Developer Intern",
      duration: "Jun 2024 - Aug 2024",
      company: "Samsung Electronics",
      description: (
        <>
          <p>- Intelligent Solution Lab – AIX part</p>
          <p>
            - Developed an AI-integrated drawing web application utilizing HTML,
            CSS, and JavaScript, with integration to .NET for managing file
            creation and elevation constraints within the Daily Board feature.
          </p>
          <p>
            - Implemented image capture functionality, enabling transmission of
            images to Large Language Model (LLM) frameworks for enhancement,
            with output displayed on Samsung TVs.
          </p>
          <p>
            - Utilized .NET and Tizen OS to optimize WebView functionality on
            window layer of TV, ensuring scalability across a range of devices.
          </p>
        </>
      ),
    },
    {
      title: "Frontend Developer Intern",
      duration: "Jan 2023 — Sep 2023",
      company: "Civilience",
      description: (
        <>
          <p>
            - Developed an emotional flow chart feature to track and visualize
            users' emotional states.
          </p>
          <p>
            - Leveraged a data model to provide personalized user assistance,
            enhancing overall user experience.
          </p>
        </>
      ),
    },
    {
      title: "Research Assistant",
      duration: "Dec 2021 — Sep 2023",
      company: "Johns Hopkins Intuitive Computing HCI Laboratory",
      description: (
        <>
          <p>
            - Contributed to the development of an assistive robot designed for
            elderly care, focusing on improving the efficiency of human-robot
            interaction.
          </p>
          <p>
            - Engineered a user-friendly platform incorporating Natural Language
            Processing (NLP) techniques to facilitate intuitive interaction and
            communication with the robot, resulting in a 35% increase in user
            satisfaction.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FontAwesomeIcon
                icon={faSchool}
                name="book-outline"
              ></FontAwesomeIcon>
            </div>
            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Johns Hopkins University
              </h4>
              <span>2023 — 2025</span>
              <p className="timeline-text" style={{ textAlign: "center" }}>
                Master of Science degree in Data Science (M.S.) from the Global
                Innovation and Leadership program
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Johns Hopkins University
              </h4>
              <span>2019 — 2023</span>
              <p className="timeline-text" style={{ textAlign: "center" }}>
                Bachelor's degree in Computer Science (B.S.) and Public Health
                (B.A.)
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FontAwesomeIcon
                icon={faBuilding}
                name="book-outline"
              ></FontAwesomeIcon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            {experienceData.map((item, index) => (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{item.title}</h4>
                <span>@ {item.company}</span>
                <span>{item.duration}</span>
                <p className="timeline-text">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* skill progress  */}
        {/* <section className="skill">
          <h3 className="h3 clients-title">My top clients</h3>
          <ul className="clients-list content-card">
            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Developement</h5>
                <data value="80">80%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li>

            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">Data Analysis</h5>
                <data value="70">70%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </li>

            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">Branding</h5>
                <data value="90">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="clients-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section> */}
      </article>
    </div>
  );
};

export default Resume;

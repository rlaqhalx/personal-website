import React from "react";
import "./website.css";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBuilding } from "@fortawesome/free-solid-svg-icons";

const Resume = (props) => {
  const { handleSectionClick, activeSection } = props;

  const experienceData = [
    {
      title: "Frontend Developer",
      duration: "2023 — Present",
      company: "Civilience",
      description: (
        <>
          <p>
            - Worked on building the emotional flow chart feature to track
            users’ emotional status
          </p>
          <p>- Provide personalized assistance by leveraging the data model</p>
        </>
      ),
    },
    {
      title: "Research Assistant",
      duration: "2021 — 2023",
      company: "Johns Hopkins Whiting School of Engineering",
      description: (
        <>
          <p>- Worked on development for the assistive robot for elderly</p>
          <p>
            - Built user-friendly platform that enable intuitive interaction and
            communication with the robot using Natural Language Processing
            techniques Intuitive Computing Laboratory
          </p>
          <p>- Intuitive Computing Laboratory & advised by Dr. Huang</p>
        </>
      ),
    },
    {
      title: "Full Stack Developer",
      duration: "2022 — 2023",
      company: "Delieno Disease Modeling",
      description: (
        <>
          <p>
            - Built a community-level simulator to portfolio how COVID-19 spread
            in different types of communities
          </p>
          <p>
            - Used React to design the reusable components for the simulation
            and web
          </p>
        </>
      ),
    },
    {
      title: "Frontend Developer",
      duration: "2022",
      company: "Medistream",
      description: (
        <>
          <p>
            - Developed chat application to facilitate interaction between
            doctors and patients
          </p>
          <p>- Used Vue2, Sendbird & Filepond to upload file </p>
          <p></p>
        </>
      ),
    },
    {
      title: "Product Owner",
      duration: "2021 - 2022",
      company: "Delieno Diease Modeling",
      description: (
        <>
          <p>
            - Managed the public-facing aspects and conducted research for the
            development of the mode
          </p>
          <p>
            - Facilitated communication between different teams as well as
            within information support team and managed the product backlog as
            product owner{" "}
          </p>
          <p></p>
        </>
      ),
    },
    {
      title: "Research Assistant",
      duration: "2021 - 2022",
      company: "Johns Hopkins Bloomberg School of Public Health",
      description: (
        <>
          <p>- Conducted genome sequencing and analyzed genomic data</p>
          <p>- Department of Biostatistics & advised by Dr. Ji</p>
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
              <p className="timeline-text" style={{  textAlign: "center" }}>
                Master of Science degree in Data Science (M.S.) from the Global
                Innovation and Leadership program
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Johns Hopkins University
              </h4>
              <span>2019 — 2023</span>
              <p className="timeline-text" style={{  textAlign: "center" }}>
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

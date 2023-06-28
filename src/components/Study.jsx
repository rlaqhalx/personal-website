import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";
import Mochi_Img from "../assets/mochis_img.png";
import Civilience_Img from "../assets/civilience.png";
import Delineo_Img from "../assets/Delineo.png";
import Medistream_Img from "../assets/medistream.png";
import Community_Img from "../assets/Community.png";
import WeScanner_Img from "../assets/wescanner.png";

const Study = (props) => {
  const { handleSectionClick, activeSection } = props;

  const study_data = [
    // {
    //   type: "Web Development",
    //   belong: "Personal Project",
    //   title: "Mochi's",
    //   content:
    //     "E-commerce website for dogs, offering a diverse selection of products including clothing, food, and toys. The website is deployed on Netlify",
    //   img: Mochi_Img,
    //   tech: "React, React Hooks, Redux, styled-components, Firebase for backend, Stripe for payment ",
    // },
    // {
    //   type: "Web Development",
    //   belong: "Civilience",
    //   title: "Health healthcare management platform",
    //   content:
    //     "Worked on building the emotional flow chart feature to track users’ emotional status & Provide personalized assistance by leveraging the data model",
    //   img: Civilience_Img,
    //   tech: "React, React Hooks, AWS, Web Design, Responsive Web Design",
    // },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory !== "All"
      ? study_data.filter((project) => project.type === selectedCategory)
      : study_data;

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      <article className="blog active" data-page="blog">
        <header>
          <h2 className="h2 article-title">portfolio</h2>
        </header>

        {/* From portfolio */}

        <section class="projects">
          <ul class="filter-list">
            <li class="filter-item">
              <button
                className={selectedCategory === "All" ? "active" : ""}
                data-filter-btn
                onClick={() => filterProjects("All")}
              >
                All
              </button>
            </li>

            <li class="filter-item">
              <button
                data-filter-btn
                className={
                  selectedCategory === "Web Development" ? "active" : ""
                }
                onClick={() => filterProjects("Web Development")}
              >
                Web Development
              </button>
            </li>

            <li class="filter-item">
              <button
                data-filter-btn
                className={selectedCategory === "Data Science" ? "active" : ""}
                onClick={() => filterProjects("Data Science")}
              >
                Data Science
              </button>
            </li>

            <li class="filter-item">
              <button
                data-filter-btn
                className={selectedCategory === "Statistics" ? "active" : ""}
                onClick={() => filterProjects("Statistics")}
              >
                Statistics
              </button>
            </li>

          </ul>
        </section>

        <section className="blog-posts">
          <ul className="blog-posts-list">
            {filteredProjects.map((item, index) => (
              <li className="blog-post-item" key={index}>
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src={item.img} alt={item.img} loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{item.type}</p>
                      <span className="dot"></span>
                      <p className="blog-category">{item.belong}</p>
                    </div>
                    <h3 className="h3 blog-item-title">{item.title}</h3>
                    <p className="blog-text">{item.content}</p>
                    <div className="blog-meta">
                      <p
                        className="blog-category"
                        style={{ marginTop: "20px" }}
                      >
                        {item.tech}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
            {/* Add more blog post items as needed */}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Study;

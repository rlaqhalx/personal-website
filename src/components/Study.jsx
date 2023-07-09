import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";
import Algorithm_Img from "../assets/algorithm.webp";
import Leetcode_Img from "../assets/leetcode.png"

const Study = (props) => {
  const { handleSectionClick, activeSection } = props;

  const study_data = [
    {
      type: "Algorithm",
      belong: "Personal Study",
      title: "Algorithm + Data Structure",
      content:
        "linked-list, stack, queue, tree, graph, dynamic programming, sorting, etc.",
      img: Algorithm_Img,
      tech: "Python",
      link: "https://github.com/rlaqhalx/algorithm",
    },
    {
      type: "Algorithm",
      belong: "Leetcode",
      title: "Leetcode",
      content:
        "Blind 75 Must Do Leetcode",
      img: Leetcode_Img,
      tech: "Python",
      link: "https://github.com/rlaqhalx/LeetCode",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory !== "All"
      ? study_data.filter((project) => project.type === selectedCategory)
      : study_data;

  
  const handleDivClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="main-content">
      <NavBar
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      ></NavBar>

      <article className="blog active" data-page="blog">
        <header>
          <h2 className="h2 article-title">Study</h2>
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
                  selectedCategory === "Algorithm" ? "active" : ""
                }
                onClick={() => filterProjects("Algorithm")}
              >
                Algorithm
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
              <li className="blog-post-item" key={index} onClick={() => handleDivClick(item.link)}>
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

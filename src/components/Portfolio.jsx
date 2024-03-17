import React, { useState } from "react";
import "./website.css";
import NavBar from "./Navbar";
import Mochi_Img from "../assets/mochis_img.png";
import Civilience_Img from "../assets/civilience.png";
import Delineo_Img from "../assets/Delineo.png";
import Medistream_Img from "../assets/medistream.png";
import Community_Img from "../assets/Community.png";
import WeScanner_Img from "../assets/wescanner.png";
import Fandango_Img from "../assets/fandango.png"
import DataSci_Img from  "../assets/data_science_algorithms.jpeg"
import StrokeImg from  "../assets/stroke.jpeg"
import TreeImg from "../assets/tree_based.png"
import NLPImg from "../assets/nlp.jpeg"
import WineImg from "../assets/wine.jpeg"
import HeartDiseaseImg from "../assets/heart_disease.jpeg"
import ColorQuantImg from "../assets/color_quantization.png"
import DBSCAN_Img from "../assets/DBSCAN_vs_Clustering.jpeg"
import Breast_fna_Img from "../assets/breast_cancer_fna.png"
import CIA_country_Img from "../assets/cia_country_analysis.png"
import PubMedImg from "../assets/pubmed.jpeg"

const Portfolio = (props) => {
  const { handleSectionClick, activeSection } = props;

  const portfolio_data = [
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Predictive Customer Churn Analysis",
      content:
        "A Supervised Machine Learning Capstone Project Using Tree Methods",
      img: TreeImg,
      tech: "Decision Tree, Random Forest, AdaBoost, Gradient Boost",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/11-Supervised-Learning-Capstone-Tree-Methods.ipynb",
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "MedAbstractNet",
      content:
        "Utilized TF-IDF baseline, NLP models to classify different sequences in PubMed abstracts",
      img: PubMedImg,
      tech: "Navie Bayes with TF-IDF, Conv1D, Token & Character embeddings, Transfer Learning, Feature Learning: Positional Embedding ",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/MedAbstractNet.ipynb"
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Stroke Prediction ML Model",
      content:
        "Exploration of Stroke Prediction Factors, focusing on the correlation between lifestyle, demographic attributes, and medical conditions with stroke incidence using machine learning algorithms.",
      img: StrokeImg,
      tech: "Python, Matplotlib, Seaborn, Sklearn",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/Stroke_Prediction_Model.ipynb",
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "NLP Text Classification",
      content:
        "Sentiment Analysis on Movie Reviews Using TF-IDF Vectorization and Supervised Learning with Linear SVC and Multinomial Naive Bayes",
      img: NLPImg,
      tech: "TfidfVectorizer, LinearSVC, Multinomial Naive Bayes. Pipeline, RandomizedSearchCV",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/12-NLP-Text-Classification.ipynb",
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Heart Disease Prediction",
      content:
        "A Logistic Regression Model Utilizing Physical Features for Non-Invasive Detection",
      img: HeartDiseaseImg,
      tech: "LogisticRegressionCV, LogisticRegression + GridSearchCV",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/Stroke_Prediction_Model.ipynb",
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Breast Cancer Detector from digitized images of fine needle aspirates (FNA) for breast masses",
      content:
        "Primary objective is to utilize PCA to reduce the dimentionality and uncover the most influential components that contribute to the variance in the cell nuclei.",
      img: Breast_fna_Img,
      tech: "manual PCA, Sklearn PCA",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/17-PCA-Manual-Implementation%20Breast_Cancer_Dataset.ipynb"
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Detecting Wine Fraud using SVM",
      content:
        "An Exploration with Support Vector Machines for Identifying Low-Quality Wine Samples",
      img: WineImg,
      tech: "One-Hot Encoding, SVC, GridSearchCV",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/05-SVM-Classification-Project%20Wine_Fraud_Detection.ipynb"
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "CIA Country Analysis and Clustering",
      content:
        "Unveiling Global Patterns and Relationships through Data Exploration and K-Means Clustering and Hierarchical Clustering",
      img: CIA_country_Img,
      tech: "K-Means Clustering, Hierarchical Clustering, choropleth map",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/15-CIA%20Country%20Analysis%20(Kmeans-Clustering-Project)%20.ipynb"
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Color Quantization Model with K-Means",
      content:
        "Unsupervised Learning for Image Color Reduction",
      img: ColorQuantImg,
      tech: "KMeans Clustering",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/14-Kmeans-Color-Quantization.ipynb",
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Unsupervised Grocery Marting Analysis using DBSCAN",
      content:
        "DBSCAN Exploration and Comparative Analysis with Traditional Clustering Methods",
      img: DBSCAN_Img,
      tech: "DBSCAN, KMeans",
      link: "https://github.com/rlaqhalx/machine_learning_study/blob/main/16-DBSCAN-Project%20Grocery_Marketing_Model.ipynb"
    },
    {
      type: "Data Science",
      belong: "Personal Project",
      title: "Fandango Rating Analysis",
      content:
        "Analysis on movie rating disparities, particularly Fandango's tendency to consistently assign higher ratings",
      img: Fandango_Img,
      tech: "Python, Pandas, Matplotlib, Seaborn",
      link: "https://github.com/rlaqhalx/movie_rating_analysis/blob/main/Movie_Rating_Analysis.ipynb",
    },
    {
      type: "Web Development",
      belong: "Personal Project",
      title: "Mochi's",
      content:
        "E-commerce website for dogs, offering a diverse selection of products including clothing, food, and toys. The website is deployed on Netlify",
      img: Mochi_Img,
      tech: "React, React Hooks, Redux, styled-components, Firebase for backend, Stripe for payment ",
      link: "https://github.com/rlaqhalx/e-com-platform",
    },
    {
      type: "Web Development",
      belong: "Civilience",
      title: "Health healthcare management platform",
      content:
        "Worked on building the emotional flow chart feature to track users’ emotional status & Provide personalized assistance by leveraging the data model",
      img: Civilience_Img,
      tech: "React, React Hooks, AWS, Web Design, Responsive Web Design",
      link: "https://github.com/Civilience/civ-community-outlook",
    },
    {
      type: "Web Development",
      belong: "Delineo",
      title: "The Delineo Disease Modeling Project",
      content:
        "A community-level simulator to portfolio how COVID-19 and other infectious disease spread in different types of communities",
      img: Delineo_Img,
      tech: "React, Node, Unity",
      link: "https://github.com/rlaqhalx/Delineo",
    },
    {
      type: "Web Development",
      belong: "Medistream",
      title: "Chat Application",
      content:
        "An chat application for website to faciliate interaction between doctors and patients with features for file upload, UI change feature, and infinite scroll",
      img: Medistream_Img,
      tech: "Vue, JavaScript",
      link: "https://github.com/rlaqhalx/vue-sendbird-ui",
    },
    {
      type: "Web Development",
      belong: "Group Project",
      title: "CommUnity",
      content:
        "A platform, which secured 3rd place in the General Venture II competition, aims to redefine and enhance community engagement at the college-to-community level. It features an LLM AI hatbot that assists with event planning and registration.",
      img: Community_Img,
      tech: "Next.js, TypeScript, CSS, Python, SQL",
      link: "https://github.com/rlaqhalx/community",
    },
    {
      type: "Web Development",
      belong: "Group Project",
      title: "WeScanner",
      content:
        "Hotel reservation platform inspired by offical website of Skyscanner, meta-search engine and travel agency based in Scotland",
      img: WeScanner_Img,
      tech: "React, styled-components",
      link: "https://github.com/rlaqhalx/34-2nd-Wescanner-frontend",
    },
    {
      type: "Data Science",
      belong: "Personal Study",
      title: "Machine Learning + AI",
      content:
        "Data processing, Mathematical transformation, Computational Statistics, Machine Learing, Neural Networks, Optimization, Deep Learning, AI, Game Theory ",
      img: DataSci_Img,
      tech: "Python, Jupyter Notebook",
      link: "https://github.com/rlaqhalx/data_science_algorithm", 
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory !== "All"
      ? portfolio_data.filter((project) => project.type === selectedCategory)
      : portfolio_data;

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
          <h2 className="h2 article-title">Portfolio</h2>
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

            {/* <li class="filter-item">
              <button data-filter-btn>Other Tab</button>
            </li> */}
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

export default Portfolio;

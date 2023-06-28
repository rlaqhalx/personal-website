import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Resume from "./components/Resume";
import "./components/website.css";
import { useState } from "react";
import Portfolio from "./components/Portfolio";
import Study from "./components/Study";
import Contact from "./components/Contact";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("main");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  console.log(activeSection)

  return (
    <body>
      <main>
        <Sidebar></Sidebar>
        {/* <NavBar></NavBar> */}
        {activeSection === "main" && (
          <Main activeSection = {activeSection} handleSectionClick={handleSectionClick}></Main>
        )}
        {activeSection === "resume" && (
          <Resume activeSection= {activeSection} handleSectionClick={handleSectionClick}></Resume>
        )}
        {activeSection === "portfolio" && (
          <Portfolio activeSection= {activeSection} handleSectionClick={handleSectionClick}></Portfolio>
        )}
        {activeSection === "study" && (
          <Study activeSection= {activeSection} handleSectionClick={handleSectionClick}></Study>
        )}
        {activeSection === "contact" && (
          <Contact activeSection= {activeSection} handleSectionClick={handleSectionClick}></Contact>
        )}
        
      </main>
      
    </body>
  );
};

export default Homepage;

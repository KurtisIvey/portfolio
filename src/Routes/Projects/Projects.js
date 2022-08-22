import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main projects">
      <Navbar />
      <section className="projects__body">
        <h1>Projects</h1>
        <div className="projects__projects">
          <div className="projects__project">
            <h2>project name</h2>
            <div className="projects__projectBody">
              <div>img</div>
              <div>description</div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;

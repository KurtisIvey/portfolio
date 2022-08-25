import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Projects.css";
import projectsMade from "./projectsMade";

const Projects = () => {
  return (
    <div className="main projects">
      <Navbar />
      <section className="projects__body">
        <h1 className="pageTitle">Projects</h1>
        {projectsMade.map((project) => {
          return (
            <div className="projects__projectBody" key={project.key}>
              <div className="projects__projectTopContainer">
                <a href={project.website}>{project.projectName}</a>

                <a href={project.github}>Repository Link</a>
              </div>

              <div className="projects__projectLowerContainer">
                <img
                  className="projects__projectImage"
                  src={project.src}
                  alt={project.alt}
                />
                <div className="projects__projectDescription">
                  {project.description}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;

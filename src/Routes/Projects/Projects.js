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
        <h1>Projects</h1>
        {projectsMade.map((project) => {
          return (
            <div className="projects__projectBody" key={project.key}>
              <h2>{project.projectName}</h2>
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

        <div className="projects__projects">
          <div className="projects__project">
            <h2>project name</h2>
            <div>
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

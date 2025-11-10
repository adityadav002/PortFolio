import "../styles/Projects.css";
import projects from "../data/projectsData.js";
import Modal from "../components/Modal.jsx";
import { useState } from "react";

function Project() {
  // Track which project is open (null means none)
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <>
     <div className="project_background">
       <hr />
      <br />
      <br />
      <br />
      <br />

      {projects.map((project, index) => (
        <div className="show_project" key={index}>
          <h1 className="project_name">
            <button
              className="open-modal-btn"
              onClick={() => handleOpen(project)}
            >
              {project.name}
            </button>
          </h1>
          <br />
          <hr />
        </div>
      ))}

      {/* Show modal only if a project is selected */}
      {selectedProject && (
        <Modal
          show={true}
          onClose={handleClose}
          linkurl={selectedProject.linkUrl}
          videourl={selectedProject.videoSrc}
          posterurl={selectedProject.posterSrc}
          desc={selectedProject.desc}
        />
      )}
     </div>
    </>
  );
}

export default Project;

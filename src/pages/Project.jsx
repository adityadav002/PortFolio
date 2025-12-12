import "../styles/Projects.css";
import projects from "../data/projectsData.js";
import Modal from "../components/Modal.jsx";
import { useState } from "react";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const [hoverImg, setHoverImg] = useState(null); // image to show
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 }); // cursor position

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  const handleMouseMove = (e) => {
    setImgPos({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  return (
    <>
      <div
        className="project_background"
        onMouseMove={handleMouseMove} // track cursor anywhere inside
      >
        <hr />
        <br />
        {projects.map((project, index) => (
          <div
            className="show_project"
            key={index}
            onMouseEnter={() => setHoverImg(project.hoverimg)}
            onMouseLeave={() => setHoverImg(null)}
          >
            <h1 className="project_name">
              <button
                className="open-modal-btn"
                onClick={() => handleOpen(project)}
              >
                {project.name}
              </button>
            </h1>
            <hr />
          </div>
        ))}

        {/* Floating follow-cursor image */}
        {hoverImg && (
          <img
            src={hoverImg}
            className="floating-img"
            style={{
              top: imgPos.y,
              left: imgPos.x,
            }}
          />
        )}

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
        <div className="more-project">
            <a target="blank" href="https://github.com/adityadav002">more</a>
        </div>
      </div>
    </>
  );
}

export default Project;

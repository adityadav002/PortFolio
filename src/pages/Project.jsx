import VideoCard from "../components/VideoCard.jsx";
import "../styles/Projects.css";
import projects from "../data/projectsData.js";

function Project() {
  return (
    <>
      <h1 className="project_head">Projects</h1>
      <div className="project_display">
        {projects.map((project, index) => (
          <VideoCard
            key={index}
            videoSrc={project.videoSrc}
            posterSrc={project.posterSrc}
            linkUrl={project.linkUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Project;

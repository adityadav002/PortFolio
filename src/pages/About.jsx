/** @format */

import ImageDisplay from "../components/ImageDisplay";
import "../styles/About.css";

function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aditya_Yadav_Resume.pdf";
    link.download = "Aditya_Yadav_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <>
      <div className="image">
        <ImageDisplay />
      </div>
      <div className="introduction">
        <h3>About Me</h3>
        <h1>
          I'm <span>ADITYA YADAV</span>
        </h1>
        <br />
        <hr />
        <br />
        <p>
          I'm a passionate and detail-oriented Software Engineer specializing in
          the MERN stack (MongoDB, Express, React, Node.js) and Python, with a
          focus on advanced technologies like OpenCV for computer vision
          applications.Whether you're looking to build a full-stack web
          application, or develop scalable backend systems, I offer end-to-end
          development solutions tailored to your project goals.
        </p>
        <br />
        <hr />
        <br />
        <p>
          If you're looking for a reliable engineering partner for your next
          project — let's talk and create something impactful together!
        </p>
        <br />
        <button onClick={handleDownload}>Download CV</button>
      </div>
    </>
  );
}

export default About;

import React from "react";
import "../styles/Skills.css";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNode,
} from "react-icons/fa";

function InfiniteScroll() {
  return (
    <>
      <div className="carousel">
        <div className="group">
          <div className="card">
            <FaReact />
          </div>
          <div className="card">
            <FaNode />
          </div>
          <div className="card">
            <FaHtml5 />
          </div>
          <div className="card">
            <FaCss3Alt />
          </div>
          <div className="card">
            <FaJs />
          </div>
          <div className="card">
            <FaDocker />
          </div>
          <div className="card">
            <FaPython />
          </div>
        </div>

        <div aria-hidden className="group">
          <div className="card">
            <FaReact />
          </div>
          <div className="card">
            <FaNode />
          </div>
          <div className="card">
            <FaHtml5 />
          </div>
          <div className="card">
            <FaCss3Alt />
          </div>
          <div className="card">
            <FaJs />
          </div>
          <div className="card">
            <FaDocker />
          </div>
          <div className="card">
            <FaPython />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;

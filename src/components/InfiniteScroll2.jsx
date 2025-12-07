import React from "react";
import "../styles/InfiniteScroll.css";
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
      <div className="carousel1">
        <div className="group">
          <div className="card1">ADITYA</div>
          <div className="card1">YADAV</div>
          <div className="card1">ADITYA</div>
          <div className="card1">YADAV</div>
        </div>

        <div aria-hidden className="group">
          <div className="card1">ADITYA</div>
          <div className="card1">YADAV</div>
          <div className="card1">ADITYA</div>
          <div className="card1">YADAV</div>
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;

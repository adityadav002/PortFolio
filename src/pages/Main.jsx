/** @format */

import Navbar from "../components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/Main.css";
import { useState, useEffect } from "react";
import InfiniteScroll2 from "../components/InfiniteScroll2";

function Main() {
  return (
    <>
      <div className="main_image">
        <Navbar />
        <div className="profession">
          <h2 className="im">I'm</h2>
          <h1 className="work">
  <Typewriter
    words={['Software Engineer', 'Artist', 'Calisthenics', 'Gamer']}
    loop={0}             
    cursor
    cursorStyle="|"
    typeSpeed={80}        
    deleteSpeed={50}      
    delaySpeed={1000}     
  />
</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

          <img
            src="/ADITYA_TRANSPARENT_MAIN.png"
            alt="backimg"
            className="backimg"
          />
        <InfiniteScroll2 />

        <div className="logo_main">
          <ul>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;

// service_a6am37e
// ..miubXi63Hp6bV
// template_2qzi8ti

// XVyjK3xHoFj5Ex5nB

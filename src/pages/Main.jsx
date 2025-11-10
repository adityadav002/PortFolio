/** @format */

import Navbar from "../components/Navbar";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/Main.css";
import "swiper/css";

function Main() {
  return (
    <>
      <div className="main_image">
        <Navbar />
        <div className="profession">
          <h2 className="im">I'm</h2>
          <h1 className="work">Software Engineering</h1>
        </div>
        <div className="slider-wrapper">
          <div className="text_container">
            <h1 className="behind-text text_color">ADITYA YADAV</h1>
            <h1 className="behind-text">ADITYA YADAV</h1>
            <h1 className="behind-text text_color">ADITYA YADAV</h1>
            <h1 className="behind-text">ADITYA YADAV</h1>
          </div>
        </div>
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

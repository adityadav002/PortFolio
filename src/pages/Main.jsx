/** @format */

import Navbar from "../components/Navbar";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "../styles/Main.css";
import InfiniteScroll2 from "../components/InfiniteScroll2";

function Main() {
  return (
    <>
      <div className="main_image">
        <Navbar />
        <div className="profession">
          <h2 className="im">I'm</h2>
          <h1 className="work">Software Engineer</h1>
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

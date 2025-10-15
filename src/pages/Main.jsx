/** @format */

import Navbar from "../components/Navbar";
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
        <div class="slider-wrapper">
          <div className="text_container">
            <h1 className="behind-text text_color">ADITYA YADAV</h1>
            <h1 className="behind-text">ADITYA YADAV</h1>
            <h1 className="behind-text text_color">ADITYA YADAV</h1>
            <h1 className="behind-text">ADITYA YADAV</h1>
          </div>
        </div>
        <span className="email">aditya.yadav992636@gmail.com</span>
      </div>
    </>
  );
}

export default Main;

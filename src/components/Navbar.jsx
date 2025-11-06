/** @format */

import TiltWrapper from "./TiltWrapper";

function Navbar() {
  return (
    <>
      <TiltWrapper
        className="navbar-tilt"
        style={{ background: "rgba(255, 255, 255, 0.15)" }}
      >
        <nav className="navbar">
          <div className="navbar__logo">Portfolio</div>
          <ul className="navbar__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </TiltWrapper>
    </>
  );
}

export default Navbar;

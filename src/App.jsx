/** @format */

import "./App.css";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Skills from "./pages/Skills.jsx";
import Cursor from "./components/Cursor.jsx";

function App() {
  return (
    <>
    <Cursor />
      <div className="page1">
        <Main />
      </div>
      <div className="page2">
        <section id="about">
          <About />
        </section>
      </div>
      <div className="page5">
        <section id="skill">
          <Skills />
        </section>
      </div>
      <div className="page3">
        <section id="project">
          <Project />
        </section>
      </div>
      <div className="page4">
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

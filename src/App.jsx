/** @format */

import "./App.css";
import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";

function App() {
  return (
    <>
      <div className="page1">
        <Main />
      </div>
      <div className="page2">
        <About />
      </div>
      <div className="page3">
        <Project />
      </div>
    </>
  );
}

export default App;

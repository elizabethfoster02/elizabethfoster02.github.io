import React from "react";
import "./App.css";

import logo from "./images/headshot.jpeg";
import github from "./images/25231.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="font-link">Elizabeth Foster</span>
      </header>
      <div className="grid-container">
        <div className="box">
          <span className="font-link">
            <p>
              Hello! I am a sophomore at Tufts University majoring in physics
              and computer science. I am intered Software Engineering internship
              for Summer 2023.
            </p>
            <p>
              I currently serve as the Associate Editor of The Tufts Daily and
              as a software engineering intern at Rooted Farmers. In my free
              time, I enjoy the outdoors and making music!
            </p>
          </span>
        </div>

        <div className="photoBox">
          <img src={logo} className="photoImage" alt="logo" />
        </div>

        <div className="box1">
          <p>
            Computer Science courses:
            <ul>
              <li>Machine Structures and Programming (COMP 40)</li>
              <li>Algorithms (COMP 160)</li>
              <li>Data Structures (COMP 15)</li>
              <li>Introduction to Security (COMP 116)</li>
              <li>Introduction to Quantum Information (COMP 151)</li>
            </ul>
          </p>
        </div>

        <div className="box3">
          <p>
            Physics courses:
            <ul>
              <li>Modern Physics (PHY 13)</li>
              <li>Introduction to Quantum Information (PHY 16)</li>
              <li>General Physics: Electricity and Magnetism (PHY 12)</li>
              <li>General Physics: Mechanics (PHY 11)</li>
            </ul>
          </p>
        </div>

        <div className="box2">
          <span className="font-link">
            Reach out to me or check out my work below!
          </span>
          <a href="https://github.com/elizabethfoster02">
            <img src={github} className="socials-logo" alt="logo" />
          </a>
          <a href="https://www.instagram.com/el1zabeth.foster/">
            <img src={instagram} className="socials-logo" alt="logo" />
          </a>
          <a href="https://www.linkedin.com/in/elizabethfoster02/">
            <img src={linkedin} className="socials-logo" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

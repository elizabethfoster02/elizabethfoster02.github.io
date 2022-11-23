import logo from "../images/headshot.jpeg";
import github from "../images/25231.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import "../App.css";

function Home() {
  return (
    <div className="grid">
      <div className="box">
        <span className="font-link">
          <img src={logo} className="photoImage" alt="logo" />
          <p>
            Hello! I am a junior at Tufts University majoring in physics and
            computer science. I am interested in software engineering
            internships for the summer 2023 season.
          </p>
          <p>
            This fall, I am studying abroad at Queen Mary University in London.
          </p>
        </span>
      </div>

      <div className="csCoursesBox">
        <p>
          Computer Science courses:
          <ul>
            <li>Complexity, Computation and Algorithms (Queen Mary, ECS646)</li>
            <li>Software Development and Quality (Queen Mary, ECS642)</li>
            <li>Machine Structures and Programming (COMP 40)</li>
            <li>Algorithms (COMP 160)</li>
            <li>Data Structures (COMP 15)</li>
            <li>Introduction to Security (COMP 116)</li>
            <li>Introduction to Quantum Information (COMP 151)</li>
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
  );
}

export default Home;
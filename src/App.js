import logo from './headshot.jpeg';
import github from './25231.png';
import twitter from './twitter_PNG1.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="font-link">
          Elizabeth Foster
        </span>
      </header>

      <div className="box">
        <span className="font-link">
          <p>
            Hello! I am a sophomore at Tufts University majoring in physics and
            computer science. I currently serve as the Associate Editor of The 
            Tufts Daily and as a software engineering intern at Rooted Farmers.
            In my free time, I enjoy the outdoors and making music! 
          </p>
        </span>
      </div>

      <img src={logo} className="App-logo" alt="logo" />

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

      <div className="box1">
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
            Reach out to me or check
            out my work below!
        </span>
        <img src={github} className="socials-logo" alt="logo" />
        <img src={twitter} className="socials-logo" alt="logo" />
        <img src={instagram} className="socials-logo" alt="logo" />
        <img src={linkedin} className="socials-logo" alt="logo" />
      </div>

    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Blog from "./pages/blog";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <span className="title">
            <Link to="/">Elizabeth Foster</Link>
          </span>
          <div className="navigation">
            <div className="navigationItem">
              <Link to="projects">Projects</Link>
            </div>
            <div className="navigationItem">
              <Link to="blog">Blog</Link>
            </div>
          </div>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

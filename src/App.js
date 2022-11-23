import React from "react";
import "./App.css";
import Home from "./pages/home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <span className="font-link">Elizabeth Foster</span>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/description" element={<Description />}></Route> */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

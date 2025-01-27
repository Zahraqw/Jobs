import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarHeader, JobList } from "Components";
import HomePage from "Home";

const App = () => {
  return (
    <Router>
      <NavbarHeader />
      <div className="MainContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<h1>job list</h1>} />
          <Route path="/partTime" element={<h1>part Time</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

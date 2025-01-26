import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarHeader } from "Components";

const App = () => {
  return (
    <Router>
      <NavbarHeader />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/fullTime" element={<h1>full Time</h1>} />
          <Route path="/partTime" element={<h1>part Time</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

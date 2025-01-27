import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <h1 className="hero-title mb-3">There Are 65.866 Jobs Here For You</h1>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <p className="hero-description">
          Discover your next career move, freelance gig or intership
        </p>
        <div className="home-link">
          Home <span className="hero-description">/ jobs listing</span>
        </div>
      </div>
      <Form className="search-form">
        <div className="position-relative w-100">
          <FaSearch className="search-icon" />
          <Form.Control type="text" className="search-input" />
        </div>
      </Form>
    </div>
  );
};

export default HeroBanner;

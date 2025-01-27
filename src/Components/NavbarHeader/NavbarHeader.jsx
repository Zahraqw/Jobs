import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavbarHeader.css";
import Button from "Components/Button/Button";

const NavbarHeader = () => {
  const handleClick = () => {
    //handle sign in button clicked
    console.log("sign in ");
  };

  return (
    <div className="MainContainer">
      <div className="navbarHeader">
        <Navbar expand="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-between"
            id="basic-navbar-nav"
          >
            <Nav className="nav">
              <NavLink className="link" to="/" activeclassname="active-link">
                Home
              </NavLink>
              <NavDropdown
                className="link"
                title="Browse Jobs"
                id="basic-nav-dropdown"
                activeclassname="active-link"
              >
                <NavDropdown.Item>
                  <NavLink
                    className="link"
                    to="/jobs"
                    activeclassname="active-link"
                  >
                    Jobs
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="link"
                    to="/partTime"
                    activeclassname="active-link"
                  >
                    Part time
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="link"
                title="Employers"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>Designer</NavDropdown.Item>
                <NavDropdown.Item>Developer</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="link"
                title="Candidates"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>Person 1</NavDropdown.Item>
                <NavDropdown.Item>Person 2</NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className="link"
                to="/contact"
                activeclassname="active-link"
              >
                Contact
              </NavLink>
            </Nav>
            <Button label="Sign In" onClick={handleClick} variant="primary" />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarHeader;

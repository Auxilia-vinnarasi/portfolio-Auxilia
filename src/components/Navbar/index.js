import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div className=" bg-dark rounded-lg">
      <Nav activeKey="1">
        <Nav.Item>
          <Nav.Link className="navLink" eventKey="1" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navLink"
            href="/aboutme"
            eventKey="/aboutme"
            title="Item"
          >
            About
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            className="navLink"
            href="/resume"
            eventKey="/resume"
            title="Item"
          >
            Resume
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="navLink"
            eventKey="3"
            href="https://github.com/Auxilia-vinnarasi"
            target="_blank"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <NavDropdown className="navLink" title="Projects" id="nav-dropdown">
          <NavDropdown.Item
            eventKey="4.1"
            href="https://attendancemgmt-task1.herokuapp.com/"
            target="_blank"
          >
            Attendance Management System
          </NavDropdown.Item>
          <NavDropdown.Item
            eventKey="4.2"
            href="https://pizzadelivery-auxi.herokuapp.com/"
            target="_blank"
          >
           Pizza Delivery
          </NavDropdown.Item>
          <NavDropdown.Item
            eventKey="4.3"
            href="https://auxilia-memories-project.netlify.app/"
            target="_blank"
          >
            Memories project
          </NavDropdown.Item>
          <NavDropdown.Item
            eventKey="4.3"
            href="https://chat-application-auxilia.netlify.app/"
            target="_blank"
          >
            Chat Application
          </NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          {/* <NavDropdown.Item eventKey="4.4">PrePair</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default Navbar;

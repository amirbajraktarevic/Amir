import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navbar"></Nav>
          <Nav className="navbar">
            <Nav.Link>
              <Link className="navbar-link" to="/">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link className="navbar-link" to="/About2">
                {" "}
                About{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navbar-link" to="/Projects">
                {" "}
                Projects{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navbar-link" to="/Contact">
                {" "}
                Contact{" "}
              </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  state = {
    bg: "transparent",
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      this.setState({ bg: "light" });
    } else {
      this.setState({ bg: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <Navbar bg={this.state.bg} sticky="top">
        <Navbar.Brand href="/">
          <img alt="Cabin" src="./images/logo.png" height="50"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center" style={{ flex: 1 }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="aboutUs">AboutUs</Nav.Link>
            <Nav.Link href="/rooms">Rooms</Nav.Link>
             <Nav.Link href="/restaurant">Restaurant</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

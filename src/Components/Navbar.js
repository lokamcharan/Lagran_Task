import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Direct() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="background"
      style={{ backgroundColor: "black" }}
    >
      <Container>
        <NavLink
          to="/"
          href="#home"
          style={{
            fontSize: "30px",
            textDecoration: "none",
            color: "whitesmoke",
          }}
        >
          E-Shop
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              to="/"
              style={{
                fontSize: "18px",
                textDecoration: "none",
                marginRight: "20px",
                color: "whitesmoke",
              }}
              activeStyle={{ fontWeight: "bold" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "whitesmoke",
                marginRight: "20px",
              }}
              activeStyle={{ fontWeight: "bold" }}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "whitesmoke",
                marginRight: "20px",
              }}
              activeStyle={{ fontWeight: "bold" }}
            >
              Signup
            </NavLink>
            <NavLink
              to="/cart"
              style={{
                fontSize: "18px",
                textDecoration: "none",
                color: "whitesmoke",
              }}
              activeStyle={{ fontWeight: "bold" }}
            >
             Cart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Direct;

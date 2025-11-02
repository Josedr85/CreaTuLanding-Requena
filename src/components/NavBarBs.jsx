import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetRI from "./CartWidgetRI";
function NavBarBs() {
  return (
    <Navbar
      expand="lg"
      style={{
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "2rem" }}>
          <img src="./logo.png" alt="Logo" style={{ width: "4rem" }} />
          MusicStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              fontSize: "0.9rem",
              textTransform: "uppercase",
              marginLeft: "20px",
            }}
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Guitarras</Nav.Link>
            <Nav.Link href="#">Teclados</Nav.Link>
            <Nav.Link href="#">Percusión</Nav.Link>
            <Nav.Link href="#">Bajos</Nav.Link>
            <Nav.Link href="#">Vientos</Nav.Link>
            <Nav.Link href="#">Cuerdas</Nav.Link>
            <Nav.Link href="#">Sonido</Nav.Link>
          </Nav>
          <CartWidgetRI counter={"8"} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBs;

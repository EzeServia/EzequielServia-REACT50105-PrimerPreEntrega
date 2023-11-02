import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fondo ">
      <Container fluid>
        <Navbar.Brand>
          <a>
            <img
              className="logo"
              src="\src\components\navbarComponents\imagen\logoabrillar.png"
              alt="Imagen de logo"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 texto"
            style={{ maxHeight: "100px" }}>
            <Nav.Link className="texto" href="#action1">
              Inicio
            </Nav.Link>
            <Nav.Link className="texto" href="#action2">
              Productos
            </Nav.Link>
            <NavDropdown
              className="texto"
              title="Categorias"
              id="navbarScrollingDropdown">
              <NavDropdown.Item className="texto" href="#action3">
                Brillos
              </NavDropdown.Item>
              <NavDropdown.Item className="texto" href="#action4">
                Gemas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <CartWidgetComponent />
            <Form.Control
              type="search"
              placeholder="¿Qué estás buscando?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

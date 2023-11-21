import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import { ProductsData } from "../../services/data/ProductsData";

const NavBarComponent = () => {
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
            <Link to="/">Home</Link>
            <NavDropdown
              className="texto"
              title="Categorias"
              id="navbarScrollingDropdown">
              {ProductsData.map((product) => {
                return (
                  <NavDropdown.Item key={product.id}>
                    <Link
                      to={`/category/${product.category}`}
                      style={{ textDecoration: "none", color: "black" }}>
                      {product.category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
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
export default NavBarComponent;

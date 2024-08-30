import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import { ProductsCategoryData } from "../../services/data/ProductsCategoryData";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fondo ">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              className="logo"
              src="\src\components\navbarComponents\imagen\logoBelleza.png"
              alt="Imagen de logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 texto"
            style={{ maxHeight: "100px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Catálogo
            </Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              {ProductsCategoryData.map((category) => {
                return (
                  <NavDropdown.Item key={category.id}>
                    <Link
                      to={`/category/${category.category}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}>
                      {category.category}
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
              className="me-2 buscador"
              aria-label="Search"
            />
            <Button className="buscador" variant="outline-success">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;

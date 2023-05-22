import CartWidget from "../CartWidget/CartWidget"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container  fluid>
        <Navbar.Brand href="#" className='logo'>Backs</Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Marcas</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sneakers</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Jeans</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
            Contacto
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button className="borderBuscar">Buscar</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
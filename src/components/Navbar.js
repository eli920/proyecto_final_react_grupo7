import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import ShopCart from './cart/ShopCart';
import { AppContext } from '../context/app';

const MyNavbar = () => {
  const { state } = useContext(AppContext);
  console.log('state ', state);
  return (
    <Navbar bg="light" variant="light" expand="lg" style={{ paddingLeft: '20px'}}>
      <Navbar.Brand href="/">Trown</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/tienda">Tienda</Nav.Link>
          <Nav.Link href="/ofertas">Ofertas</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
              {state?.totalQuantity || 0}
           </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;

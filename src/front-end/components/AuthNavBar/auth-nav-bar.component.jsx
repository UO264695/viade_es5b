import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import auth from "solid-auth-client";

const AuthNavBar = (props) => {
  const logout = () => {
    auth.logout();
    window.location = "#/login";
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#/">Viade-Rutas</Navbar.Brand>
      <Nav>
        <Nav.Link href="#/ver-rutas">Mis rutas</Nav.Link>
        <Nav.Link href="#/add-menu">Crear rutas</Nav.Link>
        <Nav.Link href="#/friends">Amigos</Nav.Link>
        <Nav.Link href="#/shared">Compartido conmigo</Nav.Link>
      </Nav>

      <Nav className="ml-auto">
        <Nav.Link className="logout" onClick={logout}>
          Log Out
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AuthNavBar;

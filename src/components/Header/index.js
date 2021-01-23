import React from "react";
import Navbar from "react-bootstrap/Navbar";

import style from "./index.module.scss";
import { Container } from "react-bootstrap";
import SearchBar from "../SearchBar";

const Header = ({ onSearchSubmit }) => (
  <Navbar
    bg="light"
    expand="lg"
    sticky="top"
    className={`${style.navbar} justify-content-between`}
  >
    <Container>
      <Navbar.Brand href="#home">
        <h5 className="mb-0">hey</h5>
        <h5 className="mb-0">cinema</h5>
      </Navbar.Brand>
      <SearchBar onSubmit={onSearchSubmit} />
    </Container>
  </Navbar>
);

export default Header;

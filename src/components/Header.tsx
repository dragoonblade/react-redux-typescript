import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../resources/stackline_logo.svg";

const Header = () => (
    <Navbar>
        <Container fluid>
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="100"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
);

export default Header;

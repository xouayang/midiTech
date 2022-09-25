import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import Logo from "../images/logo1.jpeg";
const Menubar = () => {
  return (
    <>
      <Navbar expand="lg" className="shadow-sm" id='navbar'
      >
        <Container>
          <Navbar.Brand href="/" className="me-5">
            <Image src={Logo} alt="Logo" style={{ height: "90px" }} />
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav"  />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex justify-content-end">
              <Nav.Link href="#navbar" className="fs-5 fw-bold me-5">ຫນ້າຫລັກ</Nav.Link>
              <Nav.Link href="#about" className="fs-5 fw-bold me-5">ກຽ່ວກັບເມດີເທັກ</Nav.Link>
              <Nav.Link href="#Service" className="fs-5 fw-bold me-5">ບໍລິການ</Nav.Link>
              <Nav.Link href="#Product" className="fs-5 fw-bold me-5">ຜົນງານ</Nav.Link>
              <Nav.Link href="#Member" className="fs-5 fw-bold me-5">ທີມງານ</Nav.Link>
              <Nav.Link href="#footer" className="fs-5 fw-bold me-5">ຕິດຕໍ່ພວກເຮົາ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;

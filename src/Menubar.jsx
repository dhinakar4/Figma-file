import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { IoIosArrowDown } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";



function Menubar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"              // for light text on dark bg
          className="sticky top-0 z-50 bg-dark py-2 mt-3 transition-colors"
        >
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="gap-3 w-full flex items-center">
                  <Nav.Link href="#demos" className="items-center text-gray-400 hover:text-gray-200 !flex">Demos <IoIosArrowDown /> </Nav.Link>
                  <Nav.Link href="#features" className="items-center text-gray-400 hover:text-gray-200 !flex">Features <IoIosArrowDown /> </Nav.Link>
                  <Nav.Link href="#elements" className="items-center text-gray-400 hover:text-gray-200 !flex">Elements <IoIosArrowDown /> </Nav.Link>
                  <Nav.Link href="#documentation" className="items-center text-gray-400 hover:text-gray-200 !flex">Documentation <IoIosArrowDown /> </Nav.Link>
                  <Nav.Link href="#support" className="items-center text-gray-400 hover:text-gray-200 !flex">Support <IoIosArrowDown /> </Nav.Link>
                  <Nav.Link href="#faqs" className="items-center text-gray-400 hover:text-gray-200 !flex">Faq's <IoIosArrowDown /> </Nav.Link>
                  <Nav.Link className="items-center !flex !text-gray-700 gap-2 sm:!text-gray-200 me-20 md:me-0 ms-auto"><LuPhoneCall size={20} />(219)555-0114 </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menubar;

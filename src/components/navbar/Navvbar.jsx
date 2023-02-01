import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navvbar = () => {
  return (
    // <div className="navbar">
    <Navbar bg="light" variant="light" className="bg-white">
      <Container>
        <div className="w-52 ml-24">
          <img src="image/logo/tts-logo.png" alt="Logoimg" />
        </div>

        <div className="text-lg	mr-[170px] p-2">
          <Nav className="me-auto font-display">
            <Link className="item text-black no-underline mr-7" to="/">
              Home
            </Link>
            <Link
              className="item text-black ml-5 no-underline mr-7"
              to="/aboutus"
            >
              About us
            </Link>
            <Link
              className="item text-black ml-5 no-underline mr-7"
              to="/whatwedo"
            >
              What we do
            </Link>
            <Link
              className="item text-black ml-5 no-underline mr-7"
              to="/joinus"
            >
              Join us
            </Link>
            <Link
              className="item text-black ml-5 no-underline mr-7"
              to="/contactus"
            >
              Contact us
            </Link>

            <button className="bg-[#FAB811] px-4 py-0.5  rounded-sm">
              <Link className="item text-black no-underline " to="/donate ">
                Donate
              </Link>
            </button>
          </Nav>
        </div>
      </Container>
    </Navbar>
    // </div>
  );
};

export default Navvbar;

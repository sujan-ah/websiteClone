import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navvbar = () => {
  return (
    <Navbar bg="light" variant="light" className="bg-black">
      <Container>
        <div className="w-52 ml-24">
          <img className="logo" src="image/logo/tts-logo.png" alt="Logoimg" />
        </div>

        <div className="text-lg	mr-[170px] p-2">
          <Nav className="me-auto font-display ">
            <Link className="item navlink text-white no-underline mr-7" to="/">
              Home
            </Link>
            <Link
              className="item navlink text-white ml-5 no-underline mr-7"
              to="/aboutus"
            >
              About us
            </Link>
            <Link
              className="item navlink text-white ml-5 no-underline mr-7"
              to="/whatwedo"
            >
              What we do
            </Link>
            <Link
              className="item navlink text-white ml-5 no-underline mr-7"
              to="/joinus"
            >
              Join us
            </Link>
            <Link
              className="item navlink text-white ml-5 no-underline mr-7"
              to="/contactus"
            >
              Contact us
            </Link>

            <button className="bg-[#FAB811] w-[110px] h-[34px] rounded-sm">
              <Link
                className="item navlink text-black no-underline "
                to="/donate "
              >
                Donate
              </Link>
            </button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navvbar;

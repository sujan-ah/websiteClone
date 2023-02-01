import React from "react";
import "./footer.css";
import { Form, Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer">
      <div className="backimg">
        <div className="container">
          <div className="box">
            <div className="text">
              <h6>The Tomorrow School e.V.</h6>
              <p>
                The Tomorrow School is a registered non-
                <br />
                profit organization in Hamburg, Germany.
                <br />
                <br />
                <b className="br">Register number:</b> VR 24153.
                <br />
                <b className="br">Tax Identification No.:</b>
                17/440/23048.
                <br />
                <br />
                Copyright © 2019 All Rights Reserved
              </p>
            </div>
            <div className="text2">
              <h6>Quick Links</h6>
              <p>
                About us
                <br />
                What we do
                <br />
                Join us
                <br />
                Contact us
                <br />
                Donate Privacy
                <br />
                policy
                <br />
                Imprint
              </p>
            </div>
            <div className="text3">
              <h6>Contact Us</h6>
              <p>
                +49 / 162 / 21 22 712
                <br />
                hello@tomorrow-school.org
                <br />
                www.tomorrow-school.org
              </p>
              <div className="flex mt-4">
                <FaFacebookF className="text-[40px] p-2 bg-white text-[#4064AC] rounded " />
                <RiInstagramLine className="text-[40px] p-2 ml-3 bg-white  text-[#3B5A9A] rounded" />
              </div>
            </div>

            <div className="form">
              <h6>Newsletter</h6>
              <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    className="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    className="msg"
                    type="email"
                    placeholder="Your Email Address"
                  />
                </Form.Group>
                <Button className="btn">Subscribe</Button>
              </Form>
            </div>
          </div>

          <div className="under"></div>
          <div className="logo">
            <img src="image/logo/Website-design_3-07.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

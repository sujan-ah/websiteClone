import React from "react";
import "./contact.css";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact">
      <div className="box">
        <h1>Get in touch</h1>
        <p>Contact us. We’d love to hear from you.</p>
      </div>

      <div className="container">
        <div className="box2">
          <div className="img">
            <img src="image/contactimg.jpg" alt="" />
          </div>

          <div className="form">
            <Form>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="input"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="msg"
                  type="text"
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button className="btn">Send</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

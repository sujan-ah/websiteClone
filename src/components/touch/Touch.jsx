import React from "react";
import "./touch.css";
import { Form, Button } from "react-bootstrap";

const Touch = () => {
  return (
    <section className="touch">
      <div className="container">
        <div className="box">
          <h3>Get in touch</h3>
          <p>Contact us. We’d love to hear from you.</p>
        </div>

        <div className="box2">
          <div className="img"></div>

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
              <Button className="btn">Sent</Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;

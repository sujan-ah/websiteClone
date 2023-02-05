import "./homeModal.css";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const HomeModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useState(() => {
    setShow(true);
  }, []);

  return (
    <Modal className="modal" show={show} onHide={handleClose}>
      <div>
        <img
          onClick={() => setShow(false)}
          className="cross"
          src="image/close.png"
          alt=""
        />
        <img className="img" src="image/modalImg.jpg" alt="" />
      </div>
      <div>
        <h1>More info? Gladly.</h1>
        <p>
          Stay updated on the situation on site and the current status of our
          projects. So you always know exactly what your gift has achieved.
        </p>
      </div>

      <div className="form">
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
    </Modal>
  );
};

export default HomeModal;

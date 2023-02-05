import React from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item className="child">
        <img src="image/1.jpg" alt="First slide" />
        <Carousel.Caption className="textbox">
          <h3>5 in 10 Children</h3>
          <h4>in Ethiopia can't</h4>
          <h5>read or write.</h5>
          <p>Join us in our mission to change that.</p>
          <button>Donate</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="water">
        <img className="d-block w-100" src="image/2.jpg" alt="Second slide" />

        <Carousel.Caption className="waterbox">
          <h3>Over half of the Ethiopian</h3>
          <h4>population lacks access</h4>
          <h5>to safe, clean water.</h5>
          <p>Help us bringing clean water to schools in Ethiopia.</p>
          <button>Donate</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="land">
        <img className="d-block w-100" src="image/3.jpg" alt="Third slide" />

        <Carousel.Caption>
          <p>tommorow/ temore/Noun.</p>
          <h3>A mystical land where 99% of all</h3>
          <h4>human productivity, motivation and</h4>
          <h5>achievement is stored.</h5>
          <button>What we do</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

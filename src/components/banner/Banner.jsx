import React from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item className="child">
        <img src="image/1.jpg" alt="First slide" />
        <Carousel.Caption className="textbox">
          <h3>5 in 10 Children in Ethiopia can't read or write.</h3>
          <p>Join us in our mission to change that.</p>
          <button>Donate</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="water">
        <img className="d-block w-100" src="image/2.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h4>
            Over half of the Ethiopian population lacks access to safe, clean
            water.
          </h4>
          <p>Help us bringing clean water to schools in Ethiopia.</p>
          <button>Donate</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="land">
        <img className="d-block w-100" src="image/3.jpg" alt="Third slide" />

        <Carousel.Caption>
          <p>tommorow/ temore/Noun.</p>
          <h5>
            A mystical land where 99% of all human productivity, motivation and
            achievement is stored.
          </h5>
          <button>What we do</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

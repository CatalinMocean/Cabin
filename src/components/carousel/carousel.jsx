import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Carousel2 = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img19.jpeg"
          alt="First slide"
          // height={600}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img10.jpeg"
          alt="Second slide"
          // height={600}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img3.jpg"
          alt="Third slide"
          // height={600}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel2;

import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Carousel2 = ({children}) => {
  return (
    <div style={{position: 'relative'}}>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/aboutUs.jpeg"
          alt="First slide"
          height={650}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/bg1.jpeg"
          alt="First slide"
          height={650}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img19.jpeg"
          alt="First slide"
          height={650}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img5.jpeg"
          alt="Second slide"
          height={650}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/bg2.jpeg"
          alt="Second slide"
          height={650}
        />
      </Carousel.Item>
      
     <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/img10.jpeg"
          alt="Four slide"
          height={650}
        />
      </Carousel.Item>
    </Carousel>
   {children}
    </div>
  );
};

export default Carousel2;

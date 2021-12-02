import React from "react";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";

import { Row, Col, Card } from "react-bootstrap";

const Rooms = () => {
  return (
    <>
      <div
        id="background-container"
        style={{
          background: 'url("/images/img14.jpg") center/cover no-repeat',
        }}
      >
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </div>
      <Row>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="./images/img19.jpeg" />
          <Card.Body>
            <Card.Title>Double Room</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <br />
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="./images/img15.jpeg" />
          <Card.Body>
            <Card.Title>Triple Room</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src="./images/img17.jpeg" />
          <Card.Body>
            <Card.Title>Twin Room</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Row>
    </>
  );
};

export default Rooms;

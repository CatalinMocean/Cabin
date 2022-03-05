import React from "react";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Rooms = () => {
  return (
    <>
      <div
        id="background-container"
        style={{
          background: 'url("/images/roomsbg.jpeg") center/cover no-repeat',
        }}
      >
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </div>
      <Container >
      <Row className="d-flex justify-content-around p-4">
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img variant="top" src="./images/doubleroom1.jpeg" />
          <Card.Body>
            <Card.Title>Double Room</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img variant="top" src="./images/doubleroom2.jpeg" />
          <Card.Body>
            <Card.Title>Triple Room</Card.Title>
            <Card.Text>

            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "28rem" }} className="m-3">
          <Card.Img variant="top" src="./images/twinroom4.jpeg" />
          <Card.Body>
            <Card.Title>Twin Room</Card.Title>
            <Card.Text>

            </Card.Text>
            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>
      </Row>
      </Container>
    </>
  );
};

export default Rooms;

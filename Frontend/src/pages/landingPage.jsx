import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container className="d-flex vh-100 align-items-center justify-content-center">
      <Card className="text-center p-4 shadow-lg" style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title className="mb-3">Welcome</Card.Title>
          <Card.Text>Who's going to use this system?</Card.Text>
          <Row className="mt-3">
            <Col>
              <Button variant="primary" className="w-100">User</Button>
            </Col>
            <Col>
              <Button variant="secondary" className="w-100">Faculty Staff</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LandingPage;
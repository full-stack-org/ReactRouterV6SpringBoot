import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center common-footer">
          <Col>
            <p>All Copy&copy; Rights Reserved 2021</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

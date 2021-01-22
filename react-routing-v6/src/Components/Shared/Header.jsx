import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-center common-header mt-3">
                    <Col>
                    <p> Login Management System </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

const Loader = () => (
  <Row className="justify-content-center mt-5">
    <Col xs="auto" sm="auto">
      <Spinner animation="grow"></Spinner>
    </Col>
  </Row>
);

export default Loader;

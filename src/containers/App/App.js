import React, { Component } from "react";
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="app-container">
        <Row>
          <Col md={4}>Sidebar</Col>
          <Col>
            <h1> Notetaker app!</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

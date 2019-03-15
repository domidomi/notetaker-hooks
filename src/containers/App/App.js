import React, { useState, useEffect } from "react";
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";

import { Sidebar } from "../../components";

import notesData from "../../assets/notes.json";

const App = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    
  });

  return (
    <Container fluid={true} className="app-container">
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col>
          <h1> Notetaker app!</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

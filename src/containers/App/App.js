import React, { useState, useEffect } from "react";
import "./App.scss";

import styled from "styled-components";

import { Sidebar } from "../../components";

import notesData from "../../assets/notes.json";

const StyledContainer = styled.div`
  background-color: #eee;
  display: flex;
  height: 100vh;
`;

const StyledSidebar = styled.div`
  width: 20%;
  min-width: 300px;
  height: 100%;
  flex: 0 0 auto;
`;

const StyledContent = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`;

const Title = styled.div`
  font-size: 160px;
`;

const App = () => {
  const [notes, setNotes] = useState(notesData);

  useEffect(() => {});

  return (
    <StyledContainer fluid={true}>
      <StyledSidebar>
        <Sidebar notes={notes} />
      </StyledSidebar>
      <StyledContent>
        <Title> Notetaker app!</Title>
        <Title> Notetaker app!</Title>
        <Title> Notetaker app!</Title>
        <Title> Notetaker app!</Title>
        <Title> Notetaker app!</Title>
        <Title> Notetaker app!</Title>
        <Title> Notetaker app!</Title>
      </StyledContent>
    </StyledContainer>
  );
};

export default App;

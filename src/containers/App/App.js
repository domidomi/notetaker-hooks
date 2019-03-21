import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";

import styled from "styled-components";

import { Navbar, NotesList } from "../../components";

import notesData from "../../assets/notes.json";

const StyledContainer = styled.div`
  background-color: #eee;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const StyledNavbar = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
`;

const StyledContent = styled.div`
  padding-top: 70px;
`;

const App = () => {
  const [displayedNotes, setDisplayedNotes] = useState(notesData);
  const [notesFilter, setNotesFilter] = useState(null);

  const handleNoteFilterChange = useCallback(filter => {
    setNotesFilter(filter);
  }, []);

  useEffect(() => {
    let notesFromTag = notesData;

    if (notesFilter) {
      notesFromTag = notesFromTag.filter(note =>
        note.tags.includes(notesFilter.name)
      );
    }

    setDisplayedNotes(notesFromTag);
  }, [notesFilter]);

  return (
    <StyledContainer fluid={true}>
      <StyledNavbar>
        <Navbar
          activeFilter={notesFilter}
          handleNoteFilterChange={handleNoteFilterChange}
        />
      </StyledNavbar>
      <StyledContent>
        <NotesList notes={displayedNotes} />
      </StyledContent>
    </StyledContainer>
  );
};

export default App;

import React, { useState } from "react";

import styled from "styled-components";

import { Navbar, NotesList } from "./";

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

const AppContent = ({ activeFilter, handleNoteFilterChange, notes }) => {
  return (
    <StyledContainer fluid={true}>
      <StyledNavbar>
        <Navbar
          activeFilter={activeFilter}
          handleNoteFilterChange={handleNoteFilterChange}
        />
      </StyledNavbar>
      <StyledContent>
        {notes && <NotesList notes={notes} />}
      </StyledContent>
    </StyledContainer>
  );
};

export default AppContent;

import React, { useState } from "react";

import styled from "styled-components";

import { Navbar, NotesList } from "./";
import { Modal, Backdrop } from "../UI";

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
  const [modalOpened, setModalOpened] = useState(true);

  return (
    <StyledContainer fluid={true}>
      <StyledNavbar>
        <Navbar
          activeFilter={activeFilter}
          handleNoteFilterChange={handleNoteFilterChange}
        />
      </StyledNavbar>
      <StyledContent>{notes && <NotesList notes={notes} />}</StyledContent>

      {modalOpened && (
        <>
          <Modal>
            <span>modal content</span>
          </Modal>
          <Backdrop
            clicked={() => {
              console.log("click");
              setModalOpened(false);
            }}
          />
        </>
      )}
    </StyledContainer>
  );
};

export default AppContent;

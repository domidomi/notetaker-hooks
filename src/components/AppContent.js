import React, { useState, useEffect } from "react";

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

const AppContent = ({ activeFilter, handleNoteFilterChange, notes, tags }) => {
  const [modalContent, setModalContent] = useState(null);

  const setupModal = content => {
    setModalContent(content);
  };

  const clearModal = () => {
    setModalContent(null);
  };

  return (
    <StyledContainer fluid={true}>
      <StyledNavbar>
        <Navbar
          activeFilter={activeFilter}
          handleNoteFilterChange={handleNoteFilterChange}
          setupModal={setupModal}
          tags={tags}
        />
      </StyledNavbar>
      <StyledContent>{notes && <NotesList notes={notes} />}</StyledContent>

      {modalContent && (
        <>
          <Modal>{modalContent}</Modal>
          <Backdrop clicked={() => clearModal()} />
        </>
      )}
    </StyledContainer>
  );
};

export default AppContent;

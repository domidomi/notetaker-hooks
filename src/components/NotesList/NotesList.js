import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NoteCard } from "../";

const NotesListContent = styled.div`
  padding: 20px;
`;

const NotesList = ({ notes }) => {
  const [notesToDisplay, setNotesToDisplay] = useState(null);

  const getNotesToDisplay = () => {
    return notes.map(note => <NoteCard data={note} />);
  };

  useEffect(() => {
    setNotesToDisplay(getNotesToDisplay());
  }, [notes]);

  return (
    <NotesListContent>
      {notes && notesToDisplay}

      {!notes && <h4>No notes :(</h4>}
    </NotesListContent>
  );
};

export default NotesList;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NoteCard } from "../";

const NotesListContent = styled.div`
  padding: 20px;
`;

const NotesList = ({ notes }) => {
  const [notesToDisplay, setNotesToDisplay] = useState(notes);

  useEffect(() => {
    setNotesToDisplay(notes);
  }, [notes]);

  return (
    <NotesListContent>
      {notesToDisplay && notesToDisplay.map(note => <NoteCard key={note._id} data={note} />)}

      {!notes && <h4>No notes :(</h4>}
    </NotesListContent>
  );
};

export default NotesList;

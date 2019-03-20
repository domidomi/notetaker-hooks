import React from "react";
import styled from "styled-components";

const NotesListContent = styled.div`
  padding: 20px;
`;

const NotesList = ({ notes }) => {
  return (
    <NotesListContent>
      {notes && notes.map(note => <h4>{note.content.title}</h4>)}

      {!notes && <h4>No notes :(</h4>}
    </NotesListContent>
  );
};

export default NotesList;

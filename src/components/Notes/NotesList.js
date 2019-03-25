import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";
import { NoteCard } from "../";

const NotesListContent = styled.div`
  padding: 20px;
`;

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };
const NotesList = ({ notes }) => {
  const [notesToDisplay, setNotesToDisplay] = useState(notes);

  useEffect(() => {
    setNotesToDisplay(notes);
  }, [notes]);

  return (
    <NotesListContent>
      {notesToDisplay && notesToDisplay.map(note => <NoteCard key={note._id} data={note} />)}
      {notesToDisplay && (
        <Masonry
          className={"my-gallery-class"} // default ''
          elementType={"div"} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {notesToDisplay.map(note => (
            <NoteCard key={note._id} data={note} />
          ))}
        </Masonry>
      )}

      {!notes && <h4>No notes :(</h4>}
    </NotesListContent>
  );
};

export default NotesList;

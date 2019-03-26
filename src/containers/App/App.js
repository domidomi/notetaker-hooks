import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";

import notesData from "../../assets/notes.json";

import { AppContent} from "../../components";

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
    <AppContent
      activeFilter={notesFilter}
      notes={displayedNotes}
      handleNoteFilterChange={handleNoteFilterChange}
    />
  );
};

export default App;

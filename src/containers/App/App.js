import React, { useState, useEffect, useCallback, useContext } from "react";
import "./App.scss";

import { FirebaseContext } from "../../utils/Firebase";
import { AppContent } from "../../components";

const App = () => {
  const [allNotes, setAllNotes] = useState(null);
  const [displayedNotes, setDisplayedNotes] = useState(null);
  const [notesFilter, setNotesFilter] = useState(null);
  const firebase = useContext(FirebaseContext);

  const handleNoteFilterChange = useCallback(filter => {
    setNotesFilter(filter);
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.notesRef.onSnapshot(function(snapshot) {
      let notes = [];
      snapshot.forEach(function(doc) {
        notes.push(doc.data());
      });
      setAllNotes(notes);
    });

    return () => {
      // Stop listening to changes
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let filteredNotes = allNotes;
    if (notesFilter) {
      filteredNotes = filteredNotes.filter(note =>
        note.tags.includes(notesFilter.name)
      );
    }

    setDisplayedNotes(filteredNotes);
  }, [allNotes, notesFilter]);

  return (
    <AppContent
      activeFilter={notesFilter}
      notes={displayedNotes}
      handleNoteFilterChange={handleNoteFilterChange}
    />
  );
};

export default App;

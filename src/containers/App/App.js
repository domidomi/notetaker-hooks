import React, { useState, useEffect, useCallback, useContext } from "react";
import "./App.scss";

import { FirebaseContext } from "../../utils/Firebase";
import { AppContent } from "../../components";

const App = () => {
  const [allNotes, setAllNotes] = useState(null);
  const [allTags, setAllTags] = useState(null);
  const [displayedNotes, setDisplayedNotes] = useState(null);
  const [notesFilter, setNotesFilter] = useState(null);
  const firebase = useContext(FirebaseContext);

  const handleNoteFilterChange = useCallback(filter => {
    setNotesFilter(filter);
  }, []);

  useEffect(() => {
    const unsubscribeNotes = firebase.notesRef.onSnapshot(snapshot => {
      let notes = [];
      snapshot.forEach(function(doc) {
        notes.push(doc.data());
      });
      setAllNotes(notes);
    });

    const unsubscribeTags = firebase.tagsRef.onSnapshot(snapshot => {
      let tags = [];
      snapshot.forEach(function(doc) {
        tags.push(doc.data());
      });
      setAllTags(tags);
    });

    return () => {
      // Stop listening to changes
      unsubscribeNotes();
      unsubscribeTags();
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
      tags={allTags}
      handleNoteFilterChange={handleNoteFilterChange}
    />
  );
};

export default App;

import React, { useState, useEffect, useCallback, useContext } from "react";
import { useRedux } from "use-redux";
import "./App.scss";

import { FirebaseContext } from "../../utils/Firebase";
import { AppContent } from "../../components";

import * as notesActions from "../../_actions/notes.actions";
import * as tagsActions from "../../_actions/tags.actions";

const notesSelector = state => state.notes;
const tagsSelector = state => state.tags;

const App = () => {
  const [notes, setNotes] = useRedux([notesSelector], [notesActions.set]);
  const [tags, setTags] = useRedux([tagsSelector], [tagsActions.set]);
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
      setNotes(notes);
    });

    const unsubscribeTags = firebase.tagsRef.onSnapshot(snapshot => {
      let tags = [];
      snapshot.forEach(function(doc) {
        tags.push(doc.data());
      });
      setTags(tags);
    });

    return () => {
      // Stop listening to changes
      unsubscribeNotes();
      unsubscribeTags();
    };
  }, []);

  console.log("notes", notes);

  useEffect(() => {
    let filteredNotes = notes;
    if (notesFilter) {
      filteredNotes = filteredNotes.filter(note =>
        note.tags.includes(notesFilter.name)
      );
    }

    setDisplayedNotes(filteredNotes);
  }, [notes, notesFilter]);

  return (
    <AppContent
      activeFilter={notesFilter}
      notes={displayedNotes}
      tags={tags}
      handleNoteFilterChange={handleNoteFilterChange}
    />
  );
};

export default App;

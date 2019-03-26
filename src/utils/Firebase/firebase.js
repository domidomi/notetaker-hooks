import React, { Component } from "react";

import * as firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

class Firebase extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.db = firebase.firestore();
    this.notesRef = this.db.collection("notes");
  }

  setNoteData = data => {
    return this.notesRef
      .add(data)
      .then(docRef => {
        console.log("Document", docRef);
        return true;
      })
      .catch(err => {
        console.error("Error adding document: ", err);
        return false;
      });
  };

  getNotesData = () => {
    return this.notesRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });
        return snapshot;
      })
      .catch(err => {
        console.log("Error getting documents", err);
        return false;
      });
  };

  getNoteData = id => {
    return this.notesRef
      .doc(id)
      .get()
      .then(snapshot => {
        console.log("snapshot", "=>", snapshot.data());
        return snapshot.data();
      })
      .catch(err => {
        console.log("Error getting note", err);
        return false;
      });
  };
}

export default Firebase;

import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../utils/Firebase";

import tagsData from "../../assets/tags.json";

const NewNote = ({ data }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [picture, setPicture] = useState(null);
  const firebase = useContext(FirebaseContext);

  const handleSubmit = e => {
    e.preventDefault();
    firebase.setNoteData({
      content: {
        title,
        text,
        picture
      },
      createdAt: new Date(),
      tags: []
    });
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <br />
        <textarea onChange={e => setText(e.target.value)} placeholder="Text" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewNote;

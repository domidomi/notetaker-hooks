import React, { useState, useContext } from "react";
import { FirebaseContext } from "../utils/Firebase";

const NewNote = ({ data }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ccc");
  const firebase = useContext(FirebaseContext);

  const handleSubmit = e => {
    e.preventDefault();
    firebase.setTagData({
      name,
      color
    });
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => setName(e.target.value)} placeholder="Title" />
        <br />
        <input
          onChange={e => setColor(e.target.value)}
          placeholder="Color"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewNote;

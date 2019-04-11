import React, { useState, useContext } from "react";
import { CirclePicker } from "react-color";
import { FirebaseContext } from "../utils/Firebase";
import styled from "styled-components";

const ColorButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: ${props => props.color || "#ccc"};
  border-radius: 50%;
  border: 1px solid #999;
`;

const NewNote = ({ data }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ccc");
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const firebase = useContext(FirebaseContext);

  const handleSubmit = e => {
    e.preventDefault();
    firebase.setTagData({
      name,
      color
    });
  };

  const handleColorChangeComplete = color => {
    setColor(color.hex);
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input onChange={e => setName(e.target.value)} placeholder="Title" />
        <br />

        <div>
          Pick a color:{" "}
          <ColorButton
            color={color}
            onClick={() => setIsPickerVisible(true)}
            type="button"
          />
          {isPickerVisible && (
            <CirclePicker
              onChangeComplete={color => handleColorChangeComplete(color)}
            />
          )}
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewNote;

import React from "react";
import styled from "styled-components";

const Color = styled.span`
  width: 15px;
  height: 15px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: ${props => props.color || "#ccc"};
  margin-left: 6px;
`;

const ColorTag = ({ color }) => {
  return <Color color={color} />;
};

export default ColorTag;

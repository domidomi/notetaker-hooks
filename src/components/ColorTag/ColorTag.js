import React from "react";
import styled from "styled-components";

const Color = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: ${props => props.color || "#ccc"};
  margin-left: 10px;
`;

const ColorTag = ({ color }) => {
  return <Color color={color} />;
};

export default ColorTag;

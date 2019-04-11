import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: inline-block;
  width: auto;
  margin: 0 10px 0 0;
  cursor: pointer;
`;

const CardTitle = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0px -4px 0px ${props => props.color || "#ccc"};
  padding: 4px 10px 8px;
  text-transform: capitalize;
  font-family: "Verdana";
  background-color: ${props => (props.active ? "#efefef" : "#fff")};
`;

const CategoryFilter = ({ category, handleNoteFilterChange, active }) => {
  const { name, color } = category || {};

  return (
    <Card>
      <CardTitle
        color={color}
        onClick={() => handleNoteFilterChange(active ? null : category)}
        active={active}
      >
        {name || "All"}
      </CardTitle>
    </Card>
  );
};

export default CategoryFilter;

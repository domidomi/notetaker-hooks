import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: auto;
  margin-bottom: 20px;
`;

const CardTitle = styled.div`
  border-bottom: 4px solid ${props => props.color || "#ccc"};
  padding: 10px;
  text-transform: capitalize;
  font-family: "Verdana";
  color: ${props => (props.active ? props.color : "#000")};
`;

const CategoryCard = ({ category, handleNoteFilterChange, active }) => {
  return (
    <Card>
      {console.log('category card render: ', category.name)}
      <CardTitle
        color={category.color}
        onClick={() => handleNoteFilterChange(active ? null : category)}
        active={active}
      >
        {category.name}
      </CardTitle>
    </Card>
  );
};

export default CategoryCard;

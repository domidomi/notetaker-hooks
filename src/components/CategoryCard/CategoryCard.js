import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 20px; 
`;

const CardTitle = styled.div`
  border-bottom: 4px solid ${props => (props.color ? props.color : "#ccc")};
  padding: 10px;
  text-transform: capitalize;
  font-family: "Verdana";
`;

const CategoryCard = ({ category, notes }) => {
  return (
    <Card>
      <CardTitle color={category.color}>{category.name}</CardTitle>
    </Card>
  );
};

export default CategoryCard;

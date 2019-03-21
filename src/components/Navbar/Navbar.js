import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CategoryCard} from "../";
import tagsData from "../../assets/tags.json";

const NavbarContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Navbar = ({ activeFilter, handleNoteFilterChange }) => {
  const [filters, setFilters] = useState(tagsData);
  const [filtersToDisplay, setFiltersToDisplay] = useState(null);

  const getFiltersToDisplay = () => {
    return filters.map(filter => (
      <CategoryCard
        category={filter}
        handleNoteFilterChange={handleNoteFilterChange}
        active={Object.is(filter, activeFilter)}
      />
    ));
  };

  useEffect(() => {
    setFiltersToDisplay(getFiltersToDisplay());
  }, [activeFilter]);

  return (
    <NavbarContent>
      {filters && filtersToDisplay}
    </NavbarContent>
  );
};

export default Navbar;

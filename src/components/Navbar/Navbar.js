import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

import CategoryCard from "../CategoryCard/CategoryCard";
import tagsData from "../../assets/tags.json";

const NavbarContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Navbar = ({ activeFilter, handleNoteFilterChange }) => {
  const [filters, setFilters] = useState(tagsData);

  const getFiltersToDisplay = () => {
    console.log("recalculating?")
    return filters.map(filter => (
      <CategoryCard
        category={filter}
        handleNoteFilterChange={handleNoteFilterChange}
        active={Object.is(filter, activeFilter)}
      />
    ));
  };

  const filtersToDisplay = useMemo(
    () => getFiltersToDisplay(),
    [activeFilter] // ✅ Don’t recalculate until `activeFilter` changes
  );

  return (
    <NavbarContent>
      {console.log("navbar rewrite")}

      {filters && filtersToDisplay}

      {!filters && <h4>No notes :(</h4>}
    </NavbarContent>
  );
};

export default Navbar;

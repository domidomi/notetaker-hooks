import React, { useState } from "react";
import styled from "styled-components";

import { CategoryFilter } from "../";
import tagsData from "../../assets/tags.json";

const NavbarContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Navbar = ({ activeFilter, handleNoteFilterChange }) => {
  const [filters, setFilters] = useState(() => tagsData);

  return (
    <NavbarContent>
      {filters ? (
        <>
          <CategoryFilter
            key={"all"}
            category={null}
            handleNoteFilterChange={handleNoteFilterChange}
            active={activeFilter === null}
          />
          {filters.map(filter => (
            <CategoryFilter
              key={filter.name}
              category={filter}
              handleNoteFilterChange={handleNoteFilterChange}
              active={Object.is(filter, activeFilter)}
            />
          ))}
        </>
      ) : null}
    </NavbarContent>
  );
};

export default Navbar;

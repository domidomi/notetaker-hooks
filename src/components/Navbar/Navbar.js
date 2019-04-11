import React, { useState } from "react";
import styled from "styled-components";

import { CategoryFilter, NewNote, NewFilter } from "../index";
import tagsData from "../../assets/tags.json";

const NavbarContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Navbar = ({ activeFilter, handleNoteFilterChange, setupModal }) => {
  const [filters, setFilters] = useState(() => tagsData);

  return (
    <NavbarContent>
      {filters ? (
        <>
          <span>Filter: </span>
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

      <button onClick={() => setupModal(<NewFilter />)}>New filter</button>
      <button onClick={() => setupModal(<NewNote />)}>New note</button>
    </NavbarContent>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CategoryFilter, NewNote, NewFilter } from "../index";

const NavbarContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Navbar = ({ activeFilter, handleNoteFilterChange, setupModal, tags }) => {
  const [filters, setFilters] = useState(tags);

  useEffect(() => {
    setFilters(tags);
  }, [tags]);

  console.log("filtersfilters", filters);

  return (
    <NavbarContent>
      {filters.length ? (
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

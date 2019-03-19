import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CategoryCard from "../CategoryCard/CategoryCard";
import tagsData from "../../assets/tags.json";

const SidebarContent = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
`;

const Sidebar = ({ notes }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const cats = tagsData.map(tag => {
      const matchingNotesIDs = notes
        .filter(note => note.tags.includes(tag.name))
        .map(el => el["_id"]);

      return {
        ...tag,
        matchingNotesIDs
      };
    });

    setCategories(cats);
  }, [notes]);

  return (
    <SidebarContent>
      {console.log(notes)}
      {console.log(categories)}

      {categories &&
        categories.map(cat => <CategoryCard category={cat} notes={notes} />)}

      {!categories && <h4>No notes :(</h4>}
    </SidebarContent>
  );
};

export default Sidebar;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import tagsData from "../../../assets/tags.json";
import { ColorTag } from "../../index";

const Note = styled.div`
  display: inline-block;
  width: 20%;
  padding: 0 20px 20px 0;
`;

const NoteWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Verdana";
`;

const NoteSection = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

const NoteTitle = styled(NoteSection)`
  text-transform: capitalize;
`;

const NoteContent = styled(NoteSection)`
  font-size: 13px;
`;

const NoteFooter = styled(NoteSection)`
  font-size: 11px;
  text-align: right;
`;

const NoteCard = ({ data }) => {
  const [tags, setTags] = useState(null);

  const getTagsToDisplay = () => {
    return tagsData.filter(tag => data.tags.includes(tag.name));
  };

  useEffect(() => {
    setTags(getTagsToDisplay());
  }, [data]);

  return (
    <Note>
      <NoteWrapper>
        <NoteTitle>{data.content.title}</NoteTitle>
        <NoteContent>{data.content.title}</NoteContent>
        <NoteFooter>
          {tags && tags.map(tag => <ColorTag color={tag.color} />)}
        </NoteFooter>
      </NoteWrapper>
    </Note>
  );
};

export default NoteCard;

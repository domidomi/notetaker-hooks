import React, { useState, useEffect } from "react";
import styled from "styled-components";

import tagsData from "../../assets/tags.json";
import { ColorTag } from "../index";

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
  display: flex;
  justify-content: space-between;
`;

const ColorTags = styled.div`
  margin: auto 0 auto auto;
`;

const NoteCard = ({ data }) => {
  const [tags, setTags] = useState(null);
  const [displayDate, setDisplayDate] = useState(null);

  const getTagsToDisplay = () => {
    return tagsData.filter(tag => data.tags.includes(tag.name));
  };

  const getDisplayDate = date => {
    const today = new Date();
    const noteDate = new Date(date);
    const daysAgo = Math.round(
      (today.getTime() - noteDate.getTime()) / 86400000
    );

    if (daysAgo > 7) {
      return noteDate.toLocaleDateString();
    }

    const timeOfCreation = `${noteDate.getHours()}:${
      noteDate.getMinutes() < 10
        ? "0" + noteDate.getMinutes()
        : noteDate.getMinutes()
    }`;

    const info =
      daysAgo <= 0
        ? `Today, ${timeOfCreation}`
        : `${noteDate.toLocaleDateString("en-EN", {
            weekday: "long"
          })}, ${timeOfCreation}`;

    return info;
  };

  useEffect(() => {
    setTags(getTagsToDisplay());
    setDisplayDate(getDisplayDate(data.createdAt));
  }, [data]);

  return (
    <Note>
      <NoteWrapper>
        <NoteTitle>{data.content.title}</NoteTitle>
        <NoteContent>{data.content.text}</NoteContent>
        <NoteFooter>
          {displayDate}

          <ColorTags>
            {tags &&
              tags.map(tag => <ColorTag key={tag.name} color={tag.color} />)}
          </ColorTags>
        </NoteFooter>
      </NoteWrapper>
    </Note>
  );
};

export default NoteCard;

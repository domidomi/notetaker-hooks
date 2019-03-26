import React from "react";

import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
`;

const Backdrop = props => {
  return <StyledBackdrop onClick={props.clicked} />;
};

export default Backdrop;

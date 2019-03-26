import React from "react";

import styled from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: auto;
  height: auto;
  max-width: 80vw;
  max-height: 80vh;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 20px #3c3c3c;
`;

const Modal = props => {
  return <StyledModal>{props.children}</StyledModal>;
};

export default Modal;

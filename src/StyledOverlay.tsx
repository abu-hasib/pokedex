import styled from "styled-components";

export const StyledOverlay = styled.div.attrs(() => {})`
  /* position: relative; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.5s;
`;
export const StyledModal = styled.div`
  position: fixed;
  width: min(20em, 80%);
  height: 80%;
  top: 50%;
  left: 55%;
  background-color: #fff;
  margin: 0 auto;
  padding: 0.5em;
  transform: translate(-50%, -50%);
  z-index: 99;
  transition: 0.3s;
  place-items: center;
  border-radius: 12px;
  .close {
    position: absolute;
    left: 5%;
    top: 5%;
  }
`;

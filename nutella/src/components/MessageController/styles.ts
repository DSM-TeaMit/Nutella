import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 100px;
  overflow: hidden;
  display: flex;
  justify-content: right;
  z-index: 2000;
  pointer-events: none;
`;

export const MessageContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  justify-content: flex-end;

  &::-webkit-scrollbar {
    display: none;
  }
`;

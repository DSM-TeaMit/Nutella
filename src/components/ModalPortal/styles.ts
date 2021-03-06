import styled from "@emotion/styled";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.grayscale.black}50;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  z-index: 1001;
`;

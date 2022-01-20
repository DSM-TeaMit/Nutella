import styled from "@emotion/styled";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.grayscale.black}50;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

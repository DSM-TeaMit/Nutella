import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  background-color: ${({ theme }) => theme.colors.primary.default}50;
`;

export const Image = styled.img`
  width: 100% !important;
`;

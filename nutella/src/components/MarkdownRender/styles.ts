import { css } from "@emotion/css";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  h1 {
    font: ${({ theme }) => theme.fonts.h1};
  }
  h2 {
    font: ${({ theme }) => theme.fonts.h2};
  }
  h3 {
    font: ${({ theme }) => theme.fonts.h3};
  }
  h4 {
    font: ${({ theme }) => theme.fonts.subtitle1};
  }
  h5 {
    font: ${({ theme }) => theme.fonts.subtitle2};
  }
  h6 {
    font: ${({ theme }) => theme.fonts.body1};
  }
  strong {
    font: ${({ theme }) => theme.fonts.body1};
  }
  p {
    font: ${({ theme }) => theme.fonts.body3};
  }
  em {
    font-style: italic;
  }
`;

export const BlockquoteInner = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  padding: 16px 36px;
  position: relative;
  margin: 12px 0px;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary.default};
    top: 0px;
    left: 0px;
  }
`;

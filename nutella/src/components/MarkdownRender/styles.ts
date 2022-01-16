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

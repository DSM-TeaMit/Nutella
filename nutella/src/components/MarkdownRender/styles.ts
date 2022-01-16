import { css } from "@emotion/css";
import { Theme } from "@emotion/react";

export const MarkdownStyle = (theme: Theme) => css`
  h1 {
    font: ${theme.fonts.h1};
    color: red;
  }
  h2 {
    font: ${theme.fonts.h2};
  }
  h3 {
    font: ${theme.fonts.h3};
  }
`;

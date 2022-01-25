import styled from "@emotion/styled";

const markdownStyle = styled.div`
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
    font-weight: bold;
  }
  p {
    font: ${({ theme }) => theme.fonts.body3};
  }
  em {
    font-style: italic;
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }
  ul ul {
    list-style-type: circle;
  }
  ul ul ul {
    list-style-type: square;
  }
  li {
    margin-left: 1.2rem;
    ol,
    ul {
      margin-left: 1rem;
    }
  }
  code {
    font: ${({ theme }) => theme.fonts.body3};
    font-family: monospace;
  }
  pre {
    padding: 16px 36px;
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
    border-radius: 10px;
    margin: 12px 0px;
  }
  hr {
    border-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
    border-style: solid;
  }
  a {
    color: ${({ theme }) => theme.colors.primary.default};
  }
  blockquote {
    background-color: ${({ theme }) => theme.colors.background};
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
  }

  [placeholder]:focus::after,
  [placeholder]:empty::after {
    content: attr(placeholder);
    color: transparent;
    transition: color 0s ease;
  }
  [placeholder]:empty:focus::after {
    content: attr(placeholder);
    color: ${({ theme }) => theme.colors.grayscale.gray1};
    transition: color 0.2s ease;
  }
`;

export default markdownStyle;

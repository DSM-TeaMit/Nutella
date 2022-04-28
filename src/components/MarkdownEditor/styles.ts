import styled from "@emotion/styled";
import markdownStyle from "../../constant/MarkdownStyle";

export const Container = styled(markdownStyle)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  li {
    display: list-item;
    p {
      flex: 1;
      display: inline-block;
    }
  }

  .first:empty::after {
    content: attr(placeholder);
    color: ${({ theme }) => theme.colors.grayscale.gray1};
    transition: color 0.2s ease;
  }
`;

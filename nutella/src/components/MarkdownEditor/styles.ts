import styled from "@emotion/styled";
import markdownStyle from "../../constant/MarkdownStyle";

export const Container = styled(markdownStyle)`
  width: 100%;
  height: 100%;
  li {
    display: list-item;
    p {
      flex: 1;
      display: inline-block;
    }
  }
`;

export const RowContainer = styled.div<{ margin: string }>`
  margin-left: ${({ margin }) => margin};
  position: relative;

  &:hover {
    .handle {
      opacity: 1;
      visibility: visible;
      transition: none;
    }
  }
`;

export const Handle = styled.button`
  height: 100%;
  padding: 2px;
  border-radius: 2px;
  border: 0px;
  background-color: transparent;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const HandleIcon = styled.img`
  height: 100%;
  filter: ${({ theme }) => theme.filters.grayscale.lightGray2};
`;

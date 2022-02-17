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
  height: 20px;
  padding: 2px;
  border-radius: 2px;
  border: 0px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 0px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 2;
  transform: translateY(-50%);

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};

    .popup {
      opacity: 1;
      visibility: visible;
      transition: all 0.25s ease;
    }
  }
`;

export const PopUp = styled.div`
  position: absolute;
  top: 100%;
  left: 0px;
  padding: 8px;
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  width: max-content;
  text-align: left;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  z-index: 2;
  max-height: 300px;
  opacity: 0;
  visibility: hidden;
  transition: none;
`;

export const PopupRowOuter = styled.div`
  overflow-y: scroll;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const PopupRowContainer = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  cursor: pointer;
  text-align: left;
  min-width: 200px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const PopupTitle = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const PopupRowTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const PopupRowDescription = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const HandleIcon = styled.img`
  height: 100%;
  filter: ${({ theme }) => theme.filters.grayscale.lightGray2};
`;

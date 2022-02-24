import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../../utils/theme/theme";

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

export const Handle = styled.div`
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

export const HandleIcon = styled.img`
  height: 100%;
  filter: ${({ theme }) => theme.filters.grayscale.lightGray2};
`;

export const DropHint = styled.div<{ active: boolean }>`
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  transition: all 0.25s ease;
  opacity: 0;
  background-color: ${({ theme }) => theme.colors.primary.default}50;
  top: 100%;
  left: 0;
  visibility: hidden;

  ${({ active }) =>
    active &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

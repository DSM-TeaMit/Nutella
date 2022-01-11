import styled from "@emotion/styled";
import { DefaultButtonStyle } from "../styles";

export const Button = styled(DefaultButtonStyle)`
  border: 0;
  background-color: ${({ theme }) => theme.colors.red.default};
  color: ${({ theme }) => theme.colors.grayscale.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.red.click};
    cursor: default;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.red.click};
  }
`;

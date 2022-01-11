import styled from "@emotion/styled";
import { DefaultButtonStyle } from "../styles";

export const Button = styled(DefaultButtonStyle)`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary.click};
    cursor: default;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.click};
  }
`;

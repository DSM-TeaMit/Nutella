import styled from "@emotion/styled";
import { DefaultButtonStyle } from "../styles";

export const Button = styled(DefaultButtonStyle)`
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  box-shadow: 0 0 1px 0 ${({ theme }) => theme.colors.grayscale.black} inset,
    0 0 1px 0 ${({ theme }) => theme.colors.grayscale.black};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  color: ${({ theme }) => theme.colors.grayscale.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayscale.gray1};
    cursor: default;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

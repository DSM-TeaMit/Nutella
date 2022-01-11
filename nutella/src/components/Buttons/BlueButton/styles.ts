import styled from "@emotion/styled";
import { DefaultButtonStyle } from "../styles";

export const Button = styled(DefaultButtonStyle)`
  border: 0;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.white};
`;

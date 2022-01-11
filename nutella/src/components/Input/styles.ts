import styled from "@emotion/styled";

export const InputStyle = styled.input`
  border: 0;
  outline: none;
  background-color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 0;
  margin-bottom: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

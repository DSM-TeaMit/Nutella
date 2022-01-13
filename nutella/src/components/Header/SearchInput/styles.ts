import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.body3};
  width: 550px;
  outline: none;
  border-radius: 10px;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
    font: ${({ theme }) => theme.fonts.body3};
  }
`;

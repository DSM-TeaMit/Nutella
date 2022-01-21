import styled from "@emotion/styled";

export const InputStyle = styled.input`
  border: 0;
  outline: none;
  background-color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 0;
  margin-bottom: 4px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const InvisibleInput = styled.input`
  display: none;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

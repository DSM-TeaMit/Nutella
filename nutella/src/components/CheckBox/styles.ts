import styled from "@emotion/styled";

export const Contianer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;
`;

export const Box = styled.div<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.default : theme.colors.grayscale.lightGray2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

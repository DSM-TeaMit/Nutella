import styled from "@emotion/styled";

export const InputStyle = styled.input`
  border: 0;
  outline: none;
  background-color: transparent;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 0;
  flex: 1;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
  min-width: 150px;
`;

export const InvisibleInput = styled.input`
  display: none;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const Tag = styled.button`
  color: ${({ theme }) => theme.colors.grayscale.white};
  background-color: ${({ theme }) => theme.colors.primary.default};
  padding: 4px;
  font: ${({ theme }) => theme.fonts.body3};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.click};
  }
`;

export const Container = styled.div`
  display: flex;
  column-gap: 4px;
  margin-bottom: 4px;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

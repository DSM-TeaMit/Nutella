import styled from "@emotion/styled";

export const ContentInner = styled.div`
  width: 100%;
  padding: 20px 32px 60px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  min-height: 664px;
  user-select: none;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: transparent;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

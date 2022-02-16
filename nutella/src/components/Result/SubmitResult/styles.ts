import styled from "@emotion/styled";

export const ResultInner = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  padding: 20px;
  aspect-ratio: unset;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const ResultTitle = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
`;

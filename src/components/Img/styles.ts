import styled from "@emotion/styled";

export const Loading = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  font: ${({ theme }) => theme.fonts.body3};
  text-align: center;
  aspect-ratio: 1 / 0.4;
`;

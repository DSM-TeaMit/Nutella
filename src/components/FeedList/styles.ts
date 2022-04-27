import styled from "@emotion/styled";

export const ProjectBox = styled.div`
  margin-top: 36px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Message = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const Gap = styled.div`
  margin-top: 400px;
`;

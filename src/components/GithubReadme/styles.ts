import styled from "@emotion/styled";

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-bottom: 12px;
`;

export const ReadMe = styled.div`
  padding: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

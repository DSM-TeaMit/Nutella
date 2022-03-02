import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 1280px;
  padding-top: 120px;
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Count = styled(Title)`
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const List = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

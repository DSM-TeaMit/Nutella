import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  width: 1280px;
  padding-top: 120px;
  padding-bottom: 200px;
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

export const Message = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  text-align: center;
  margin: 16px 0px;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  margin-top: 130px;
  margin-bottom: 141px;
`;

export const SearchContent = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

export const SearchTitle = styled.p`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const BigMessage = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  text-align: center;
  margin: 16px 0px;
`;

export const ElementBox = styled.div`
  margin: 48px 0px 96px 0px;
`;

export const Title = styled.p`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  span {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`;

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

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  margin-top: 130px;
  margin-bottom: 200px;
`;

export const SearchContent = styled.div`
  margin: 0px 320px;
`;

export const SearchTitle = styled.p`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
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

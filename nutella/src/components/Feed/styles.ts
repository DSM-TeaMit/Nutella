import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  margin-top: 130px;
  margin-bottom: 200px;
`;

export const FeedContent = styled.div`
  width: 1280px;
  margin: 0px auto;
`;

export const TitleBox = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  margin-right: 24px;
  cursor: pointer;
  display: flex;
  cursor: pointer;
  &.submenu {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
  &.focused {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;

export const ElementBox = styled.div`
  margin: 48px 0px 96px 0px;
`;

export const ProjectBox = styled.div`
  margin-top: 36px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

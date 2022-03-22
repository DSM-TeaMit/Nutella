import styled from "@emotion/styled";
import Img from "../Img";

export const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const Inner = styled.div`
  width: 1280px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  display: grid;
`;

export const SideBarContainer = styled.div`
  height: 100%;
`;

export const ContentContainer = styled.div`
  grid-column: 2 / 5;
`;

export const ContentInner = styled.div`
  width: 100%;
  padding: 20px 32px 60px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  min-height: 664px;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 28px;
  align-items: center;
`;

export const ProfileContainerOuter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const ProfileImage = styled(Img)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: 1;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ProfileDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileDescription = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
`;

export const Github = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
  cursor: pointer;
  display: flex;
  column-gap: 8px;
  align-items: center;

  img {
    filter: ${({ theme }) => theme.filters.grayscale.gray2};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};

    img {
      filter: ${({ theme }) => theme.filters.grayscale.black};
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

export const H3 = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const BlueH3 = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const ContentTitle = styled.div`
  margin-bottom: 16px;
`;

export const ProjectTitle = styled(ContentTitle)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Message = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  text-align: center;
  margin: 16px 0px;
`;

export const More = styled.button`
  padding: 0px;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  margin: 36px 0px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  text-align: center;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;

export const Error = styled(Container)`
  height: 80vh;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

export const SettingContaienr = styled(Container)`
  row-gap: 28px;
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

export const ProfileImage = styled.img`
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

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 16px;
`;

export const Subtitle = styled(Title)`
  font: ${({ theme }) => theme.fonts.subtitle1};
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px;
`;

export const SettingTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Gray = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
  color: black;
  filter: ${({ theme }) => theme.filters.grayscale.gray2};
  cursor: pointer;

  &:hover {
    filter: ${({ theme }) => theme.filters.grayscale.black};
  }
`;

export const SettingTitleRed = styled(SettingTitle)`
  color: ${({ theme }) => theme.colors.red.default};
`;

export const Red = styled(Gray)`
  filter: ${({ theme }) => theme.filters.red.default};

  &:hover {
    filter: ${({ theme }) => theme.filters.red.hover};
  }
`;

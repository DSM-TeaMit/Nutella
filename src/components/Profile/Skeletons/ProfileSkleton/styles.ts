import styled from "@emotion/styled";

export const ContentInner = styled.div`
  width: 100%;
  padding: 20px 32px 60px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  min-height: 664px;
  user-select: none;
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

export const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex: 1;
`;

export const Name = styled.span`
  font: ${({ theme }) => theme.fonts.h1};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const ProfileDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileDescription = styled.div`
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
  font: ${({ theme }) => theme.fonts.body3};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

export const H3 = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
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

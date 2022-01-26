import styled from "@emotion/styled";
import { FlexContainer } from "../../styles";

export const SettingContaienr = styled(FlexContainer)`
  row-gap: 28px;
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

export const ProjectTitle = styled(ContentTitle)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const AddProject = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  font: ${({ theme }) => theme.fonts.body3};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
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

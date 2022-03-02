import styled from "@emotion/styled";

export const Container = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 200px;
`;

export const Img = styled.div`
  grid-column: 1 / 2;
  height: 100%;
`;

export const ContentContainer = styled.div`
  grid-column: 2 / 7;
  padding: 16px 28px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Type = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-left: 8px;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BottomContainer = styled(TopContainer)`
  align-items: flex-end;
`;

export const Scale = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  filter: ${({ theme }) => theme.filters.grayscale.black};
`;

export const ScaleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ScaleLabel = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: black;
`;

export const Gray = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

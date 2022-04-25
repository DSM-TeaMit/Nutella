import styled from "@emotion/styled";

export const Container = styled.div`
  user-select: none;
  column-gap: 20px;
  display: grid;
  text-decoration: none;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const Image = styled.div`
  grid-column: 1 / 2;
  aspect-ratio: 4 / 3;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  grid-column: 2 / 7;
  padding: 16px 28px;
  padding-left: 0px;
  row-gap: 62px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.subtitle1};
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
  color: transparent;
`;

export const Type = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
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
`;

export const ScaleIcon = styled.div`
  width: 20px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  height: 20px;
  border-radius: 5px;
`;

export const ScaleLabel = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const Gray = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  color: transparent;
  border-radius: 5px;
`;

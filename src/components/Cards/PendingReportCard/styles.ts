import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Img from "../../Img";

export const Container = styled(Link)`
  user-select: none;
  column-gap: 20px;
  display: grid;
  text-decoration: none;
  grid-template-columns: repeat(6, 1fr);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.white};
  }
`;

export const Image = styled(Img)`
  grid-column: 1 / 2;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
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

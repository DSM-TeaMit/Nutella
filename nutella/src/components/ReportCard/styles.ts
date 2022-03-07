import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Img from "../Img";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  display: flex;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grayscale.black};
  min-width: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const Image = styled(Img)`
  border-radius: 10px;
  width: 180px;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const InfoContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  flex: 1;
  min-width: 0;
`;

export const TitleContaienr = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: 4px;
  min-width: 0;
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Description = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ color, theme }) => color || theme.colors.grayscale.gray2};
  white-space: nowrap;
  flex-shrink: 0;
`;

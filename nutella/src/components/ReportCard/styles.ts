import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  display: flex;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grayscale.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const Image = styled.img`
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
`;

export const TitleContaienr = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

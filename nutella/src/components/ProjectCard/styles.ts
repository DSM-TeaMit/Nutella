import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  min-width: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

export const TitleContaienr = styled.div`
  min-width: 0;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  flex: 1;
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const TypeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Description = styled.div`
  display: -webkit-box;
  height: calc(1.4rem * 2);
  line-height: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
`;

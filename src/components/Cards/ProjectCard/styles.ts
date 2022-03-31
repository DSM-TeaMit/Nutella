import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Img from "../../Img";

export const Container = styled(Link)`
  user-select: none;
  width: 100%;
  min-width: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const Image = styled(Img)`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
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
  height: calc(1.2rem * 2);
  line-height: 1rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
`;

export const BottonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const UserImage = styled(Img)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const UserImageOuter = styled.div`
  width: 12px;
  height: 24px;
`;

export const UserImageContainer = styled.div`
  display: flex;
`;

export const UserAdditional = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const Type = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const TypeAdditional = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

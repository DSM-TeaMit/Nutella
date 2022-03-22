import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Img from "../Img";

export const Container = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 20px;
`;

export const SearchInputContainer = styled.div`
  margin-left: 80px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: unset; ;
`;

export const UserName = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const UserImageContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const UserImage = styled(Img)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Arrow = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  position: relative;
`;

export const Logout = styled.button`
  position: absolute;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.red.default};
  padding: 8px;
  position: absolute;
  white-space: nowrap;
  border-radius: 10px;
  top: 100%;
  left: 0;
  z-index: 101;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grayscale.white};
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  position: absolute;
  top: 100%;
  left: 0;
`;

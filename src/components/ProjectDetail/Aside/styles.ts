import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const AsideContainer = styled.div`
  width: 100%;
  min-height: 664px;
  background: ${({ theme }) => theme.colors.grayscale.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  padding: 20px 16px;
`;

export const AsideTop = styled.div`
  text-align: center;
  display: fixed;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  span {
    color: ${({ theme }) => theme.colors.primary.click};
  }
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  cursor: pointer;
`;

export const AsideContent = styled.div`
  width: 273px;
  margin-top: 17px;
`;

export const RoleBox = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const RoleTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const User = styled(Link)`
  display: fixed;
  height: 40px;
  padding: 4px;
  text-decoration: none;
  user-select: none;
  img {
    width: 32px;
    height: 32px;
    background: grey;
    border-radius: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  span {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;

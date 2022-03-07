import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Big = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  font-size: 144px;
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  text-align: center;
  margin-bottom: 28px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  display: flex;
  text-align: center;

  & img {
    height: 36px;
    align-self: center;
    margin-left: 8px;
  }
`;

export const A = styled(Link)`
  margin-top: 16px;
  text-align: center;
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-decoration: none;
  display: flex;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }
`;

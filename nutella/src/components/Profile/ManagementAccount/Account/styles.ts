import styled from "@emotion/styled";
import Img from "../../../Img";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled(Img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 24px;
  margin-left: 16px;
  margin-right: 8px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.body3};
`;

export const Gray = styled(Name)`
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Delete = styled.button`
  border: none;
  padding: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.red.default};
  font: ${({ theme }) => theme.fonts.body3};

  &:hover {
    color: ${({ theme }) => theme.colors.red.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.red.click};
  }
`;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Content = styled(Link)`
  height: 286px;
  border-radius: 10px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

export const ProjectPhoto = styled.img`
  height: 203px;
  border-radius: 10px 10px 0px 0px;
`;

export const ProjectBottom = styled.div`
  width: 100%;
  height: 82px;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
`;

export const ProjectInfoBox = styled.div`
  height: 60px;
  margin: 11px 16px;
`;

export const ProjectInfo = styled.div`
  height: 23px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  img {
    vertical-align: bottom;
  }
`;

export const ProjectTitle = styled.span`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Field = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const Number = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

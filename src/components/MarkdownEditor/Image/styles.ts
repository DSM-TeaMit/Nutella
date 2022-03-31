import styled from "@emotion/styled";
import Img from "../../Img";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
`;

export const ImgContainer = styled.div`
  border-radius: 10px;
  width: 60%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled(Img)`
  width: 100%;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.default}50;
`;

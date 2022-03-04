import styled from "@emotion/styled";
import TextareaAutosize from "react-textarea-autosize";
import Img from "../Img";

export const Container = styled.div`
  display: flex;
  column-gap: 16px;
  width: 100%;
`;

export const Image = styled(Img)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Input = styled(TextareaAutosize)<{ borderWidth: number }>`
  border: ${({ borderWidth }) => borderWidth}px solid
    ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ color }) => color};
  border-radius: 10px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  padding: 16px;
  flex: 1;
  outline: none;
  resize: none;

  &::placeholder {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

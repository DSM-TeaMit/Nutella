import styled from "@emotion/styled";
import TextareaAutosize from "react-autosize-textarea";

export const ProjectModifyModalContainer = styled.div`
  border-radius: 10px;
  padding: 24px 32px;
  min-width: 550px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 36px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentBox = styled.div`
  margin: 40px auto 36px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ProjectDescriptionInput = styled(TextareaAutosize)`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  resize: none;
  outline: none;
  border: 0px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
    font: ${({ theme }) => theme.fonts.body3};
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  margin-top: 4px;
`;

import styled from "@emotion/styled";

export const ProjectModifyModalContainer = styled.div`
  border-radius: 10px;
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentBox = styled.div`
  margin: 40px auto 36px;
`;

export const Content = styled.div`
  :nth-child(2) {
    min-height: 115px;
  }
  margin-bottom: 20px;
  width: 483px;
  height: fit-content;
  textarea {
    outline: none;
    resize: none;
    width: 480px;
    margin-top: 9px;
    border: none;
    min-height: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const FiedBox = styled.div`
  display: flex;
  margin-bottom: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const TagBox = styled.div`
  height: 32px;
  display: flex;
`;

export const Tag = styled.div`
  padding: 2px 4px;
  width: fit-content;
  border-radius: 5px;
  margin-right: 4px;
  margin-top: 2px;
  height: 30px;
  font: ${({ theme }) => theme.fonts.body3};
  background: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    :nth-child(1) {
      margin-right: 16px;
    }
  }
`;

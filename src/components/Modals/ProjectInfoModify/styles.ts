import styled from "@emotion/styled";

export const ProjectModifyModalContainer = styled.div`
  border-radius: 10px;
  padding: 24px 32px;
  max-width: 550px;
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
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
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

import styled from "@emotion/styled";

export const ProjectDeleteContainer = styled.div`
  width: 547px;
  height: 333px;
  padding: 24px 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentBox = styled.div`
  width: 483px;
  height: 140px;
  margin-top: 28px;
`;

export const ContentText = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  span {
    font: ${({ theme }) => theme.fonts.body1};
  }
  :nth-child(3) {
    margin-top: 23px;
  }
`;

export const BtnBox = styled.div`
  width: 140px;
  height: 40px;
  margin-top: 36px;
  display: flex;
  float: right;
`;

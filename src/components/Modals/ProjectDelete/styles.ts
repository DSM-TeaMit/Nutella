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
  margin-top: 28px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 16px;

  b {
    font: ${({ theme }) => theme.fonts.body1};
  }
`;

export const BtnBox = styled.div`
  margin-top: 36px;
  display: flex;
  column-gap: 16px;
  justify-content: right;
`;

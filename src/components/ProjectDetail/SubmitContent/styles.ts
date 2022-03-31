import styled from "@emotion/styled";

export const SubmitContentContainer = styled.div`
  width: 859px;
  height: 371px;
  margin: 80px 0;
`;

export const SubmitContent = styled.div`
  width: 859px;
  height: 154px;
  display: flex;
  margin-bottom: 80px;
`;

export const ProjectFile = styled.div`
  width: 419.5px;
  height: 154px;
  :first-child {
    margin-right: 20px;
  }
`;

export const SubmitBox = styled.div`
  width: 100%;
  height: 99px;
  margin-top: 17px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray2};
  display: flex;
`;

export const PlusBox = styled.div`
  border-radius: 10px;
  border: 2px dashed ${({ theme }) => theme.colors.grayscale.lightGray2};
  width: 180px;
  img {
    margin: 33px 74px;
  }
`;

export const ResultContent = styled.div`
  width: 859px;
  height: 138px;
`;

export const Font = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin: 38px auto;
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Box = styled(SubmitBox)`
  width: 858px;
  height: 84px;
`;

export const ResFont = styled(Font)`
  margin: 30px auto;
`;

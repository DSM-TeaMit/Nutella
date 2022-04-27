import styled from "@emotion/styled";

export const SubmitContentContainer = styled.div`
  width: 859px;
  height: 447px;
  margin: 80px 0 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray2}; ;
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
  :first-of-type {
    margin-right: 20px;
  }
`;

export const SubTitle = styled.div`
  width: 186px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const SubmitBox = styled.div`
  width: 100%;
  height: 102px;
  margin-top: 17px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ResultContent = styled.div`
  width: 859px;
  height: 138px;
  margin-bottom: 80px;
`;

export const Box = styled(SubmitBox)`
  width: 858px;
  height: 84px;
  text-align: center;
`;

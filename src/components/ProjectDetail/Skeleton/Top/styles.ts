import styled from "@emotion/styled";

export const TopContainer = styled.div`
  width: 859px;
  height: 228px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray2}; ;
`;

export const TopContent = styled.div`
  width: 859px;
  height: 200px;
  display: flex;
`;

export const ProjectImgBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-right: 24px;
  border-radius: 15px;
`;

export const ProjectTop = styled.div`
  width: 632px;
  height: 53px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectName = styled.div`
  width: 100px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ProjectRincian = styled.div`
  width: fit-content;
  height: 24px;
  margin-top: 26.5px;
  display: flex;
`;

export const ViewBox = styled.div`
  width: 55px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const IconBox = styled(ViewBox)`
  width: 106px;
`;

export const ModifyBox = styled(ViewBox)`
  width: 30px;
  margin: 0;
`;

export const ProjectContent = styled.div`
  width: 632px;
  height: 102px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin: 9px 0;
`;

export const ProjectBottom = styled.div`
  width: 632px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

export const Field = styled.div`
  border-radius: 100px;
  width: fit-content;
  height: 26px;
  padding: 1px 20px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Step = styled.div`
  width: 58px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

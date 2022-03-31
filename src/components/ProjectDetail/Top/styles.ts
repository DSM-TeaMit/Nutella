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

export const ProjectImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  margin-right: 24px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ProjectInfo = styled.div`
  display: flex;
`;

export const ProjectTop = styled.div`
  width: 632px;
  height: 53px;
  display: flex;
  justify-content: space-between;
`;

export const ProjectName = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ProjectRincian = styled.div`
  width: fit-content;
  height: 24px;
  margin-top: 26.5px;
  display: flex;
  img {
    margin-right: 8px;
  }
  div {
    display: flex;
  }
`;

export const Font = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-right: 16px;
`;

export const Modify = styled(Font)`
  margin-right: 0;
  margin-left: 28px;
  cursor: pointer;
`;

export const ProjectContent = styled.div`
  width: 632px;
  height: 102px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin: 9px 0;
`;

export const ProjectBottom = styled.div`
  width: 632px;
  height: 26px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

export const Field = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary.default};
  border-radius: 100px;
  width: fit-content;
  height: 26px;
  padding: 1px 16px;
  text-align: center;
  align-items: center;
  margin-right: 12px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const Step = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  margin-top: 130px;
  margin-bottom: 200px;
`;

export const ProjectDetailContent = styled.div`
  margin: 0px 320px;
  display: flex;
`;

export const DetailContent = styled.div`
  width: 955px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px 48px 60px;
  border-radius: 10px;
`;

export const SideContent = styled.div`
  width: 305px;
  height: 664px;
  margin-left: 20px;
`;

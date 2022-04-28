import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 600px;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const ProjectDetailContent = styled.div`
  margin: 0px auto;
  width: 1280px;
  display: flex;
`;

export const DetailContent = styled.div`
  width: 955px;
  height: fit-content;
  background: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px 48px 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const SideContent = styled.div`
  width: 305px;
  height: 669px;
  margin-left: 20px;
  position: sticky;
  top: 120px;
`;

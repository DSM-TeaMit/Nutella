import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 600px;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const ProjectDetailContent = styled.div`
  margin: 0px auto;
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const DetailContent = styled.div`
  background: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px 48px 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  grid-column: span 3;
`;

export const SideContent = styled.div`
  grid-column: span 1;
  position: sticky;
  top: 120px;
`;

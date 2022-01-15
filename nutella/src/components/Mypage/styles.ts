import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const Inner = styled.div`
  width: 1280px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  display: grid;
`;

export const SideBarContainer = styled.div`
  height: 100%;
`;

export const ContentContainer = styled.div`
  grid-column: 2 / 5;
`;

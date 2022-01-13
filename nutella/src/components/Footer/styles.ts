import styled from "@emotion/styled";

export const Container = styled.footer`
  width: 100%;
  height: 98px;
  padding-top: 24px;
`;

export const ContentContainer = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const NoDecoLink = styled.a`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Github = styled.img`
  margin-right: 4px;
`;

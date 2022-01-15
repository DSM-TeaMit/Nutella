import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  border: solid 1px ${({ theme }) => theme.colors.grayscale.lightGray1};
  padding: 20px 16px;
  min-height: 664px;
`;

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  text-align: center;
`;

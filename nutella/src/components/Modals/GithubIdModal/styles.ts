import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  min-width: 400px;
  width: 400px;
  max-width: 400px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const FormTitle = styled.div`
  font: ${({ theme }) => theme.fonts.description};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: right;
`;

export const Auth = styled.a``;

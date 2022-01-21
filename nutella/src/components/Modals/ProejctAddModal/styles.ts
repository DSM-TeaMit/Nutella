import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  min-width: 550px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
`;

export const Subtitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  min-width: 550px;
  width: 550px;
  max-width: 550px;
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

export const TypeContainer = styled.div`
  display: flex;
  column-gap: 36px;
`;

export const Type = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  border: none;
  background-color: transparent;
  column-gap: 8px;
  color: #000000;
  font: ${({ theme }) => theme.fonts.body3};
  align-items: center;
  filter: ${({ theme, isActive }) =>
    isActive ? theme.filters.primary.default : theme.filters.grayscale.gray1};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  column-gap: 16px;
`;

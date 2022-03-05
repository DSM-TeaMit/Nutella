import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 28px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const AddAccount = styled.button`
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body3};
  padding: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;

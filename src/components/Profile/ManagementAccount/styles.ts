import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 28px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  background: transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;

export const More = styled(AddAccount)`
  text-align: center;
`;

export const MoreContainer = styled.div`
  display: flex;
  justify-content: center;
`;

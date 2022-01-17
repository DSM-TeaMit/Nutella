import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 12px 0px;
`;

export const HeaderContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Count = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const ContentContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
`;

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 24px;
  margin-left: 16px;
  margin-right: 8px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

export const Gray = styled(Name)`
  color: transparent;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray2};
  border-radius: 5px;
`;

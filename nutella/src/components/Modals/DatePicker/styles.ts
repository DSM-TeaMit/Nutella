import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-bottom: 8px;
`;

export const Date = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-bottom: 24px;
`;

export const DateContainer = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  font: ${({ theme }) => theme.fonts.body3};
`;

export const DateTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  padding: 6px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DOWContainer = styled.div`
  padding: 4px 0px;
  display: flex;
`;

export const DOWCell = styled.div`
  color: ${({ color }) => color};
  text-align: center;
  width: 50px;
`;

export const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const DateCell = styled.div`
  width: 50px;
  height: 50px;
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.colors.grayscale.white};
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 500px;
  border-radius: 10px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
`;

export const PositiveContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.green.default};
`;

export const DenialContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.red.default};
`;

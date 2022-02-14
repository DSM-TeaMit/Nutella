import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 920px;
  margin: 0px auto;
  margin-top: 120px;
  margin-bottom: 200px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const ContentInner = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
`;

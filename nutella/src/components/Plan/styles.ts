import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 920px;
  margin: 0px auto;
  margin-top: 120px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  padding: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const ContentInner = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
  padding: 24px 0px;
  font: ${({ theme }) => theme.fonts.h1};
`;

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

export const RowContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  &:last-of-type {
    border-bottom: 0;
  }
`;

export const RowTitle = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body1};
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  width: 20%;
  text-align: center;
`;

export const RowLineContent = styled.div`
  padding: 12px 16px;
  flex: 1;
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Time = styled(RowLineContent)`
  cursor: pointer;

  &:empty::before {
    content: attr(placeholder);
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const RowMutiLineContent = styled.div`
  padding: 16px;
  flex: 1;
  min-height: 150px;
`;

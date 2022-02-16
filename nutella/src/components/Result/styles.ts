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
  aspect-ratio: 1 / 1.414;
`;

export const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
`;

export const CoverInner = styled.div`
  padding: 72px 36px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoverBig = styled.div`
  font: ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  text-align: center;
`;

export const Topic = styled.input`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  width: 100%;
  padding: 34px 0px;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 150px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const CoverInfoContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  font: ${({ theme }) => theme.fonts.subtitle1};
`;

export const CoverInfoRow = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  display: flex;

  :last-of-type {
    border: 0px;
  }
`;

export const CoverInfoTitle = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.grayscale.black};
  width: 20%;
  padding: 22px 0px;
  text-align: center;
`;

export const CoverInfoContent = styled.div`
  padding: 22px 0px;
  text-align: center;
  flex: 1;
`;

export const ContentPadding = styled.div`
  padding: 40px 36px;
`;

export const ExampleDiv = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
`;

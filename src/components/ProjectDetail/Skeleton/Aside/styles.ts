import styled from "@emotion/styled";

export const AsideContainer = styled.div`
  width: 302px;
  height: 100%;
  background: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  padding: 20px 16px 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const AsideTop = styled.div`
  width: 273px;
  height: 30px;
  text-align: center;
  display: fixed;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Title = styled.div`
  width: 53px;
  height: 29px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const SubTitle = styled.div`
  width: 30px;
  height: 29px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const AsideContent = styled.div`
  width: 273px;
  margin-top: 17px;
`;

export const RoleBox = styled.div`
  margin-bottom: 36px;
`;

export const RoleTitle = styled.div`
  width: 78px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  margin-bottom: 12px;
`;

export const User = styled.div`
  display: fixed;
  height: 40px;
  padding: 4px;
  text-decoration: none;
  user-select: none;
  div:nth-of-type(1) {
    width: 32px;
    height: 32px;
    border-radius: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  div {
    background-color: ${({ theme }) => theme.colors.grayscale.gray1};
    width: 84px;
    height: 23px;
  }
`;

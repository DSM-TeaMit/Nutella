import styled from "@emotion/styled";

export const LoginBox = styled.div`
  width: 414px;
  height: 551px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
`;

export const LoginContent = styled.div`
  width: 334px;
  height: 419px;
  margin: 40px 40px;
`;

export const Logo = styled.img`
  height: 65px;
  margin-bottom: 45px;
`;

export const OauthBox = styled.div`
  width: 334px;
  height: 303px;
  padding: 0;
`;

export const OauthContent = styled.div`
  width: 334px;
  height: 105px;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const OauthBtn = styled.div`
  width: 330px;
  height: 40px;
  margin-top: 23px;
  padding: 5px 16px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  img {
    vertical-align: middle;
    margin-right: 43px;
  }
`;

export const Divider = styled.div`
  width: 334px;
  height: 23px;
  margin: 34px 0;
  span {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray1};
    margin: 0 7px;
  }
  img {
    vertical-align: middle;
  }
`;

export const TeaLogin = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-top: 28px;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.grayscale.black};
    margin-right: 8px;
  }
`;

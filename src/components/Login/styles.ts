import styled from "@emotion/styled";

export const LoginContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Logo = styled.img`
  margin-bottom: 48px;
`;

export const OauthContent = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const OauthBtn = styled.div`
  width: 330px;
  margin: 24px 0 28px;
  padding: 9px 16px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.black};
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  img {
    vertical-align: sub;
    margin-right: 43px;
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

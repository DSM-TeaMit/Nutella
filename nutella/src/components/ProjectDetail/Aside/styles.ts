import styled from "@emotion/styled";

export const AsideContainer = styled.div`
  width: 302px;
  height: 662px;
  background: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  padding: 20px 16px 16px;
`;

export const AsideTop = styled.div`
  width: 273px;
  height: 30px;
  border: 1px solid red;
  text-align: center;
  display: fixed;
  justify-content: space-between;
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  span {
    color: ${({ theme }) => theme.colors.primary.click};
  }
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const AsideContent = styled.div`
  width: 273px;
  margin-top: 17px;
`;

export const RoleBox = styled.div`
  margin-bottom: 36px;
`;

export const RoleTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-bottom: 12px;
`;

export const User = styled.div`
  display: fixed;
  height: 40px;
  padding: 4px;
  img {
    width: 32px;
    height: 32px;
    background: grey;
    border-radius: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  span {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;

import styled from "@emotion/styled";

export const TeacherLoginContent = styled.div`
  position: absolute;
  width: 334.02px;
  height: 317px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Box = styled.div`
  width: 334px;
  height: 64px;
  margin-top: 36px;
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const Input = styled.input`
  width: 332px;
  height: 27px;
  margin-top: 12px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray2};
  outline: none;
  color: ${({ theme }) => theme.colors.grayscale.black};
  ::placeholder {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const ClickBox = styled(Box)`
  display: flex;
  a {
    text-decoration: none;
  }
`;

export const LoginText = styled.div`
  margin-top: 7.5px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  span {
    text-decoration: none;
    margin-left: 8px;
  }
  a {
    text-decoration: none;
  }
`;

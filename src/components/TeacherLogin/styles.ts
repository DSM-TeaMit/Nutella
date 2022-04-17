import styled from "@emotion/styled";

export const TeacherLoginContent = styled.div`
  position: absolute;
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
  margin-top: 36px;
  justify-content: space-between;
`;

export const SubTitle = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  margin-bottom: 12px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    position: absolute;
    cursor: pointer;
    right: 0;
    bottom: 9px;
    opacity: 0.2;
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

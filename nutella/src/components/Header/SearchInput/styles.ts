import styled from "@emotion/styled";

export const Input = styled.input`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.body3};
  width: 550px;
  outline: none;
  border: 0;
  border-radius: 10px 10px 0px 0px;

  &[value=""] {
    border-radius: 10px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
    font: ${({ theme }) => theme.fonts.body3};
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Hint = styled.div`
  position: absolute;
  width: 100%;
  z-index: 101;
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.body3};
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 0px 0px 10px 10px;
  word-break: break-all;
`;

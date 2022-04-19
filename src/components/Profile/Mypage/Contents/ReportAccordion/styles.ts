import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 12px 0px;
  overflow: hidden;
  transition: height 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const HeaderContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  width: 100%;
  position: relative;

  &:hover {
    & div {
      transform: translate(0%, 0%);
    }

    &::before {
      content: "";
      width: 100%;
      height: calc(100% + 16px);
      position: absolute;
      background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
      border-radius: 10px;
      top: -8px;
      left: 0px;
      display: block;
    }
  }
`;

export const Title = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const Count = styled.span`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.primary.default};
`;

export const ContentContainer = styled.div<{ isActive: boolean }>`
  margin-top: 16px;
  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1), visibility 1s;
  ${({ isActive }) => !isActive && "visibility: hidden;"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

export const More = styled.button`
  padding: 0px;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  margin: 36px 0px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray1};
  text-align: center;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.black};
  }
`;

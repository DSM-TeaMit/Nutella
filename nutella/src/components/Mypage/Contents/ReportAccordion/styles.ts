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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1), visibility 1s;
  ${({ isActive }) => !isActive && "visibility: hidden;"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 16px;
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const ContentContainer = styled.div<{ borderWidth: number }>`
  padding: 16px;
  background-color: ${({ color }) => color};
  border: ${({ borderWidth }) => borderWidth}px solid
    ${({ theme }) => theme.colors.grayscale.lightGray1};
  border-radius: 10px;
  flex: 1;
`;

export const Name = styled.div`
  margin-bottom: 4px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

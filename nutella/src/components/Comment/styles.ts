import styled from "@emotion/styled";
import Img from "../Img";

export const Container = styled.div`
  width: 100%;
  display: flex;
  column-gap: 16px;
`;

export const Image = styled(Img)`
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

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
`;

export const MoreContainer = styled.div`
  position: relative;
`;

export const More = styled.button`
  width: 20px;
  height: 20px;
  filter: ${({ theme }) => theme.filters.grayscale.gray1};

  &:hover {
    filter: ${({ theme }) => theme.filters.grayscale.gray2};
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const DeletePopup = styled.button`
  position: absolute;
  top: 0px;
  left: calc(100% + 8px);
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  color: ${({ theme }) => theme.colors.red.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

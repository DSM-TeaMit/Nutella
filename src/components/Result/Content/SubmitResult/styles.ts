import styled from "@emotion/styled";

export const ResultInner = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  padding: 20px;
  aspect-ratio: unset;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const ResultTitle = styled.div`
  font: ${({ theme }) => theme.fonts.subtitle2};
`;

export const FileRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FileTitle = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  margin-right: 16px;
`;

export const FileSize = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
`;

export const RemoveFile = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.red.default};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.red.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.red.click};
  }
`;

export const AddFile = styled.button`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  border: 0;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }

  &:active {
    color: ${({ theme }) => theme.colors.grayscale.gray2};
  }
`;

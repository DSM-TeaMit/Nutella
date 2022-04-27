import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  row-gap: 28px;
  flex-direction: column;
`;

export const CommentTitle = styled.div`
  width: 86px;
  height: 35px;

  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
`;

export const Container = styled.div`
  display: flex;
  column-gap: 16px;
  width: 100%;
`;

export const Image = styled.div`
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const Input = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  flex: 1;
`;

export const Button = styled.div`
  padding: 19px 32px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  border-radius: 10px;
  cursor: pointer;
`;

export const CommentViewContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 16px;

  .more-icon {
    opacity: 0;
  }
  &:hover {
    .more-icon {
      opacity: 1;
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray1};
  height: 106px;
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
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  transition: opacity 0.1s ease;
  user-select: none;

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
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray1};
  background-color: ${({ theme }) => theme.colors.grayscale.white};
  color: ${({ theme }) => theme.colors.red.default};
  border-radius: 10px;
  cursor: pointer;
  width: max-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayscale.lightGray1};
  }
`;

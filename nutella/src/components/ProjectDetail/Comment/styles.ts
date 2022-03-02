import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grayscale.lightGray2};
  width: 859px;
  height: 508px;
`;

export const CommentCount = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  span {
    color: ${({ theme }) => theme.colors.primary.default};
  }
  margin: 28px 0;
`;

export const CommentBox = styled.div`
  width: 859px;
  height: fit-content;
  margin-bottom: 28px;
  display: flex;
`;

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  background: grey;
  border-radius: 25px;
  margin-right: 16px;
`;

export const CommentInput = styled.input`
  width: 699px;
  outline: none;
  height: fit-content;
  border: none;
  border-radius: 10px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.grayscale.lightGray1};
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.black};
  ::placeholder {
    font: ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.grayscale.gray1};
  }
`;

export const CommentView = styled.div`
  height: fit-content;
  width: 810px;
  padding: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.grayscale.lightGray1};
`;

export const CommentName = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.gray2};
  font: ${({ theme }) => theme.fonts.body2};
  margin-bottom: 5px;
`;

export const CommentConent = styled.div`
  color: ${({ theme }) => theme.colors.grayscale.black};
  font: ${({ theme }) => theme.fonts.body2};
`;

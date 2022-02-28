import styled from "@emotion/styled";

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  row-gap: 28px;
  flex-direction: column;
`;

export const CommentTitle = styled.span`
  font: ${({ theme }) => theme.fonts.h2};
`;

export const CommentTitleBlue = styled(CommentTitle)`
  color: ${({ theme }) => theme.colors.primary.default};
`;

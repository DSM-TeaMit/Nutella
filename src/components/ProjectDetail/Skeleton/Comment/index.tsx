import * as S from "./styles";

const CommentSkeleton = () => {
  return (
    <S.CommentContainer>
      <S.CommentTitle />
      <S.Container>
        <S.Image />
        <S.Input />
        <S.Button />
      </S.Container>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <S.CommentViewContainer key={index}>
            <S.Image />
            <S.ContentContainer />
          </S.CommentViewContainer>
        ))}
    </S.CommentContainer>
  );
};

export default CommentSkeleton;

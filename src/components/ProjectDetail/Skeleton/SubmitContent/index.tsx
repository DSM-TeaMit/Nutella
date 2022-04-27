import * as S from "./styles";

const SubmitContentSkeleton = () => {
  return (
    <S.SubmitContentContainer>
      <S.SubmitContent>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <S.ProjectFile key={index}>
              <S.SubTitle />
              <S.SubmitBox />
            </S.ProjectFile>
          ))}
      </S.SubmitContent>
      <S.ResultContent>
        <S.SubTitle />
        <S.Box />
      </S.ResultContent>
    </S.SubmitContentContainer>
  );
};

export default SubmitContentSkeleton;

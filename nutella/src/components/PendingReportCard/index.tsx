import * as S from "./styles";

const PendingReportCard = () => {
  return (
    <S.Container to="">
      <S.Img />
      <S.ContentContainer>
        <S.TopContainer>
          <div>
            <S.Title>Teamit</S.Title>
            <S.Type>·결과 보고서</S.Type>
          </div>
          <S.Gray>2시간 전</S.Gray>
        </S.TopContainer>
        <S.BottomContainer>
          <S.Scale>
            <S.ScaleIcon />
            <S.ScaleLabel>개인 프로젝트</S.ScaleLabel>
          </S.Scale>
          <S.Gray>승인 대기중...</S.Gray>
        </S.BottomContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default PendingReportCard;

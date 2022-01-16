import * as S from "./styles";

const ReportCard = () => {
  return (
    <S.Container>
      <S.Image alt="project image" src="" />
      <S.InfoContainer>
        <S.TitleContaienr>
          <S.Title>Teamit</S.Title>
          <S.Description>· 결과 보고서</S.Description>
        </S.TitleContaienr>
        <S.Description>승인 대기중</S.Description>
      </S.InfoContainer>
    </S.Container>
  );
};

export default ReportCard;

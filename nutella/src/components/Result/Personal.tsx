import * as S from "./styles";

const Personal = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.ContentInner>
          <S.CoverInner>
            <div>
              <S.CoverBig>개인 프로젝트 보고서</S.CoverBig>
              <S.Topic placeholder="주제" />
              <S.CoverInfoContainer>
                <S.CoverInfoRow>
                  <S.CoverInfoTitle>제출자</S.CoverInfoTitle>
                  <S.CoverInfoContent>2학년 1반 5번 김진근</S.CoverInfoContent>
                </S.CoverInfoRow>
                <S.CoverInfoRow>
                  <S.CoverInfoTitle>담당 교사 확인</S.CoverInfoTitle>
                  <S.CoverInfoContent />
                </S.CoverInfoRow>
              </S.CoverInfoContainer>
            </div>
            <S.CoverBig>대덕소프트웨어마이스터고등학교</S.CoverBig>
          </S.CoverInner>
        </S.ContentInner>
      </S.ContentContainer>
    </S.Container>
  );
};

export default Personal;

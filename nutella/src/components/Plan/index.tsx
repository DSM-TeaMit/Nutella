import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MarkdownEditor from "../MarkdownEditor";
import * as S from "./styles";

const Plan = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.ContentContainer>
          <S.ContentInner>
            <S.Title>개인 프로젝트 계획서</S.Title>
            <S.RowContainer>
              <S.RowTitle>프로젝트 명</S.RowTitle>
              <S.RowLineContent>Teamit</S.RowLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>진행 기간</S.RowTitle>
              <S.Time placeholder="시간을 선택해주세요..."></S.Time>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>신청자</S.RowTitle>
              <S.RowLineContent>2105 김진근</S.RowLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>프로젝트 목표</S.RowTitle>
              <S.RowMutiLineContent>
                <MarkdownEditor />
              </S.RowMutiLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>프로젝트 내용</S.RowTitle>
              <S.RowMutiLineContent>
                <MarkdownEditor />
              </S.RowMutiLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>
                결과물
                <br />
                (해당사항 체크)
              </S.RowTitle>
              <S.RowLineContent>2105 김진근</S.RowLineContent>
            </S.RowContainer>
            <S.RowContainer>
              <S.RowTitle>담당교사 확인</S.RowTitle>
              <S.RowLineContent>2105 김진근</S.RowLineContent>
            </S.RowContainer>
          </S.ContentInner>
        </S.ContentContainer>
        <S.Line />
      </S.Container>
      <Footer />
    </>
  );
};

export default Plan;

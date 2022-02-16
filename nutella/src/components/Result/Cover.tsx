import { FC } from "react";
import * as S from "./styles";

interface PropsType {
  name: "개인" | "팀 / 동아리";
}

const Cover: FC<PropsType> = ({ name }) => {
  return (
    <S.ContentContainer>
      <S.ContentInner>
        <S.CoverInner>
          <div>
            <S.CoverBig>{name} 프로젝트 보고서</S.CoverBig>
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
  );
};

export default Cover;

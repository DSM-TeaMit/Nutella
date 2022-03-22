import { AxiosResponse } from "axios";
import { FC, useMemo } from "react";
import ProjectTypes from "../../../interface/ProjectTypes";
import { ParsedFullResultReport } from "../../../utils/api/Result";
import * as S from "../styles";

interface PropsType {
  data: ParsedFullResultReport | undefined;
}

const Cover: FC<PropsType> = ({ data }) => {
  const coverName = useMemo(() => {
    const map = new Map<ProjectTypes, string>()
      .set("TEAM", "팀")
      .set("CLUB", "동아리")
      .set("PERS", "개인");

    return map.get(data?.projectType || "PERS")!;
  }, [data]);

  return (
    <S.ContentContainer>
      <S.ContentInner>
        <S.CoverInner>
          <div>
            <S.CoverBig>{coverName} 프로젝트 보고서</S.CoverBig>
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

import React, { ChangeEvent, FC, useCallback, useMemo } from "react";
import ProjectTypes from "../../../interface/ProjectTypes";
import State from "../../../interface/State";
import { ParsedFullResultReport } from "../../../utils/api/Result";
import * as S from "../styles";

interface PropsType {
  dataState: State<ParsedFullResultReport | undefined>;
}

const Cover: FC<PropsType> = ({ dataState }) => {
  const [data, setData] = dataState;
  const coverName = useMemo(() => {
    const map = new Map<ProjectTypes, string>()
      .set("TEAM", "팀")
      .set("CLUB", "동아리")
      .set("PERS", "개인");

    return map.get(data?.projectType || "PERS")!;
  }, [data]);

  const onSubjectChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      data && setData({ ...data, subject: e.target.value });
    },
    [data, setData]
  );

  return (
    <S.ContentContainer>
      <S.ContentInner>
        <S.CoverInner>
          <div>
            <S.CoverBig>{coverName} 프로젝트 보고서</S.CoverBig>
            <S.Topic
              placeholder="주제"
              value={data?.subject}
              onChange={onSubjectChange}
            />
            <S.CoverInfoContainer>
              <S.CoverInfoRow>
                <S.CoverInfoTitle>제출자</S.CoverInfoTitle>
                <S.CoverInfoContent>
                  {data?.writer.studentNo} {data?.writer.name}
                </S.CoverInfoContent>
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

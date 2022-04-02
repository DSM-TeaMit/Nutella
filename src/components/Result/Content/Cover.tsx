import React, { ChangeEvent, FC, useMemo } from "react";
import ProjectTypes from "../../../interface/ProjectTypes";
import ReportStatus from "../../../interface/ReportStatus";
import { ParsedFullResultReport } from "../../../utils/api/Result";
import * as S from "../styles";

interface PropsType {
  data: ParsedFullResultReport | undefined;
  onSubjectChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Cover: FC<PropsType> = ({ data, onSubjectChange }) => {
  const coverName = useMemo(() => {
    const map = new Map<ProjectTypes, string>()
      .set("TEAM", "팀")
      .set("CLUB", "동아리")
      .set("PERS", "개인");

    return map.get(data?.projectType || "PERS")!;
  }, [data]);

  const cantEdit = useMemo(
    () =>
      data?.requestorType !== "USER_EDITABLE" ||
      (["ACCEPTED", "PENDING"] as ReportStatus[]).includes(data.status),
    [data]
  );

  return (
    <S.ContentContainer>
      <S.ContentInner>
        <S.CoverInner>
          <div>
            <S.CoverBig>{coverName} 프로젝트 보고서</S.CoverBig>
            <S.Topic
              disabled={cantEdit}
              placeholder="주제"
              value={data?.subject}
              onChange={!cantEdit ? onSubjectChange : undefined}
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

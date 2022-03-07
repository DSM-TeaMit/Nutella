import { FC, useMemo } from "react";
import { PendingReport } from "../../../utils/api/PendingReport";
import * as S from "./styles";
import { PersonalIcons, TeamIcons, ClubIcons } from "../../../assets/icons";
import ProjectTypes from "../../../interface/ProjectTypes";

interface PropsType {
  data: PendingReport;
}

interface ProjectLabel {
  icon: string;
  text: string;
}

const projectMap = new Map<ProjectTypes, ProjectLabel>()
  .set("PERS", {
    icon: PersonalIcons,
    text: "개인 프로젝트",
  })
  .set("TEAM", {
    icon: TeamIcons,
    text: "팀 프로젝트",
  })
  .set("CLUB", {
    icon: ClubIcons,
    text: "동아리 프로젝트",
  });

const getBefore = (date: Date) => {
  const today = new Date();

  const betweenTime = Math.floor(
    (today.getTime() - date.getTime()) / 1000 / 60
  );

  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};

const PendingReportCard: FC<PropsType> = ({ data }) => {
  const { projectName, projectType, reportType, submittedAt, writer, uuid } =
    data;

  const projectLabel = useMemo(
    () => projectMap.get(projectType)!,
    [projectType]
  );

  return (
    <S.Container
      to={`/project/${uuid}/${reportType === "PLAN" ? "plan" : "result"}`}
    >
      <S.Img />
      <S.ContentContainer>
        <S.TopContainer>
          <div>
            <S.Title>{projectName}</S.Title>
            <S.Type>·{reportType === "PLAN" ? "계획서" : "결과 보고서"}</S.Type>
          </div>
          <S.Gray>{getBefore(new Date(submittedAt))}</S.Gray>
        </S.TopContainer>
        <S.BottomContainer>
          <S.Scale>
            <S.ScaleIcon src={projectLabel.icon} />
            <S.ScaleLabel>{projectLabel.text}</S.ScaleLabel>
          </S.Scale>
          <S.Gray>
            {writer.studentNo} {writer.name}
          </S.Gray>
        </S.BottomContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default PendingReportCard;

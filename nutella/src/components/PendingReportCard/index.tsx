import { FC, useMemo } from "react";
import { PendingReport } from "../../utils/api/PendingReport";
import * as S from "./styles";
import { PersonalIcons, TeamIcons, ClubIcons } from "../../assets/icons";
import ProjectTypes from "../../interface/ProjectTypes";

interface PropsType {
  data: PendingReport;
}

interface ProjectLabel {
  icon: any;
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

const PendingReportCard: FC<PropsType> = ({ data }) => {
  const { projectName, projectType, reportType, submittedAt, writer } = data;

  const projectLabel = useMemo(
    () => projectMap.get(projectType)!,
    [projectType]
  );

  return (
    <S.Container to="">
      <S.Img />
      <S.ContentContainer>
        <S.TopContainer>
          <div>
            <S.Title>{projectName}</S.Title>
            <S.Type>·{reportType === "PLAN" ? "계획서" : "결과 보고서"}</S.Type>
          </div>
          <S.Gray>2시간 전</S.Gray>
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

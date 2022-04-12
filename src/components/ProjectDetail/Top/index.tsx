import * as S from "./styles";
import {
  ClubIcons,
  PersonalIcons,
  TeamIcons,
  ViewIcons,
} from "../../../assets/icons";
import ProjectModifyModal from "../../Modals/ProjectInfoModify";
import { FC, Fragment, Key } from "react";
import ModalPortal from "../../ModalPortal";
import useModalRef from "../../../hooks/useModalRef";
import { Project } from "../../../utils/api/ProjectDetails";
import { ProjectTypes, ProjectLabel, ProjectStatus } from "../../../interface";

interface PropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Project | any;
}

interface ProjectStatusText {
  text: string;
}

const Top: FC<PropsType> = ({ data }) => {
  const modalRef = useModalRef();

  const projectType = new Map<ProjectTypes, ProjectLabel>()
    .set("PERS", {
      icon: PersonalIcons,
      text: "개인 프로젝트",
    })
    .set("CLUB", {
      icon: ClubIcons,
      text: "동아리 프로젝트",
    })
    .set("TEAM", {
      icon: TeamIcons,
      text: "팀 프로젝트",
    });

  const projectTypeData = projectType.get(data?.projectType);

  const projectStatus = new Map<ProjectStatus, ProjectStatusText>()
    .set("PLANNING", {
      text: "계획중...",
    })
    .set("PENDING(PLAN)", {
      text: "계획 승인 대기중...",
    })
    .set("REPORTING", {
      text: "보고서 작성중...",
    })
    .set("PENDING(REPORT)", {
      text: "보고서 승인 대기중...",
    })
    .set("DONE", {
      text: "완성된 프로젝트입니다.",
    });

  const projectStatusData = projectStatus.get(data?.projectStatus);

  return (
    <Fragment>
      <S.TopContainer>
        <S.TopContent>
          <S.ProjectImg
            alt="프로젝트 이미지"
            src={data?.thumbnailUrl}
            emoji={data?.emoji}
          />
          <div>
            <S.ProjectTop>
              <S.ProjectName>{data?.projectName}</S.ProjectName>
              <S.ProjectRincian>
                <div>
                  <img src={ViewIcons} />
                  <S.Font>{data?.projectView}</S.Font>
                  <img alt="프로젝트 아이콘" src={projectTypeData?.icon} />
                  <S.Font>{projectTypeData?.text}</S.Font>
                </div>
                <S.Modify
                  onClick={(e) => {
                    e.stopPropagation();
                    modalRef.current?.show();
                  }}
                >
                  수정
                </S.Modify>
              </S.ProjectRincian>
            </S.ProjectTop>
            <S.ProjectContent>
              {data?.projectDescription === null ? (
                <div>프로젝트 소개가 없습니다.</div>
              ) : (
                data?.projectDescription
              )}
            </S.ProjectContent>
            <S.ProjectBottom>
              <div>
                {data?.projectField
                  .split(",")
                  .map((item: string, index: Key | null | undefined) => {
                    return <S.Field key={index}>{item}</S.Field>;
                  })}
              </div>
              <S.Step>{projectStatusData?.text}</S.Step>
            </S.ProjectBottom>
          </div>
        </S.TopContent>
      </S.TopContainer>
      <ModalPortal ref={modalRef}>
        <ProjectModifyModal />
      </ModalPortal>
    </Fragment>
  );
};

export default Top;
